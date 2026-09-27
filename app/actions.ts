"use server";

import { Resend } from "resend";
import { redirect } from "next/navigation";

type InquiryType = "quote" | "message";

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return entities[character];
  });
}

function createEmailContent(values: [string, string][], type: InquiryType) {
  const isQuote = type === "quote";
  const title = isQuote ? "Freight quote request" : "New contact message";
  const intro = isQuote
    ? "A new shipment is ready for review. The details are below."
    : "A new message has arrived. The details are below.";
  const isTest = values.some(([, value]) => /\bTEST ONLY\b/i.test(value));
  const subject = `${isTest ? "[TEST] " : ""}${isQuote ? "New Freight Quote Request" : "New Contact Message"} | Heroic Logistics`;
  const rows = values.map(([label, value]) => `
    <tr>
      <th align="left" valign="top" style="width: 34%; padding: 14px 16px; border-bottom: 1px solid #e9edf2; color: #526174; font: 600 12px/1.5 Arial, sans-serif; letter-spacing: 0.5px; text-transform: uppercase;">${escapeHtml(label)}</th>
      <td valign="top" style="padding: 14px 16px; border-bottom: 1px solid #e9edf2; color: #132238; font: 15px/1.6 Arial, sans-serif; white-space: pre-wrap;">${escapeHtml(value) || "&mdash;"}</td>
    </tr>`).join("");
  const html = `
    <div style="margin: 0; padding: 36px 16px; background: #f2f5f8;">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 640px; margin: 0 auto; background: #ffffff; border: 1px solid #e3e8ee; border-radius: 8px; overflow: hidden;">
        <tr>
          <td style="padding: 28px 36px; background: #08172a; border-bottom: 3px solid #d9a441;">
            <div style="color: #f0c674; font: 700 11px/1.4 Arial, sans-serif; letter-spacing: 2px; text-transform: uppercase;">Heroic Logistics</div>
            <div style="margin-top: 6px; color: #ffffff; font: 14px/1.5 Arial, sans-serif;">Canada | United States</div>
          </td>
        </tr>
        <tr>
          <td style="padding: 34px 36px 14px;">
            <div style="color: #b9832a; font: 700 11px/1.4 Arial, sans-serif; letter-spacing: 1.5px; text-transform: uppercase;">${isQuote ? "Quote desk" : "Client relations"}</div>
            <h1 style="margin: 10px 0 8px; color: #0a1a33; font: 700 25px/1.25 Arial, sans-serif;">${title}</h1>
            <p style="margin: 0; color: #526174; font: 15px/1.7 Arial, sans-serif;">${intro}</p>
          </td>
        </tr>
        <tr>
          <td style="padding: 14px 24px 30px;">
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border: 1px solid #e3e8ee; border-collapse: collapse;">${rows}
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding: 20px 36px; background: #f8fafc; border-top: 1px solid #e3e8ee; color: #667588; font: 12px/1.6 Arial, sans-serif;">
            Reply directly to this email to contact the sender.<br />
            Heroic Logistics <span style="color: #b9832a;">|</span> Freight moved with heroic reliability.
          </td>
        </tr>
      </table>
    </div>`;
  const text = [title.toUpperCase(), intro, "", ...values.map(([label, value]) => `${label}: ${value || "-"}`), "", "Reply directly to this email to contact the sender.", "Heroic Logistics | Canada and United States"].join("\n");

  return { subject, html, text };
}

async function sendInquiry(formData: FormData, type: InquiryType) {
  const confirmationUrl = `/confirmation?type=${type}`;

  if (typeof formData.get("website") === "string" && formData.get("website")) {
    redirect(confirmationUrl);
  }

  const values: [string, string][] = [];
  let isValid = true;

  for (const [key, value] of formData.entries()) {
    if (key === "website" || key.startsWith("$ACTION_")) continue;
    if (typeof value !== "string" || value.length > 5000 || values.length >= 20) {
      isValid = false;
      break;
    }
    values.push([key, value.trim()]);
  }

  const fields = new Map(values);
  const requiredFields = type === "quote"
    ? ["Name", "Email", "Phone", "Origin", "Destination"]
    : ["Name", "Email"];
  const email = fields.get("Email") ?? "";

  if (
    !isValid ||
    requiredFields.some((field) => !fields.get(field)) ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  ) {
    redirect(`${confirmationUrl}&status=error`);
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  if (!apiKey || !from) {
    console.error("Form submission requires RESEND_API_KEY and RESEND_FROM_EMAIL.");
    redirect(`${confirmationUrl}&status=error`);
  }

  let sent = false;

  try {
    const resend = new Resend(apiKey);
    const content = createEmailContent(values, type);
    const result = await resend.emails.send({
      from,
      to: type === "quote" ? "dispatch@heroiclogistics.co" : "info@heroiclogistics.co",
      replyTo: email,
      ...content,
    });

    if (result.error) {
      console.error("Resend rejected a form submission:", result.error);
    } else {
      sent = true;
    }
  } catch (error) {
    console.error("Could not send a form submission:", error);
  }

  redirect(sent ? confirmationUrl : `${confirmationUrl}&status=error`);
}

export async function submitQuote(formData: FormData) {
  await sendInquiry(formData, "quote");
}

export async function submitContactMessage(formData: FormData) {
  await sendInquiry(formData, "message");
}
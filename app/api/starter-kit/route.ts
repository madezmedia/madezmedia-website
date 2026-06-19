import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const RESEND_API_KEY = process.env.RESEND_API_KEY || '';
const UPSTASH_URL = process.env.UPSTASH_REDIS_REST_URL || '';
const UPSTASH_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN || '';

const KIT_URL = 'https://madezmedia.com/voice-ai-implementation-checklist.html';

export async function POST(req: Request) {
  try {
    const { firstName, email, businessType } = await req.json();

    if (!email || !firstName) {
      return NextResponse.json({ error: 'firstName and email required' }, { status: 400 });
    }

    const emailSlug = email.toLowerCase().replace(/[^a-z0-9]/g, '-');
    const ts = Date.now();

    // 1. Save lead to Upstash
    if (UPSTASH_URL && UPSTASH_TOKEN) {
      const lead = {
        email, firstName, businessType,
        source: 'voice-ai-checklist',
        subscribed: true,
        created_at: new Date().toISOString(),
        status: 'kit-sent'
      };

      await fetch(`${UPSTASH_URL}/pipeline`, {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${UPSTASH_TOKEN}`, 'Content-Type': 'application/json' },
        body: JSON.stringify([
          ['SET', `acmi:lead:${emailSlug}:checklist`, JSON.stringify(lead)],
          ['ZADD', 'acmi:leads:voice-checklist:timeline', ts.toString(), JSON.stringify({
            ts,
            source: `lead:${emailSlug}`,
            kind: 'kit-download-request',
            summary: `[lead-intake @madezmedia] ${firstName} ${email} requested Voice AI Checklist (biz: ${businessType})`
          })],
          ['ZADD', 'acmi:bus:relay:events', ts.toString(), JSON.stringify({
            ts,
            source: 'agent:bentley',
            kind: 'lead-captured',
            correlationId: `madezChecklistLead-${ts}`,
            summary: `[lead-captured @bentley] ${firstName} ${email} — Voice AI Checklist requested, biz: ${businessType}`
          })]
        ])
      });
    }

    // 2. Send welcome email via Resend
    let emailSent = false;
    if (RESEND_API_KEY) {
      try {
        const resend = new Resend(RESEND_API_KEY);
        await resend.emails.send({
          from: 'Mad EZ Media <hello@madezmedia.com>',
          to: email,
          subject: `Your Voice AI Checklist is ready, ${firstName} 👋`,
          html: getWelcomeEmail(firstName, businessType, KIT_URL)
        });
        emailSent = true;
      } catch (emailErr: any) {
        console.error('[starter-kit] Resend error:', emailErr?.message);
      }
    }

    return NextResponse.json({
      success: true,
      emailSent,
      message: emailSent
        ? 'Check your inbox — your checklist is on its way!'
        : 'Your download link will arrive shortly.'
    });

  } catch (err) {
    console.error('[starter-kit] Fatal:', err);
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
  }
}

function getWelcomeEmail(firstName: string, businessType: string, url: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Your Voice AI Checklist</title>
</head>
<body style="margin:0;padding:0;background:#faf9f5;font-family:Georgia,'Times New Roman',serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#faf9f5;padding:40px 20px;">
  <tr><td align="center">
    <table width="560" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e2dfd8;">

      <tr>
        <td style="background:#2d4a3e;padding:40px 48px;text-align:center;">
          <p style="margin:0 0 8px;font-family:monospace;font-size:11px;letter-spacing:0.22em;text-transform:uppercase;color:#00b9f1;">Free Resource · Mad EZ Media</p>
          <h1 style="margin:0;font-size:28px;font-weight:900;color:#ffffff;line-height:1.2;">
            Your Voice AI Checklist<br/>is ready.
          </h1>
        </td>
      </tr>

      <tr>
        <td style="padding:40px 48px;">
          <p style="margin:0 0 20px;font-size:16px;color:#1a1a1a;line-height:1.6;">Hey ${firstName}, 👋</p>
          <p style="margin:0 0 20px;font-size:15px;color:#1a1a1a;line-height:1.7;">
            Most "AI phone assistants" are just auto-attendants with a different name. They answer calls, take messages, and that's it. Your staff still has to do everything else.
          </p>
          <p style="margin:0 0 20px;font-size:15px;color:#1a1a1a;line-height:1.7;">
            This checklist cuts through the noise. <strong>7 things your AI phone assistant must be able to do</strong> — or you're just paying monthly for a glorified voicemail box.
          </p>
          <p style="margin:0 0 28px;font-size:15px;color:#1a1a1a;line-height:1.7;">
            Your checklist includes:
          </p>
          <ul style="margin:0 0 28px 0;padding:0 0 0 20px;">
            <li style="margin-bottom:10px;font-size:14px;color:#1a1a1a;">✅ <strong>The 7-point evaluation framework</strong> — what actually matters vs. what's marketing fluff</li>
            <li style="margin-bottom:10px;font-size:14px;color:#1a1a1a;">✅ <strong>Questions to ask any AI vendor</strong> — hard questions that expose weaknesses</li>
            <li style="margin-bottom:10px;font-size:14px;color:#1a1a1a;">✅ <strong>Red flag清单</strong> — 5 signs an AI phone system will disappoint you</li>
            <li style="margin-bottom:10px;font-size:14px;color:#1a1a1a;">✅ <strong>Implementation timeline</strong> — what a real 5-day rollout looks like</li>
          </ul>

          <table cellpadding="0" cellspacing="0" style="margin:0 0 32px 0;">
            <tr><td style="background:#2d4a3e;border-radius:100px;padding:16px 32px;text-align:center;">
              <a href="${url}" style="color:#ffffff;text-decoration:none;font-size:13px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;">
                ↓ Download Your Voice AI Checklist
              </a>
            </td></tr>
          </table>

          <p style="margin:0 0 12px;font-size:14px;color:#1a1a1a;line-height:1.6;">
            <em>PS: If you're a ${businessType || 'business owner'} looking to eliminate the "call backlog" problem — where you or your staff spend hours every week returning calls that should have been handled by the AI — let's talk.</em>
          </p>

          <table cellpadding="0" cellspacing="0" style="margin:0;">
            <tr><td style="background:#E5007d;border-radius:100px;padding:14px 28px;text-align:center;">
              <a href="https://cal.com/mad-ez-media/ai-automation-discovery" style="color:#ffffff;text-decoration:none;font-size:12px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;">
                → Book a Free 20-Min Strategy Call
              </a>
            </td></tr>
          </table>
        </td>
      </tr>

      <tr>
        <td style="background:#f4f3f0;padding:24px 48px;text-align:center;border-top:1px solid #e2dfd8;">
          <p style="margin:0;font-size:12px;color:#4a4a48;line-height:1.5;">
            You're getting this because you requested the Voice AI Checklist from madezmedia.com.<br/>
            No spam. Unsubscribe anytime. © 2026 Mad EZ Media Partners
          </p>
        </td>
      </tr>

    </table>
  </td></tr>
</table>
</body>
</html>`;
}

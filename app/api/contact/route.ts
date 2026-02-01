import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    const apiKey = process.env.ZEPTOMAIL_API_KEY?.trim();
    const baseUrl = process.env.ZEPTOMAIL_BASEURL?.trim();

    if (!apiKey || !baseUrl) {
      return NextResponse.json(
        { error: "Server config error: Missing API Key or URL" },
        { status: 500 }
      );
    }

    const subjectLine = `[Action Required] New Care Assessment Request: ${name}`;

    // --- UPDATED EMAIL TEMPLATE ---
    const htmlTemplate = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Care Lead</title>
      </head>
      <body style="margin: 0; padding: 0; background-color: #f4f6f8; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
        
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; margin-top: 20px; margin-bottom: 20px; border: 1px solid #e2e8f0;">
          
          <div style="background-color: #1e3a5f; padding: 30px 20px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 700; letter-spacing: 0.5px;">Caresphere Healthcare<span style="color: #3f9d92;">.</span></h1>
            <p style="color: #cbd5e0; margin: 5px 0 0; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; font-weight: 500;">
              New Care Assessment Request
            </p>
          </div>

          <div style="padding: 30px 25px;">
            
            <p style="font-size: 15px; color: #4a5568; line-height: 1.6; margin-top: 0; margin-bottom: 30px;">
              A prospective client has submitted a request for a <strong>Free In-Home Assessment</strong> via the website. Details are below:
            </p>

            <div style="background-color: #f8fafc; padding: 20px; border-radius: 6px; border: 1px solid #edf2f7;">
              
              <div style="margin-bottom: 20px;">
                <p style="font-size: 11px; font-weight: 700; color: #718096; text-transform: uppercase; margin: 0 0 5px 0; letter-spacing: 0.5px;">Client Name</p>
                <p style="font-size: 16px; font-weight: 600; color: #1a202c; margin: 0;">${name}</p>
              </div>

              <div style="margin-bottom: 20px;">
                <p style="font-size: 11px; font-weight: 700; color: #718096; text-transform: uppercase; margin: 0 0 5px 0; letter-spacing: 0.5px;">Phone Number</p>
                <p style="font-size: 16px; font-weight: 500; color: #1a202c; margin: 0;">
                  <a href="tel:${phone}" style="color: #1a202c; text-decoration: none;">${phone}</a>
                </p>
              </div>

              <div style="margin-bottom: 0;">
                <p style="font-size: 11px; font-weight: 700; color: #718096; text-transform: uppercase; margin: 0 0 5px 0; letter-spacing: 0.5px;">Email Address</p>
                <p style="font-size: 16px; font-weight: 500; color: #1a202c; margin: 0;">
                  <a href="mailto:${email}" style="color: #1e3a5f; text-decoration: none; border-bottom: 1px dotted #1e3a5f;">${email}</a>
                </p>
              </div>

            </div>

            <div style="margin-top: 30px;">
              <p style="font-size: 11px; font-weight: 700; color: #718096; text-transform: uppercase; margin: 0 0 10px 0; letter-spacing: 0.5px;">Care Needs / Message</p>
              <div style="background-color: #ffffff; border-left: 4px solid #3f9d92; padding: 15px 20px; color: #2d3748; line-height: 1.6; font-size: 15px; background-color: #f1f5f9;">
                "${message}"
              </div>
            </div>

            <div style="margin-top: 40px; text-align: center;">
              <a href="mailto:${email}?subject=Re: In-Home Assessment - Caresphere Healthcare" style="background-color: #1e3a5f; color: #ffffff; padding: 14px 32px; text-decoration: none; font-weight: bold; font-size: 15px; display: inline-block; border-radius: 4px;">
                Reply to Client
              </a>
            </div>

          </div>

          <div style="background-color: #f7fafc; padding: 20px; text-align: center; border-top: 1px solid #edf2f7;">
            <p style="margin: 0; color: #a0aec0; font-size: 12px;">
              Sent via Caresphere Website
            </p>
          </div>

        </div>
      </body>
      </html>
    `;

    const zeptoPayload = {
      from: {
        address: process.env.MAIL_FROM,
        name: process.env.EMAIL_SENDER || "Caresphere Website",
      },
      to: [
        {
          email_address: {
            address: process.env.SUPPORT_INBOX,
            name: "Admin",
          },
        },
      ],
      reply_to: [
        {
          address: email,
          name: name,
        },
      ],
      subject: subjectLine,
      htmlbody: htmlTemplate,
    };

    const zeptoResponse = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Zoho-enczapikey ${apiKey}`,
      },
      body: JSON.stringify(zeptoPayload),
    });

    const zeptoResult = await zeptoResponse.json();

    if (!zeptoResponse.ok) {
      console.error("❌ ZeptoMail Failed:", JSON.stringify(zeptoResult, null, 2));
      return NextResponse.json(
        { error: "Failed to send email", details: zeptoResult },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, message: "Email sent!" });
  } catch (error) {
    console.error("❌ Server Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

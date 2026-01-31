import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Clean the key
    const apiKey = process.env.ZEPTOMAIL_API_KEY?.trim();
    const baseUrl = process.env.ZEPTOMAIL_BASEURL?.trim();

    if (!apiKey || !baseUrl) {
      return NextResponse.json(
        { error: "Server config error: Missing API Key or URL" },
        { status: 500 }
      );
    }

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
      // Adding Reply-To is good practice so you can reply to the client directly
      reply_to: [
        {
          address: email,
          name: name,
        },
      ],
      subject: `New Care Request: ${name}`,
      htmlbody: `
        <div style="font-family: Arial, sans-serif; color: #333;">
            <h2 style="color: #1e3a5f;">New Website Inquiry</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Email:</strong> ${email}</p>
            <br/>
            <p><strong>Message:</strong></p>
            <div style="background: #f5f5f5; padding: 15px; border-radius: 5px;">${message}</div>
        </div>
      `,
    };

    console.log("🚀 Attempting to send to ZeptoMail...");

    const zeptoResponse = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        // 👇 THIS WAS THE FIX: Changed from 'Zo-Api-Token' to 'Zoho-enczapikey'
        Authorization: `Zoho-enczapikey ${apiKey}`,
      },
      body: JSON.stringify(zeptoPayload),
    });

    const zeptoResult = await zeptoResponse.json();

    if (!zeptoResponse.ok) {
      console.error("❌ ZeptoMail Failed:", JSON.stringify(zeptoResult, null, 2));
      return NextResponse.json(
        {
          error: "Failed to send email",
          details: zeptoResult,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, message: "Email sent!" });
  } catch (error) {
    console.error("❌ Server Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

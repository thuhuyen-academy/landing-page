// API Route tiếp nhận đăng ký học thử (/api/bookings), kiểm tra dữ liệu bằng Zod và chuyển tiếp tới Google Sheets Webhook
import { NextRequest, NextResponse } from "next/server";
import { siteConfig } from "@/config/site";
import { trialBookingSchema } from "@/lib/validation/schemas";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = trialBookingSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          ok: false,
          error:
            parsed.error.issues[0]?.message || "Invalid booking payload",
        },
        { status: 400 }
      );
    }

    const data = parsed.data;
    const webhookUrl = siteConfig.links.googleSheetsWebhookUrl;

    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email || `${data.contactMethod}: ${data.contactValue}`,
          contactMethod: data.contactMethod,
          contactValue: data.contactValue,
          country: data.country,
          level: data.level,
          format: data.format,
          support: data.support,
          goal: data.goal,
          websiteLanguage: data.websiteLanguage,
        }),
      });
    }

    return NextResponse.json({
      ok: true,
      timestamp: new Date().toISOString(),
    });
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: String(err) },
      { status: 500 }
    );
  }
}


import { NextRequest, NextResponse } from "next/server";

const AROOSI_CONTACT_URL = process.env.NEXT_PUBLIC_AROOSI_CONTACT_URL;

export async function POST(req: NextRequest) {
  try {
    const payload = await req.json();
    // ensure we tag the submission as VIP Aroosi
    const taggedPayload = {
      ...payload,
      subject: (payload?.subject as string | undefined) || "VIP Aroosi Enquiry",
      source: "vip-aroosi", // extra tag field understood by Aroosi backend (ignored if unknown)
    };

    const res = await fetch(AROOSI_CONTACT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(taggedPayload),
    });

    const data = await res.json();

    return NextResponse.json(data, { status: res.status });
  } catch (e) {
    console.error("Proxy contact error", e);
    return NextResponse.json(
      { error: "Failed to submit contact" },
      { status: 500 }
    );
  }
}

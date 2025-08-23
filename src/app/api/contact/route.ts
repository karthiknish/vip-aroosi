import { NextResponse } from "next/server";
import { db } from "../../../firebase";
import { collection, addDoc } from "firebase/firestore";

function log(...args: any[]) {
  // Use console.log for server logs; can be replaced with a logger
  console.log("[Contact API]", ...args);
}

export async function POST(req: Request) {
  try {
    log("Incoming contact form request");
    const body = await req.json();
    log("Request body:", body);
    const { name, email, message } = body;
    if (!name || !email) {
      log("Validation failed: missing required fields");
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }
    // Basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      log("Validation failed: invalid email", email);
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }
    log("Writing to Firestore", { name, email, message });
    await addDoc(collection(db, "vip-contact"), {
      name,
      email,
      message,
      createdAt: Date.now(),
    });
    log("Contact form submission successful");
    return NextResponse.json({ success: true });
  } catch (err) {
    log("Error submitting contact form:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

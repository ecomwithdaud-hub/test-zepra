import { contactSchema } from "@/lib/contact-schema";

export const runtime = "nodejs";

export async function POST(request) {
  try {
    const payload = await request.json();
    const parsed = contactSchema.safeParse(payload);

    if (!parsed.success) {
      return Response.json(
        {
          ok: false,
          message: "Please submit all required fields correctly.",
          errors: parsed.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    console.log("[Zepra Tech inquiry]", parsed.data);

    return Response.json({
      ok: true,
      message:
        "Thanks for reaching out to Zepra Tech. Your inquiry has been received. A mail client will open with your details for sending.",
    });
  } catch (error) {
    console.error("[contact-route-error]", error);

    return Response.json(
      {
        ok: false,
        message:
          "We could not process your inquiry right now. Please try again shortly or contact us directly by email.",
      },
      { status: 500 },
    );
  }
}

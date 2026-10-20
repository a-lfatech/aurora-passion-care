const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface ConsultationRequest {
  first_name: string;
  last_name: string;
  phone?: string;
  email: string;
  preferred_contact?: string;
  support_type?: string;
  preferred_start_date?: string;
  message?: string;
}

const textValue = (value: unknown): string => typeof value === "string" ? value.trim() : "";

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    if (req.method !== "POST") {
      return new Response(JSON.stringify({ error: "Method not allowed" }), {
        status: 405,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const body = await req.json() as Partial<ConsultationRequest>;
    const firstName = textValue(body.first_name);
    const lastName = textValue(body.last_name);
    const email = textValue(body.email);

    if (!firstName || !lastName || !email || !email.includes("@")) {
      return new Response(JSON.stringify({ error: "Please provide a valid name and email address." }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    if (!resendApiKey) {
      return new Response(JSON.stringify({ error: "Email delivery is not configured." }), {
        status: 503,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const emailBody = [
      `Name: ${firstName} ${lastName}`,
      `Email: ${email}`,
      `Phone: ${textValue(body.phone) || "Not provided"}`,
      `Preferred contact method: ${textValue(body.preferred_contact) || "Not provided"}`,
      `Type of support needed: ${textValue(body.support_type) || "Not provided"}`,
      `Preferred start date: ${textValue(body.preferred_start_date) || "Not provided"}`,
      "",
      "Message:",
      textValue(body.message) || "No message provided",
    ].join("\n");

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Aurora Passion Care <care@aurorapassion.care>",
        to: ["care@aurorapassion.care"],
        cc: ["akpene.abedi-lartey@outlook.com"],
        reply_to: email,
        subject: "New Request for Consultation from APC website",
        text: emailBody,
      }),
    });

    if (!resendResponse.ok) {
      const detail = await resendResponse.text();
      console.error("Resend rejected email", resendResponse.status, detail);
      return new Response(JSON.stringify({ error: "We could not send your request. Please call us directly at 403-899-1572." }), {
        status: 502,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ sent: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch {
    return new Response(JSON.stringify({ error: "We could not send your request. Please call us directly at 403-899-1572." }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});

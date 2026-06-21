interface Env {
  DB: D1Database;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  try {
    const body = (await context.request.json()) as {
      name?: string;
      email?: string;
      phone?: string;
      message?: string;
    };

    if (!body.name || !body.email || !body.phone) {
      return new Response(
        JSON.stringify({ error: "Name, email, and phone are required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    await context.env.DB.prepare(
      "INSERT INTO leads (name, email, phone, message) VALUES (?, ?, ?, ?)"
    )
      .bind(body.name, body.email, body.phone, body.message || null)
      .run();

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch {
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};

"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="ru">
      <body>
        <div style={{ display: "flex", minHeight: "100vh", alignItems: "center", justifyContent: "center", padding: "2rem", textAlign: "center" }}>
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 600 }}>Что-то пошло не так</h2>
            <p style={{ marginTop: "0.5rem", color: "#64748b" }}>Попробуйте перезагрузить страницу</p>
            <button
              onClick={() => reset()}
              style={{ marginTop: "1rem", padding: "0.5rem 1.5rem", borderRadius: "0.75rem", background: "#0891b2", color: "#fff", border: "none", cursor: "pointer", fontWeight: 600 }}
            >
              Попробовать снова
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}

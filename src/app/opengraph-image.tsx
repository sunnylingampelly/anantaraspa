import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1b2b27",
          backgroundImage:
            "radial-gradient(circle at 25% 20%, rgba(199,169,107,0.25), transparent 45%), radial-gradient(circle at 80% 85%, rgba(79,122,114,0.35), transparent 50%)",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 96,
            height: 96,
            borderRadius: "50%",
            border: "2px solid #c7a96b",
            marginBottom: 36,
          }}
        >
          <div style={{ fontSize: 44 }}>&#10052;</div>
        </div>
        <div
          style={{
            fontSize: 30,
            letterSpacing: 10,
            color: "#c7a96b",
            textTransform: "uppercase",
            marginBottom: 18,
          }}
        >
          Anantara Spa
        </div>
        <div
          style={{
            fontSize: 66,
            color: "#f9f6f2",
            fontWeight: 600,
            textAlign: "center",
            padding: "0 60px",
          }}
        >
          Sanctuary of Reflection
        </div>
        <div
          style={{
            fontSize: 26,
            color: "#c9d6cf",
            marginTop: 22,
            letterSpacing: 2,
          }}
        >
          Luxury Spa &middot; Gachibowli, Hyderabad
        </div>
      </div>
    ),
    { ...size }
  );
}

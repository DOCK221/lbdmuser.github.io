import { ImageResponse } from "next/og";

export const alt = "Nid de Plumes — Linge hôtelier premium au Sénégal";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "#0C0B0A",
          color: "#F6F3EE",
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: 14,
            textTransform: "uppercase",
            opacity: 0.55,
          }}
        >
          Linge hôtelier · Dakar
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 72,
            letterSpacing: 10,
            fontFamily: "Georgia, serif",
          }}
        >
          NID DE PLUMES
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 28,
            fontFamily: "Georgia, serif",
            fontStyle: "italic",
            opacity: 0.8,
          }}
        >
          Le confort, élevé au rang d’art.
        </div>
      </div>
    ),
    { ...size },
  );
}

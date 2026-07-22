import { ImageResponse } from "next/og";
import { join } from "node:path";
import { readFile } from "node:fs/promises";

export const alt = "KTL Running Coach — Coach Trail & Running au Maroc";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const bgData = await readFile(join(process.cwd(), "public/images/montagnes.JPG"), "base64");
  const bgSrc = `data:image/jpeg;base64,${bgData}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {/* Background image */}
        <img
          src={bgSrc}
          alt=""
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
          }}
        />

        {/* Dark overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0, 0, 0, 0.55)",
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 0,
          }}
        >
          {/* Orange bar */}
          <div
            style={{
              width: 64,
              height: 5,
              background: "#FF7043",
              borderRadius: 3,
              marginBottom: 28,
            }}
          />

          {/* Main title */}
          <div
            style={{
              color: "#FF7043",
              fontSize: 68,
              fontWeight: 900,
              letterSpacing: 6,
              textTransform: "uppercase",
              lineHeight: 1,
            }}
          >
            KTL RUNNING &amp; TRAIL COACH
          </div>

          {/* Subtitle */}
          <div
            style={{
              color: "white",
              fontSize: 34,
              fontWeight: 400,
              marginTop: 20,
              opacity: 0.9,
              letterSpacing: 2,
            }}
          >
            Coach Trail &amp; Running au Maroc
          </div>

          {/* Orange bar */}
          <div
            style={{
              width: 64,
              height: 5,
              background: "#FF7043",
              borderRadius: 3,
              marginTop: 28,
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}

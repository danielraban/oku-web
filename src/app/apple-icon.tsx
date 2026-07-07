import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#5B8A8B",
        }}
      >
        <svg
          width="112"
          height="112"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2.75C7.6 6.6 6 12 12 21.25 18 12 16.4 6.6 12 2.75Z"
            stroke="#FFFFFF"
            strokeWidth={1.6}
            strokeLinejoin="round"
          />
          <path
            d="M12 7.5V18.5"
            stroke="#FFFFFF"
            strokeWidth={1.6}
            strokeLinecap="round"
          />
        </svg>
      </div>
    ),
    { ...size },
  );
}

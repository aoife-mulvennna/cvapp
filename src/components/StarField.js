import React, { useMemo } from "react";
import { Box } from "@mui/material";

const STAR_COUNT = 45;

// Small white four-point stars drifting down behind the page content.
function StarField() {
  const stars = useMemo(
    () =>
      Array.from({ length: STAR_COUNT }, () => ({
        left: Math.random() * 100,
        size: 6 + Math.random() * 8,
        duration: 25 + Math.random() * 20,
        delay: -Math.random() * 45,
        drift: (Math.random() - 0.5) * 80,
        opacity: 0.55 + Math.random() * 0.45,
      })),
    []
  );

  return (
    <Box
      className="star-field"
      aria-hidden
      sx={{ position: "fixed", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}
    >
      {stars.map((s, i) => (
        <Box
          key={i}
          component="svg"
          viewBox="0 0 24 24"
          style={{ "--drift": `${s.drift}px` }}
          sx={{
            position: "absolute",
            top: 0,
            left: `${s.left}%`,
            width: s.size,
            height: s.size,
            fill: "#fff",
            opacity: s.opacity,
            filter: "drop-shadow(0 0 3px rgba(255, 255, 255, 0.8))",
            animation: `star-fall ${s.duration}s linear ${s.delay}s infinite`,
          }}
        >
          <path d="M12 0c.6 6.4 5.6 11.4 12 12-6.4.6-11.4 5.6-12 12-.6-6.4-5.6-11.4-12-12 6.4-.6 11.4-5.6 12-12z" />
        </Box>
      ))}
    </Box>
  );
}

export default StarField;

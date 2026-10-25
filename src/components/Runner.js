import React, { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import { brand } from "../theme";

const skin = "#F4C7A1";
const skinShade = "#E0AC85";
const hair = "#5B3A29";
const hairDark = "#3F2619";
const hairLight = "#7E5540";
const shorts = "#3D0A14";
const top = "#E8287A";

// How fast her feet push back along the ground, in px per second. She crosses
// the screen at the same speed so her feet don't slide (moonwalk).
const GROUND_SPEED = 160;
const RUNNER_WIDTH = 90;

// One leg: the thigh swings at the hip and the shin bends at the knee.
function Leg({ colour, delay }) {
  return (
    <g className="runner-leg" style={{ transformOrigin: "52px 66px", animationDelay: delay }}>
      <line x1="52" y1="66" x2="53" y2="82" stroke={colour} strokeWidth="6" strokeLinecap="round" />
      <g className="runner-knee" style={{ transformOrigin: "53px 82px", animationDelay: delay }}>
        <line x1="53" y1="82" x2="51" y2="98" stroke={colour} strokeWidth="5.5" strokeLinecap="round" />
        <line x1="50" y1="99" x2="57" y2="100" stroke={top} strokeWidth="5" strokeLinecap="round" />
      </g>
    </g>
  );
}

// One arm, bent at the elbow, swinging at the shoulder.
function Arm({ colour, delay, watch = false }) {
  return (
    <g className="runner-arm" style={{ transformOrigin: "56px 38px", animationDelay: delay }}>
      <polyline
        points="56,38 55,51 63,56"
        fill="none"
        stroke={colour}
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {watch && (
        // White running watch on the wrist, angled along the forearm
        <g transform="rotate(32 60 54.2)">
          <rect x="58.6" y="51" width="2.8" height="6.4" rx="1" fill="#fff" />
          <rect x="59.2" y="52.9" width="1.6" height="2.6" rx="0.4" fill="#9AA0A6" />
        </g>
      )}
    </g>
  );
}

// A girl with a brown ponytail jogging across the bottom of the page.
function Runner() {
  const trackRef = useRef(null);
  const [duration, setDuration] = useState(10);

  useEffect(() => {
    const track = trackRef.current;
    const update = () => setDuration((track.offsetWidth + RUNNER_WIDTH) / GROUND_SPEED);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(track);
    return () => observer.disconnect();
  }, []);

  return (
    <Box
      ref={trackRef}
      aria-hidden
      sx={{ position: "relative", height: 120, overflow: "hidden", mt: "auto", mb: -8 }}
    >
      <Box sx={{ position: "absolute", left: 0, right: 0, bottom: 14, borderTop: `2px dashed ${brand.border}` }} />
      <Box
        className="runner"
        style={{ animationDuration: `${duration}s` }}
        sx={{ position: "absolute", bottom: 14, left: "50%", width: RUNNER_WIDTH, height: 108 }}
      >
        <svg viewBox="0 0 100 120" width="90" height="108">
          <g className="runner-bob">
            {/* Back limbs, drawn darker for depth */}
            <Arm colour={skinShade} delay="0s" watch />
            <Leg colour={skinShade} delay="-0.3s" />

            {/* Torso and shorts */}
            <path d="M51 34 Q57 32 61 35 L57 60 L47 60 Z" fill={top} />
            <path d="M46 58 L58 58 L59 69 L46 69 Z" fill={shorts} />

            <Leg colour={skin} delay="0s" />

            {/* Long ponytail: tapers from the tie in a gentle S-curve to a soft tip */}
            <g className="runner-ponytail" style={{ transformOrigin: "47px 14px" }}>
              <path
                d="M47 12 C40 10 34 14 31 21 C29 26 29 30 27 34 C25.5 36 23.5 36.5 21.5 35.5 Q19.8 37 21.6 38.6 C25 40 28.5 39.5 30.5 36.5 C32 33 34 28 37 24.5 C40 20.5 44 18 48 17 Z"
                fill={hair}
              />
              <path d="M45 14 C39 15 35 20 33 26" fill="none" stroke={hairDark} strokeWidth="0.8" strokeLinecap="round" />
              <path d="M44 17 C39 21 35 27 31 33" fill="none" stroke={hairDark} strokeWidth="0.8" strokeLinecap="round" />
              <circle cx="47" cy="14" r="2.1" fill="#fff" />
            </g>

            {/* Head: face, then a hair cap following the back and top of the head */}
            <circle cx="58" cy="23" r="10" fill={skin} />
            <path
              d="M66 16 Q62 9 55 9.5 Q46 10.5 45 20 Q45 28 50 32 L53 30 Q52 24 55 20 Q59 16 66 16 Z"
              fill={hair}
            />
            <path d="M50 12.5 Q56 10.2 62 12" fill="none" stroke={hairLight} strokeWidth="1" strokeLinecap="round" />
            <circle cx="54" cy="24" r="1.8" fill={skinShade} />
            <circle cx="63" cy="22" r="1.3" fill={shorts} />
            <circle cx="61" cy="27" r="2" fill="#FF8FB8" opacity="0.7" />

            <Arm colour={skin} delay="-0.3s" />
          </g>
        </svg>
      </Box>
    </Box>
  );
}

export default Runner;

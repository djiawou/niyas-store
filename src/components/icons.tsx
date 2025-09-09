import type { SVGProps } from "react";

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width="40"
      height="40"
      viewBox="0 0 130 130"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "hsl(var(--primary))", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "hsl(var(--accent))", stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <path
        d="M65,5 C97.4,5 125,32.6 125,65 C125,97.4 97.4,125 65,125 C32.6,125 5,97.4 5,65 C5,32.6 32.6,5 65,5 Z"
        stroke="url(#logoGradient)"
        strokeWidth="10"
        fill="none"
      />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dy=".3em"
        fontSize="60"
        fill="url(#logoGradient)"
        fontFamily="var(--font-headline), serif"
        fontWeight="bold"
      >
        N
      </text>
    </svg>
  );
}

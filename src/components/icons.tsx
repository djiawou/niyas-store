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
        fill="hsl(var(--background))"
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

export function WhatsAppIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
        >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.487 5.235 3.487 8.413.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.433-9.89-9.89-9.89-5.454 0-9.887 4.434-9.889 9.889.002 2.024.63 3.991 1.838 5.615l-1.192 4.355 4.463-1.165z" />
        </svg>
    );
}

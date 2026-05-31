/*
 * ACON Academy Logo Component
 * Faithful inline SVG recreation of the official ACON Academy logo:
 * - Classical building/temple with 5 columns
 * - Graduation mortarboard cap on top with tassel
 * - "A" letterform in the central doorway arch
 * - "ACON ACADEMY" + "bonjour to fluency™" text
 * Renders cleanly at any size in white (nav) or navy (light bg)
 */

interface AconLogoProps {
  variant?: "white" | "navy" | "black";
  className?: string;
  showTagline?: boolean;
  iconOnly?: boolean;
}

export default function AconLogo({ variant = "white", className = "", showTagline = true, iconOnly = false }: AconLogoProps) {
  const color = variant === "white" ? "#FFFFFF" : variant === "navy" ? "#092758" : "#1D1A17";
  const taglineColor = variant === "white" ? "rgba(255,255,255,0.72)" : variant === "navy" ? "#1F6AAD" : "#555";

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Building + Graduation Cap Icon — faithful to ACON's actual logo */}
      <svg
        viewBox="0 0 100 130"
        className="h-11 w-auto flex-shrink-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* === GRADUATION CAP === */}
        {/* Mortarboard flat top */}
        <polygon
          points="50,4 88,18 50,32 12,18"
          stroke={color}
          strokeWidth="3.2"
          strokeLinejoin="miter"
          fill="none"
        />
        {/* Cap underside — slight curve suggesting 3D */}
        <path
          d="M 12,18 L 12,26 Q 50,40 88,26 L 88,18"
          stroke={color}
          strokeWidth="3.2"
          fill="none"
          strokeLinejoin="round"
        />
        {/* Tassel cord */}
        <line x1="88" y1="18" x2="88" y2="34" stroke={color} strokeWidth="2.8" strokeLinecap="round" />
        {/* Tassel ball */}
        <circle cx="88" cy="37" r="3" fill={color} />

        {/* === BUILDING STRUCTURE === */}
        {/* Entablature / top band */}
        <rect x="14" y="44" width="72" height="7" fill={color} rx="0.5" />

        {/* 5 Columns */}
        {[21, 33, 50, 67, 79].map((x, i) => (
          <rect key={i} x={x - 2} y="51" width="4" height="44" fill={color} rx="0.5" />
        ))}

        {/* Stylobate — 3 stepped base lines */}
        <rect x="14" y="95" width="72" height="4.5" fill={color} rx="0.5" />
        <rect x="10" y="101" width="80" height="4.5" fill={color} rx="0.5" />
        <rect x="6" y="107" width="88" height="4.5" fill={color} rx="0.5" />

        {/* === DOORWAY ARCH === */}
        {/* Arch opening */}
        <path
          d="M 40,95 L 40,72 Q 50,62 60,72 L 60,95"
          stroke={color}
          strokeWidth="3.2"
          fill="none"
          strokeLinejoin="round"
        />

        {/* "A" letterform inside the arch */}
        <text
          x="50"
          y="91"
          textAnchor="middle"
          fontSize="17"
          fontWeight="700"
          fontFamily="Georgia, serif"
          fill={color}
        >
          A
        </text>
      </svg>

      {/* Text Block — only shown when not icon-only */}
      {!iconOnly && (
        <div className="flex flex-col leading-none">
          <span
            style={{
              color,
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: '0.82rem',
              fontWeight: 700,
              letterSpacing: '0.20em',
              textTransform: 'uppercase',
              lineHeight: 1,
            }}
          >
            ACON ACADEMY
          </span>
          {showTagline && (
            <span
              style={{
                color: taglineColor,
                fontFamily: "'Source Sans 3', 'Source Sans Pro', system-ui, sans-serif",
                fontSize: '0.62rem',
                letterSpacing: '0.06em',
                marginTop: '4px',
                lineHeight: 1,
              }}
            >
              bonjour to fluency™
            </span>
          )}
        </div>
      )}
    </div>
  );
}

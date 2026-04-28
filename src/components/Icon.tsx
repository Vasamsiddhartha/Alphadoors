type IconProps = {
  name: string;
  size?: number;
  color?: string;
};

export default function Icon({ name, size = 28, color = "currentColor" }: IconProps) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (name) {
    case "access":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="3" />
          <circle cx="12" cy="10" r="2.5" />
          <path d="M7.5 17c.8-2 2.6-3 4.5-3s3.7 1 4.5 3" />
        </svg>
      );
    case "cctv":
      return (
        <svg {...common}>
          <path d="M3 8h12l4 3v5H3z" />
          <path d="M3 8V6a2 2 0 0 1 2-2h8" />
          <circle cx="9" cy="13" r="2" />
          <path d="M3 16v3" />
        </svg>
      );
    case "barrier":
      return (
        <svg {...common}>
          <rect x="3" y="14" width="4" height="7" />
          <path d="M7 15h14" />
          <path d="M9 15l2-4M13 15l2-4M17 15l2-4" />
        </svg>
      );
    case "slidingGate":
      return (
        <svg {...common}>
          <path d="M3 5v14M21 5v14" />
          <path d="M3 9h8v10H3zM13 9h8v10h-8z" />
          <path d="M7 9v10M17 9v10" />
        </svg>
      );
    case "glassDoor":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="8" height="18" rx="1" />
          <rect x="13" y="3" width="8" height="18" rx="1" />
          <path d="M7 12h.01M17 12h.01" />
        </svg>
      );
    case "trunslide":
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="16" rx="1" />
          <path d="M9 4v16M15 4v16" />
          <path d="M6 12h2M16 12h2" />
        </svg>
      );
    case "overhead":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="1" />
          <path d="M3 8h18M3 13h18M3 18h18" />
        </svg>
      );
    case "garage":
      return (
        <svg {...common}>
          <path d="M3 10l9-6 9 6v11H3z" />
          <path d="M6 13h12M6 17h12M6 21v-8M18 21v-8" />
        </svg>
      );
    case "shutter":
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="16" rx="1" />
          <path d="M3 7h18M3 10h18M3 13h18M3 16h18" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case "bolt":
      return (
        <svg {...common}>
          <path d="M13 2L4 14h7l-1 8 9-12h-7z" />
        </svg>
      );
    case "clock":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      );
    case "award":
      return (
        <svg {...common}>
          <circle cx="12" cy="9" r="6" />
          <path d="M8.5 14l-2 7 5.5-3 5.5 3-2-7" />
        </svg>
      );
    case "play":
      return (
        <svg {...common} fill={color} stroke="none">
          <path d="M8 5v14l11-7z" />
        </svg>
      );
    case "arrow":
      return (
        <svg {...common}>
          <path d="M5 12h14M13 5l7 7-7 7" />
        </svg>
      );
    case "phone":
      return (
        <svg {...common}>
          <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.9 19.9 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.9 19.9 0 0 1 2 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 9.5a16 16 0 0 0 6 6l1.1-1.1a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6A2 2 0 0 1 22 16.9z" />
        </svg>
      );
    case "mail":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M3 7l9 6 9-6" />
        </svg>
      );
    case "pin":
      return (
        <svg {...common}>
          <path d="M12 21s-7-6.5-7-12a7 7 0 0 1 14 0c0 5.5-7 12-7 12z" />
          <circle cx="12" cy="9" r="2.5" />
        </svg>
      );
    default:
      return null;
  }
}

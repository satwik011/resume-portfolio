type Props = { width?: number; wheel?: string; className?: string };

export default function Car({ width = 44, wheel = "#15172B", className = "bounce" }: Props) {
  return (
    <svg
      className={className}
      width={width}
      height={(width * 24) / 44}
      viewBox="0 0 44 24"
      fill="none"
      stroke="#15172B"
      strokeWidth="2"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 16 V11 L10 10 L15 4 H29 L35 10 L41 11 V16 Z" fill="#FF8A3D" />
      <path d="M16 5.5 L13 10 H33 L28.5 5.5 Z" fill="#E9ECFF" />
      <circle cx="12" cy="17" r="4" fill={wheel} />
      <circle cx="32" cy="17" r="4" fill={wheel} />
    </svg>
  );
}

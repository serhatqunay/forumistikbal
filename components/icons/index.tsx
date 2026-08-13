interface IconProps {
  size?: number;
  className?: string;
}

const defaultProps = (size: number) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none' as const,
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
});

export function PinIcon({ size = 20, className }: IconProps) {
  return (
    <svg {...defaultProps(size)} className={className}>
      <path d="M12 21s-7-7.2-7-12a7 7 0 0 1 14 0c0 4.8-7 12-7 12z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

export function PhoneIcon({ size = 20, className }: IconProps) {
  return (
    <svg {...defaultProps(size)} className={className}>
      <path d="M4.5 3.5h3l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5v3c0 1.1-.9 2-2 2A15.5 15.5 0 0 1 2.5 5.5c0-1.1.9-2 2-2z" />
    </svg>
  );
}

export function MailIcon({ size = 20, className }: IconProps) {
  return (
    <svg {...defaultProps(size)} className={className}>
      <rect x="2.5" y="4.5" width="19" height="15" rx="2" />
      <path d="M3 6l9 6.5L21 6" />
    </svg>
  );
}

export function ClockIcon({ size = 20, className }: IconProps) {
  return (
    <svg {...defaultProps(size)} className={className}>
      <circle cx="12" cy="12" r="9.5" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  );
}

export function StoreIcon({ size = 20, className }: IconProps) {
  return (
    <svg {...defaultProps(size)} className={className}>
      <path d="M3.5 9.5l1-5.5h15l1 5.5" />
      <path d="M3.5 9.5a2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0" />
      <path d="M4.5 10v9.5h15V10" />
      <path d="M10 19.5V14h4v5.5" />
    </svg>
  );
}

export function AwardIcon({ size = 20, className }: IconProps) {
  return (
    <svg {...defaultProps(size)} className={className}>
      <circle cx="12" cy="8.5" r="5.5" />
      <path d="M8.5 13.2 7 21l5-2.5 5 2.5-1.5-7.8" />
    </svg>
  );
}

export function TargetIcon({ size = 20, className }: IconProps) {
  return (
    <svg {...defaultProps(size)} className={className}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" />
    </svg>
  );
}

export function EyeIcon({ size = 20, className }: IconProps) {
  return (
    <svg {...defaultProps(size)} className={className}>
      <path d="M2 12s3.8-7 10-7 10 7 10 7-3.8 7-10 7-10-7-10-7z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

export function CalendarIcon({ size = 20, className }: IconProps) {
  return (
    <svg {...defaultProps(size)} className={className}>
      <rect x="3" y="4.5" width="18" height="16" rx="2" />
      <path d="M3 9.5h18" />
      <path d="M8 2.5v4M16 2.5v4" />
    </svg>
  );
}

export function TimerIcon({ size = 20, className }: IconProps) {
  return (
    <svg {...defaultProps(size)} className={className}>
      <circle cx="12" cy="13" r="8.5" />
      <path d="M12 9v4l2.5 1.5" />
      <path d="M9.5 2.5h5" />
    </svg>
  );
}

export function MobileIcon({ size = 20, className }: IconProps) {
  return (
    <svg {...defaultProps(size)} className={className}>
      <rect x="6.5" y="2.5" width="11" height="19" rx="2" />
      <path d="M11 18.2h2" />
    </svg>
  );
}

export function ChevronRightIcon({ size = 14, className }: IconProps) {
  return (
    <svg {...defaultProps(size)} className={className}>
      <path d="M9 6l6 6-6 6" />
    </svg>
  );
}

export function ImageIcon({ size = 20, className }: IconProps) {
  return (
    <svg {...defaultProps(size)} className={className}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <circle cx="9" cy="10" r="1.5" />
      <path d="M3 17l5-4.5 3.5 3 5-4.5 4.5 4" />
    </svg>
  );
}

export function WhatsAppIcon({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

export function CheckIcon({ size = 20, className }: IconProps) {
  return (
    <svg {...defaultProps(size)} className={className}>
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

export function StarIcon({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

export function TruckIcon({ size = 20, className }: IconProps) {
  return (
    <svg {...defaultProps(size)} className={className}>
      <rect x="1" y="3" width="15" height="13" rx="2" />
      <path d="M16 8h4l3 3v5h-7V8z" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  );
}

export function ShieldIcon({ size = 20, className }: IconProps) {
  return (
    <svg {...defaultProps(size)} className={className}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

export function SparklesIcon({ size = 20, className }: IconProps) {
  return (
    <svg {...defaultProps(size)} className={className}>
      <path d="M12 3l1.912 5.813a2 2 0 001.275 1.275L21 12l-5.813 1.912a2 2 0 00-1.275 1.275L12 21l-1.912-5.813a2 2 0 00-1.275-1.275L3 12l5.813-1.912a2 2 0 001.275-1.275L12 3z" />
    </svg>
  );
}

export function InstagramIcon({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}


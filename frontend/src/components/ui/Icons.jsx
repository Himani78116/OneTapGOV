"use client";

function IconBase({ children, size = 20, strokeWidth = 2, style, ...props }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ display: "block", flexShrink: 0, ...style }}
      {...props}
    >
      {children}
    </svg>
  );
}

export function GraduationCapIcon(props) {
  return (
    <IconBase {...props}>
      <path d="m22 10-10-5-10 5 10 5 10-5Z" />
      <path d="M6 12v5c3 2 9 2 12 0v-5" />
      <path d="M22 10v6" />
    </IconBase>
  );
}

export function WomanIcon(props) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="8" r="4" />
      <path d="M12 12v9" />
      <path d="M8 17h8" />
      <path d="M7 21h10" />
    </IconBase>
  );
}

export function WheatIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M12 2v20" />
      <path d="M8 6c0 2 2 4 4 4" />
      <path d="M16 6c0 2-2 4-4 4" />
      <path d="M7 11c0 2 2 4 5 4" />
      <path d="M17 11c0 2-2 4-5 4" />
      <path d="M6 16c0 2 3 4 6 4" />
      <path d="M18 16c0 2-3 4-6 4" />
    </IconBase>
  );
}

export function SearchIcon(props) {
  return (
    <IconBase {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
    </IconBase>
  );
}

export function CheckIcon(props) {
  return (
    <IconBase {...props}>
      <path d="m20 6-11 11-5-5" />
    </IconBase>
  );
}

export function ClipboardListIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M9 4h6" />
      <path d="M10 2h4v4h-4z" />
      <path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2" />
      <path d="M8 12h.01" />
      <path d="M11 12h5" />
      <path d="M8 17h.01" />
      <path d="M11 17h5" />
    </IconBase>
  );
}

export function DiamondIcon(props) {
  return (
    <IconBase fill="currentColor" strokeWidth={0} {...props}>
      <path d="m12 3 9 9-9 9-9-9 9-9Z" />
    </IconBase>
  );
}

export function UserIcon(props) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21a8 8 0 0 1 16 0" />
    </IconBase>
  );
}

export function ShieldIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="m9 12 2 2 4-5" />
    </IconBase>
  );
}

export function DatabaseIcon(props) {
  return (
    <IconBase {...props}>
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
      <path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
    </IconBase>
  );
}

export function SettingsIcon(props) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.2a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.2a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3h.1a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.2a1.7 1.7 0 0 0 1 1.5h.1a1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8v.1a1.7 1.7 0 0 0 1.5 1h.2a2 2 0 1 1 0 4h-.2a1.7 1.7 0 0 0-1.5 1Z" />
    </IconBase>
  );
}

export function ArrowRightIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </IconBase>
  );
}

export function ChevronDownIcon(props) {
  return (
    <IconBase {...props}>
      <path d="m6 9 6 6 6-6" />
    </IconBase>
  );
}

export function XIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </IconBase>
  );
}

export function MicIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <path d="M12 19v3" />
    </IconBase>
  );
}

export function StopIcon(props) {
  return (
    <IconBase fill="currentColor" strokeWidth={0} {...props}>
      <rect x="6" y="6" width="12" height="12" rx="2" />
    </IconBase>
  );
}

export function SectorIcon({ type, ...props }) {
  if (type === "students") return <GraduationCapIcon {...props} />;
  if (type === "women") return <WomanIcon {...props} />;
  if (type === "farmers") return <WheatIcon {...props} />;
  return <UserIcon {...props} />;
}

export function StepIcon({ step, ...props }) {
  if (step === "01") return <SearchIcon {...props} />;
  if (step === "02") return <CheckIcon {...props} />;
  if (step === "03") return <ClipboardListIcon {...props} />;
  return <CheckIcon {...props} />;
}

export function FlowIcon({ type, ...props }) {
  if (type === "info") return <UserIcon {...props} />;
  if (type === "rules") return <ShieldIcon {...props} />;
  if (type === "database") return <DatabaseIcon {...props} />;
  if (type === "engine") return <SettingsIcon {...props} />;
  if (type === "matches") return <CheckIcon {...props} />;
  return <CheckIcon {...props} />;
}

export const Logo = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 200 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Video camera icon */}
      <rect
        x="4"
        y="12"
        width="24"
        height="16"
        rx="2"
        fill="currentColor"
        className="text-primary"
      />
      <path
        d="M28 16L36 12V28L28 24V16Z"
        fill="currentColor"
        className="text-primary"
      />
      {/* ROOMS text */}
      <text
        x="48"
        y="27"
        fill="white"
        fontSize="20"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="600"
        letterSpacing="0.5"
      >
        ROOMS
      </text>
    </svg>
  );
};
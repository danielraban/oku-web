type IconProps = {
  className?: string;
};

/**
 * Oku leaf mark — a simple, calm, single-leaf glyph drawn in the same
 * outline style as the rest of the site's icons. Uses `currentColor` so it
 * adapts to whatever container/theme it sits in.
 *
 * Interim mark: designed to be swapped for the finished brand logo later.
 */
export function OkuMark({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 2.75C7.6 6.6 6 12 12 21.25 18 12 16.4 6.6 12 2.75Z"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinejoin="round"
      />
      <path
        d="M12 7.5V18.5"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * The rounded-square badge (icon-only lockup) used in the navbar and footer.
 * Size is controlled by `sizeClassName` (badge) and `markClassName` (glyph).
 */
export function OkuBadge({
  sizeClassName = "w-8 h-8",
  markClassName = "w-5 h-5",
}: {
  sizeClassName?: string;
  markClassName?: string;
}) {
  return (
    <span
      className={`${sizeClassName} rounded-lg bg-primary flex items-center justify-center`}
    >
      <OkuMark className={`${markClassName} text-on-primary`} />
    </span>
  );
}

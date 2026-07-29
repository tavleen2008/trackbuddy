type StarProps = {
  color?: string;
  className?: string;
};

export default function Star({
  color = "#8C6046",
  className = "",
}: StarProps) {
  return (
    <svg
      viewBox="0 0 307.191 281.302"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M153.596 0L189.855 107.448H307.191L212.264 173.854L248.523 281.302L153.596 214.896L58.6683 281.302L94.9273 173.854L0 107.448H117.337L153.596 0Z"
        fill={color}
      />
    </svg>
  );
}
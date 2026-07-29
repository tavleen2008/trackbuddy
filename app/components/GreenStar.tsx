type GreenStarProps = {
  color?: string;
  className?: string;
};

export default function GreenStar({
  color = "#798165",
  className = "",
}: GreenStarProps) {
  return (
    <svg
      viewBox="0 0 283.415 241.504"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
    >
      <path
        d="M141.707 0L175.16 92.2462H283.415L195.835 149.258L229.287 241.504L141.707 184.492L54.1274 241.504L87.58 149.258L0 92.2462H108.255L141.707 0Z"
        fill={color}
      />
    </svg>
  );
}
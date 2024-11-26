type StarProps = {
  className?: string;
  size?: number;
};

export default function Star({ className, size = 8 }: StarProps) {
  const widthAndHeight = `w-${size} h-${size}`;
  return (
    <div
      className={`${className} ${widthAndHeight} star bg-yellow-200 animate-expand-shrink`}
    ></div>
  );
}

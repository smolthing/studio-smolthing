import Link from "next/link";
import HomeIcon from "../icon/HomeIcon";

export default function LinkToHome() {
  return (
    <Link href={"/"}>
      <HomeIcon className="absolute top-4 left-4 h-6 w-6 text-gray-600 hover:text-custom-green" />
    </Link>
  );
}

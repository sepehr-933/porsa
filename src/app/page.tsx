import Link from "next/link";
import { appRoutes } from "@/constants/appRoutes";

export default function Home() {
  return (
    <div>
      <Link href={appRoutes.home}>only home page available go to homepage</Link>
    </div>
  );
}

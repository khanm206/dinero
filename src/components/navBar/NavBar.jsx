"use client";

import { ClipboardClock } from "lucide-react";
import { SquareUser } from "lucide-react";
import { Wallet } from "lucide-react";
import { ChartArea } from "lucide-react";
import { House } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();
  return (
    <section className="sBg pColor flex justify-around items-center py-4">
      <Link
        href="/homepage"
        className={`link ${pathname === "/homepage" ? "active" : "p-[1%]"}`}
      >
        <House />
      </Link>
      <Link
        href="/homepage/add_money"
        className={`link ${pathname === "/homepage/add_money" ? "active" : "p-[1%]"}`}
      >
        <Wallet />
      </Link>
      <Link
        href="/homepage/status"
        className={`link ${pathname === "/homepage/status" ? "active" : "p-[1%]"}`}
      >
        <ChartArea />
      </Link>
      <Link
        href="/user_profile"
        className={`link ${pathname === "/user_profile" ? "active" : "p-[1%]"}`}
      >
        <SquareUser />
      </Link>
    </section>
  );
};

export default NavBar;

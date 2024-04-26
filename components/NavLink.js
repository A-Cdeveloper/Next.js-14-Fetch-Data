"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
  const path = usePathname();

  //done
  //   /
  //   /news
  //   /archive

  const activeClass =
    path === href
      ? "active"
      : href !== "/" && path.startsWith(href)
      ? "active"
      : undefined;

  return (
    <Link href={href} className={activeClass}>
      {children}
    </Link>
  );
};

export default NavLink;

import Link from "next/link";
import { usePathname } from "next/navigation";
import NavLink from "./NavLink";

const MainHeader = () => {
  return (
    <header id="main-header">
      <div id="logo">
        <Link href="/">Next news</Link>
      </div>
      <ul>
        <li>
          <NavLink href="/">Home</NavLink>{" "}
        </li>
        <li>
          <NavLink href="/news">News</NavLink>{" "}
        </li>
        <li>
          <NavLink href="/archive">Archive</NavLink>
        </li>
      </ul>
    </header>
  );
};

export default MainHeader;

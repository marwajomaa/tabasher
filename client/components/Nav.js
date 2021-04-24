import Link from "next/link";
import Image from "next/image";
import navStyles from "../styles/Nav.module.css";

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li className={navStyles.navLink}>
          <Link href="/">
            <h1>تسجيل دخول</h1>
          </Link>
        </li>
        <li></li>
      </ul>
    </nav>
  );
};

export default Nav;

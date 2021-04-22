import Link from "next/link";
import navStyles from "../styles/Nav.module.css";

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href="/">تسجيل دخول</Link>
        </li>
        <li>
          <Link href="/">
            <img src="#" alt="logo" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

import AppNav from "./AppNav";
import Logo from "./Logo";
import styles from "./Sidebar.module.css";
import { Outlet } from "react-router-dom";
function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <Outlet />
      <footer className={styles.footer}></footer>
      <p className={styles.Copyright}>
        &copy; Copyright {new Date().getFullYear()} by Hany Alhabboby inc.
      </p>
    </div>
  );
}

export default Sidebar;

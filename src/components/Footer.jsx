import styles from "./Sidebar.module.css";

export default function Footer() {
  return (
    <footer>
      <p className={styles.footer}>
        &copy; Copyright {new Date().getFullYear()} by Worldwise Inc.
      </p>
    </footer>
  );
}

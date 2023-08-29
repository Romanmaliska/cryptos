import { Outlet } from "react-router-dom";
import styles from "./Rootlayout.module.css";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

export default function Root() {
  return (
    <>
      <Header />
      <main className={styles.main_container}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

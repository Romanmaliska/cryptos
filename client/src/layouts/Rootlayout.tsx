import { Outlet } from "react-router-dom";
import styles from "./Rootlayout.module.css";
import Navbar from "features/navbar/Navbar";
import Footer from "components/footer/Footer";

export default function Root() {
  return (
    <>
      <Navbar />
      <main className={styles.main_container}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

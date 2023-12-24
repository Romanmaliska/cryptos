import { Outlet } from "react-router-dom";

import Navbar from "components/navbar/Navbar";
import Footer from "components/footer/Footer";

import styles from "layouts/RootLayout.module.css";

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

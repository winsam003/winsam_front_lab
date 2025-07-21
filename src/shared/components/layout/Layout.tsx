import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";

const Layout = () => {
    return(
    <>
      <Header />
      <main>
        <Outlet /> {/* 여기서 각 페이지 컴포넌트가 렌더링됨 */}
      </main>
      <Footer />
    </>
    )
}

export default Layout;
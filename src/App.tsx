import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Blog from "./pages/blog/Blog";
import Community from "./pages/community/Community";
import Contact from "./pages/contact/Contact";
import Layout from "./shared/components/layout/Layout";
import CommunityDetail from "./pages/community/CommunityDetail";
import CommunityWrite from "./pages/community/CommunityWrite";
import CommunityUpdate from "./pages/community/CommunityUpdate";

function App() {
    const test = sessionStorage.getItem("userInfo");
    console.log(test);

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Blog />} />
                        {/* <Route path="home" element={<Home />} /> */}
                        <Route path="blog" element={<Blog />} />
                        <Route path="community" element={<Community />} />
                        <Route path="community/bbs/common/write" element={<CommunityWrite />} />
                        <Route path="community/bbs/common/detail/:id" element={<CommunityDetail />} />
                        <Route path="community/bbs/common/update/:id" element={<CommunityUpdate />} />
                        <Route path="/blog/bbs/common/write" element={<CommunityWrite />} />
                        <Route path="/blog/bbs/common/detail/:id" element={<CommunityDetail />} />
                        <Route path="/blog/bbs/common/update/:id" element={<CommunityUpdate />} />
                        <Route path="contact" element={<Contact />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

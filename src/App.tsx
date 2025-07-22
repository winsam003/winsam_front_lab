import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Blog from "./pages/blog/Blog";
import Community from "./pages/community/Community";
import Contact from "./pages/contact/Contact";
import Layout from "./shared/components/layout/Layout";
import CommunityDetail from "./pages/community/CommunityDetail";
import CommunityWrite from "./pages/community/CommunityWrite";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="home" element={<Home />} />
                        <Route path="blog" element={<Blog />} />
                        <Route path="community" element={<Community />} />
                        <Route path="communityWrite" element={<CommunityWrite />} />
                        <Route path="communityDetail/:id" element={<CommunityDetail />} />
                        <Route path="contact" element={<Contact />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

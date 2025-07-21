import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Blog from "./pages/blog/Blog";
import Community from "./pages/community/Community";
import Contact from "./pages/contact/Contact";
import Layout from "./shared/components/layout/Layout";

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
                        <Route path="contact" element={<Contact />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

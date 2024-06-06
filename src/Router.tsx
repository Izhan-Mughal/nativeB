import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import NotFound from "./pages/error/NotFound";
import Brand from "./pages/Brands/Brand";
import Home from "./pages/Home/Home";
import BrandDetails from "./pages/Brands/BrandDetails";

export default function Router() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/brands" element={<Brand />} />
          <Route path="/brands/:id" element={<BrandDetails />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

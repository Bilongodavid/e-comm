import { BrowserRouter, Route, Routes } from "react-router-dom";
import UI from "./ui/design-system/page";
import Home from "./pages/Home";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="ui" element={<UI />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

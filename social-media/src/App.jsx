import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import "./App.css";
import Registration from "./pages/Registration";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotLoggedInUser from "./pages/privateRouter/NotLoggedInUser";
import LoggedInUser from "./pages/privateRouter/LoggedInUser";
import RootLayout from "./components/RootLayout";
import "swiper/css";
import CreatPostPopUp from "./components/HomeComponents/HomePost/CreatPostPopUp";
import ActivatePage from "./pages/Home/ActivatePage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<LoggedInUser />}>
          <Route element={<RootLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/activate/:token" element={<ActivatePage />} />
          </Route>
        </Route>
        <Route element={<NotLoggedInUser />}>
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Route>
    )
  );
  return (
    <>
      <CreatPostPopUp />
      <RouterProvider router={router} />
    </>
  );
}

export default App;

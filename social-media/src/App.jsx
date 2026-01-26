import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
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
import Forgetpassword from "./pages/ForgetPossword";
import { useState } from "react";
import { useGetAllPostsQuery } from "./feature/api/authApi";

function App() {
  const [visible, setVisible] = useState(false);
  const { data: posts } = useGetAllPostsQuery();
  console.log(posts);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<LoggedInUser />}>
          <Route element={<RootLayout />}>
            <Route
              path="/"
              element={<Home setVisible={setVisible} posts={posts} />}
            />
            <Route path="/activate/:token" element={<ActivatePage />} />
          </Route>
        </Route>
        <Route element={<NotLoggedInUser />}>
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="/forget" element={<Forgetpassword />} />
      </Route>,
    ),
  );
  return (
    <>
      {visible && <CreatPostPopUp setVisible={setVisible} />}

      <RouterProvider router={router} />
    </>
  );
}

export default App;

import { Outlet, createBrowserRouter } from "react-router-dom";
import Header from "../components/Header";
import Armors from "../pages/Armors";

const Layout = () => (
  <>
    <Header />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Armors />,
      },
    ],
  },
]);

export default router;

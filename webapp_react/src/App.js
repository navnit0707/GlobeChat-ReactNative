import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";

import { BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import ContactUs from "./components/pages/ContactUs";
import LoginPage from "./components/pages/LoginPage";
import ChatUI from "./components/ChatUI";
import Header from "./components/Header/Header";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/chatUI",
    element: <ChatUI />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/contact",
    element: <ContactUs />,
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

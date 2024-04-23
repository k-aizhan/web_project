import { createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/pages/About";
import Profile from "./routes/pages/Profile";
import Login from "./routes/pages/Login";
import Account from "./routes/pages/Account";
import Contact from "./routes/pages/Contact";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  }, 
  {
    path: "/profile",
    element: <Profile />,
  }, 
  {
    path: "/login",
    element: <Login />,
  }, 
  {
    path: "/account",
    element: <Account />,
  },  
  {
    path: "/contact",
    element: <Contact />,
  }, 
]);

export default router;
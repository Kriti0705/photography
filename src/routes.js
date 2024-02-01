import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import Contact from "./pages/contact";
import Todo from "./pages/to-do";
import Blog from "./pages/blog";
import Hobbies from "./pages/register/checkbox";
import BlogPage from "./pages/blog/singlePost";
import Basic from "./pages/feedback";
import Exam from "./pages/exam";
import Users from "./pages/exam/users";
import EditUser from "./pages/exam/users/singleUser";
import Logout from "./pages/logout";
import About from "./pages/about";

const Routes = () => {
    const route = [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/about",
            element: <About />
        },

        {
            path: "/login",
            element: <Login />
        },
        {
            path: "/register",
            element: <Register />
        },
        {
            path: "/contact",
            element: <Contact />
        },
        {
            path: "/todo",
            element: <Todo />
        },
        {
            path: "/blog",
            element: <Blog />
        },
        {
            path: "/blog/:id",
            element: <BlogPage />
        },
        {
            path: "/hobbies",
            element: <Hobbies />
        },
        {
            path: "/feedback",
            element: <Basic />
        },
        {
            path: "/exams",
            element: <Exam />
        },
        {
            path: "/user",
            element: <Users />
        },
        {
            path: "/editUser/:id",
            element: <EditUser />
        },
        {
            path: "/logout",
            element: <Logout />
        },

    ];

    const router = createBrowserRouter(route);
    return <RouterProvider router={router} />;
};

export default Routes;
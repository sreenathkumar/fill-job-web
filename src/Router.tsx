import { createBrowserRouter } from "react-router-dom";
import SignUp from "./components/Signup";
import SignIn from "./components/Signin";
import RootLayout from "./components/ui/RootLayout";
import JobProfile from "./components/JobProfile";
import MyAccount from "./components/MyAccount";
import ResetPassword from "./components/ResetPassword";

export const router = createBrowserRouter([
   {
      path: "/",
      element: <RootLayout />,
      children: [
         { element: <div>Home</div>, index: true },
         { path: "signup", element: <SignUp /> },
         { path: "signin", element: <SignIn /> },
         { path: "job-profile", element: <JobProfile /> },
         { path: "my-account", element: <MyAccount /> },
         { path: "reset-password", element: <ResetPassword /> }
      ]
   },
])


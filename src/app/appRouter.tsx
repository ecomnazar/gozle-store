import { MainPage } from "@/pages/main-page";
import { createBrowserRouter } from "react-router-dom";

export const appRouter = () => createBrowserRouter([
    {
        path: '/',
        element: <MainPage />
    }
])
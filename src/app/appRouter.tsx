import { ContactPage } from "@/pages/contact-page";
import { MainPage } from "@/pages/main-page";
import { SalesDepartment } from "@/pages/sales-department";
import { createBrowserRouter } from "react-router-dom";

export const appRouter = () => createBrowserRouter([
    {
        path: '/',
        element: <MainPage />
    },
    {
        path: '/contact',
        element: <ContactPage />
    },
    {
        path: '/departments',
        element: <SalesDepartment />
    }
])
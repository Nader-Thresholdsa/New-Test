import "./App.css";
import React from "react";

export const metadata = {
    title: "مركز البيانات",
    description: "استضافة آمنة وموثوقة لمواقع الويب والتطبيقات",
};

export default function RootLayout({ children }) {
    return (
        <div lang="ar" dir="rtl" className="root-layout">
            {children}
        </div>
    );
}

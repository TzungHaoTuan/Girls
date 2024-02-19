import React from "react";
import AdminNavbar from "../components/admin/AdminNavbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Girls Admin",
  description: "Girls Admin Dashboard",
};

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <AdminNavbar />
      {children}
    </div>
  );
};

export default AdminLayout;

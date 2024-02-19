"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AdminNavbarItem from "./AdminNavbarItem";
import Container from "../Container";
import {
  MdDashboard,
  MdDns,
  MdFormatListBulleted,
  MdLibraryAdd,
} from "react-icons/md";

const AdminNavbar = () => {
  const pathname = usePathname();
  return (
    <div className="w-full shadow-sm top-20 border-b-[1px] pt-4">
      <Container>
        <div className="flex items-center justify-between md:justify-center gap-8 md:gap-12 overflow-auto flex-nowrap">
          <Link href="/admin">
            <AdminNavbarItem
              icon={MdDashboard}
              label="Summary"
              selected={pathname === "/admin"}
            />
          </Link>
          <Link href="/admin/add-products">
            <AdminNavbarItem
              icon={MdLibraryAdd}
              label="Add Products"
              selected={pathname === "/admin/add-products"}
            />
          </Link>
          <Link href="/admin/manage-products">
            <AdminNavbarItem
              icon={MdDns}
              label="Manage Products"
              selected={pathname === "/admin/manage-products"}
            />
          </Link>
          <Link href="/admin/manage-orders">
            <AdminNavbarItem
              icon={MdFormatListBulleted}
              label="Manage Orders"
              selected={pathname === "/admin/manage-orders"}
            />
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default AdminNavbar;

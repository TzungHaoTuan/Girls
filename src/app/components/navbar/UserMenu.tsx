"use client";
import { CiUser } from "react-icons/ci";
import { useCallback, useState } from "react";
import MenuItem from "./MenuItem";
import BackDrop from "./BackDrop";
import Link from "next/link";
import { signOut } from "next-auth/react";

const UserMenu = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const toggleMenuOpened = useCallback(() => {
    setIsMenuOpened((prev) => !prev);
  }, []);
  return (
    <>
      <div className="relative z-30">
        <div
          onClick={toggleMenuOpened}
          className="text-white bg-violet-300 rounded-full border-[1.5px] border-white p-2 cursor-pointer hover:shadow-lg hover:shadow-white transition"
        >
          <CiUser />
        </div>
        {isMenuOpened && (
          <div className="absolute right-0 top-12 w-[160px] flex flex-col text-sm bg-white rounded-md shadow-md overflow-hidden cursor-pointer">
            <div>
              <Link href="/orders">
                <MenuItem onClick={toggleMenuOpened}>Your Orders</MenuItem>
              </Link>
              <Link href="/admin">
                <MenuItem onClick={toggleMenuOpened}>Admin Dashboard</MenuItem>
              </Link>
              <MenuItem
                onClick={() => {
                  toggleMenuOpened();
                  signOut();
                }}
              >
                Logout
              </MenuItem>
            </div>
            <div>
              <Link href="/login">
                <MenuItem onClick={toggleMenuOpened}>Login</MenuItem>
              </Link>
              <Link href="/register">
                <MenuItem onClick={toggleMenuOpened}>Register</MenuItem>
              </Link>
            </div>
          </div>
        )}
      </div>
      {isMenuOpened ? <BackDrop onClick={toggleMenuOpened} /> : null}
    </>
  );
};

export default UserMenu;

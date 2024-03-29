import Link from "next/link";
import Container from "../Container";
import { Cinzel } from "next/font/google";
import Cart from "./Cart";
import UserMenu from "./UserMenu";
import { getCurrentUser } from "../../../../actions/getCurrentUser";
import CategoryBar from "./CategoryBar";
import Search from "./Search";
import { Suspense } from "react";

const cinzel = Cinzel({ subsets: ["latin"], weight: ["400", "700"] });

const Navbar = async () => {
  const currentUser = await getCurrentUser();

  return (
    <div className="sticky top-0 z-30 w-full bg-violet-200">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex items-center justify-between gap-3 md:gap-0">
            <Link
              href="/"
              className={`${cinzel.className} text-white text-3xl font-bold`}
            >
              Girls
            </Link>
            <div className="hidden md:block">
              <Search />
            </div>
            <div className="flex items-center gap-8 md:gap-12">
              <Cart />
              <UserMenu currentUser={currentUser} />
            </div>
          </div>
        </Container>
      </div>
      <Suspense>
        <CategoryBar />
      </Suspense>
    </div>
  );
};

export default Navbar;

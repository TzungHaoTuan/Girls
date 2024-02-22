"use client";
import { categories } from "@/src/utils/Categories";
import CategoryItem from "./CategoryItem";
import Container from "../Container";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense } from "react";

const CategoryBar = () => {
  //useRouter
  const params = useSearchParams();
  const category = params?.get("category");
  const pathName = usePathname();

  if (pathName !== "/") return null;

  return (
    <div className="bg-white">
      <Container>
        <div className="flex items-center justify-between pt-4 overflow-x-auto">
          {categories.map((item) => (
            <Suspense>
              <CategoryItem
                key={item.label}
                label={item.label}
                icon={item.icon}
                selected={
                  item.label === category ||
                  (item.label === "All" && category === null)
                }
              />
            </Suspense>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default CategoryBar;

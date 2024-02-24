"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { IconType } from "react-icons";
import queryString from "query-string";

interface CategoryItemProps {
  label: string;
  icon: IconType;
  selected?: boolean;
}

const CategoryItem: React.FC<CategoryItemProps> = ({
  label,
  icon: Icon,
  selected,
}) => {
  const params = useSearchParams();
  const router = useRouter();

  const handleQuery = useCallback(() => {
    if (label === "All") {
      router.push("/");
    } else {
      let currentQuery = {};
      if (params) {
        currentQuery = queryString.parse(params.toString());
      }
      const updatedQuery: any = {
        ...currentQuery,
        category: label,
      };

      const url = queryString.stringifyUrl(
        {
          url: "/",
          query: updatedQuery,
        },
        {
          skipNull: true,
        }
      );

      router.push(url);
    }
  }, [label, params, router]);

  return (
    <div
      onClick={handleQuery}
      className={`
      flex items-center justify-center gap-1 text-center p-2 border-b-2 transition cursor-pointer hover:text-violet-500
  ${
    selected
      ? "border-b-violet-300 text-violet-500"
      : "border-transparent text-slate-500"
  }
  `}
    >
      <Icon size={15} />
      <div className="font-medium text-sm">{label}</div>
    </div>
  );
};

export default CategoryItem;

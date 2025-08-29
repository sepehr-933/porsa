"use client";

import { cn } from "@/lib/utils";
import { useCallback, useState } from "react";

type FiltersUnion = 0 | 1 | 2 | 3 | 4;

const filterTitles = [
  {
    title: "همه",
    id: 0,
  },
  {
    title: "چت",
    id: 1,
  },
  {
    title: "عکس",
    id: 2,
  },
  {
    title: "فیلم",
    id: 3,
  },
  {
    title: "پیشرفته",
    id: 4,
  },
] as const;

const Filters = () => {
  const [activeFilter, setActiveFilter] = useState<FiltersUnion>(4);

  const handleChangeActiveFilter = useCallback(
    (filterNumber: FiltersUnion) => {
      setActiveFilter(filterNumber);
    },
    [setActiveFilter],
  );
  return (
    <div className="flex justify-between gap-2 items-center w-full md:w-auto px-6 md:px-0 md:mr-6 mb-5.5 max-w-[361px]">
      {filterTitles.map((title) => (
        <button
          key={title.id}
          className={cn(
            "text-xl font-semibold text-gray-600 cursor-pointer",
            activeFilter === title.id &&
              "text-gray-0 border-solid border-b-[2px] border-gray-0",
          )}
          onClick={() => handleChangeActiveFilter(title.id)}
        >
          {title.title}
        </button>
      ))}
    </div>
  );
};

export default Filters;

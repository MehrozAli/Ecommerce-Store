"use client";

import { useSearchParams, useRouter } from "next/navigation";
import qs from "query-string";

import { Color, Size } from "@/types";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface Props {
  name: string;
  valueKey: string;
  data: (Size | Color)[];
}

export const Filter: React.FC<Props> = ({ valueKey, name, data }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const selectedValue = searchParams.get(valueKey);

  const onClick = (id: string) => {
    const current = qs.parse(searchParams.toString());
    const query = { ...current, [valueKey]: id };

    if (current[valueKey] === id) {
      query[valueKey] = null;
    }

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true }
    );

    router.push(url);
  };

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold">{name}</h3>
      <hr className="my-4" />
      <div className="flex flex-wrap gap-2">
        {data.map((filter) => (
          <div key={filter.id} className="flex items-center">
            <Button
              className={cn(
                "rounded-md text-sm text-gray-800 p-2 bg-white border border-gray-300",
                { "bg-black text-white": selectedValue === filter.id }
              )}
              onClick={() => onClick(filter.id)}
            >
              {filter.name}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

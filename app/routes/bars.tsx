import BarsBar from "~/ui/bars";
import type { BarType } from "~/ui/bars/type";
import type { Route } from "./+types/home";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

const bars: BarType[] = [
  { title: 'brandeis', currentValue: 362, previousValue: 387, color: 'blue', currentYear: 2024, previousYear: 2023 },
  { title: 'nyu', currentValue: 456, previousValue: 316, color: 'green', currentYear: 2024, previousYear: 2023 },
  { title: 'merrimack', currentValue: 151, previousValue: 272, color: 'red', currentYear: 2024, previousYear: 2023 },
  { title: 'bates', currentValue: 44, previousValue: 61, color: 'maroon', currentYear: 2024, previousYear: 2023 },
];

export default function Bars() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-4 h-screen">
        <h1 className="font-bold text-2xl text-(--ui-primary)">
          Stats
        </h1>
        <div className="w-full max-w-screen-md">
          <BarsBar bars={bars} />
        </div>
      </div>
    </div>
  )
}

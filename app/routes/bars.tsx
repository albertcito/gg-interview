import BarsBar from "~/ui/bars";
import imgUrl from '../../assets/stats.png'

import type { BarType } from "~/ui/bars/type";
import type { Route } from "./+types/home";
import { useState } from "react";
import Modal from "~/ui/Modal";
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
  const [modal, setModal] = useState(false);
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-4 h-screen">
        <div className="flex flex-col items-center justify-center gap-1">
          <h1 className="font-bold text-2xl text-(--ui-primary)">
            Stats
          </h1>
          <button
            className="text-sm text-gray-500"
            onClick={() => setModal(true)}
          >
            Show preview
          </button>
        </div>
        <div className="w-full max-w-screen-md">
          <BarsBar bars={bars} />
        </div>
      </div>
      <Modal
        openModal={modal}
        closeModal={() => setModal(false)}
      >
        <img src={imgUrl} alt="stats" />
      </Modal>
    </div>
  )
}

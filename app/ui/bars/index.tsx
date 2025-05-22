import type { BarType } from "./type";
interface BarsBarProps {
  bars: BarType[];
}

const Bars = ({ bars }: BarsBarProps) => {
  return (
    <div>
      {bars.map((bar) => (
        <div
          key={bar.title}
          className="flex flex-row text-sm text-gray-500 divide-x divide-gray-200 border border-gray-200 rounded-md mb-2"
        >
          <div className="font-semibold p-2">{bar.title}</div>
          <div className="p-2">{bar.currentValue}</div>
          <div className="p-2">{bar.previousValue}</div>
          <div className="p-2">{bar.color}</div>
        </div>
      ))}
    </div>
  );
};

export default Bars;

import Bar from "./Bar";

export interface Bar {
  title: string;
  currentValue: number;
  previousValue: number;
  color: string;
  currentYear: number;
  previousYear: number;
}

interface BarsBarProps {
  bars: Bar[];
}

const Bars = ({ bars }: BarsBarProps) => {
  return (
    <div className="flex flex-col gap-4 p-4">
      {bars.map((bar) => (
        <div key={bar.title}>
          <Bar
            key={bar.title}
            title={bar.title}
            currentValue={bar.currentValue}
            previousValue={bar.previousValue}
            color={bar.color}
            currentYear={bar.currentYear}
            previousYear={bar.previousYear}
          />
        </div>
      ))}
    </div>
  );
};

export default Bars;

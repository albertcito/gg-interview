import type { BarType } from "./type";
interface BarsBarProps {
  bars: BarType[];
}

const Bars = ({ bars }: BarsBarProps) => {
  return (
    <div>
      {/* Here the bars will be rendered */}
    </div>
  );
};

export default Bars;

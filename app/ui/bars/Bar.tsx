import Line from "./line";
interface BarProps {
  title: string;
  currentValue: number;
  previousValue: number;
  color: string;
  currentYear: number;
  previousYear: number;
}
export default function Bar({
  title,
  currentValue,
  previousValue,
  color,
  currentYear,
  previousYear,
}: BarProps) {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="font-bold">{title}</h1>
      <div className="flex flex-col gap-4">
        <Line year={previousYear} width={previousValue} color={color} />
        <Line year={currentYear} width={currentValue} color={color} />
      </div>
    </div>
  )
}
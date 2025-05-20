
interface LineProps {
  year: number;
  width: number;
  color: string;
}

export default function Line({ year, width, color }: LineProps) {
  return (
    <div className="bg-neutral-200 rounded-lg h-5 relative">
      <div className="absolute top-0 left-1 flex flex-row justify-between w-full z-10 text-white text-sm">
        {year} - {width}%
      </div>
      <div className="relative rounded-lg h-5" style={{ backgroundColor: color, width: `${width}%` }}>
        <div className="px-1 rounded-full h-5" style={{ backgroundColor: color }}>
        </div>
      </div>
    </div>
  )
}

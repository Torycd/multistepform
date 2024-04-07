export default function StepNav({stage, info }) {
  return (
    <div className="flex gap-2">
      <span className="w-12 h-12 rounded-full border-2 flex items-center hover:bg-[#B4E7FF] hover:text-black">
        <p className="mx-auto text-xl">{stage}</p>
      </span>
      <div className="font-bold">
        <p className="opacity-90">STEP {stage}</p>
        <p className="uppercase">{info}</p>
      </div>
    </div>
  );
}

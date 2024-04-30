import PropTypes from "prop-types";

export default function StepNav({ stage, info, isActive }) {
  return (
    <div className="flex gap-2">
      <div
        className={
          isActive
            ? "w-6 h-6 md:w-12 md:h-12 rounded-full border-2 flex items-center bg-[#B4E7FF] text-black"
            : "w-6 h-6 md:w-12 md:h-12 rounded-full border-2 flex items-center hover:bg-[#B4E7FF] hover:text-black"
        }
      >
        <p className="mx-auto text-xl">{stage}</p>
      </div>
      <div className="font-bold hidden md:block">
        <p className="opacity-90">STEP {stage}</p>
        <p className="uppercase">{info}</p>
      </div>
    </div>
  );
}

StepNav.propTypes = {
  stage: PropTypes.string,
  info: PropTypes.string,
  navlink: PropTypes.string,
  isActive: PropTypes.bool
};

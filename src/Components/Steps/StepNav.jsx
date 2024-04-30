import PropTypes from "prop-types";
// import { NavLink } from "react-router-dom";

export default function StepNav({ stage, info}) {
  return (
    <div className="flex gap-2">
      <div
        // to={`/${navlink}`}
        className={({ isActive }) =>
          isActive
            ? "w-12 h-12 rounded-full border-2 flex items-center bg-[#B4E7FF] text-black"
            : "w-12 h-12 rounded-full border-2 flex items-center hover:bg-[#B4E7FF] hover:text-black"
        }
        end
      >
        <p className="mx-auto text-xl">{stage}</p>
      </div>
      <div className="font-bold">
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
};

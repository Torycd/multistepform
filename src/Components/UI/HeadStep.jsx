import PropTypes from "prop-types";

export default function HeadStep({ heading, subHeading }) {
  return (
    <div className="space-y-4">
      <h2 className="font-bold text-xl sm:text-3xl">{heading}</h2>
      <h4 className="opacity-70 text-[16px]">{subHeading}</h4>
    </div>
  );
}

HeadStep.propTypes = {
  heading: PropTypes.string,
  subHeading: PropTypes.string,
};

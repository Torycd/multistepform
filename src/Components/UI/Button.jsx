import PropTypes from "prop-types";

export default function Button({ type }) {
  return (
    <button
      type={type}
      className="bg-[#3e52a3] px-4 py-3 rounded-lg text-white"
    >
      Next Step
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
};

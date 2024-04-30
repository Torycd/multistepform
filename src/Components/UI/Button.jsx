import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

export default function Button({ type, butName, disable, ...props }) {
  return (
    <>
      <button
        type={type}
        className={
          disable
            ? "bg-[#3e52a3] px-4 py-3 rounded-lg text-white cursor-not-allowed"
            : "bg-[#3e52a3] px-4 py-3 rounded-lg text-white"
        }
        disabled={disable ? disable : null}
        {...props}
      >
        {butName}
      </button>
    </>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  link: PropTypes.string,
  butName: PropTypes.string,
  disable: PropTypes.bool,
};

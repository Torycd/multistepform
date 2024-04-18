import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Button({ type, link, disable }) {
  return (
    <Link to={link}>
      <button
        type={type}
        className={disable ? "bg-[#3e52a3] px-4 py-3 rounded-lg text-white cursor-not-allowed" : "bg-[#3e52a3] px-4 py-3 rounded-lg text-white"}
        disabled={disable ? disable : null}
      >
        Next Step
      </button>
    </Link>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  link: PropTypes.string,
  disable: PropTypes.bool
};

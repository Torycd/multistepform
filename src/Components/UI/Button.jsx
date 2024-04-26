import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Button({ type, link, butName, disable }) {
  return (
    <Link to={link}>
      <button
        type={type}
        className={disable ? "bg-[#3e52a3] px-4 py-3 rounded-lg text-white cursor-not-allowed" : "bg-[#3e52a3] px-4 py-3 rounded-lg text-white"}
        disabled={disable ? disable : null}
      >
        {butName}
      </button>
    </Link>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  link: PropTypes.string,
  butName: PropTypes.string,
  disable: PropTypes.bool,

};

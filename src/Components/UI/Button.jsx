import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Button({ type, link }) {
  return (
    <Link to={link}>
      <button
        type={type}
        className="bg-[#3e52a3] px-4 py-3 rounded-lg text-white"
      >
        Next Step
      </button>
    </Link>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  link: PropTypes.string,
};

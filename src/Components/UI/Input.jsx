import PropTypes from "prop-types";

export default function Input({ label, id, ...props }) {
  return (
    <p className="flex flex-col space-y-2">
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} {...props} className="p-2 border-2" required />
    </p>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
};

export default function Input({ label, id, ...props}) {
    return (
      <p className="flex flex-col">
        <label htmlFor={id}>{label}</label>
        <input id={id} name={id} {...props} required/>
      </p>
    );
  }
  
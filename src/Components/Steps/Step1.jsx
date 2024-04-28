import { useState, useContext } from "react";
import { ActionContext } from "../Store";
import { Link } from "react-router-dom";
import Button from "../UI/Button";
import HeadStep from "../UI/HeadStep";
import Input from "../UI/Input";

export default function Step1() {
  const { updateSummary } = useContext(ActionContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  function handleChange(event) {
    const { id, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Form submitted");
    const { name, email, number } = formData;
    const summaryData = { name, email, number };
    console.log("Summary data:", summaryData);
    updateSummary(summaryData);
    setFormSubmitted(true);
  }

  return (
    <div className="space-y-10 py-10 h-full">
      <HeadStep
        heading="Personal Info"
        subHeading={
          setFormSubmitted
            ? "Data Submitted Proceed"
            : "Please provide your name, email address, and phone number."
        }
      />
      {!formSubmitted ? (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-between gap-10"
        >
          <div className="space-y-4">
            <Input
              label="Name"
              id="name"
              value={formData.name}
              onChange={handleChange}
            />
            <Input
              label="Email Address"
              id="email"
              value={formData.email}
              onChange={handleChange}
            />
            <Input
              label="Phone Number"
              id="number"
              value={formData.number}
              onChange={handleChange}
            />
          </div>

          <div className="flex justify-end">
            <Button
              type="submit"
              butName="Next Step"
              disable={!formData.name || !formData.email || !formData.number}
            />
          </div>
        </form>
      ) : (
        <>
          <div className="flex justify-center gap-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              viewBox="0 0 80 80"
            >
              <g fill="none">
                <circle cx="40" cy="40" r="40" fill="#F9818E" />
                <path
                  fill="#E96170"
                  d="M48.464 79.167c.768-.15 1.53-.321 2.288-.515a40.04 40.04 0 0 0 3.794-1.266 40.043 40.043 0 0 0 3.657-1.63 40.046 40.046 0 0 0 12.463-9.898A40.063 40.063 0 0 0 78.3 51.89c.338-1.117.627-2.249.867-3.391L55.374 24.698a21.6 21.6 0 0 0-15.332-6.365 21.629 21.629 0 0 0-15.344 6.365c-8.486 8.489-8.486 22.205 0 30.694l23.766 23.775Z"
                />
                <path
                  fill="#FFF"
                  d="M40.003 18.333a21.58 21.58 0 0 1 15.31 6.351c8.471 8.471 8.471 22.158 0 30.63-8.47 8.47-22.156 8.47-30.627 0-8.47-8.472-8.47-22.159 0-30.63a21.594 21.594 0 0 1 15.317-6.35Zm9.865 15c-.316.028-.622.15-.872.344l-12.168 9.13-5.641-5.642c-1.224-1.275-3.63 1.132-2.356 2.356l6.663 6.663c.56.56 1.539.63 2.173.156l13.326-9.995c1.122-.816.43-2.993-.956-3.013a1.666 1.666 0 0 0-.17 0Z"
                />
              </g>
            </svg>
          </div>
          <p className="text-center">
              Congratulation, proceed to next step!
            </p>
          <div className="flex justify-end">
            <Link
              className="bg-[#3e52a3] px-4 py-3 rounded-lg text-white"
              to="/steptwo"
            >
              Go to Next Page
            </Link>{" "}
          </div>
        </>
      )}
    </div>
  );
}

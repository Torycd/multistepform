// Step1.js
import { useState, useContext } from "react";
import { ActionContext } from "../Store";
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

  function handleChange(event) {
    event.preventDefault()
    const { id, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    updateSummary(formData); // Update context's state
    // onNext(formData);
  }

  return (
    <div className="space-y-10 py-10 h-full">
      <HeadStep
        heading="Personal Info"
        subHeading="Please provide your name, email address, and phone number."
      />
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
            link="/steptwo"
            butName="Next Step"
            disable={!formData.name || !formData.email || !formData.number}
          />
        </div>
      </form>
      
    </div>
  );
}

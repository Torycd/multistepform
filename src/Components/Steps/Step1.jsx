import Button from "../UI/Button";
import HeadStep from "../UI/HeadStep";
import Input from "../UI/Input";

export default function Step1() {
  function handleSubmit(event) {
    event.preventDefault();

    const fd = new FormData(event.target);
    const fillData = Object.fromEntries(fd.entries());
    console.log(fillData);
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
        {/*  */}
        <div className="space-y-4">
          <Input label="Name" id="name" />
          <Input label="Email Address" id="email" />
          <Input label="Phone Number" id="number" />
        </div>
        {/*  */}
        <div className="flex justify-end">
          <Button type="submit" link="/steptwo" />
        </div>
        {/*  */}
      </form>
    </div>
  );
}

import Input from "../UI/Input";

export default function Step1() {
  return (
    <div>
      <p>
        <h2>Personal Info</h2>
        <h4>Please provide your email, name and Phonehumber</h4>
      </p>
      <form>
        <Input label="Name" id="name" />
        <Input label="E_mail" id="email" />
        <Input label="Phone Number" id="number" />
      </form>
    </div>
  );
}

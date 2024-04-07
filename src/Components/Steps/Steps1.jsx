import Input from "../UI/Input";

export default function Step1() {
  function handleSubmit(event){
    event.preventDefault()

    const fd = new FormData(event.target)
    const fillData = Object.fromEntries(fd.entries());
    console.log(fillData)

  }
  return (
    <div className="space-y-10 py-10 h-full">
      <div className="space-y-4">
        <h2 className="font-bold text-3xl">Personal Info</h2>
        <h4 className="opacity-70">
          Please provide your email, name and Phonehumber
        </h4>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col justify-between gap-10">
      {/*  */}
        <div className="space-y-4">
          <Input label="Name" id="name" />
          <Input label="Email Address" id="email" />
          <Input label="Phone Number" id="number" />
        </div>
        {/*  */}
        <div className="flex justify-end">
          <button type="submit" className="bg-[#3e52a3] px-4 py-3 rounded-lg text-white">
            Next Step
          </button>
        </div>
        {/*  */}
      </form>
    </div>
  );
}

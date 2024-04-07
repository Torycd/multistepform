import { Outlet } from "react-router-dom";
// import Form from "./Components/Form";

export default function HomePage(){
    return <div className="bg-slate-600 flex align-center w-dvh h-dvh font-Ubuntu p-10">
    <div className="w-[1080px] bg-white rounded-lg mx-auto p-10">
      <Outlet/>
    </div>
  </div>
}
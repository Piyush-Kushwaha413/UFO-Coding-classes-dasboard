import { React } from "react";
import { SignupForm } from "./singnupForm";
import { SigninForm } from "./loginForm";
import  frameImage  from "../assets/frame.png";
import "./componentes.css";


function Template({ title, desc1, desc2, image, formType, setCheckLog }) {
    return (
        <div className="template-div w-[100vw] min-h-[90vh] flex justify-evenly items-center    ">

{/* ======= rigth Part  ======= */}   
          <div className="rigthPart w-[40%]  flex flex-col justify-evenly  gap-5  bg-[#f3e7e4] text-[#94807b] rounded ml-24 py-5 px-5">
                {/* =================  heading of templete ====================== */}

                <div className="heading ">
                    <h1 className=" text-4xl text-[#b39289]">{ title}</h1>
                    <p className="text-[16px] text-[#b39289]">
                        <span>{desc1}</span>
                        <span>{desc2}</span>
                    </p>
                </div>

                {/* =================  form ====================== */}
                <div>
               
                  {formType ==="signin"?(<SigninForm setCheckLog={setCheckLog}></SigninForm>):(<SignupForm setCheckLog={setCheckLog}></SignupForm>)}
                </div>

              <div className="w-full flex gap-2 items-center justify-center">
                <span className="w-[35%] h-[1.1px] bg-[#9d8179] "></span>
                <span className="text-[#b39289]">OR</span>
                <span className="w-[35%] h-[1.1px] bg-[#b39289] "></span>
              </div>


            <div className="flex justify-center items-center ">
              
                <button className=" bg-slate-50 w-[88%] py-[0.5rem] rounded text-black border-[1px] border-black">  Sign in with Google</button>
            </div>
          </div>
{/* ======= Left Part  ======= */}

<div className="img-div w-[40%] flex ">
        <img src={image} className="rounded" alt="" />
</div>

  </div>

    )}
export { Template }

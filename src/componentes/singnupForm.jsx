import { useState } from "react"
import { toast } from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa"
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";


export const SignupForm = ({ setCheckLog }) => {
    const nevigates = useNavigate();
    const [forData, setData] = useState({ firstName: "", lastName: "", password: "", comfirm: "" });
    const [ShowPassword, setShowPassword] = useState(false)
    const [ShowPassword_sec, setShowPassword_sec] = useState(false)
    function changeHandler(event) {
        setData(prevData => {
            return {
                ...prevData,
                [event.target.name]: event.target.value
            }
        })
    }
    function onclickHandler(e) {
        let prevbtn = document.querySelector(`#${e.target.value}`);
        let  currentbtn= document.querySelector(`#${e.target.id}`);
        console.log(prevbtn);
        console.log(currentbtn);
        // let instrectorBtn = document.querySelector("#instrector");
        currentbtn.classList.add("activeBtn");
        prevbtn.classList.remove("activeBtn"); 


    }
   const submitHandler = (e) => {
        e.preventDefault();
        if (forData.password != forData.comfirm) {
            toast.error("password not match");
            return;
        }
        setCheckLog(true);
        nevigates("/dasboard");
        toast.success("you success logged in")

    }

   
    return (
        <div className="signiform">
            {/* student and instrecter modes   //// activeBtnborder-black border border-black border */}
            <div className="flex justify-around border border-black rounded-[20px] w-[220px] py-1 bg-slate-100  ">
               <button onClick={onclickHandler} value="student" id="instrector" className="  px-4 py-1 rounded-[15px]">Student</button>
               <button onClick={onclickHandler} value="instrector" id="student" className=" px-4 py-1 rounded-[15px]">Instructor</button>

            </div>
            {/* form  */}
            <form onSubmit={submitHandler} className="  flex flex-col gap-4 ">
                {/* studend first last name  */}
                <div>
               
                <p className="px-2">Name <sup className=" text-red-400">*</sup></p>
                <label className="flex justify-center" >
                    <input
                        className="w-[95%] justify-center py-[0.5rem] px-2 rounded "
                        required
                        placeholder="first name"
                        type="text"
                        name="firstName"
                        onChange={changeHandler}
                        id="" />
                </label>
                </div>

              <div>

                <p className="px-2">Last Name <sup className=" text-red-400">*</sup></p>
                <label className="flex justify-center">
                    <input
                        className="w-[95%] justify-center py-[0.5rem] px-2 rounded "
                        required
                        placeholder="last name"
                        type="text"
                        name="lastName"
                        onChange={changeHandler}
                        id="" />
                </label>
                </div>

                {/* getting email */}
                <div>
                    <p className="px-2">email<sup className=" text-red-400">*</sup></p>
                <label className="flex justify-center">
                    <input
                        className="w-[95%] justify-center py-[0.5rem] px-2 rounded "
                        required
                        placeholder="email"
                        type="email"
                        name="email"
                        onChange={changeHandler}
                        id="" />
                </label>
                </div>

                {/* getting PassWord  */}
                {/* enter the pass word */}
                <div>
                    <p className="px-2">set password<sup className=" text-red-400">*</sup></p>
                    
                    <div className="flex justify-evenly items-center">
                    
                        <input
                        className="w-[84%] justify-center py-[0.5rem] px-2 rounded "
                        required
                        placeholder="Enter new password"
                        type={ShowPassword ? "text" : "password"}
                        name="password"
                        onChange={changeHandler}
                        />
                        <span
                        className="p-3 bg-slate-50 rounded"
                        onClick={() => setShowPassword((prev) => !prev)}>
                        {ShowPassword ? (<FaEye />) : (<FaEyeSlash />)}
                        </span>
                        </div>

{/* comfirm password */}
                        <p className="px-2">confirm<sup className=" text-red-400">*</sup></p>

                    <div className="flex justify-evenly items-center">
                        <input
                            className="w-[84%] justify-center py-[0.5rem] px-2 rounded "
                            required
                            placeholder="confirm password"
                            type={ShowPassword_sec ?"text": "password"}
                            name="comfirm"
                            onChange={changeHandler}
                            id="" />
                    
                    <span
                        className="p-3 bg-slate-50 rounded"
                        onClick={() => setShowPassword_sec((prv) => !prv)}>
                        {ShowPassword_sec ? (<FaEye />) : (<FaEyeSlash />)}
                    </span>
                    </div>
                </div>

                {/* submit btn */}
                <button
                 type="submit"
                 
                 className="Sigin  bg-slate-50 w-[94%] py-[0.5rem] rounded text-black mx-[auto] border-black border "> 
                    Create Account
                </button>
                <div>
                </div>
            </form>
        </div>
    )
}

import { useState  } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { NavLink,Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";



function SigninForm( {setCheckLog}) {
   const nevigates = useNavigate();
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [ShowPassword, setShowPassword] = useState(false);
    function changeHandler(event) {

        setFormData((prevData) => (
            {
                ...prevData,
                [event.target.name]: event.target.value
            }
        ))
        console.log(event.target.value);
    }

function submitHandler(event) {
   event.preventDefault();
    setCheckLog(true);
    toast.success("logged in");
    nevigates("/dasboard");

    
}

    return (
        <div className="">
            <form onSubmit={submitHandler} className="  flex flex-col gap-4 "> 
                <div >
                <p className="px-2 ">
                    Email Address <sup className=" text-red-400">*</sup>
                </p>
                <label className="flex justify-center" >
                    <input
                    className="w-[95%] justify-center py-[0.5rem] px-2 rounded "
                        type="email"
                        value={formData.email}
                        onChange={changeHandler}
                        placeholder="Enter email id"
                        name="email" 
                        id="" required />
                </label>
                </div>



                {/* password input */}
                <div className="">
                    
                    <p className="px-2">
                        Password <sup className=" text-red-400" >*</sup>
                    </p> 
                    <div className="flex justify-evenly items-center">
                   
                        <input
                        className="w-[84%] justify-center py-[0.5rem] px-2 rounded "
                            type={ShowPassword?("text"):("password")}
                            value={formData.password}
                            onChange={changeHandler}
                            placeholder="Enter password"
                            name="password"
                            id="idpassword"
                            required>
                       
                        </input>
                      

                        <span
                            className="p-3 bg-slate-50 rounded"
                            onClick={() => setShowPassword(prev =>(!prev))}>   
                            { ShowPassword?(<FaEye/>):(<FaEyeSlash />)}
                        </span>
                        </div>
                        


               <div className=" text-right"><Link to="#" className=" text-blue-400 text-[0.7rem] mr-[10px]">forgot password</Link> </div> 
                </div>

                <button
                 className="Sigin  bg-slate-50 w-[94%] py-[0.5rem] rounded text-black mx-[auto] border-black border ">
                    Log In
                </button>


            </form>
        </div>
    )

}

export { SigninForm }
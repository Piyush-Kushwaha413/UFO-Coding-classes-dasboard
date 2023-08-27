import { NavLink } from "react-router-dom";
import logo from "../assets/Logo.svg";
import { toast } from "react-hot-toast";
import "./componentes.css";


function Navbar(props) {

    const checklog = props.checkLog;
    const setchecklog = props.setCheckLog;

    console.log();

    return(
        <div className="flex bg-[#b39289] h-[3rem] justify-evenly items-center text-white drop-shadow-2xl  ">
            <div>
                 <NavLink to="/">
                <img src={logo} alt=""  width={150} height={32} loading="lazzy"/>
            </NavLink>
            </div>
           

           <div className=" flex  ">
            <ul className="flex gap-[1.5rem] cursor-pointer items-center">
                <li className="">
                    <NavLink to="/">Home</NavLink>
                </li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/">Contact</NavLink></li>
            </ul>
           </div>

           <div className="flex gap-2 items-center " >
            {/* login signUp Logout Dashboard */}

            {!checklog &&
                <NavLink to="/login">
               <button onClick={()=>{
                setchecklog(false);
                

               }}> Login</button>
            </NavLink>}
            
            {!checklog &&
                <NavLink to="/signup">
               <button
               > Signup</button>
            </NavLink>}

            {checklog &&
                <NavLink to="/">
               <button onClick={()=>{
                setchecklog(false);
                toast.success("chal nikal ba**be");

               }}> Logout</button>
            </NavLink>}
         
            {checklog &&
                <NavLink to="/dasboard">
               <button onClick={()=>{
                setchecklog(false);
                toast.success("chal nikal ba**be");

               }}> Dashboard</button>
            </NavLink>}
           </div>


        </div>


    )

    
}

export {Navbar}
import { Template } from "../componentes/templets";
import  loginImg  from "../assets/login-img.png";

// title, desc1, desc2, image, formType, setCheckLog
function Login({setCheckLog}) {
  return (
    <div>
      <Template
      title="Welcome Back"
      desc1="Build skills for today, tomorrow, and beyond. Education to future-proof your career."
      desc2="beyond. Education to future-proof your career."
      image={loginImg}
      setCheckLog={setCheckLog}
      formType="signin"
      
      >
     </Template>

      
    </div>
 
  );
}

export {Login}

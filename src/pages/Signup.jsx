import { Template } from "../componentes/templets";
import  loginImg  from "../assets/loged-in-ok.png";
// Build skills for today, tomorrow, and beyond. Education to future-proof your career.
function Signup({ setCheckLog }) {
  return (
    <div>
      <Template
      title="Join the millions learning to code with StudyNotion for free"
      desc1="Build skills for today, tomorrow, and beyond. Education to future-proof your career."
      desc2="beyond. Education to future-proof your career."
      image={loginImg}
      setCheckLog={setCheckLog}
      formType="Login"
      >
     </Template>

      
    </div>
 
  );
}

export {Signup}

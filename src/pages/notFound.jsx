import  errorimg  from "../assets/error-found-404.png";

 function NotFound(){
    return(
        <div className="flex justify-center items-center flex-col gap-5">
            <h1 className=" text-2xl font-bold ">" Page Not Found "</h1>
            <img className="w-[380px]" src={errorimg} alt="404 -ot found img"  />
        </div>
    )
}
// export default NotFound;
export {NotFound};
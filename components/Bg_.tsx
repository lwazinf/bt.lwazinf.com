interface Bg_Props {
    
}
 
const Bg_ = () => {
    return ( 
        <div
        className={`h-full w-full relative overflow-hidden transition-all duration-200`}
      >
        <div
          className={`h-full w-full flex flex-col justify-center items-center absolute top-0 transition-all duration-200`}
        >
          <img
        src={`/assets/images/LwaziNF.png`}
            className={`h-[120px] object-cover invert opacity-10 transition-all duration-200`}
          />
        </div>

        <div
          className={`h-full w-full flex flex-col justify-center items-center absolute top-0 transition-all duration-200`}
        >
          <img
        src={`/assets/images/LwaziNF.png`}
            className={`h-[80px] object-cover invert opacity-10 transition-all duration-200 relative top-[80px] right-[200px]`}
          />
        </div>

        <div
          className={`h-full w-full flex flex-col justify-center items-center absolute top-0 transition-all duration-200`}
        >
          <img
        src={`/assets/images/LwaziNF.png`}
            className={`h-[50px] object-cover invert opacity-5 transition-all duration-200 relative top-[-85px] right-[150px]`}
          />
        </div>

        <div
          className={`h-full w-full flex flex-col justify-center items-center absolute top-0 transition-all duration-200`}
        >
          <img
        src={`/assets/images/LwaziNF.png`}
            className={`h-[50px] object-cover invert opacity-5 transition-all duration-200 relative top-[-85px] right-[150px]`}
          />
        </div>

        <div
          className={`h-full w-full flex flex-col justify-center items-center absolute top-0 transition-all duration-200`}
        >
          <img
        src={`/assets/images/LwaziNF.png`}
            className={`h-[60px] object-cover invert opacity-5 transition-all duration-200 relative top-[0px] right-[-200px]`}
          />
        </div>
      </div>
     );
}
 
export default Bg_;
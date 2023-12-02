import Image from "next/image";


const FurnitureBlock = ({ title, price, imageURL,article,availability}) => {
 
  return (
    <div className=" border-neutral-800 border-solid rounded-xl m-2 justify-center items-center flex flex-col p-3 h-auto w-48">
     
      <Image 
      className="h-auto w-auto"
      alt="img12" 
      src={imageURL} 
      height={100}
      width={125}
       priority />
       <div>
       <p>Арт.{article}</p>
       <div>{availability}</div>
       </div>
      <h4 className="">{title}</h4>
    
      <div className="">
        <div className="">Вартість- {price} $</div>
       
      </div>
    </div>
    
  );
  
};

export default FurnitureBlock;

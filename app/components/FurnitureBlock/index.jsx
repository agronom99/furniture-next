import Image from "next/image";


const FurnitureBlock = ({ title, price, imageURL,article,availability}) => {
 
  return (
    <div className=" border-neutral-800 border-solid rounded-xl m-2 justify-center items-center flex flex-col">
     
      <Image 
      className=" w-auto "
      alt="img12" 
      src={imageURL} 
      height={20}
      width={30}
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

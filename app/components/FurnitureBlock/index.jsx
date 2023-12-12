import Image from "next/image";
import { FaCertificate } from "react-icons/fa6";

const FurnitureBlock = ({
  title,
  price,
  imageURL,
  article,
  id,
  availability,
}) => {
  return (
    <div className=" border-neutral-800 border-solid rounded-xl m-5 justify-center items-center flex flex-col p-3 h-auto w-64">
      <Image
        className="h-auto w-auto "
        alt="img12"
        src={imageURL}
        height={100}
        width={125}
        priority
      />
      <ul className=" flex items-center">
        <li className=" mr-3">Арт.{id}</li>
        <li className=" text-sm flex items-center"> <span className="mr-1 w-2"><FaCertificate /></span> {availability}</li>
      </ul>
      <h4 className="">{title}</h4>
      {/* <p>{id}</p> */}

      <div className="">
        <div className="">Вартість- {price} грн.</div>
      </div>
    </div>
  );
};

export default FurnitureBlock;

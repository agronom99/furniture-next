import Image from "next/image";

const FurnitureBlock = ({ title, price, imageURL, article, id, availability }) => {
  return (
    <div className=" border-neutral-800 border-solid rounded-xl m-2 justify-center items-center flex flex-col p-3 h-auto w-60">
      <Image
        className="h-auto w-auto "
        alt="img12"
        src={imageURL}
        height={100}
        width={125}
        priority
      />
      <ul className=" flex">
        <li className=" mr-3">Арт.{article}</li>
        {/* <li className=" decoration-green-600">{availability}</li> */}
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

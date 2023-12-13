import { supabase } from "../../../supabaseClient";
import Image from "next/image";
import { FaCertificate } from "react-icons/fa6";




const PageFurniture = async ({ params: { id } }) => {
  // Використовуйте "const" для отриманих даних, а не "let"
  const { data, error } = await supabase
    .from("accessories_table")
    .select("*")
    .eq("id", id)
    .single(); // Використовуйте метод single() для отримання лише одного запису

  // Перевірте, чи є дані перед тим, як їх використовувати
  if (error) {
    return <div>Error loading data</div>;
  }

  

  return (
    <div className=" flex flex-col sm:flex-row items-center justify-center  border-neutral-800 border-solid rounded-xl w-11/12 mx-auto relative top-0 ">
      {/* <div>{id}</div> */}
      {/* Використовуйте data, а не post */}
      <Image
        className="h-auto w-auto mx-20 my-10 sm:w-80"
        alt="img12"
        src={data.imageURL}
        height={100}
        width={125}
        priority
      />
      <div className=" flex flex-col items-center mx-20 my-10">
        <div>Арт.{data.id}</div>
        <div className=" flex items-center text-xs text-red-500">
          <span className="mr-1 w-2">
            <FaCertificate />
          </span>
          {data.availability}
        </div>
        <div>{data.title}</div>
        <div>Вартість-{data.price}грн.</div>
        <p>Примітки:  {data.prim}</p>
      </div>

      {/* Ви можете використовувати JSON.stringify, але використовуйте data, а не post */}
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </div>
  );
};

export default PageFurniture;

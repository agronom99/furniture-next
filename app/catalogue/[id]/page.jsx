import { supabase } from "../../../supabaseClient";

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
    <div className=" flex flex-col items-center justify-center">
      {/* <div>{id}</div> */}
      {/* Використовуйте data, а не post */}
      <div>{data.id}</div>
      <div>{data.title}</div>
      <div>{data.price}</div>
      <div>{data.imageURL}</div>
      <div>{data.article}</div>
      <div>{data.availability}</div>

      {/* Ви можете використовувати JSON.stringify, але використовуйте data, а не post */}
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </div>
  );
};

export default PageFurniture;

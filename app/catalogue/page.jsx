"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { supabase } from '../../supabaseClient';
import FurnitureBlock from '../components/FurnitureBlock/index.jsx';

function CatalogueFurniture() {
  const [furniture, setFurniture] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const { data } = await supabase.from('accessories_table').select('*');
      setFurniture(data);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };


  const furnitureElements = furniture.map(obj => (
    <div key={obj.id}>
      <Link href={`/catalogue/${obj.id}`}>
        <div><FurnitureBlock key={obj.id} {...obj}/></div>
      </Link>
    </div>
  ));

  return (
    <div className=' w-11/12 mx-auto'>
      <div className=' flex flex-row flex-wrap m-10'>{furnitureElements}</div>
      {/* <pre>{JSON.stringify(furniture, null, 2)}</pre> */}
    </div>
  );
}

export default CatalogueFurniture;






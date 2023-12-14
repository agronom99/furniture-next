import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BiXCircle } from "react-icons/bi";
import { BsCart4 } from "react-icons/bs";
import { BsFillTrash3Fill } from "react-icons/bs";
import { FaRegSquarePlus, FaRegSquareMinus } from "react-icons/fa6";


const Cart = () => {
  return (
    <div className="h-auto w-11/12 mx-auto border-neutral-800 border-solid rounded-xl ">
      <div className=" m-10">
        <div className=" ">
          <div className="">
            <div className=" flex flex-col lg:flex-row lg:justify-between items-center bg-tomato py-3 px-10 mb-10 rounded-2xl  text-white">
              <h2 className=" flex items-center text-2xl">
              <BsCart4 className=" mx-3" />
                Корзина
              </h2>
              <div className=" flex items-center hover:bg-red-700 rounded-2xl  border-solid border-2 w-[250px] p-2">
              <span className=" mx-3"><BsFillTrash3Fill size='20' color='wite' /></span>
                <span className=" text-lg">Очистити корзину</span>
              </div>
            </div>

           <div className=" flex justify-center">
                <div className=" flex justify-center items-center border-neutral-800 border-solid rounded-xl p-5 m-5 sm:w-[450px]">
                  <div className=" flex flex-col items-center">
                    <div className=" m-5">
                      <Image 
                      className=" md:w-[200px] w-auto"
                      src="https://nbuhrmvoogojiuhaykgk.supabase.co/storage/v1/object/public/pictures/petlya_nakladna.jpeg"
                       alt="img" 
                       width={100} 
                       height={100} 
                       />
                    </div>
                    <div className="">
                      <h3 className=" m-3">Петля накладна</h3>
                      <p>Наявність уточнюйте</p>
                    </div>
                    <div className=" flex items-center">
                      <div className="">
                      <FaRegSquareMinus />
                      </div>
                      <b className=" m-3">1</b>
                      <div className="">
                      <FaRegSquarePlus />
                      </div>
                    </div>
                    <div className=" flex">
                      <b>10 грн.</b>
                    </div>
                  </div>
                  <div className="">
                      <div className=" flex py-10 sm:p-16">
                      <BiXCircle className="w-7" />
                      </div>
                    </div>
                </div>
           </div>


            <div className=" flex flex-col">
              <div className=" flex flex-col items-center md:flex-row justify-around">
                <span>
                  {" "}
                  Всього : <b>1 шт.</b>{" "}
                </span>
                <span>
                  {" "}
                  Вартість заказу: <b>10 грн.</b>{" "}
                </span>
              </div>
              <div className=" flex flex-col md:flex-row-reverse justify-around items-center">
                <div className="hover:bg-red-700 m-5 bg-tomato py-2 px-5 rounded-2xl border-solid border-2 ">
                  <span>Заказати зараз</span>
                </div>
                <Link href="/catalogue" className="hover:bg-red-700 bg-tomato py-2 px-5 rounded-2xl border-solid border-2">
                  <span>Повернутись назад</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

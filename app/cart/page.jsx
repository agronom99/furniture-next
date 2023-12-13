import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BiXCircle } from "react-icons/bi";
import { FaRegSquarePlus, FaRegSquareMinus } from "react-icons/fa6";

const Cart = () => {
  return (
    <div className="h-auto w-11/12 mx-auto border-neutral-800 border-solid rounded-xl ">
      <div className=" m-10">
        <div className=" ">
          <div className="">
            <div className=" flex flex-col lg:flex-row lg:justify-between items-center bg-tomato py-3 px-10 mb-10 rounded-2xl  text-white">
              <h2 className=" flex text-2xl">
                <svg
                  className=" mx-5"
                  width="25"
                  height="25"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z"
                    stroke="white"
                    stroke-width="1.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z"
                    stroke="white"
                    stroke-width="1.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669"
                    stroke="white"
                    stroke-width="1.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                Корзина
              </h2>
              <div className=" flex hover:bg-red-700 rounded-2xl  border-solid border-2 w-[250px] p-2">
                <svg
                  className=" mx-5 "
                  width="25"
                  height="25"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.5 5H4.16667H17.5"
                    stroke="#B6B6B6"
                    stroke-width="1.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z"
                    stroke="#B6B6B6"
                    stroke-width="1.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M8.33337 9.16667V14.1667"
                    stroke="#B6B6B6"
                    stroke-width="1.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M11.6666 9.16667V14.1667"
                    stroke="#B6B6B6"
                    stroke-width="1.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <span className=" text-lg">Очистити корзину</span>
              </div>
            </div>

           <div className=" flex justify-center">
                <div className=" flex justify-center items-center border-neutral-800 border-solid rounded-xl p-5 m-5 sm:w-[450px]">
                  <div className=" flex flex-col items-center">
                    <div className=" m-5">
                      <Image 
                      className=" md:w-[200px]"
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

"use client"

import React, { useEffect } from "react";

const Contacts = () => {
  const Maps =
    "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1670.1774519460312!2d28.428423422279476!3d49.21179728323348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1suk!2sua!4v1701099931833!5m2!1suk!2sua";

  useEffect(() => {
    // Встановлюємо позицію прокрутки на верх сторінки при завантаженні компонента
    window.scrollTo(0, 0);
  }, []); // Порожній масив вказує, що ефект викликається тільки при монтажі та демонтажі компонента

  return (
    <div className="flex items-center justify-center flex-col sm:flex-row w-11/12 mx-auto border-neutral-800 border-solid rounded-xl">
      <iframe
        className="m-10 rounded-2xl sm:w-[550px]"
        width={300}
        height={400}
        title="map"
        src={Maps}
      ></iframe>
      <div className="flex flex-col items-center justify-center w-1/2 text-3xl">
        <h2>Зворотній зв&#96;язок:</h2>
        <h3>Заявки приймаємо цілодобово!</h3>
      </div>
    </div>
  );
};

export default Contacts;


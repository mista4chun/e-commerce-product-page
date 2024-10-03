import Menu from "/icon-menu.svg";
import Close from "/icon-close.svg";
import { useState } from "react";
import MenuItems from "./MenuItems";

function MobileButton() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div onClick={() => setIsOpen(!isOpen)}>
      {isOpen ? (
        <div className=" absolute inset-0 bg-BgWhite z-50 flex w-[65%] flex-col items-start  pt-8 pl-6 gap-16   shadow-3xl">
         

          <img src={Close} alt="close" className="h-5 md:hidden" />
          <MenuItems />
           
        </div>
      ) : (
        <img src={Menu} alt="menu" className="h-5 md:hidden" />
      )}
    </div>
  );
}

export default MobileButton;

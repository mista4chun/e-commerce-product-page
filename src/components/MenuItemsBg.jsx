function MenuItemsBg() {
  return (
    <ul className="text-GrayishBlue hidden font-bold items-center gap-8 md:flex ">
      <li >
        <a href="#" className="hover:border-b-4 hover:border-Orange pb-7 duration-300 transition-all">Collections</a>
      </li>
      <li>
        <a href="#" className="hover:border-b-4 hover:border-Orange pb-7 duration-300 transition-all">Men</a>
      </li>
      <li>
        <a href="#" className="hover:border-b-4 hover:border-Orange pb-7 duration-300 transition-all">Women</a>
      </li>
      <li>
        <a href="#" className="hover:border-b-4 hover:border-Orange pb-7 duration-300 transition-all">About</a>
      </li>
      <li>
        <a href="#" className="hover:border-b-4 hover:border-Orange pb-7 duration-300 transition-all">Contact</a>
      </li>
    </ul>
  );
}

export default MenuItemsBg;

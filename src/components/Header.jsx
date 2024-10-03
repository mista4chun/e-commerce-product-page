import Avatar from "./Avatar";
import Cart from "./Cart";
import Logo from "./Logo";
import MenuItemsBg from "./MenuItemsBg";
import MobileButton from "./MobileButton";

function Header() {
  return (
    <header className="flex flex-wrap items-center justify-between border-b bg-BgWhite px-6 py-6">
      <div className="flex items-center gap-4 md:gap-12">
        <MobileButton />
        <Logo />
        <MenuItemsBg />
      </div>
      <div className="flex items-center gap-6">
        <Cart />
        <Avatar />
      </div>
    </header>
  );
}

export default Header;

import Container from "../shared/Container";
import Account from "./Account";
import CartBag from "./CartBag";
import HamburgerMenuBar from "./HamburgerMenuBar";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <Container>
      <div
        className="
      flex
      gap-3
      items-center
    
    "
      >
        <HamburgerMenuBar />
        {/* logo */}
        <Logo />
        {/* search bar */}
        <SearchBar />
        {/* account */}
        <Account />
        {/* cart bag */}
        <CartBag />
      </div>
    </Container>
  );
}

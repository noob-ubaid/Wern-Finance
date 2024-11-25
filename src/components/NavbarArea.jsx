import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Logo from "./Logo";

const Header = () => {
  return (
    <Navbar
      shouldHideOnScroll
      isBlurred={false}
      className="bg-transparent w-full"
      maxWidth="xl"
    >
      <NavbarBrand>
        <div className="w-16">
          <Logo />
        </div>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            color="primary"
            href="#"
            variant="bordered"
            radius="full"
          >
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
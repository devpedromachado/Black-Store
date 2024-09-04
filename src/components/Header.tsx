import Link from "next/link";
import { Nav, Navbar } from "reactstrap";

const Header = () => {
  return (
    <Navbar container="md" color="dark" dark>
      <Link href="/" className="navbar-brand">
        Início
      </Link>
      <Nav className="flex-row" navbar>
        <Link href="/product" className="nav-link">
          Produtos
        </Link>
        <Link href="/cart" className="nav-link">
          Carrinho
        </Link>
      </Nav>
    </Navbar>
  );
}

export default Header;

import "./NavBar.css";
import CartWidget from "./CartWidget";
("./CartWidget");

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="../imagenes/logogucci.png" />
      </div>
      <div>
        <CartWidget />
      </div>

      <div className="links">
        <a href="#">Carteras</a>
        <a href="#">Zapatos</a>
        <a href="#">Lentes</a>
        <a href="#">Relojes</a>
      </div>
    </nav>
  );
};

export default NavBar;

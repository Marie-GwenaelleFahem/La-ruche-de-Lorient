import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <h1>Apiculture Passion</h1>
        <div>
          <Link to="/">Accueil</Link>
          <Link to="/about">Apiculture</Link>
          <Link to="/products">Produits</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
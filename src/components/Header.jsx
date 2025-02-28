import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="fixed-header">
      <div className="header-container">
        <h1>SISTEMA ACADÊMICO</h1>
        <nav>
          <NavLink to="/" end activeClassName="active">
            início
          </NavLink>
          <NavLink to="/add" activeClassName="active">
            nova atividade
          </NavLink>
          <NavLink to="/about" activeClassName="active">
            sobre
          </NavLink>
          <NavLink to="/contact" activeClassName="active">
            contato
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;

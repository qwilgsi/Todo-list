import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="app-header d-flex justify-content-between">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <Link className="navbar-brand" href="#">
            Todo List
          </Link>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="navbar-nav">

              <NavLink className="nav-link" to="/todos">
                Todos
              </NavLink>
              <NavLink className="nav-link" to="/faq">
                FAQ
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;

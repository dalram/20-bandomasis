import { NavLink } from "react-router-dom";


function Nav() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="nav">
              <NavLink
                className="nav-link"
                to="/admin/"
                style={({ isActive }) =>
                  isActive ? { color: "crimson" } : null
                }
              >
                Admin
              </NavLink>
              <NavLink
                className="nav-link"
                to="/admin/orders"
                style={({ isActive }) =>
                  isActive ? { color: "crimson" } : null
                }
              >
                Orders
              </NavLink>
              <NavLink
                className="nav-link"
                to="/admin/products"
                style={({ isActive }) =>
                  isActive ? { color: "crimson" } : null
                }
              >
                Products
              </NavLink>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
export default Nav;
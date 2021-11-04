import "./sidebar.css";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem">
                Home
              </li>
            </Link>
            <li className="sidebarListItem">
              Analytics
            </li>
            <li className="sidebarListItem">
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">customers</h3>
          <ul className="sidebarList">
            <Link to="/newuser" className="link">
              <li className="sidebarListItem">
                Add Customer
              </li>
            </Link>
            <Link to="/users" className="link">
            <li className="sidebarListItem">
            Edit Customer
            </li>
          </Link>
          </ul>
        </div>
        {
        // <div className="sidebarMenu">
        //   <h3 className="sidebarTitle">Products</h3>
        //   <ul className="sidebarList">
        //     <Link to="/newProduct" className="link">
        //       <li className="sidebarListItem">
        //         Add Product
        //       </li>
        //     </Link>
        //     <Link to="/products" className="link">
        //     <li className="sidebarListItem">
        //       Edit product
        //     </li>
        //     </Link>
        //   </ul>
        // </div>
        }
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Contact</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <a className="sendMail" href="mailto:webmaster@example.com"> Email </a>              
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

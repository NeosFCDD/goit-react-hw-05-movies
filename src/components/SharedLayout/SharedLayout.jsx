import { NavLink, Outlet } from "react-router-dom";
import css from "components/SharedLayout/SharedLayout.module.css";

const SharedLayout = () => {
  return (
    <>
      <header className={css.header}>
        <ul className={css.nav}>
          <li>
            <NavLink to="/" className={css.navlink}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies" className={css.navlink}>
              Movies
            </NavLink>
          </li>
        </ul>
      </header>
      <main className={css.container}>
          <Outlet />
      </main>
    </>
  );
};

export default SharedLayout;
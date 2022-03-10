import { NavLink } from "react-router-dom";

export default function NavBar() {
  return(
    <header>
      <h1>Cat-Dog API</h1>
      <ul>
        <NavLink to="/">
          <li>Home</li>
        </NavLink>

        <NavLink to="/randomCats">
          <li>Random Cats</li>
        </NavLink>

        <NavLink to="/randomDogs">
          <li>Random Dogs</li>
        </NavLink>

        <NavLink to="/about">
          <li>About Us</li>
        </NavLink>
      </ul>
    </header>
  )
}

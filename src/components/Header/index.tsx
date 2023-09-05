import { Link } from "react-router-dom";
import { NavBar, Wrapper } from "./styles";

const FilterSideBar = () => {
  return (
    <Wrapper>
      <Link to="/">
        <h2 className="title">MH Research Center</h2>
      </Link>
      <NavBar>
        <Link to="/armors">Armor sets</Link>
        <Link to="/teste"></Link>
      </NavBar>
    </Wrapper>
  );
};

export default FilterSideBar;

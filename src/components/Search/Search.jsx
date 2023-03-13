import styles from "./Search.module.css";

import SearchFormContainer from "./SearchForm/SearchFormContainer";
import FoundedPlantsContainer from "./FoundedPlants/FoundedPlantsContainer";
import Button from "../Button/Button";

const Search = (props) => {
  return (
    <div className={`container ${styles.formContainer} mt-5 `}>
      <h3>Искать:</h3>
      <SearchFormContainer />

      {/* <NavLink to="/plants" className="btn btn-primary my-3">
        Все растения
      </NavLink> */}
      <Button to={'/plants'} value={'Все растения'} />

      <h3>Вы нашли:</h3>
      <FoundedPlantsContainer />
    </div>
  );
};

export default Search;

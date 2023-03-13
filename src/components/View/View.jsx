import { NavLink } from "react-router-dom";
import styles from "./View.module.css";
import PLantsListContainer from "./PLantsList/PLantsListContainer";
import ViewSearchContainer from "./ViewSearch/ViewSearchContainer";
import Button from "../Button/Button";

const View = () => {
  return (
    <div className={`container ${styles.viewContainer}`}>
      {/* <div className="d-flex justify-content-center my-2">
        <NavLink to="/search" className="btn btn-primary">
          К поиску
        </NavLink>
      </div> */}
      <Button to={'/search'} value={'К поиску'} />

      <ViewSearchContainer />

      {/* <div className="d-flex justify-content-center m-3">
        <NavLink to="/new" className="btn btn-primary">
          Добавить
        </NavLink>
      </div> */}

      <Button to={'/new'} value={'Добавить'} />

      <hr />

      <PLantsListContainer />
    </div>
  );
};

export default View;

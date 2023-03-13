import { NavLink } from "react-router-dom";

const Button = (props) => {
  return (
    <div className="d-flex justify-content-center m-3">
      <NavLink onClick={props.onClick} to={props.to} className="btn btn-primary">
        {props.value}
      </NavLink>
    </div>
  );
};

export default Button
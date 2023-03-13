import { NavLink } from 'react-router-dom'
// import styles from './PlantCard.module.css'

const PlantCard = (props) => {
 return (
  <div className="card m-3">
   <div className="card-header">
    <NavLink to="/plantName" className="list-group-item list-group-item-action">{props.name}</NavLink>
   </div>
   <div className="card-body">
    <p className="card-text">{props.info}</p>
   </div>
  </div >
 )
}

export default PlantCard
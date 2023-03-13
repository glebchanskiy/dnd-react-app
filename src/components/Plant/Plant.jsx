import styles from './Plant.module.css'

const Plant = (props) => {

 const locs = props.locations.map(l => {
  if (props.locations.slice(-1)[0].name !== l.name) 
    return <span key={l.id}>{`${l.name[0].toUpperCase()}${l.name.slice(1)}`}, </span>
  else 
    return <span key={l.id}>{`${l.name[0].toUpperCase()}${l.name.slice(1)}`}</span>
})
 return (
  <div className={`container mt-3 ${styles.plantContainer}`}>
   <h2>{props.name}</h2>

   <div className={`border rounded p-2`}>

    <div>
     <h5>Редкость:</h5>
     <p>{props.rareness}</p>
    </div>

    <hr className='border' />

    <div>
     <h5>Локации:</h5>
     <p>
      {locs}
     </p>
    </div>

    <hr className='border' />

    <div>
     <h5>Особенности:</h5>
     <p>{props.features}</p>
    </div>

    <hr className='border' />

    <div>
     <h5>Сложность:</h5>
     <p>{props.difficult}</p>
    </div>

    <hr className='border' />

    <div>
     <h5>Описание:</h5>
     <p>{props.description}</p>
    </div>
   </div>
   <button className='btn btn-primary w-100 mt-2'>Редактировать</button>
   <button className='btn btn-danger w-100 mt-2'>Удалить</button>
  </div>
 )
}

export default Plant
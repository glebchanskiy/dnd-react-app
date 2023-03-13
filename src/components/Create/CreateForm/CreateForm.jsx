import Select from "react-select";
import Button from "../../Button/Button";


const CreateForm = (props) => {
  const rarities = props.rarities.map((r) => ({
    value: r.id,
    label: `${r.name[0].toUpperCase()}${r.name.slice(1)}`,
  }));

  const locations = props.locations.map((l) => ({
    value: l.id,
    label: `${l.name[0].toUpperCase()}${l.name.slice(1)}`,
  }));

  return (
    <form className="container form-container center mt-5 p-3 border border-default rounded">
      <h1 className="mb-2">Новое растение</h1>
      <div className="form-group mb-2">
        <label htmlFor="name">Название</label>
        <input
          onChange={props.onNameChange}
          value={props.nameValue}
          placeholder="Введите название..."
          type="text"
          className="form-control"
          id="name"
        />
      </div>

      <div className="form-group mb-2">
        <label htmlFor="rareness">Редкость</label>
        <Select
          onChange={props.onRarenessChange}
          value={props.rarenessValue}
          className="basic-single"
          classNamePrefix="select"
          defaultValue={rarities[0]}
          options={rarities}
        />
      </div>

      <div className="form-group mb-2">
        <label htmlFor="locations">Локации</label>
        <Select
          onChange={props.onLocationsChange}
          value={props.locationsValue}
          isMulti
          options={locations}
          className="basic-multi-select"
          classNamePrefix="select"
        />
        <Button to={"/addLocation"} value={"Добавить локацию"} />
      </div>

      <div className="form-group mb-2">
        <label htmlFor="features">Особенности</label>
        <textarea
          onChange={props.onFeaturesChange}
          value={props.features}
          type="text"
          id="features"
          className="form-control"
          size="4"
        ></textarea>
      </div>

      <div className="form-group mb-2">
        <label htmlFor="difficult">Сложность</label>
        <input
          onChange={props.onDifficultChange}
          value={props.difficult}
          type="number"
          id="difficult"
          className="form-control"
        />
      </div>

      <div className="form-group mb-2">
        <label htmlFor="description">Описание</label>
        <textarea
          onChange={props.onDescriptionChange}
          value={props.description}
          type="text"
          id="description"
          className="form-control"
          size="4"
        ></textarea>
      </div>

      <button onClick={props.onAddPlant} className="btn btn-primary my-2">
        Добавить
      </button>
    </form>
  );
};

export default CreateForm;

import Button from "../../Button/Button";

const SearchForm = (props) => {
  // it expects in props:
  //
  // binding values:
  //  locationValue
  //  rarenessValue
  //  numberValue
  //
  // data for selectors:
  //  locations - list
  //  rarities  - list
  //
  // handlers:
  //  onLocationChange
  //  onRarenessChange 
  //  onNumberChange
  //  onSearch

  let rarities = props.rarities.map((r) => (
    <option value={r.id} key={r.id}>
      {`${r.name[0].toUpperCase()}${r.name.slice(1)}`}
    </option>
  ));

  let locations = props.locations.map((l) => (
    <option value={l.id} key={l.id}>
      {`${l.name[0].toUpperCase()}${l.name.slice(1)}`}
    </option>
  ));

  return (
    <form className={`p-3 border border-default rounded`}>
      <div className="form-group row mb-2">
        <label htmlFor="locations" className="col-sm-3 col-form-label">
          {"Локация:"}
        </label>
        <div className="col">
          <select
            onChange={props.onLocationChange}
            value={props.locationValue}
            id="locations"
            className="form-control"
          >
            {locations}
          </select>
        </div>
      </div>

      <div className="form-group row my-2">
        <label htmlFor="rareness" className="col-sm-3 col-form-label">
          {"Редкость:"}
        </label>
        <div className="col">
          <select
            onChange={props.onRarenessChange}
            value={props.rarenessValue}
            id="rareness"
            className="form-control"
          >
            {rarities}
          </select>
        </div>
      </div>

      <div className="form-group row my-2">
        <label htmlFor="count" className="col-sm-3 col-form-label">
          {"Количество:"}
        </label>
        <div className="col">
          <input
            onChange={props.onNumberChange}
            value={props.numberValue}
            type="number"
            id="count"
            className="form-control"
            placeholder="0"
          />
        </div>
      </div>

      {/* <button onClick={props.onSearch} className="btn btn-primary my-2">
        {"Найти"}
      </button> */}

      <Button value={'Найти'} onClick={props.onSearch} />
    </form>
  );
};

export default SearchForm;

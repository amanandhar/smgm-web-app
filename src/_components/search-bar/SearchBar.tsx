import "./SearchBar.css";

export const SearchBar = () => {
  return (
    <div className="main">
      <div className="form-group has-search">
        <span className="fa fa-search form-control-feedback"></span>
        <input
          type="text"
          className="form-control"
          placeholder="Search for an item"
        />
      </div>
    </div>
  );
};

import "./SearchBar.css";

export interface ISearchBarProps {
  onChange?: (value: string) => void;
}

export const SearchBar = (props: ISearchBarProps) => {
  const handleChange = (value: string) => {
    if (props.onChange) {
      props.onChange(value);
    }
  };

  return (
    <div className="main">
      <div className="form-group has-search box">
        <i className="fa fa-search form-control-feedback"></i>
        <input
          type="text"
          className="form-control"
          placeholder="Search everything at SMGM Online Store"
          onChange={(e: any) => handleChange(e.target.value)}
        />
      </div>
    </div>
  );
};

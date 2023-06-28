import { useCallback } from "react";
import { useDebounce } from "../../utility/useDebounce";
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
      <div className="form-group has-search">
        <span className="fa fa-search form-control-feedback"></span>
        <input
          type="text"
          className="form-control"
          placeholder="Search item"
          onChange={(e: any) => handleChange(e.target.value)}
        />
      </div>
    </div>
  );
};

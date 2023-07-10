import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { ItemCategory } from "../../models/ItemCategory.model";
import { Spinner } from "../spinner";
import "./CategoryDropdown.css";

export interface ICategoryDropdownProps {
  onChange: (value: number) => void;
}

export const CategoryDropdown = (props: ICategoryDropdownProps) => {
  const [categories, setCategories] = useState<ItemCategory[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);

  const dropdownRef = useRef<any>(null);

  useEffect(() => {
    fetchData();

    const handleClickOutside = (event: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleCategoryClick = (category: ItemCategory) => {
    setSelectedCategory(category.name || "");
    if (props.onChange) {
      props.onChange(category.counter || -1);
    }
    setIsOpen(false);
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      axios
        .get(`${process.env.REACT_APP_API_URL}/item-categories`)
        .then((response: any) => {
          const itemCategories: ItemCategory[] = response?.data.map(
            (category: any) => {
              return {
                counter: category.Counter,
                name: category.Name,
              };
            }
          );

          let defaultCategories: ItemCategory[] = [{ counter: 0, name: "All" }];
          setCategories(defaultCategories.concat(itemCategories));
        });
    } catch (error) {
      // Handle error
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading && <Spinner />}
      <div ref={dropdownRef} className="dropdown smgm-container">
        <button
          className="btn dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          onClick={(event: any) => setIsOpen(!isOpen)}
        >
          {selectedCategory}
        </button>
        {isOpen && (
          <ul
            className="dropdown-menu"
            style={isOpen ? { display: "block" } : { display: "none" }}
          >
            {categories.map((category, index) => (
              <li key={index}>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() => handleCategoryClick(category)}
                >
                  {category.name}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

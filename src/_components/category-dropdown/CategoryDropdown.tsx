import { useEffect, useState } from "react";
import axios from "axios";
import { ItemCategory } from "../../models/ItemCategory.model";
import "./CategoryDropdown.css";

export interface ICategoryDropdownProps {
  onChange: (value: number) => void;
}

export const CategoryDropdown = (props: ICategoryDropdownProps) => {
  const [categories, setCategories] = useState<ItemCategory[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number>(0);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/item-categories`)
      .then((response: any) => {
        const newCategories: ItemCategory[] = response?.data.map(
          (category: any) => {
            return {
              counter: category.Counter,
              name: category.Name,
            };
          }
        );

        setCategories(newCategories);
      });
  }, []);

  const handleCategoryClick = (categoryId: number) => {
    setSelectedCategory(categoryId);
    if (props.onChange) {
      props.onChange(categoryId);
    }
  };

  return (
    <>
      <div className="dropdown smgm-container">
        <button
          className="btn dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          All
        </button>
        <ul className="dropdown-menu">
          {categories.map((category, index) => (
            <li key={index}>
              <button
                className="dropdown-item"
                type="button"
                onClick={() => handleCategoryClick(category.counter || -1)}
              >
                {category.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

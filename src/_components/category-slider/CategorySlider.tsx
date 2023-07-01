import { useEffect, useState } from "react";
import "./CategorySlider.css";
import { Category } from "../../models/Category.model";
import axios from "axios";

export interface ICategorySliderProps {
  onClick: (value: number) => void;
}

export const CategorySlider = (props: ICategorySliderProps) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number>(0);
  const [showLeftArrow, setShowLeftArrow] = useState<boolean>(true);
  const [showRightArrow, setShowRightArrow] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/item-categories`)
      .then((response: any) => {
        const newCategories: Category[] = response?.data.map(
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

  // useEffect(() => {
  //   const categoriesElement = document.getElementById("categories");
  //   if (categoriesElement && categoriesElement.scrollLeft > 0) {
  //     setShowLeftArrow(true);
  //   } else {
  //     setShowLeftArrow(false);
  //   }

  //   if (
  //     categoriesElement &&
  //     categoriesElement.scrollLeft <
  //       categoriesElement.scrollWidth - categoriesElement.clientWidth
  //   ) {
  //     setShowRightArrow(true);
  //   } else {
  //     setShowRightArrow(false);
  //   }
  // }, [selectedCategory]);

  const handleScrollLeft = () => {
    const categoriesElement = document.getElementById("categories");
    if (categoriesElement) {
      categoriesElement.scrollLeft += 50;
    }
  };

  const handleScrollRight = () => {
    const categoriesElement = document.getElementById("categories");
    if (categoriesElement) {
      categoriesElement.scrollLeft -= 50;
    }
  };

  const handleCategoryClick = (categoryId: number) => {
    setSelectedCategory(categoryId);
    if (props.onClick) {
      props.onClick(categoryId);
    }
  };

  return (
    <div className="categories-wrapper">
      <div className="d-flex categories-content">
        {showLeftArrow && (
          <button id="left-btn" className="border-0" onClick={handleScrollLeft}>
            <img
              src={process.env.PUBLIC_URL + "/images/icons/left-arrow.svg"}
              alt=""
            />
          </button>
        )}
        <div
          className="categories"
          id="categories"
          style={{ marginTop: "16px", marginLeft: "5px" }}
        >
          <div
            className={"ctg " + (selectedCategory === 0 ? "active-ctg" : "")}
            onClick={() => handleCategoryClick(0)}
          >
            All
          </div>
          {categories.map((category, index) => (
            <div
              key={index}
              className={
                "ctg " +
                (selectedCategory === category.counter ? "active-ctg" : "")
              }
              onClick={() => handleCategoryClick(category.counter || -1)}
            >
              {category.name}
            </div>
          ))}
        </div>
        {showRightArrow && (
          <button
            id="right-btn"
            className="border-0"
            onClick={handleScrollRight}
          >
            <img
              src={process.env.PUBLIC_URL + "/images/icons/right-arrow.svg"}
              alt=""
            />
          </button>
        )}
      </div>
    </div>
  );
};

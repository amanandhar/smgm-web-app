import { useEffect, useState } from "react";
import "./CategorySlider.css";
import data from "../../data/product/CategoryData";
import { Category } from "../../models/Category.model";

export const CategorySlider = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number>(0);
  const [showLeftArrow, setShowLeftArrow] = useState<boolean>(true);
  const [showRightArrow, setShowRightArrow] = useState<boolean>(true);

  useEffect(() => {
    const newCategories: Category[] = data.categories.map((category) => {
      return {
        id: category.id,
        name: category.name,
      };
    });
    setCategories(newCategories);
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
          >
            All
          </div>
          {categories.map((category, index) => (
            <div
              key={index}
              className={
                "ctg " + (selectedCategory === category.id ? "active-ctg" : "")
              }
              onClick={() => handleCategoryClick(category.id || 0)}
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

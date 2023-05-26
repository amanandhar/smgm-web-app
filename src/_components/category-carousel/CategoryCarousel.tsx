export const CategoryCarousel = () => {
  return (
    <>
      <div className="categories-wrapper">
        <div className="d-flex">
          <button id="left-btn" className="border-0 d-none">
            <img
              src="https://vyaparwebsiteimages.vypcdn.in/catalogue/left-arrow.svg"
              alt=""
            />
          </button>
          <div className="categories" id="categories">
            <div className="active-ctg ctg">All</div>
            <div className="ctg">Spices</div>
            <div className="ctg">Beans</div>
            <div className="ctg">Tooth Paste</div>
            <div className="ctg">Biscuits</div>
            <div className="ctg">Rice</div>
            <div className="ctg">Tea/Coffee</div>
            <div className="ctg">Surf</div>
            <div className="ctg">Cold Drink/Juices</div>
            <div className="ctg">Milk/Sugar</div>
            <div className="ctg">Noodles</div>
            <div className="ctg">Oil</div>
            <div className="ctg">Flour</div>
            <div className="ctg">Lentils</div>
            <div className="ctg">Namkeen</div>
            <div className="ctg">Dish Wash Soap</div>
            <div className="ctg">Laundry Soap</div>
            <div className="ctg">Bath Soap</div>
            <div className="ctg">Sauce</div>
            <div className="ctg">Nutrition</div>
            <div className="ctg">Cereal</div>
            <div className="ctg">Kitchen Item</div>
            <div className="ctg">Tooth Brush</div>
            <div className="ctg">Toilet Cleaner</div>
            <div className="ctg">Marbal Creaner</div>
            <div className="ctg">Dry Fruits</div>
          </div>
          <button id="right-btn" className="border-0 d-none">
            <img
              src="https://vyaparwebsiteimages.vypcdn.in/catalogue/right-arrow.svg"
              alt=""
            />
          </button>
        </div>
      </div>
    </>
  );
};

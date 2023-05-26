export const NavigationBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container px-4 px-lg-5">
        <label className="navbar-brand">SMGM - Online Grocery Store</label>
        <div>
          <form className="d-flex">
            <button className="btn btn-outline-dark" type="submit">
              <i className="bi-cart-fill me-1"></i>
              Cart
              <span className="badge bg-dark text-white ms-1 rounded-pill">
                0
              </span>
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

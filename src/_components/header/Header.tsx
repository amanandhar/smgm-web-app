export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container px-4 px-lg-5">
        <label className="navbar-brand">
          SMGM - Online Grocery Store
          <img
            width="30"
            height="30"
            src={process.env.PUBLIC_URL + "/images/company/company-logo.jpg"}
            alt="SMGM"
            style={{ padding: "2px" }}
          />
        </label>
        <div>
          <label style={{ fontSize: "12px" }}>
            <img
              src={process.env.PUBLIC_URL + "/images/icons/mail.svg"}
              alt=""
              className=""
            />
            samyuktamanab.grocery@gmail.com, {"   "}
            <img
              src={process.env.PUBLIC_URL + "/images/icons/phone.svg"}
              alt=""
              className="mr-1 "
            />
            01-4351920, {"   "}
            <img
              src={process.env.PUBLIC_URL + "/images/icons/whatsapp.svg"}
              alt=""
              className="mr-1"
            />
            9841862943
          </label>
        </div>
      </div>
    </nav>
  );
};

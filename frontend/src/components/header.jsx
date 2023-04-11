export const Header = () => {
  return (
    <div className="Header">
      <div className="headerTop">
        <div>Servicefy</div>
        <div className="sign">
          <div>Sign Up</div>
          <div>Sign In</div>
        </div>
      </div>
      <div className="headerBottom">
        <div className="headerImg">
          <img
            style={{ width: "60px", height: "53px" }}
            src="https://scontent.fuln8-1.fna.fbcdn.net/v/t39.30808-6/340010607_560679526153438_7590188428266577079_n.jpg?stp=cp6_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=wX-pJTsogaMAX-GRfOu&_nc_ht=scontent.fuln8-1.fna&oh=00_AfDdU1zntlmbff3ehFzY4Dku989A2pg1cjUyv9ZZpLFdSw&oe=64365922"
            alt="logo"
          />
        </div>
        <div className="headerMain">
          <div>Home</div>
          <div>About</div>
          <div>Food</div>
          <div>Travel</div>
          <div>Repair</div>
          <div>Massage</div>
          <div>Relax</div>
        </div>
        <div className="headerInput">
          <input type="search" name="" id="" placeholder="Search" />
        </div>
      </div>
    </div>
  );
};

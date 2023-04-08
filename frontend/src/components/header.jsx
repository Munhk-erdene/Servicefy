import "bootstrap/dist/css/bootstrap.min.css";
export const Header = () => {
  return (
    <div className="Header">
      <div className="HeaderOne">
        <img
          style={{ height: "60px", width: "60px" }}
          src="https://scontent.fuln2-2.fna.fbcdn.net/v/t1.6435-9/164144912_227892525437339_881748644955352896_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=LSqyCE8Ni5MAX_rHeo2&_nc_ht=scontent.fuln2-2.fna&oh=00_AfDO4LlGEfr75GkmppKTLcS2BYkgwhtCMQSqlR6WT_JsAw&oe=645607FC "
          alt="Logo"
        />
        <div>search</div>
        <div className="headerSign">
          <div style={{ marginRight: "10px" }}>sign up</div>
          <div> sign in</div>
        </div>
      </div>
      <div className="HeaderTwo">
        <div>Home</div>
        <div>About</div>
        <div>Food</div>
        <div>Travel</div>
        <div>Repair</div>
        <div>Massage</div>
        <div>Relax</div>
      </div>
    </div>
  );
};

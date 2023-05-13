import { Link } from "react-router-dom";
import { data } from "./navbar/data";

function Navbar() {
  return (
    <>
      <div className="flex justify-center w-full mt-6 gap-8">
        {data &&
          data.map((el) => {
            return (
              <Link
                to={`/${el.text}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <div className="helper">
                  <div className="overflow-hidden w-fit h-fit bg-black">
                    <img className="image cursor-pointer transition-all duration-300" src={el.image} alt="" />
                  </div>
                  <div className="flex flex-col font-bold text-base cursor-pointer">{el.text}</div>
                </div>
              </Link>
            );
          })}
      </div>
    </>
  );
}

export default Navbar;

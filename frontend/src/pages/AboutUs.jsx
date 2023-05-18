import React from "react";
import "./AboutUs.css";
function AboutUs() {
  const data = [
    {
      img: "https://avatarfiles.alphacoders.com/276/276238.png",
      name: "Мөнх-Эрдэнэ",
      discord: "99179429",
    },
    {
      img: "https://e1.pxfuel.com/desktop-wallpaper/397/765/desktop-wallpaper-nakano-itsuki-gotoubun-nakano-itsuki-anime.jpg",
      name: "Барсболд",
      discord: "DioBrando #3262",
    },
    {
      img: "https://w0.peakpx.com/wallpaper/198/202/HD-wallpaper-miku-nakano-thumbnail.jpg",
      name: "Мөнх-Оргил",
      discord: "orgil #3034",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTodD3BTKFvA3udGTjkBpNmBycvQnNdoGJZqw&usqp=CAU",
      name: "Өсөх-Ирээдүй",
      discord: "usukh-ireedui #8810",
    },
  ];
  return (
    <div className="aboutContainer">
      <div className="AboutSite">
        <div className="zorilgo">
          <strong className="strong">Зорилго</strong>
          <div className="hello">
            Манай хамт олон Монголд болон гадаадад байрлах хамгийн сайн
            үйлчилгээтэй үйлчилгээний байгууллагыг танд санал болгохыг зорино.{" "}
          </div>
        </div>
        <div className="zorilt">
          <strong className="strong">Зорилт</strong>
          <div className="hello">
            Манай веб Монгол болон гадаад үйлчилгээний газруудын өрсөлдөх
            чадамжийг нэмэгдүүлэхэд бидний зорилт болно.
          </div>
        </div>
      </div>
      <div className="miniContainer">
        {data &&
          data.map((el) => {
            return (
              <div className="profile">
                <img className="img" src={el.img} alt="" />
                <div className="names">{el.name}</div>
                <div className="discord">{el.discord}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default AboutUs;

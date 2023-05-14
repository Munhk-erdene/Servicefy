import React from "react";
const style = {
  container: {
    display: "flex",
    width: "100vw",
    height: "35%",
  },
  mapImg: {
    width: "20%",
    height: "100%",
  },
};
function FooterImage() {
  const data = [
    {
      image:
        "https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Traveller%20Blog/01.jpg",
    },
    {
      image:
        "https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Traveller%20Blog/02.jpg",
    },
    {
      image:
        "https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Traveller%20Blog/03.jpg",
    },

    {
      image:
        "https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Traveller%20Blog/04.jpg",
    },
    {
      image:
        "https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Traveller%20Blog/05.jpg",
    },
  ];
  return (
    <div style={style.container}>
      {data &&
        data.map((el) => {
          return <img style={style.mapImg} src={el.image} alt={el.image} />;
        })}
    </div>
  );
}

export default FooterImage;

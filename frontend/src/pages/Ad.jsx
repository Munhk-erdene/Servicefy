import Footer from "../components/Footer";
import MainHeader from "../components/mainHeader";

const Ad = () => {
  const style = {
    main: {
      display: "Flex",
      flexDirection: "column",
      height: "100vh",
      width: "100vw",
      justifyContent: "space-between",
    },
  };
  return (
    <div style={style.main}>
      <MainHeader></MainHeader>
      <Footer></Footer>
    </div>
  );
};
export default Ad;

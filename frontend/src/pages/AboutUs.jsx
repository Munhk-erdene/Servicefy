import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from "../components/Footer";

const styles={
    containerMain:{
      paddingLeft: "15%",
      backgroundColor: "white",
      paddingRight: "15%",
      paddingTop:"2%",
      paddingBottom:"2%",
    },
    containerLogo: {
      backgroundColor:"white",
      },
    container: {
      border:"2px solid #4FD6F7",
       textAlign:"center",
      },
      container9: {
        backgroundColor: "#4FD6F7",
       textAlign:"center",
       border:"2px solid #4FD6F7",
      },
      container8: {
        backgroundColor: "#4FD6F7",
       textAlign:"center",
      },
      container1: {
        backgroundColor:"white",
         padding: "3%",
       },
       container2: {
        backgroundColor:"#0583D2",
         padding: "5%",
       },
       container3: {
        backgroundColor:"white",
        border:"2px solid white"
        },
      Imagecontainer: {
        display: "flex",
        justifyContent: "center",
        width: "100%",
      },
      image: {
        width: "140px",
        height: "100px",
       
      //marginLeft: "-40px",
      },
      p1:{
        fontStyle: "italic",
      },
      p2:{
        fontSize:"250%",
        marginTop:"-3%",
        fontStyle: "italic",
      },
      p3:{
        marginTop: "-3%",
        fontStyle: "italic",
      },
      logo:{
        width:"80px",
        height:"80px"
      },
      text:{
        fontSize:"150%",
        padding:"3%",
        fontStyle: "italic",
      },
      imagePadd:{
        padding:"0"
      },
      helper:{
        marginLeft:"10px",
      },
      text1:{
        paddingTop: "7%",
        fontStyle: "italic",
        textAlign: "center",
        paddingLeft: "33%",
        width: "250px",
      },
      text2:{
        padding:"7%",
        fontStyle: "italic",
      }
}

function AboutUs() {
  return (
    <>
      <Container style={styles.container1}>
        <Container style={styles.container2}>
          <Container style={styles.containerMain}>
            <Row style={styles.container8}>
              <Col style={styles.containerLogo}>
                <img style={styles.logo}
                  src="https://scontent.fuln8-1.fna.fbcdn.net/v/t39.30808-6/340010607_560679526153438_7590188428266577079_n.jpg?stp=cp6_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=wX-pJTsogaMAX-GRfOu&_nc_ht=scontent.fuln8-1.fna&oh=00_AfDdU1zntlmbff3ehFzY4Dku989A2pg1cjUyv9ZZpLFdSw&oe=64365922"
                  alt=""
                />
              </Col>
            </Row>

            <Row style={styles.container9}>
              <Col >
              <p style={styles.p1}>Travel Blog</p>
              <p style={styles.p2}>Going Places</p>
              <p style={styles.p3}>I haven’t been everywhere, but it’s on my list</p>
              </Col>
            </Row>

            <Row>
              <Col style={styles.container}>
                <div style={styles.text}>
                  Services
                </div>
                <div style={styles.text1}>
                  Quickly<br/>
                  Tell exactly where <br/>and what is the<br/> problem<br/>
                  Create a blog <br/>post <br/>subtitle that summarizes <br/> your post in a few short, punchy<br/> sentences and entices <br/>your audience to continue reading.
                </div>
              </Col>
              <Col style={styles.container}>
                <div style={styles.text}>
                 About Us
                </div>
                <div style={styles.text2}>
                Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.
                This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide.
                Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.
                </div>
              </Col>
            </Row>

            <Row style={styles.container3}> 
              <Col style={styles.imagePadd}> 
                  <div style={styles.helper}>
                      <img style={styles.image}
                          src="https://getquickspark.com.au/wp-content/uploads/2018/10/Types-of-Electrical-Repair.jpg"
                          alt=""
                      />
                  </div>
              </Col>
              <Col style={styles.imagePadd}>
              <div style={styles.helper}>
                  <img
                  style={styles.image}
                  src="https://static.wixstatic.com/media/5bfb6f_ea37f67cad544b348df9f3d0ff40f282.jpg/v1/fill/w_628,h_520,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5bfb6f_ea37f67cad544b348df9f3d0ff40f282.jpg"
                  alt=""
                  />
              </div>
              </Col>
              <Col style={styles.imagePadd}>
              <div style={styles.helper}>
                  <img
                  style={styles.image}
                  src="https://static.wixstatic.com/media/5bfb6f_c667d0c9bd634b1aa2b29311795f3c51.jpg/v1/fill/w_630,h_520,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5bfb6f_c667d0c9bd634b1aa2b29311795f3c51.jpg"
                  alt=""
                  />
              </div>
              </Col>
              <Col style={styles.imagePadd}>
              <div style={styles.helper}>
                  <img
                  style={styles.image}
                  src="https://static.wixstatic.com/media/5bfb6f_9f2519d5fc2d41f990a10dd92eb8658d.jpg/v1/fill/w_628,h_520,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5bfb6f_9f2519d5fc2d41f990a10dd92eb8658d.jpg"
                  alt=""
                  />
              </div>
              </Col>
              <Col style={styles.imagePadd}>
              <div style={styles.helper}>
                <img
                  style={styles.image}
                  src="https://images.everydayhealth.com/images/massage-therapy-guide-1440x810.jpg"
                  alt=""
                />
              </div>
              </Col>
            </Row>
          </Container>
      </Container>
    </Container>
    <Footer />
    </>
  );
}

export default AboutUs;

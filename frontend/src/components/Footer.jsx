const Footer = () => {
  const styles = {
    footerContainer: {
      width: "100%",
      backgroundColor: "#2573DA",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "100px 0",
      gap: "50px",
    },
    topFooter: {
      width: "80%",
      display: "flex",
      justifyContent: "space-between",
    },
    supportsContainer: {
      display: "flex",
      width: "50%",
      justifyContent: "space-between",
    },
    supports: {
      display: "flex",
      flexDirection: "column",
      gap: "20px",
    },
    footerTitle: {
      color: "#ffffff",
      fontWeight: "bolder",
      fontFamily: "Roboto Condensed",
      fontSize: "15px",
      cursor: "pointer",
    },
    footerNames: {
      color: "#ffffff96",
      fontFamily: "Roboto Condensed",
      fontSize: "15px",
      cursor: "pointer",
    },
    connections: {
      display: "flex",
      gap: "20px",
    },
    connectionIcons: {
      width: "fit-content",
      height: "fit-content",
      borderRadius: "50%",
      backgroundColor: "#ffffff96",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "5px",
      cursor: "pointer",
    },
    nikeBagAndFavIcon: {
      width: "24px",
      cursor: "pointer",
    },
    botFooter: {
      width: "80%",
      display: "flex",
      justifyContent: "space-between",
    },
    botSideOne: {
      display: "flex",
      alignItems: "center",
      gap: "30px",
    },
    botSideTwo: {
      display: "flex",
      gap: "30px",
    },
    locationContainer: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },
    connectionIconsLoc: {
      borderRadius: "50%",
      backgroundColor: "#ffffff",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "5px",
    },
  };
  return (
    <div style={styles.footerContainer}>
      <div style={styles.topFooter}>
        <div style={styles.supportsContainer}>
          <div style={styles.supports}>
            <span style={styles.footerTitle}>GIFT CARDS</span>
            <span style={styles.footerTitle}>PROMOTIONS</span>
            <span style={styles.footerTitle}>FIND A STORE</span>
            <span style={styles.footerTitle}>SIGN UP FOR EMAIL</span>
            <span style={styles.footerTitle}>BECOME A MEMBER </span>
            <span style={styles.footerTitle}>SERVICEFY JOURNAL</span>
            <span style={styles.footerTitle}>SEND US FEEDBACK</span>
          </div>
          <div style={styles.supports}>
            <span style={styles.footerTitle}>GET HELP</span>
            <span style={styles.footerNames}>Order Status</span>
            <span style={styles.footerNames}>Shipping and Delivery</span>
            <span style={styles.footerNames}>Returns</span>
            <span style={styles.footerNames}>Payment Options </span>
            <span style={styles.footerNames}>Gift Card Balance</span>
            <span style={styles.footerNames}>Contact Us</span>
          </div>
          <div style={styles.supports}>
            <span style={styles.footerTitle}>ABOUT US</span>
            <span style={styles.footerNames}>Members</span>
            <span style={styles.footerNames}>Careers</span>
            <span style={styles.footerNames}>Investors</span>
            <span style={styles.footerNames}>Purpose </span>
            <span style={styles.footerNames}>Sustainability</span>
          </div>
        </div>
        <div style={styles.connections}>
          <div style={styles.connectionIcons}>
            <img
              style={styles.nikeBagAndFavIcon}
              src="https://cdn-icons-png.flaticon.com/512/3128/3128212.png"
              alt=""
            />
          </div>
          <div style={styles.connectionIcons}>
            <img
              style={styles.nikeBagAndFavIcon}
              src="https://cdn-icons-png.flaticon.com/512/20/20837.png"
              alt=""
            />
          </div>
          <div style={styles.connectionIcons}>
            <img
              style={styles.nikeBagAndFavIcon}
              src="https://cdn-icons-png.flaticon.com/512/1384/1384028.png"
              alt=""
            />
          </div>
          <div style={styles.connectionIcons}>
            <img
              style={styles.nikeBagAndFavIcon}
              src="https://cdn-icons-png.flaticon.com/512/1384/1384031.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div style={styles.botFooter}>
        <div style={styles.botSideOne}>
          <div style={styles.locationContainer}>
            <div className="connectionIconsLoc">
              <img
                style={styles.nikeBagAndFavIcon}
                src="https://cdn-icons-png.flaticon.com/512/2838/2838912.png"
                alt=""
              />
            </div>
            <span style={styles.footerTitle}>Ulaanbaatar</span>
          </div>
          <span style={styles.footerNames}>
            © 2023 Servicefy, Inc. All Rights Reserved
          </span>
        </div>
        <div style={styles.botSideTwo}>
          <span style={styles.footerNames}>Guides</span>
          <span style={styles.footerNames}>Terms of Sale</span>
          <span style={styles.footerNames}>Terms of Use</span>
          <span style={styles.footerNames}>Servicefy Privacy Policy</span>
          <span style={styles.footerNames}>CA Supply Chains Act</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;

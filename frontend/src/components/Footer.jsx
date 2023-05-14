const styles = {
  footerContainer: {
    width: "100%",
    backgroundColor: "#202020",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "50px 0",
    gap: "50px",
    marginTop: "30px",
  },
  footerTitle: {
    color: "#ffffff",
    fontWeight: "bolder",
    fontSize: "15px",
    cursor: "pointer",
  },
  footerNames: {
    color: "#ffffff96",
    fontSize: "15px",
    cursor: "pointer",
  },
  locationIcon: {
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
};
const Footer = () => {
  return (
    <div style={styles.footerContainer}>
      <div style={styles.botFooter}>
        <div style={styles.botSideOne}>
          <div style={styles.locationContainer}>
            <img
              style={styles.locationIcon}
              src="https://cdn-icons-png.flaticon.com/512/2838/2838912.png"
              alt=""
            />
            <span style={styles.footerTitle}>Ulaanbaatar</span>
          </div>
          <span style={styles.footerNames}>
            Â© 2023 Servicefy, Inc. All Rights Reserved
          </span>
        </div>
        <div style={styles.botSideTwo}>
          <span style={styles.footerNames}>Contact Us</span>
          <span style={styles.footerNames}>About Us</span>
          <span style={styles.footerNames}>Careers</span>
          <span style={styles.footerNames}>Sign Up For Email</span>
          <span style={styles.footerNames}>Get Help</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import Footer from "../components/Footer";
import "../App.css";
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundSize: "cover",
  },
  post: {
    display: "flex",
    width: "60%",
    flexDirection: "column",
    border: "1px solid",
    padding: "40px",
    backgroundColor: "white",
  },
  postTop: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    flexDirection: "row",
  },
  postTopLeft: {
    display: "flex",
    gap: "10px",
  },
  titleAndDesc: {
    display: "flex",
    flexDirection: "column",
  },
  icons: {
    display: "flex",
    flexDirection: "row",
    borderTop: "1px solid black",
    borderBottom: "1px solid black",
    padding: "8px",
    justifyContent: "space-around",
  },
  nikeBagAndFavIcon: {
    width: "24px",
    cursor: "pointer",
    marginTop: "10px",
  },
  iconsBottom: {
    display: "flex",
    justifyContent: "space-between",
  },
  recentPosts: {
    width: "40%",
    marginTop: "10px",
    backgroundColor: "white",
  },
  ugnuud: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  recentPictures: {
    display: "flex",
    flexDirection: "row",
    gap: "50px",
  },
  recentPicture: {
    border: "1px solid",
    borderColor: "rgba(242, 242, 242, 0.75)",
  },
  recentReactionAndComment: {
    display: "flex",
    justifyContent: "space-between",
    borderTop: "1px solid black",
  },
  comments: {
    display: "flex",
    width: "60%",
    justifyContent: "center",
    flexDirection: "column",
    border: "1px solid",
    borderColor: "rgba(242, 242, 242, 0.75)",
  },
  postTitle: {
    fontSize: "50px",
  },
  texts: {
    fontSize: "18px",
    fontFamily: "Raleway",
    marginBottom: "10px",
  },
  postTopRight: {
    cursor: "pointer",
  },
  miniContainer: {
    display: "flex",
    width: "65vw",
    flexDirection: "column",
    backgroundColor: "white",
  },
};

function PostPage() {
  return (
    <>
      <div className="container" style={styles.container}>
        <div style={styles.post}>
          <div style={styles.postTop}>
            <div style={styles.postTopLeft}>
              <img
                style={{ width: "25px", height: "25px" }}
                src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
                alt=""
              />
              <span>Admin</span>
              <span>.</span>
              <span>Mar 25</span>
              <span>.</span>
              <span>1 min read</span>
            </div>
            <div style={styles.postTopRight}>...</div>
          </div>
          <div style={styles.titleAndDesc}>
            <div style={styles.postTitle}>The Mexico Diary, Day 1: Oaxaca</div>
            <strong style={styles.postDesc}>
              Create a blog post subtitle that summarizes your post in a few
              short, punchy sentences and entices your audience to continue
              reading.
            </strong>
          </div>
          <img
            src="https://static.wixstatic.com/media/f969ea5e4ea64a66af55f3cb06895101.jpg/v1/fill/w_1880,h_822,fp_0.50_0.50,q_90,enc_auto/f969ea5e4ea64a66af55f3cb06895101.jpg"
            alt=""
          />
          <span style={styles.texts}>
            Welcome to your blog post. Use this space to connect with your
            readers and potential customers in a way that’s current and
            interesting. Think of it as an ongoing conversation where you can
            share updates about business, trends, news, and more.
          </span>
          <span style={styles.texts}>
            You’ll be posting loads of engaging content, so be sure to keep your
            blog organized with Categories that also allow visitors to explore
            more of what interests them.
          </span>
          <span style={styles.texts}>Create Relevant Content</span>
          <span style={styles.texts}>
            Writing a blog is a great way to position yourself as an authority
            in your field and captivate your readers’ attention. Do you want to
            improve your site’s SEO ranking? Consider topics that focus on
            relevant keywords and relate back to your website or business. You
            can also add hashtags (#vacation #dream #summer) throughout your
            posts to reach more people, and help visitors search for relevant
            content. Blogging gives your site a voice, so let your business’
            personality shine through. Choose a great image to feature in your
            post or add a video for extra engagement. Are you ready to get
            started? Simply create a new post now.
          </span>
          <div style={styles.icons}>
            <img
              style={styles.nikeBagAndFavIcon}
              src="https://cdn-icons-png.flaticon.com/512/3128/3128212.png"
              alt=""
            />
            <img
              style={styles.nikeBagAndFavIcon}
              src="https://cdn-icons-png.flaticon.com/512/20/20837.png"
              alt=""
            />
            <img
              style={styles.nikeBagAndFavIcon}
              src="https://cdn-icons-png.flaticon.com/512/1384/1384028.png"
              alt=""
            />
            <img
              style={styles.nikeBagAndFavIcon}
              src="https://cdn-icons-png.flaticon.com/512/1384/1384031.png"
              alt=""
            />
            <span style={{ marginTop: "8px", cursor: "pointer" }}>Travel</span>
          </div>
          <div style={styles.iconsBottom}>
            <span>87 views</span>
            <span>5 like</span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PostPage;

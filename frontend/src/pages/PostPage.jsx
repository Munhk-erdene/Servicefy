import React from "react";
import Footer from "../components/Footer";

function PostPage() {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    post: {
      display: "flex",
      width: "60%",
      flexDirection: "column",
      border: "1px solid",
      borderColor: "rgba(242, 242, 242, 0.75)",
      padding: "40px"
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
    bordertoiUg: {
      display: "flex",
      borderLeft: "1px solid blue",
      paddingLeft: "20px",
      fontFamily: "eb garamond, serif",
      fontSize: "25px",
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
      marginTop: "10px"
    },
    iconsBottom: {
      display: "flex",
      justifyContent: "space-between",
    },
    recentPosts: {
      width: "60%",
      marginTop: "10px"
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
      flexDirection: "column",
      margin: "40px",
      width: "60%",
      border: "1px solid",
      borderColor: "rgba(242, 242, 242, 0.75)",
    },
    postTitle: {
      fontFamily: "eb garamond, serif",
      fontSize: "40px",
    },
    texts: {
      fontSize: "18px",
      fontFamily: "Raleway",
      marginBottom: "10px"
    },
  };
  return (
    <>
      <div style={styles.container}>
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
            <span style={styles.postTitle}>
              The Mexico Diary, Day 1: Oaxaca
            </span>
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
          <div style={styles.bordertoiUg}>
            “Do you have a design in mind for your blog? Whether you prefer a
            trendy postcard look or you’re going for a more editorial style blog
            - there’s a stunning layout for everyone.”
          </div>
          <span style={styles.texts}>
            You’ll be posting loads of engaging content, so be sure to keep your
            blog organized with Categories that also allow visitors to explore
            more of what interests them.
          </span>
          <span style={styles.texts}>
            Create Relevant Content
          </span>
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
            <span style={{marginTop: "8px", cursor: "pointer"}}>Travel</span>
          </div>
          <div style={styles.iconsBottom}>
            <span>87 views</span>
            <span>5 like</span>
          </div>
        </div>
        <div style={styles.recentPosts}>
          <div style={styles.ugnuud}>
            <span>Recent Posts</span>
            <span>See All</span>
          </div>
          <div style={styles.recentPictures}>
            <div style={styles.recentPicture}>
              <img
                src="https://static.wixstatic.com/media/ae5901bd4fda41009c4cc4a19bb70d05.jpg/v1/fill/w_403,h_227,al_c,lg_1,q_80,enc_auto/ae5901bd4fda41009c4cc4a19bb70d05.jpg"
                alt=""
              />
              <span>The Girl from Ipanema</span>
              <div style={styles.recentReactionAndComment}>
                <span>172 views</span>
                <span>5 like</span>
              </div>
            </div>
            <div style={styles.recentPicture}>
              <img
                src="https://static.wixstatic.com/media/e3190f8f39f5445c8e5d4153ab1414aa.jpg/v1/fill/w_403,h_227,al_c,lg_1,q_80,enc_auto/e3190f8f39f5445c8e5d4153ab1414aa.jpg"
                alt=""
              />
              <span>Mykonos with Mr. & Mrs. Smith </span>
              <div style={styles.recentReactionAndComment}>
                <span>172 views</span>
                <span>5 like</span>
              </div>
            </div>
          </div>
        </div>
        <div style={styles.comments}>
          <span style={{ borderBottom: "1px solid rgba(242, 242, 242, 0.75)" }}>
            Comments
          </span>
          <input type="text" placeholder="Write a comment" style={{padding: "10px", height: "50px", width: "100%"}} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PostPage;

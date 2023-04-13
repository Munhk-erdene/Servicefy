import Post from "../model/Post.js"
export const getAllPost = async (req, res) => {
  try {
    const data = await Post.find({});;
    res.status(200).send({
      success: true,
      data: data,
    });
  } catch (error) {
    res.status(400).send({
      success: true,
      data: error.message,
    });
  }
};
export const comment = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await Post.findByIdAndUpdate(
      { _id: id },
      {
        $push: {
          post: req.body,
        },
      }
    );
    res.status(200).send({
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};
export const getPost = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await Post.findById({ _id: id });
    res.status(200).send({
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};
export const createPost = async (req, res) => {
  const { name,text, price, img, locate, rate,date,title,user_id,token } = req.body;
  try {
    const post = await Post.create({
      name: name,
      token:token,
      user_id:user_id,
      rate:rate,
      price: price,
      img: img,
      locate:locate,
      title:title,
      date:date,
      text:text
    });

    res.status(200).send({
      success: true,
      data: post,
    });
  } catch (error) {
    console.log(error)
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};

export const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Post.findByIdAndRemove({ _id: id });
    res.status(200).send({
      success: true,
      data: data,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};
export const uptadePost = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Post.findByIdAndUpdate({ _id: id }, req.body);
    res.status(200).send({
      success: true,
      data: data,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};
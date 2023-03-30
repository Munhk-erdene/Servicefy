import Service from "../model/Service.js"
export const getAllService = async (req, res) => {
  try {
    const data = await Service.find({});
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
export const getService = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await Service.findById({ _id: id });
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
export const createService = async (req, res) => {
  const { name, type, price, img, locate, rate } = req.body;
  try {
    const data = await Service.create({
      name: name,
      type: type,
      rate:rate,
      price: price,
      img: img,
      locate:locate,
      
    });

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
export const deleteService = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Service.findByIdAndRemove({ _id: id });
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
export const uptadeService = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Service.findByIdAndUpdate({ _id: id }, req.body);
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
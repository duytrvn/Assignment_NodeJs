import axios from "axios";
const API_URI = "http://localhost:3001/users/";

// const userVali = joi.object({
//   name: joi.string().required(),
//   email: joi.string().required(),
// });

import dotenv from "dotenv"
dotenv.config()

const getAll = async (req, res) => {
  try {
    const { data: users } = await axios.get(`${API_URI}`);
    if (users.length === 0) {
      return res.send({
        messenger: "Danh sách người dùng trống",
      });
    }
    return res.json({
      message: "Lấy danh sách người dùng thành công", users,
  });
  } catch (err) {
    res.status(500).json({ messenger: err });
  }
};

const getDetail = async (req, res) => {
  try {
    const { data: user } = await axios.get(`${API_URI}${req.params.id}`);
    if (!user) {
      res.send({ messenger: "Không tìm thấy người dùng"});
    }
    return res.json({
      message: "Lấy người dùng thành công", user
  });
  } catch (err) {
    res.status(500).json({ 
      messenger: "ko tìm thấy người dùng này"
    });
  }
};

const create = async (req, res) => {
  try {
    // check validate
    // const { error } = userVali.validate(req.body);
    //     if (error) {
    //         return res.status(400).json({
    //             message: error.details[0].message,
    //         });
    //     }
    const { data: user } = await axios.post(`${API_URI}`, req.body);
    if (!user) {
      return res.json({messenger: "Thêm người dùng không thành công",});
    }
    return res.json({
      message: "Thêm người dùng thành công",user,
  });
  } catch (err) {
    res.status(500).json({ messenger: err });
  }
};

const remove = async (req, res) => {
  try {
    await axios.delete(`${API_URI}${req.params.id}`);
    return res.json({
      message: "Xóa sản phẩm thành công",
  });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

const update = async (req, res) => {
  try {
    const { data: user } = await axios.put(`${API_URI}${req.params.id}`, req.body );
    
    if (!user) {
      return res.json({messenger: "Update người dùng không thành công"});
    }
    // return res.status(200).json(user);
    return res.json({
      message: "Cập nhật người dùng thành công",user
    });
  } catch (err) {
    return res.status(400).json({
      message: err,
  });
  }
};

const update1 = async (req, res) => {
  try {
    const { data: user } = await axios.patch(`${API_URI}${req.params.id}`, req.body );
    
    if (!user) {
      return res.json({messenger: "Update người dùng không thành công"});
    }
    // return res.status(200).json(user);
    return res.json({
      message: "Cập nhật người dùng thành công",user
    });
  } catch (err) {
    return res.status(400).json({
      message: err,
  });
  }
};

export {getAll,getDetail,update,update1,create,remove}
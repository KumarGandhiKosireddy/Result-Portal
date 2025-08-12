const um = require("../model/usmodel")
let multer = require("multer")
let addstd = async (req, res) => {
     try {
          let rn = Math.floor(Math.random() * 99999 + 10000)
          let data = new um({ ...req.body, "_id": rn, "photo": req.file.filename })
          await data.save()
          res.json({ "msg": "Registration Done" })
     }
     catch (err) {
          console.log(err);
          res.json({ "err": "Please Provide Details" })
     }
}
const storage = multer.diskStorage({
     destination: function (req, file, cb) {
          cb(null, './photos')
     },
     filename: function (req, file, cb) {
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
          cb(null, file.fieldname + '-' + uniqueSuffix + "." + file.mimetype.split("/")[1])
     }
})

const upload = multer({ storage: storage })

let updmarks = async (req, res) => {
     try {
          await um.findByIdAndUpdate({ "_id": req.body._id }, req.body)
          res.json({ "msg": "marks updated" })
     }
     catch (err) {
          console.log(err)
          res.json({ "err": "err" })
     }
}
let getres = async (req, res) => {
     try {
          let data = await um.findById(req.params.hno)
          res.json(data)
     }
     catch (err) {
          res.json({ err: "error in fetching result" })
     }
}
let gethal = async (req, res) => {
     try {
          let data = await um.find({ [req.params.opt]: req.params.val })
          res.json(data)
     }
     catch (err) {
          res.json({ err: "error in getting details" })
     }
}
let getstd = async (req, res) => {
     try {
          let data = await um.find()
          res.json(data)
     }
     catch (err) {
          res.json({ "err": "error in fetching data" })
     }
}
let del = async (req, res) => {
     try {
          await um.findByIdAndDelete(req.params.hno)
          res.json({ "msg": "del done" })
     }
     catch (err) {
          res.json({ "err": "error del" })
     }
}
module.exports = { addstd, upload, updmarks, getres, gethal, getstd, del }
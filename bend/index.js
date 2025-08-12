let express =require("express")
let mongoose=require("mongoose");
let cors=require("cors")
const rt = require("./routes/rt");
let bodyParser=require("body-parser")
mongoose.connect("mongodb://127.0.0.1:27017/resultportal").then(()=>{
     console.log("ok");
})
let app=express()
app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({"extended":true}))
app.use("/pic",express.static("./photos"))
app.use("/",rt)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

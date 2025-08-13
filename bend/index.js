let express =require("express")
let mongoose=require("mongoose");
let cors=require("cors")
const rt = require("./routes/rt");
let bodyParser=require("body-parser")
mongoose.connect("mongodb+srv://kumargandhi2k1:Kumar123@cluster0.pzqxbyy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0") .then(()=>{
    console.log("ok") 
})
let app=express()
app.use(express.json()) 
app.use(cors({
    origin: "https://results-portal.netlify.app", // your frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));
app.use(bodyParser.urlencoded({"extended":true}))
app.use("/pic",express.static("./photos"))
app.use("/",rt)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

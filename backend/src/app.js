
const express = require("express")
const cors = require("cors")
const app = express();
const db = require("./config/db")

app.use(cors());
app.use(express.json());

app.get("/vehicles", async (req, res) => {
    try {
        const [vehicles] = await db.query("SELECT * FROM vehicles");
        res.status(200).json({ status: "success", data: vehicles });
    } catch (e){
        res.status(500).json({status: "error", msg: e.msg});
    }
})

// app.use("/api/search", searchRoutes);
app.listen(4000, () => console.log("Server running on http://localhost:4000"));

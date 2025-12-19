
const express = require("express")
const cors = require("cors")
const app = express();

app.use(cors());
app.use(express.json());

app.get("/vehicles", (req, res) => {
    res.status(200).send({"status": "success", "msg": "user found"});
})

// app.use("/api/search", searchRoutes);
app.listen(4000, () => console.log("Server running on http://localhost:4000"));

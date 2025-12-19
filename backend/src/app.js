
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

app.post("/vehicles/available", async (res, req) => {
    try {
        const { startDate, endDate } = req.body;

        // Both start and end dates are required
        if(!startDate || !endDate){
            return res.status(400).json({
                status: "error",
                msg: "start date and end date are required"
            })
        }

        // Verify whether the start date is before end date
        if(new Date(startDate) > new Date(endDate)){
            return res.status(400).json({
                status: "error",
                msg: "start date cannot be after end date"
            })
        }

        // check constraints given
//         New trip is strictly inside an existing trip.
//         New trip overlaps the start or end of an existing trip.
//         New trip encompasses (surrounds) an existing trip.
        const query = `
                select v.* from vehicles v where v.status = 'Active'
                and v.vehicle_id not in (
                    select distinct t.vehicle_id from trips t
                    where (
                        (? <= t.end_date and ? >= t.start_date) or
                        (? <= t.end_date and ? >= t.start_date) or
                        (? <= t.start_date and ? >= t.end_date)
                        ))
                order by v.type, v.vehicle_id`;

        const [availableVehicles] = await db.query(query, startDate, startDate,
                                                        endDate, endDate,
                                                        startDate, endDate                                 
        )
    } catch (e) {
        res.send();
    }
})

// app.use("/api/search", searchRoutes);
app.listen(4000, () => console.log("Server running on http://localhost:4000"));

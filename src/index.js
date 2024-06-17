const express = require("express")
const serverConfig = require('./config/serverConfig')
const { connect } = require("mongoose")
const connectDB = require('./config/dbConfig')

const app = express()

app.listen(serverConfig.PORT, async () => {
    // console.log(process.env.PORT)
    await connectDB();
    console.log(`Server started at port ${serverConfig.PORT}`);
})


// localhost:3000 (socket address)

// ambedreb21
// enxm4Kb0p1sZmSqI
// mongodb+srv://ambedreb21:enxm4Kb0p1sZmSqI@cluster0.19jjzxo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
require('dotenv').config();
const express = require('express');
const {  connectToDB } = require('./config/db');
const wallpaperRoutes = require('./routes/wallpaperRoutes');
const app = express();
app.use(express.json());

connectToDB()
app.get("/",(req,res)=>{
    res.json({
        data:"Welcome to the Sanatan Backend !"
    })
})
app.use('/api', wallpaperRoutes);
// const PORT = process.env.PORT || 7000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
module.exports = app;
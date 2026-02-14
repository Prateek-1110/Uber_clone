const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const path = require('path');   // 👈 ADD THIS

const app = express();

const userRoutes = require('./routes/user.route');
const captainRoutes = require('./routes/captain.route');
const mapsRoutes = require('./routes/maps.routes');
const rideRoutes = require('./routes/ride.routes');

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://uber-clone-zeta-neon.vercel.app/"
  ],
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
    res.send("hello world");
});

app.use('/users', userRoutes);
app.use('/captains', captainRoutes);
app.use('/maps', mapsRoutes);
app.use('/rides', rideRoutes);


// ✅ ADD THIS FOR PRODUCTION
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../Frontend/dist")));

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../Frontend/dist/index.html"));
    });
}

module.exports = app;

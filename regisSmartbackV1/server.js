const express = require('express');
const cors = require('cors');
const users = require('./controllers/users');
const path = require('path');
const compression = require('compression');





const app = express();
app.use(compression()); // Enable gzip compression



app.use(cors({
    origin: ["https://regismart.site/", "https://www.regismart.site/"],
    methods: ["POST", "GET", "DELETE", "PUT"],
    credentials: true
    }));


// app.use(cors({
//     origin : ["http://localhost:3000"],
//     methods: ["POST", "GET","DELETE","PUT"],
//     credentials: true
// }));


    // Serve static files from the "public" folder of the React app
    app.use(express.static(path.join(__dirname, '../public_html')));
    
    
    app.use("/uploads",express.static("./uploads"));

    
app.use('/', users);



// const port = process.env.PORT || 5008;

// console.log(process.env.PORT);


const port = 5008 || 5008;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
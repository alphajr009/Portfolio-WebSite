const express = require("express");


const app = express();



const port = process.env.PORT || 5000;


if (process.env.NODE_ENV === "production") {
    // Set the static folder
    app.use(express.static("client/dist"));

    // Serve the index.html file for all non-API routes
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
    });
}

app.listen(port, () => console.log('Node Server Started using Nodemon!'));
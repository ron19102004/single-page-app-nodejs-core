import express from "express"
import path from "path"
import * as dotenv from "dotenv"
dotenv.config()
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use("/src/views", express.static("./src/views"))

app.get("/*", (_, res) => {
    res.sendFile(path.resolve("./index.html"));
});

app.listen(process.env.PORT || 3080, "0.0.0.0", () => {
    console.log(`URL: http://localhost:${process.env.PORT || 3080}`);
});

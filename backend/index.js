import express from "express";
import config from "./src/utils/config.js"
import cors from "cors"

const app = express();
app.use(cors());
app.use(express.json({ limit: "5mb" }));

app.listen(config.PORT, () => console.log(`Server listening ${config.PORT}`));
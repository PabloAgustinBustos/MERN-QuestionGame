"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const db_1 = __importDefault(require("./db"));
const users_1 = __importDefault(require("./routes/users"));
dotenv_1.default.config({
    path: `${__dirname}/../.env`
});
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get("/ping", (req, res) => {
    console.log("buenassss");
    res.send("xdxdxd");
});
app.use("/users", users_1.default);
try {
    (0, db_1.default)();
    let PORT = process.env.PORT || 3001;
    app.listen(PORT, () => console.log("Servidor lanzado en puerto ", PORT));
}
catch (e) {
    console.log("error al conectar", e);
}

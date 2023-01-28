"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
function connectMongo() {
    return __awaiter(this, void 0, void 0, function* () {
        let db_user = process.env.DB_USER;
        let db_pass = process.env.DB_PASS;
        let db_name = process.env.DB_NAME;
        let uri = `mongodb+srv://${db_user}:${db_pass}@nodeexpressprojects.xrz8qbb.mongodb.net/${db_name}?retryWrites=true&w=majority`;
        yield (0, mongoose_1.connect)(uri);
    });
}
exports.default = connectMongo;

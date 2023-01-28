"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const uuid_1 = require("uuid");
const User = new mongoose_1.Schema({
    _id: {
        type: mongoose_1.SchemaTypes.UUID,
        default: () => {
            let id = (0, uuid_1.v4)();
            console.log("se crea usuario con id", id);
            return id;
        }
    },
    username: {
        type: String,
        required: true
    },
    photo: String,
    email: {
        type: String,
        required: true,
        validate: {
            validator: (v) => v.split("").includes("@"),
            message: "Ingresaste un email inválido"
        }
    },
    password: {
        type: String,
        required: true,
    },
    score: {
        type: Number,
        default: 0
    }
});
exports.default = (0, mongoose_1.model)("User", User);

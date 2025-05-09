import mongoose from "mongoose";

const autorSchema = new mongoose.Schema({
    id:{type: mongoose.Schema.Types.ObjectId},
    nome: {type: String, require: true},
    nacionalidade: {type: String}   
}, {versionKey: false});

const autor = mongoose.models.autores || mongoose.model('autores', autorSchema);

export { autor, autorSchema };
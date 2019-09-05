import * as mongoose from 'mongoose';

interface IKudos {
    id: string;
    fuente: string;
    destino: string;
    tema: string;
    fecha: string;
    lugar: string;
    texto: string;
}

const KudosSchema = new mongoose.Schema({
    id: String,
    fuente: String,
    destino: String,
    tema: String,
    fecha: String,
    lugar: String,
    texto: String,
});

const KudosModel = mongoose.model('Kudos', KudosSchema);

export { KudosModel, IKudos }
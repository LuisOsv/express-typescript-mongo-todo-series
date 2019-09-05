import { KudosModel, IKudos } from '../models/kudos';
import { Controller, Route, Get, Post, BodyProp, Put, Delete } from 'tsoa';

@Route('/kudos')
export class KudosController extends Controller {
	@Get()
	public async getAll(): Promise<IKudos[]> {
		try {
			let items: any = await KudosModel.find({});
			items = items.map((item) => { return {
                                            id: item._id, 
                                            fuente: item.fuente, 
                                            destino: item.destino, 
                                            tema: item.tema}});
			return items;
		} catch (err) {
			this.setStatus(500);
			console.error('Caught error', err);
		}
	}

	@Post()
    public async create(@BodyProp() 
                                    id: string,
                                    fuente: string,
                                    destino: string,
                                    tema: string,
                                    fecha: string,
                                    lugar: string,
                                    texto: string) : Promise<void> {
		const item = new KudosModel({
                                    id: id,
                                    fuente: fuente,
                                    destino: destino,
                                    tema: tema,
                                    fecha: fecha,
                                    lugar: lugar,
                                    texto: texto
                                });
		await item.save();
	}

	/*@Put('/{id}')
	public async update(id: string, @BodyProp() description: string) : Promise<void> {
		await TodoModel.findOneAndUpdate({_id: id}, {description: description});
	}*/

	@Delete('/{id}')
	public async remove(id: string) : Promise<void> {
		await KudosModel.findByIdAndRemove(id);
	}
}


export class Producto{

  constructor(private _id:string, private _nombre:string, private _precio:number, private _ingredientes:Array<string>,private _idCategoria:string) {
  }

  get id(): string {
    return this._id;
  }

  get nombre(): string {
    return this._nombre;
  }

  get precio(): number {
    return this._precio;
  }

  get ingredientes(): Array<string> {
    return this._ingredientes;
  }


  get idCategoria():string {
    return this._idCategoria;
  }

}

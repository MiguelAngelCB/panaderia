export class Categoria{

  constructor(private _id: string,private _nombre: string,private _icono:string) {
  }

  get id(): string {
    return this._id;
  }

  get nombre(): string {
    return this._nombre;
  }

  get icono(): string {
    return this._icono;
  }
}

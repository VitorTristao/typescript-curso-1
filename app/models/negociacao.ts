export class Negociacao{
    // #data;
    // #quantidade;
    // #valor;
    
    constructor(    
        private _data: Date,
        private _quantidade: number,
        private _valor: number)
        {
        // this.#data = data;
        // this.#quantidade = quantidade;
        // this.#valor = valor;

        // this._data = data;
        // this._quantidade = quantidade;
        // this._valor = valor;
        }

    get data(): Date {
        const data = new Date(this._data.getTime());
        return data;
    }

    get quantidade(): number {
        return this._quantidade;
    }

    get valor(): number {
        return this._valor;
    }

    get volume(): number {
        return this._quantidade * this._valor;
    }
}
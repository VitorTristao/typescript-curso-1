export class Negociacao {
    // #data;
    // #quantidade;
    // #valor;
    constructor(_data, _quantidade, _valor) {
        // this.#data = data;
        // this.#quantidade = quantidade;
        // this.#valor = valor;
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
        // this._data = data;
        // this._quantidade = quantidade;
        // this._valor = valor;
    }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }
    get volume() {
        return this._quantidade * this._valor;
    }
}

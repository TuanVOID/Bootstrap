export class Picture {
    private _name: string;
    private _preview: string;
    private _price : number;

    constructor(name: string,
                preview: string,
                price: number)
    {
        this._name = name;
        this._preview = preview;
        this._price = price;
    }

    getName(): string {
        return this._name;
    }

    setName(name: string): void{
        this._name = name;
    }

    getPreview(): string {
        return this._preview;
    }

    getPrice() : number{
        return  this._price
    }

    setPrice(price:number) :void{
        this._price = price;
    }
}

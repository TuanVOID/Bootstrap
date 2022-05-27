export class User {
    private _name: string;
    private readonly _email: string;

    constructor(name: string,
                email: string) {
        this._name = name;
        this._email = email;
    }

    getName(): string {
        return this._name;
    }

    setName(name: string): void{
        this._name = name;
    }

    getEmail(): string {
        return this._email;
    }
}

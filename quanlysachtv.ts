export class Book {
     _ID: string;
     _Name: string;

    constructor(ID: string, Name: string) {
        this._ID = ID;
        this._Name = Name;
    }

    getID(): string {
        return this._ID;
    }
    getName(): string {
        return this._Name;
    }
    setName(Name: string) {
        this._Name = Name;
    }

}
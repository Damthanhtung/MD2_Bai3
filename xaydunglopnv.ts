class Staff {
    private _name: string;
    private _email: string;
    private _age: number;

    constructor(name: string, email: string, age: number) {
        this._name = name;
        this._email = email;
        this._age = age;
    }

    getName(): string {
        return this._name;
    }

    getEmail(): string {
        return this._email;
    }

    getAge(): number {
        return this._age;
    }

    setName(value: string) {
        this._name = value;
    }

    setEmail(value: string) {
        this._email = value;
    }

    setAge(value: number) {
        this._age = value;
    }
}
let staff = new Staff('Staff 1','staff@gamil.com', 20);
let namStaff = staff.getName();
console.log(namStaff);
staff.setName('Staff 2');
let currentNameStaff = staff.getName();
console.log(currentNameStaff);
let emailStaff = staff.getEmail();
console.log(emailStaff);
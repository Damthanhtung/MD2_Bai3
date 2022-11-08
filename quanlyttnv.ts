enum Gender {
    Male,
    Female,
    Other
}
class Staff {
    fullName: string = "";
    gender: Gender = Gender.Other;
    birthday?: Date;
    email: string = "";
    phoneNumber: string = "";

    constructor(fullName: string, gender: Gender, birthday: Date, email: string, phoneNumber: string) {
        this.fullName = fullName;
        this.gender = gender;
        this.birthday = birthday;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }
}
let StaffList: Staff[] = [];
StaffList.push(new Staff("Dam Thanh Tung",Gender.Male, new Date("1998-07-08"),"damthanhtung998@gmail.com","0982560747"));
StaffList.push(new Staff("Nguyen Thi Thu Ha", Gender.Female, new Date("1999-10-04"),"thuha41099@gmail.com", "0888607980"));
function showStaff (staff: Staff) {
    console.log(staff);
}
StaffList.forEach(showStaff);
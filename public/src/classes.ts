class User {
  // tslint:disable-next-line: variable-name
  protected _id:string;
  // tslint:disable-next-line: variable-name
  protected _name1: string;
  // tslint:disable-next-line: variable-name
  protected _name2: string;
  // tslint:disable-next-line: variable-name
  protected _surname1: string;
  // tslint:disable-next-line: variable-name
  protected _surname2: string;
  // tslint:disable-next-line: variable-name
  protected _email: string;
  // tslint:disable-next-line: variable-name
  protected _phone: string;
  // tslint:disable-next-line: variable-name
  protected _birthDate: Date;
  // tslint:disable-next-line: variable-name
  protected _role: string;
  // tslint:disable-next-line: variable-name
  protected _state: number;

  constructor(pUserData:any) {
    this.id = pUserData._id;
    this.firstName = pUserData._name1;
    this.secondName = pUserData._name2;
    this.firstSurname = pUserData._surname1;
    this.secondSurname = pUserData._surname2;
    this.email = pUserData._email;
    this.phone = pUserData._phone;
    this.birthDate = pUserData._birthDate;
    this.userRole = pUserData._role;
    this.userState = pUserData._state;
  }

  // Getters and Setters

  get id():string {
    return this._id;
  }

  set id(pNewId:string) {
    this._id = pNewId;
  }

  get firstName(): string {
    return this._name1;
  }

  set firstName(pNewFirstName: string) {
    this._name1 = pNewFirstName;
  }

  get secondName(): string {
    return this._name2;
  }

  set secondName(pNewSecondName: string) {
    this._name2 = pNewSecondName;
  }

  get firstSurname(): string {
    return this._surname1;
  }

  set firstSurname(pNewFirstSurname: string) {
    this._surname1 = pNewFirstSurname;
  }

  get secondSurname(): string {
    return this._surname2;
  }

  set secondSurname(pNewSecondSurname: string) {
    this._surname2 = pNewSecondSurname;
  }

  get email(): string {
    return this._email;
  }

  set email(pNewEmail: string) {
    this._email = pNewEmail;
  }

  get phone(): string {
    return this._phone;
  }

  set phone(pNewPhone: string) {
    this._phone = pNewPhone;
  }

  get birthDate(): Date {
    return this._birthDate;
  }

  set birthDate(pNewBirthDate: Date) {
    this._birthDate = new Date(pNewBirthDate);
  }

  get userRole(): string {
    return this._role;
  }

  set userRole(pNewUserRole: string) {
    this._role = pNewUserRole;
  }

  get userState(): number {
    return this._state;
  }

  set userState(pNewUserState: number) {
    this._state = pNewUserState;
  }

  // Proccessed Getters

  get fullName(): string {
    let fullName = ``;
    switch (true) {
      case this.secondName === `` && this.secondSurname !== ``:
        fullName = `${this.firstName} ${this.firstSurname} ${this.secondSurname}`;
        break;
      case this.secondName !== `` && this.secondSurname == ``:
        fullName = `${this.firstName} ${this.secondName} ${this.firstSurname}`;
        break;
      case this.secondName === `` && this.secondSurname == ``:
        fullName = `${this.firstName} ${this.firstSurname}`;
        break;
      default:
        fullName = `${this.firstName} ${this.secondName} ${this.firstSurname} ${this.secondSurname}`;
        break;
    }
    return fullName;
  }

  get age(): number {
    const today: Date = new Date();
    const mouthLess: number = today.getMonth() - this.birthDate.getFullYear();
    let age: number = today.getFullYear() - this.birthDate.getFullYear();
    if (mouthLess < 0 || (mouthLess === 0 && today.getDate() < this.birthDate.getDate())) {
      age = age - 1;
    }
    return age;
  }
}

class Owner extends User{
  // tslint:disable-next-line: variable-name
  protected _password:string;
  // tslint:disable-next-line: variable-name
  protected _companyName:string;

  constructor(pUserData:any) {
    super(pUserData);
    this.password =  pUserData._password;
    this.companyName = pUserData._companyName;
  }

  get password():string {
    return this._password;
  }

  set password(pNewPassword:string) {
    this._password = pNewPassword;
  }

  get companyName():string {
    return this._companyName;
  }

  set companyName(pNewCompanyName:string) {
    this._companyName = pNewCompanyName;
  }
}

class Manager extends User {
  // tslint:disable-next-line: variable-name
  protected _studentsOnCharge:string[];
  // tslint:disable-next-line: variable-name
  protected _contractId:string;

  constructor(pUserData:any) {
    super(pUserData);
    this.students =  pUserData._studentsOnCharge;
    this.contract = pUserData._contractId;
  }

  get students():any {
    return this._studentsOnCharge;
  }

  set students(pNewStudents:any) {
    this._studentsOnCharge = pNewStudents;
  }

  get contract():string {
    return this._contractId;
  }

  set contract(pNewContract:string) {
    this._contractId = pNewContract;
  }
}

class Student extends User {
  // tslint:disable-next-line: variable-name
  protected _managerId:string;
  // tslint:disable-next-line: variable-name
  protected _grade:string;
  // tslint:disable-next-line: variable-name
  protected _group:string;
  // tslint:disable-next-line: variable-name
  protected _busId:string;
  // tslint:disable-next-line: variable-name
  protected _teacherInfo: any;

  constructor(pUserData:any) {
    super(pUserData);
    this.managerId = pUserData._managerId;
    this.grade = pUserData._grade;
    this.group = pUserData._group;
    this.busOnCharge = pUserData._busId;
    this.teacherInformation = pUserData._teacherInfo;
  }

  // Getters and Setters

  get managerId():string {
    return this._managerId;
  }

  set managerId(pNewManagerId:string) {
    this._managerId = pNewManagerId;
  }

  get grade():string {
    return this._grade;
  }

  set grade(pNewGrade:string) {
    this._grade = pNewGrade;
  }

  get group():string {
    return this._group;
  }

  set group(pNewGroup:string) {
    this._group = pNewGroup;
  }

  get busOnCharge():string {
    return this._busId;
  }

  set busOnCharge(pNewBusOnCharge:string) {
    this._busId = pNewBusOnCharge;
  }

  get teacherInformation():any {
    return this._teacherInfo;
  }

  set teacherInformation(pNewTeacherInformation:any) {
    this._teacherInfo = pNewTeacherInformation;
  }
}

export { User, Owner, Manager, Student };

// _role:Owner
// _state:1
// _name1:Kevin
// _name2:Josué
// _surname1:Aguilar
// _surname2:Alvarado
// _email:kaguilara@ucenfotec.ac.cr
// _phone:64445188
// _birthDate:Tue Oct 22 1996 18:00:00 GMT-0600 (Central Standard Time)
// _password:1kevin9
// _companyName:Transportes Aguilar Alvarado
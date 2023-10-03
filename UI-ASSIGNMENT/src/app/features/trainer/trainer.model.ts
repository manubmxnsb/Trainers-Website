export class TrainerInterface {
    public id: number;
    public name: string;
    public sex: string;
    public age: number;
    public yearsOfExperience: number;
    public isAvailable : boolean;
    public city : string;
    constructor(id: number, name: string, sex: string, age: number, 
        yearsOfExperience: number, isAvailable : boolean, city: string) {
      this.id = id;
      this.name = name;
      this.sex = sex;
      this.age = age;
      this.yearsOfExperience = yearsOfExperience;
      this.isAvailable = isAvailable;
      this.city = city;
    }
  }
  
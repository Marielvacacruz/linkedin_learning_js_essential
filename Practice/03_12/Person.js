class Person {
    constructor(
    //define params:
    name,
    age,
    gender,
    month,
    day,
    year,
    relationship
    ) {
        //define properties:
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.birthday = {
            month: month,
            day: day,
            year: year,
        };
        this.relationship = relationship
    }
    //add methods:
    changeAge(number){
        this.age = number;
    }
}

export default Person;

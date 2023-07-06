class Person{
    constructor(name, surname, dob, gender, age){
        this.name = name;
        this.surname = surname;
        this.dob = dob;
        this.gender = gender;
        this.age = age;
    }
    
    toString(){
        const card = 'Nome: ' + this.name + '\n' +
                     'Cognome: ' + this.surname + '\n' +
                     'Data di nascita: ' + this.dob + '\n' +
                     'Genere: ' + this.gender + '\n' +
                     'Età: ' + this.age + '\n';
       
        return card;
    }
}
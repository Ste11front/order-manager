class Employee extends Person{
    constructor(name, surname, dob, gender, age, department, clients){
        super(name,surname, dob, gender, age);
        this.department = department;
        this.clients = clients;
    }

    toString(){
        const card = super.toString() +
                    'Dipartimento: ' + this.department + '\n' +  
                    'Clienti: ' + this.clients + '\n';
        return card;
    }

    bestClient() {
        
    }

    totalEarnings(){
        
    } 

    addClient(){
        
    }
}
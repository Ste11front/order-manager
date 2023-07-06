class Client extends Person{
    constructor(name, surname, dob, gender, age, address, orders){
        super(name,surname, dob, gender, age);
        this.address = address;
        this.orders= orders;
    }

    toString(){
        const card = super.toString() +
                    'Indirizzo: ' + this.address + '\n' +
                    'Ordini: ' + this.orders + '\n';
        return card;
    }

    totalExpenses(){
        return orderArray.reduce((acc, curr) => acc + curr, 0);
    } 

    addOrder(order){
        this.orderArray.push(order);
    }
}
const order1 = new Order('Giacca','3','30')

const order2 = new Order('Pantalone', '4','25')

const order3 = new Order('Scarpe','2','15')

const order4 = new Order('Maglia','11','10')

const order5 = new Order('Pallone', '10', '5')

const client1 = new Client('Aldo','Giovanni','17/16/1977','M','get','Daqualcheparte', [order1, order2, order3]);
const client2 = new Client('Alex','Pavone','12/13/2000','F','get','Nellavia', [order4, order5]);


client1.addOrder(order1)
client1.addOrder(order2)
client1.addOrder(order3)


client2.addOrder(order4)
client2.addOrder(order5)


const employee = new Employee('luigi','mario','01/01/1988','m','get','salitafungosa', 'sport', [client1, client2]);

employee.addClient(client1);
employee.addClient(client2);

console.log(employee.bestClient())
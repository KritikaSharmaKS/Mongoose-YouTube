const Customer = require('./models/customer');
const Order = require('./models/order');

Customer.create({ 
  name: "Joey Tribianni", 
  email: 'jt@gmail.com'
}, (err, customer) => {
  if (err) { throw err }
  console.log("customer is : ", customer)
});

// Customer.insertMany([ 
//   { 
//     name: "Joey Tribianni", 
//     email: 'jt@gmail.com'
//   },
//   { 
//     name: "Chandler Bing", 
//     email: 'cb@gmail.com'
//   },
// ]).then((insertedCustomers) => {
//   console.log(insertedCustomers);
//   return Customer.deleteOne({ name: "Joey Tribianni" })
// }).then(deletedCustomer => {
//   console.log(deletedCustomer);
// }).catch(e => { throw e });

    // Delete all persons from the db.
    // await Customer.query().delete();
    // await Order.query().delete();
  
    // Insert one row to the database.
    // const customer = await Customer.query().insert({
    //   name: 'Rachel Green',
    //   email: 'rg@gmail.com',
    // });
  
    // Read all rows from the db.
    // const customerRead = await Customer.query();
    // console.log(customerRead);

    // const order = await Customer.relatedQuery('order')
    //                     .for(customer.id)
    //                     .insert({ total: 55 });
    // console.log(order);

    // const orderTotal = await Order.query()
    //                             .select('total')
    //                             .where('customer_id', '=', customer.id)
    //                             .orderBy('total');
    
    // console.log(orderTotal);
  
  
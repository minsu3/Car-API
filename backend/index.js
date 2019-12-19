let express = require('express');
let database = require('./database.js');
let app = express();

//Middleware 
app.use(express.json());

//Configuration Variables
const port = 9000;

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

// Routes
app.get('/', (req, res) => {
	res.send('To visit customer information, visit /api/customers');
});

//Get All Customers 
app.get('/api/customers', (req, res)=> {
	const getAllCustomers = 'SELECT * ,customers.oid FROM customers';

	database.all(getAllCustomers, (error, results)=> {
		if(error) {
			console.log("Get all customers table failed", error);
			res.sendStatus(500); 
		}
		else res.status(200).json(results);
	});
});

//Get One Customer
app.get('/api/customers/:id', (req, res)=> {
	const customerId = req.params.id;
	const getOneCustomer = `SELECT * FROM customers WHERE customers.oid = ?`;

	database.all(getOneCustomer, [customerId], (error, results)=> {
		if(error) {
			console.log("Failed to retrieve a customer from table", error);
			res.sendStatus(500);
		}
		else res.status(200).json(results);
	});
});
//Create one customer
app.post('/api/customers', (req, res)=> {
	const reqBody = [req.body.first_name, req.body.last_name, req.body.home_city];
	const insertNewCustomer = 'INSERT INTO customers VALUES (?, ?, ?)';

	database.run(insertNewCustomer, reqBody, error => {
		if(error) {
			console.log(`Create new customer with name ${req.body.first_name} ${req.body.last_name} failed`);
			res.sendStatus(500);
		} else {
			console.log(`Successfully added new customer ${req.body.first_name} ${req.body.last_name}`);
			res.sendStatus(200);
		}
	});
});
//Update one customer 
app.put('/api/customers/:id', (req, res) => {
	const customerId = req.params.id;
	const updateOneCustomer = `UPDATE customers SET FIRST_NAME = ?, LAST_NAME = ? WHERE customers.oid = ${customerId}`;

	//use the query string and req.body to run the query in the database
	database.run(updateOneCustomer, [req.body.first_name, req.body.last_name], error=> {
		if(error) {
			console.log(`Update customer named ${req.body.first_name} ${req.body.last_name} failed`, error);
			res.sendStatus(500);
		} else {
			console.log(`Customer named ${req.body.first_name} ${req.body.last_name} was updated successfully`);
			res.sendStatus(200);
		}
	})
})
//Delete one customer
app.delete('/api/customers/:id', (req, res)=> {
	const customerId = [req.params.id];
	const deleteCustomer = `DELETE FROM customers WHERE ? = customers.oid`;
	const deleteCustomerOrder = `DELETE FROM orders WHERE ? = orders.customer_id`;

	database.run(deleteCustomer, customerId, error=> {
		if(error) {
			console.log(`Delete from customer with ID of ${customerId} failed`);
		} else {
			console.log(`Delete from customer with ID of ${customerId} succeeded`);
		}
	})
	database.run(deleteCustomerOrder, customerId, error=> {
		if(error) {
			res.sendStatus(500);
		} else {
			console.log(`Delete from orders with customer ID of ${customerId} succeeded`);
			res.sendStatus(200);
		}
	})
})

//Dealerships
//Get all dealerships 
app.get('/api/dealerships', (req, res)=> {
	const getAllDealerships = 'SELECT * FROM dealerships';

	database.all(getAllDealerships, (error, results)=> {
		if(error) {
			console.log("Get all dealerships table failed", error);
			res.sendStatus(500); 
		}
		else res.status(200).json(results);
	});
});
//Get one dealership
app.get('/api/dealership', (req, res)=> {
	const dealershipLocation = req.body.location;
	const getOneDealership = `SELECT * FROM dealerships WHERE dealerships.location = ?`;

	database.all(getOneDealership, [dealershipLocation], (error, results)=> {
		if(error) {
			console.log("Failed to retrieve a dealership from table", error);
			res.sendStatus(500);
		}
		else res.status(200).json(results);
	});
});
//Create a dealership
app.post('/api/dealerships', (req, res)=> {
	const reqBody = [req.body.make, req.body.location];
	const insertNewDealership = 'INSERT INTO dealerships VALUES (?, ?)';

	database.run(insertNewDealership, reqBody, error => {
		if(error) {
			console.log(`Create new dealership ${req.body.make} ${req.body.location} failed`);
			res.sendStatus(500);
		} else {
			console.log(`Successfully added new dealership ${req.body.make} ${req.body.location}`);
			res.sendStatus(200);
		}
	});
});
//Update one dealership
app.put('/api/dealerships/:id', (req, res) => {
	const dealershipId = req.params.id;
	const updateOneDealership = `UPDATE dealerships SET MAKE = ?, LOCATION = ? WHERE dealerships.oid = ${dealershipId}`;

	database.run(updateOneDealership, [req.body.make, req.body.location], error=> {
		if(error) {
			console.log(`Update dealerships named ${req.body.location} failed`, error);
			res.sendStatus(500);
		} else {
			console.log(`Dealership in ${req.body.location} was updated successfully`);
			res.sendStatus(200);
		}
	});
});
//Delete one dealership
app.delete('/api/dealerships/:id', (req, res)=> {
	const dealershipId = [req.params.id];
	const deleteDealership = `DELETE FROM dealerships WHERE ? = dealerships.oid`;

	database.run(deleteDealership, dealershipId, error=> {
		if(error) {
			console.log(`Delete from dealerships with ID of ${dealershipId} failed`);
			res.sendStatus(500);
		} else {
			console.log(`Delete from dealerships with ID of ${dealershipId} succeeded`);
			res.sendStatus(200);
		}
	});
});
	
//Cars
//Get all cars 
app.get('/api/cars', (req, res)=> {
	const getAllCars = 'SELECT * FROM cars';

	database.all(getAllCars, (error, results)=> {
		if(error) {
			console.log("Get all cars table failed", error);
			res.sendStatus(500); 
		}
		else res.status(200).json(results);
	});
});
//Get one car
app.get('/api/cars/:id', (req, res)=> {
	const carId = req.params.id;
	const getOneCar = `SELECT * FROM cars WHERE cars.oid = ?`;

	database.all(getOneCar, [carId], (error, results)=> {
		if(error) {
			console.log("Failed to retrieve a car from table", error);
			res.sendStatus(500);
		}
		else res.status(200).json(results);
	});
});
//Create a car 
app.post('/api/cars', (req, res)=> {
	const reqBody = [req.body.make, req.body.model, req.body.year, req.body.body_type, req.body.wheel_drive, req.price_us_dollars];
	const insertNewCar = 'INSERT INTO cars VALUES (?, ?, ?, ?, ?, ?)';

	database.run(insertNewCar, reqBody, error => {
		if(error) {
			console.log(`Creating car make: ${req.body.make} model: ${req.body.model} failed`);
			res.sendStatus(500);
		} else {
			console.log(`Created car make: ${req.body.make} model: ${req.body.model} successfully`);
			res.sendStatus(200);
		}
	});
});
//Update car 
app.put('/api/cars/:id', (req, res) => {
	const carId = req.params.id;
	const updateOneCar = `
		UPDATE cars SET MAKE = ?, 
			MODEL = ?, 
			YEAR = ?, 
			BODY_TYPE = ?, 
			WHEEL_DRIVE = ?, 
			PRICE_US_DOLLARS = ? 
		WHERE cars.oid = ${carId}`;

	//use the query string and req.body to run the query in the database
	database.run(updateOneCar, [req.body.make, req.body.model, req.body.year, req.body.body_type, req.body.wheel_drive], error=> {
		if(error) {
			console.log(`Update car make: ${req.body.make} model: ${req.body.model} failed`, error);
			res.sendStatus(500);
		} else {
			console.log(`Update car make: ${req.body.make} model: ${req.body.model} successfully`);
			res.sendStatus(200);
		}
	});
});
//Delete car 
app.delete('/api/cars/:id', (req, res)=> {
	const carId = [req.params.id];
	const deleteCar = `DELETE FROM cars WHERE ? = cars.oid`;

	database.run(deleteCar, carId, error=> {
		if(error) {
			console.log(`Delete from cars with ID of ${carId} failed`);
			res.sendStatus(500);
		} else {
			console.log(`Delete from cars with ID of ${carId} succeeded`);
			res.sendStatus(200);
		}
	});
});

//Orders (join tables)

//Get all orders 
app.get('/api/orders', (req, res) => {
	const queryString = `SELECT * FROM orders`;

	database.all(queryString, (error, results) => {
		if(error) {
			console.log(`Failed to retrieve all orders from orders table.`);
			res.sendStatus(500);
		} else {
			res.status(200).json(results);
		}
	});
});
//Get one order
app.get('/api/customers/:id/cars', (req, res)=> {
	const customerId = req.params.id;
	const queryString = "SELECT * FROM orders WHERE orders.customer_id = ?";

	database.all(queryString, [customerId], (error, results) =>{
		if(error) {
			console.log(error)
			res.sendStatus(500);
		} else res.status(200).json(results);
	});
});
//Create an order
app.post('/api/customers/:id/cars/:carId', (req, res)=>{
	const reqParams = [req.params.id, req.params.carId, req.body.final_price, req.body.date_of_purchase]
	const insertString = "INSERT INTO orders VALUES (?, ?, ?, ?)";

	database.run(insertString, reqParams, error => {
		if(error) {
			console.log(`Error in creating association between customer and car`, error)
			res.sendStatus(500);
		}
		else {
			console.log(`Creating association between customer and cars`);
			res.sendStatus(200);
		}
	});
});

//Update
app.put("/api/customers/:id/cars/:carId", (req, res) => {
const reqParams = [req.params.id, req.params.carId, req.body.final_price, req.body.date_of_purchase, req.params.id, req.params.carId]
let updateOrders = `
	UPDATE orders SET 
		customer_id = ?, 
		car_id = ?, 
		final_price = ?, 
		date_of_purchase = ? 
	WHERE orders.customer_id = ? AND orders.car_id = ?`

	database.run(updateOrders, reqParams, error=> {
		if(error) {
			console.log(`Update orders failed`, error);
			res.sendStatus(500);
		} else {
			console.log(`Update orders was updated successfully`);
			res.sendStatus(200);
		}
	});
});


app.listen(port, () => {
	console.log(`App listening on port ${port}`);
})


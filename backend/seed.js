const db = require('./database.js');

const customers_list = [
	{ 
		first_name: "John",
		last_name: "Wilkinson",
		home_city: "San Francisco"
	},
	{ 
		first_name: "Elliott",
		last_name: "Doe",
		home_city: "Fremont"
	},
	{ 
		first_name: "Arwel",
		last_name: "Gray",
		home_city: "Pleasanton"
	},
	{ 
		first_name: "John",
		last_name: "Wilkinson",
		home_city: "San Bruno"
	},
	{ 
		first_name: "Rosalie",
		last_name: "Robinson",
		home_city: "Tracy"
	},
	{ 
		first_name: "Kian",
		last_name: "Kenny",
		home_city: "Millbrae"
	},
	{ 
		first_name: "Denise",
		last_name: "Ochoa",
		home_city: "Berkeley"
	},
];

const dealerships_list = [
	{ 
		make: "Toyota",
		location: "San Francisco" 
	},
	{ 
		make: "Subaru",
		location: "Oakland" 
	},
	{ 
		make: "Honda", 
		location: "Walnut Creek" 
	},
	{ 
		make: "BMW",
		location: "Dublin" 
	},
	{
		make: "Mercedes-Benz",
	  location: "Fremont" 
	}
];

const cars_list = [
	{
		make: "Toyota",
		model: "Prius",
		year: 2010,
		body_type: "Hatchback", 
		wheel_drive: "Front", 
		price_us_dollars: 20000
	},
	{
		make: "Honda",
		model: "Accord",
		year: 2015,
		body_type: "Midsize Sedan", 
		wheel_drive: "Front",
		price_us_dollars: 12000
	},
	{
		make: "Subaru",
		model: "WRX",
		year: 2006,
		body_type: "Compact Sedan", 
		wheel_drive: "All",
		price_us_dollars: 22000 
	},
	{
		make: "Ford",
		model: "Fiesta",
		year: 2018,
		body_type: "Hatchback", 
		wheel_drive: "Front",
		price_us_dollars: 18000 
	},
	{
		make: "BMW",
		model: "X5",
		year: 2012,
		body_type: "SUV", 
		wheel_drive: "All",
		price_us_dollars: 24000 
	},
	{
		make: "Mercedes-Benz",
		model: "C300",
		year: 2019,
		body_type: "Midsize Sedan", 
		wheel_drive: "Rear",
		price_us_dollars: 45000
	},
	{
		make: "Lexus",
		model: "RC-F",
		year: "2016",
		body_type: "Coupe", 
		wheel_drive: "Rear",
		price_us_dollars: 56000 
	},
	{
		make: "Audi",
		model: "S3",
		year: 2017,
		body_type: "Compact Sedan", 
		wheel_drive: "Rear",
		price_us_dollars: 35000 
	}
];


db.serialize(()=> {
	//Drop, Create, Insert Customers 
	const dropCustomersTableQuery = 'DROP TABLE IF EXISTS customers';
	db.run(dropCustomersTableQuery, error=> {
		if(error) console.error("Error dropping 'customers' table");
		else console.log("Dropped 'customers' table");
	})

	const createCustomersTableQuery = 'CREATE TABLE customers (first_name TEXT, last_name TEXT, home_city TEXT)';
	db.run(createCustomersTableQuery, error=> {
		if(error) console.error("Error creating 'customers' table");
		else console.log("Created 'customers' table");
	})

	const insertCustomersQuery = 'INSERT INTO customers VALUES (?, ?, ?)';
	for(let customer of customers_list) {
		let customerData = [customer.first_name, customer.last_name, customer.home_city];
		db.run(insertCustomersQuery, customerData, error=> {
			if(error) console.log("Could not insert customer", [customer.first_name, customer.last_name], error);
			else console.log(`Inserted customer with name ${customer.first_name} ${customer.last_name} into 'customers' table`);
		})
	}

	//Drop, Create, Insert Dealerships
	const dropDealershipsTableQuery = 'DROP TABLE IF EXISTS dealerships';
	db.run(dropDealershipsTableQuery, error=> {
		if(error) console.error("Error dropping 'dealerships' table");
		else console.log("Dropped 'dealerships' table");
	})

	const createDealershipsTableQuery = 'CREATE TABLE dealerships (make TEXT, location TEXT)';
	db.run(createDealershipsTableQuery, error=> {
		if(error) console.error("Error creating 'dealerships' table");
		else console.log("Created 'dealerships' table");
	})

	const insertDealershipsQuery = 'INSERT INTO dealerships VALUES (?, ?)';
	for(let dealership of dealerships_list) {
		let dealershipData = [dealership.make, dealership.location];
		db.run(insertDealershipsQuery, dealershipData, error=> {
			if(error) console.log("Could not insert dealership", dealership, error);
			else console.log(`Inserted ${dealership.make} ${dealership.location}  into 'dealerships' table`);
		})
	}

	//Drop, Create, Insert Cars
	const dropCarsTableQuery = 'DROP TABLE IF EXISTS cars';
	db.run(dropCarsTableQuery, error=> {
		if(error) console.error("Error dropping 'cars' table");
		else console.log("Dropped 'cars' table");
	})

	const createCarsTableQuery = 'CREATE TABLE cars (make TEXT, model TEXT, year INTEGER, body_type TEXT, wheel_drive TEXT, price_us_dollars INTEGER)';
	db.run(createCarsTableQuery, error=> {
		if(error) console.error("Error creating 'cars' table");
		else console.log("Created 'cars' table");
	})

	const insertCarsQuery = 'INSERT INTO cars VALUES (?, ?, ?, ?, ?, ?)';
	for(let car of cars_list) {
		let carData = [car.make, car.model, car.year, car.body_type, car.wheel_drive, car.price_us_dollars];
		db.run(insertCarsQuery, carData, error=> {
			if(error) console.log("Could not insert car", car, error);
			else console.log(`Inserted ${car.make} ${car.model} into 'cars' table`);
		})
	}

	//JOIN TABLE: MANY TO MANY
	//Drop, Create Orders table
	const dropOrdersTableQuery = 'DROP TABLE IF EXISTS orders';
	db.run(dropOrdersTableQuery, error=> {
		if(error) console.error("Error dropping 'orders' table");
		else console.log("Dropped 'orders' table");
	})

	const createOrdersTableQuery = 'CREATE TABLE orders (customer_id INTEGER, car_id INTEGER, final_price INTEGER, date_of_purchase DATE)';
	db.run(createOrdersTableQuery, error=> {
		if(error) console.error("Error creating 'orders' table");
		else console.log("Created 'orders' table");
	})

})


let sqlite3 = require('sqlite3');
let database = new sqlite3.Database('./database.db');

// Customer table attributes
const createTableCustomersQuery = 
	`CREATE TABLE IF NOT EXISTS customers (
		first_name TEXT,
		last_name TEXT,
		home_city TEXT)`;

// Dealership table attributes
const createTableDealershipsQuery = `
	CREATE TABLE IF NOT EXISTS dealerships (
		make TEXT,
		location TEXT)`;

// Car table attributes
const createTableCarsQuery = `
	CREATE TABLE IF NOT EXISTS cars (
		make TEXT,
		model TEXT,
		year INTEGER,
		body_type TEXT,
		wheel_drive TEXT,
		price_us_dollars INTEGER)`;

// Order table attributes 
//many to many
const createTableOrdersQuery = `
	CREATE TABLE IF NOT EXISTS orders (
		customer_id INTEGER,
		car_id INTEGER,
		final_price INTEGER,
		date_of_purchase DATE)`;


module.exports = database;


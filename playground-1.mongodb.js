/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('mongodbVSCodePlaygroundDB');

// Insert a few documents into the sales collection.
db.getCollection('sales').insertMany([
  { 'item': 'abc', 'price': 10, 'quantity': 2, 'date': new Date('2014-03-01T08:00:00Z') },
  { 'item': 'jkl', 'price': 20, 'quantity': 1, 'date': new Date('2014-03-01T09:00:00Z') },
  { 'item': 'xyz', 'price': 5, 'quantity': 10, 'date': new Date('2014-03-15T09:00:00Z') },
  { 'item': 'xyz', 'price': 5, 'quantity': 20, 'date': new Date('2014-04-04T11:21:39.736Z') },
  { 'item': 'abc', 'price': 10, 'quantity': 10, 'date': new Date('2014-04-04T21:23:13.331Z') },
  { 'item': 'def', 'price': 7.5, 'quantity': 5, 'date': new Date('2015-06-04T05:08:13Z') },
  { 'item': 'def', 'price': 7.5, 'quantity': 10, 'date': new Date('2015-09-10T08:43:00Z') },
  { 'item': 'abc', 'price': 10, 'quantity': 5, 'date': new Date('2016-02-06T20:20:13Z') },
]);

// Run a find command to view items sold on April 4th, 2014.
const salesOnApril4th = db.getCollection('sales').find({
  date: { $gte: new Date('2014-04-04'), $lt: new Date('2014-04-05') }
}).count();

// Print a message to the output window.
console.log(`${salesOnApril4th} sales occurred in 2014.`);

// Here we run an aggregation and open a cursor to the results.
// Use '.toArray()' to exhaust the cursor to return the whole result set.
// You can use '.hasNext()/.next()' to iterate through the cursor page by page.
db.getCollection('sales').aggregate([
  // Find all of the sales that occurred in 2014.
  { $match: { date: { $gte: new Date('2014-01-01'), $lt: new Date('2015-01-01') } } },
  // Group the total sales for each product.
  { $group: { _id: '$item', totalSaleAmount: { $sum: { $multiply: [ '$price', '$quantity' ] } } } }
]);
https://meet.google.com/icf-zsmz-yhc

const menuData = [
    {
        store: "oneStop",
        category: "Habesha",
        items: [
            { id: 101, name: "Meskel Teff", price: 49, quant: "25lb" },
            { id: 102, name: "Selam Teff brown", price: 48, quant: "25lb" },
            { id: 103, name: "Tizita Teff brown", price: 45, quant: "25lb" },
            { id: 104, name: "Ohio brown Teff", price: 39, quant: "25lb" },
            { id: 105, name: "Walya brown Teff", price: 47, quant: "25lb" },
            { id: 106, name: "Worknesh brown Teff", price: 49, quant: "25lb" }
        ]
    },
    {
        store: "nazthret",
        category: "Habesha",
        items: [
            { id: 107, name: "Selam Barley", price: 24.99, quant: "25lb" },
            { id: 108, name: "Mira Barley", price: 21, quant: "25lb" },
            { id: 109, name: "Sorghum Flower", price: 24, quant: "25lb" },
            { id: 110, name: "Buckwheat Flower", price: 70, quant: "25lb" },
            { id: 111, name: "Berbere", price: 15, quant: "1lb" },
            { id: 112, name: "Shiro", price: 16, quant: "1lb" }
        ]
    },
    {
        store: "DireDawa",
        category: "Habesha",
        items: [
            { id: 113, name: "Ethiopian Organic Beans", price: 5, quant: "1lb" },
            { id: 114, name: "Lentil", price: 4.99, quant: "4lb" },
            { id: 115, name: "Lentil", price: 6, quant: "2lb" },
            { id: 116, name: "Korerima", price: 18.99, quant: "1lb" },
            { id: 117, name: "Black Seed", price: 17.99, quant: "1lb" },
            { id: 118, name: "Enjera Normal", price: 7, quant: "10 pack" }
        ]
    },
    {
        store: "Lalibela",
        category: "Habesha",
        items: [
            { id: 119, name: "Hembasha", price: 6, quant: "1lb" },
            { id: 120, name: "French Bread", price: 4, quant: "4lb" },
            { id: 121, name: "Kolo", price: 6, quant: "1lb" },
            { id: 122, name: "Koseret", price: 5, quant: "1lb" },
            { id: 123, name: "Fendisha", price: 5, quant: "1lb" },
            { id: 124, name: "Quanta", price: 11, quant: "1lb" }
        ]
    }
];

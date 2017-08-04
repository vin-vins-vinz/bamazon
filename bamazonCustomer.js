// Setup dependencies
var inquirer = require("inquirer");
var mysql = require("mysql");

// Log out a table of list items in terminal
require("console.table");

// Connecting mysql database, with function throwing error or successful connection.
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "bamazon_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("Error connecting: " + err.stack);
  }
  inventoryTable();
});


// Create a function to load the inventory table of products from mysql.
function inventoryTable() {

  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    console.table(res);

    customerItem(res);
  });
}

// Use prompt to send questions to Customer.
function customerItem (inv) {
  // Q1: what ID to buy
  inquirer.prompt([
      {
        type: "input",
        name: "choice",
        message: "Which ID item you would like to purchase?"
      }
    ])
    .then(function(val) {
        var idChoice = parseInt(val.choice);
        customerQuantity(idChoice);
        }
    );
}

// Q2: how many quantity to buy
function customerQuantity(item) {
  inquirer.prompt([
      {
        type: "input",
        name: "quantity",
        message: "How many quanity of this item you would like to purchase?",
        }
  ])
    .then(function(val) {
        var quantityChoice = parseInt(val.quantity);
        }
    );
}

// Setup inventory and have inventory check each time when buyer made an item choice, check to see if the item still have valid inventory for purchase.
// Inventory check may use for loop to examinate db.
// Create a function to deduct inventory once purchase successfully, or else inventory down to 0 should return message with not valid to purchase.



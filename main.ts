#! /usr/bin/env node
import inquirer from "inquirer";

const currency : any = {
    USD : 1.00 , // Based Currency  
    EUR : 0.93,
    PKR : 278 ,
    GBP : 0.80,
    INR : 83.38,
};
let user_ans = await inquirer.prompt(
    [
        {
            name : "from",
            type : "list",
            message : "Enter From Currency",
            choices : ["USD" , "EUR" , "PKR" , "GBP" , "INR"]
        },
        {
            name : "to" ,
            type : "list",
            message : "Enter to Currency" ,
            choices : ["USD" , "EUR" , "PKR" , "GBP" , "INR"]
        },
        {
            name : "amount" ,
            type : "number" ,
            message : "Enter Your Amount"
        }
    ]
)
let fromAmount = currency [user_ans.from];
let toAmount = currency [user_ans.to];

let amount = user_ans.amount 
let basedAmount = amount / fromAmount ;
        
let convertedAmount = basedAmount * toAmount ;

console.log(convertedAmount);

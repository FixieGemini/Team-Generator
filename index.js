const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');
const generateHTML= require('./generateHTML');

// team profiles
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 


var readlineSync=require('readline-sync');
var chalk=require('chalk');

const quest=chalk.bold.bgCyan;
const message=chalk.bold.magenta;
const error=chalk.bold.bgRed;

var userName=readlineSync.question(quest('\nPlease Enter Your Name:'));

console.log(message('\nGreat to have you here '+userName.toUpperCase()));

var dateOfBirth=readlineSync.question(quest('\nEnter Your Date of Birth in DD/MM/YYYY format only...'))

validateDateofBirth(dateOfBirth);

function isLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  }
  if (year % 100 === 0) {
    return true;
  }
  if (year % 4 === 0) {
    return true;
  }
  return false;
}


function validateDateofBirth(dateOfBirth){
  var dateString=dateOfBirth.slice(-4);
  var year=Number(dateString);
  var dob=dateOfBirth;
  var dd=dob.slice(0,2);
  var mm=dob.slice(3,5);
  var date=Number(dd);
  var month=Number(mm);
  
  if(date>31 || month>12){
    console.log(error('\nPlease enter a valid date of birth.'));
  }
  else if(month===02 && date>29){
      
      console.log(error('\nPlease enter a valid date of birth.'));
  }
  else if(month===04 && date===31){
      console.log(error('\nPlease enter a valid date of birth.'));
  }
  else if(month===06 && date===31){
      console.log(error('\nPlease enter a valid date of birth.'));
  }
  else if(month===09 && date===31){
      console.log(error('\nPlease enter a valid date of birth.'));
  }
  else if(month===10 && date===31){
      console.log(error('\nPlease enter a valid date of birth.'));
  }
  else{
    if(isLeapYear(year)){
  console.log(message('\nCongrats!!! You were born in a leap year...'));
  console.log(message('\nShare this to your friends too...'));
    }
  else{
  console.log(message('\nSorry you were not born in a leap year...Better luck at your next birth...'));
  }

  }
  }



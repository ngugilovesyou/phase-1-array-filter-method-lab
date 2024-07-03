//const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

//This function takes an array of drivers' names and a string as arguments,
// and returns the matching list of drivers. The function should be case insensitive


function findMatching (drivers, string) {
      return drivers.filter(function (driver){
        return driver.toLowerCase() === string.toLowerCase();
      });
    }
console.log(drivers, "bobby")
//returns a driver if beginning provided letters match 'Sa'
//does not return drivers if only middle or ending letters match
//does not return drivers if only middle or ending letters match
const fuzzyMatch = (drivers, string) => drivers.filter(driver => driver.startsWith(string))

console.log(fuzzyMatch(drivers, 'Sa'))

//This function takes an array of driver objects and a string as arguments. Each driver object has two properties: name and hometown.
 //The function should return each element whose name property matches the provided string argument.
 const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

 function matchName (drivers,string) {
   return drivers.filter(function (driver){
    return driver.name===string;
   })
 }
 console.log(matchName(drivers, "bobby"))
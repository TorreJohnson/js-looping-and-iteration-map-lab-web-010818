function lowerCaseDrivers(arr) {
  return arr.map(function(user) {return user.toLowerCase()});
}

function nameToAttributes(arr) {
  let newArr = []
  arr.map(function(user) {
    newArr.push({firstName: user.split(" ")[0], lastName: user.split(" ")[1]});
  })
  return newArr;
}

function attributesToPhrase(arr) {
  return arr.map(function(user) {return `${user.name} is from ${user.hometown}`});
}

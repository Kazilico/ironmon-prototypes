/*
  This class represents a character in a video game.

  It contains three default properties:
    - health (which starts at 25)
    - power (which starts at 1)
    - charged (with starts as false)

  It also contains a property passed in as a parameter:
    - name
*/
var Ironmon = function(name, type) {
  
  this.health = 25;
  this.power = 1;
  this.charged = false;
  this.name = name;
  this.type = type;
}

Ironmon.prototype.isFire = function() {
  return (this.type === "fire")
}

Ironmon.prototype.isWater = function() {
  return (this.type === "water")
}

Ironmon.prototype.isGrass = function() {
  return (this.type === "grass")
}


/*
  This function determines a random *integer* between 1 and 5.
  
  It adds that number to the health of the Ironmon.

  An Ironmon's health cannot go above 25. If healing would 
    make the Ironmon's health go above 25, it becomes 25 instead.
*/
Ironmon.prototype.heal = function() {
  var heal = Math.ceil(Math.random() *5)

  this.health = heal + this.health

  if (this.health > 25){
    this.health = 25
  } 
}

/*
  This function adds one to the power of the Ironmon.
*/
Ironmon.prototype.train = function() {
  this.power = (this.power + 1)
}

/*
  This function returns true if the Ironmon's health is greater than 0.

  Otherwise, it returns false.
*/
Ironmon.prototype.active = function() {

  if (this.health >= 1){
    return true
  }
  return false
}

/*
  This function accepts two parameters..
    - Another, opponent Ironmon instance
    - An Action instance to execute

  It executes the "use" method of the Action 
    *within the context of this Ironmon*,
    passing in the opponent Ironmon as a parameter.
*/
Ironmon.prototype.action = function(opponent, action) {

  return action.use.call(this, opponent)

} 


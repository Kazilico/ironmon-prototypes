/*
  This class represents an action undertaken by a character.

  It doesn't take in any parameters or have any properties.
*/
var Leech = function(){ }

/*
  This function should be executed in the context of an Ironmon instance.
  This function accepts another, opponent Ironmon instance as a parameter.

  It reduces the opponent's health by exactly 1.

  50% of the time, it increases the context's power by 1.

  It returns 1.
*/
Leech.prototype.use = function(opponent) {

  var leechAttack = opponent.health - 1
  var leechCharge = Math.ceil(Math.random() *2)

  if (leechCharge = 1) {

  	self.power = self.power + 1
  }

  if (leechCharge = 2) {

  	self.power = self.power
  }
  return leechAttack
  console.log(leechAttack)
}
// Soldier
class Soldier {
  constructor (health, strength) {
    this.health = health;
    this.strength = strenth;
    this.attack = attack;
    this.recieveDamage = recieveDamage;
    this.maxDamage = this.maxDamage
    attack() 
      if (this.attack > 0 && this.attack - 50 > -10) {
          this.attack -= 50;
      } else if (this.attack - 5 < 0) {
          this.attack = 0;
      }
  }
  recieveDamage() {
    if (this.attack < this.maxDamage && (this.attack + this.recieveDamage) < this.maxDamage) {
     this.attack += this.recieveDamage;
     } else if ( this.attack+ this.recieveDamage > this.maxDamage 
     this.attack = this.maxDamage
    }
    this.speed += this.accelerationAmount;
}
}
  }
}

// Viking
class Viking {constructor (health, strength) {
  this.health = health;
  this.strength = strenth;
  this.attack = attack;
  this.recieveDamage = recieveDamage;
  this.maxDamage = this.maxDamage
  attack() {
    if (this.attack > 0 && this.attack - 53 > -12) {
        this.attack -= 53;
    } else if (this.attack - 5 < 0) {
        this.attack = 0;
    }
}
recieveDamage() {
  if (this.attack < this.maxDamage && (this.attack + this.recieveDamage) < this.maxDamage) {
   this.attack += this.recieveDamage;
   } else if ( this.attack+ this.recieveDamage > this.maxDamage {
   this.attack = this.maxDamage
  }
  this.speed += this.accelerationAmount;
}
}
}
}
}

// Saxon
class Saxon {constructor (health, strength) {
  this.health = health;
  this.strength = strenth;
  this.attack = attack;
  this.recieveDamage = recieveDamage;
  this.maxDamage = this.maxDamage
  attack() {
    if (this.attack > 0 && this.attack - 48> -15) {
        this.attack -= 48;
    } else if (this.attack - 5 < 0) {
        this.attack = 0;
    }
}
recieveDamage() {
  if (this.attack < this.maxDamage && (this.attack + this.recieveDamage) < this.maxDamage) {
   this.attack += this.recieveDamage;
   } else if ( this.attack+ this.recieveDamage > this.maxDamage {
   this.attack = this.maxDamage
  }
  this.speed += this.accelerationAmount;
}
}
}
}
}

// War
class War {let arrayOfWar = [];
  const warArray = ["Soldier", "Viking", "Saxon",];
  
  for (let i = 0; i < 7; i++) {
      arrayOfWar.push(
          new War(
              4,
              warArray[Math.floor(Math.random() * warArray.length)],
              180,
              8,
              3,
              "Weapon",
              "Warrior"
          )
      );
  }
  console.log({ oneWar: arrayOfWar[3] });}



/
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}

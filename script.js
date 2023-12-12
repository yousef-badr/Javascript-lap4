//1 Constructor Functions
function PersonConstructor(fullName, money, sleepMood, healthRate) {
    this.fullName = fullName;
    this.money = money;
    this.sleepMood = sleepMood;
    this.healthRate = healthRate;
  }
  
  PersonConstructor.prototype.sleep = function(hours) {
    if (hours === 7) {
      this.sleepMood = 'happy';
    } else if (hours < 7) {
      this.sleepMood = 'tired';
    } else {
      this.sleepMood = 'lazy';
    }
  };
  
  PersonConstructor.prototype.eat = function(meals) {
    if (meals === 3) {
      this.healthRate = 100;
    } else if (meals === 2) {
      this.healthRate = 75;
    } else if (meals === 1) {
      this.healthRate = 50;
    }
  };
  
  PersonConstructor.prototype.buy = function(items) {
    this.money -= items * 10;
  };
  
  const person1 = new PersonConstructor("Youssef badr", 1000, '', 0);
  person1.sleep(8);
  person1.eat(2);
  person1.buy(3);
  console.log(person1);
  
//2 Classes 
class PersonClass {
    constructor(fullName, money, sleepMood, healthRate) {
      this.fullName = fullName;
      this.money = money;
      this.sleepMood = sleepMood;
      this.healthRate = healthRate;
    }
  
    sleep(hours) {
      if (hours === 7) {
        this.sleepMood = 'happy';
      } else if (hours < 7) {
        this.sleepMood = 'tired';
      } else {
        this.sleepMood = 'lazy';
      }
    }
  
    eat(meals) {
      if (meals === 3) {
        this.healthRate = 100;
      } else if (meals === 2) {
        this.healthRate = 75;
      } else if (meals === 1) {
        this.healthRate = 50;
      }
    }
  
    buy(items) {
      this.money -= items * 10;
    }
  }
  
  const person2 = new PersonClass("omar", 2450, '', 0);
  person2.sleep(6);
  person2.eat(3);
  person2.buy(2);
  console.log(person2);

//3 Objects Linking to Other Objects (OLOO)
const PersonOLOO = {
    init(fullName, money, sleepMood, healthRate) {
      this.fullName = fullName;
      this.money = money;
      this.sleepMood = sleepMood;
      this.healthRate = healthRate;
      return this;
    },
  
    sleep(hours) {
      if (hours === 7) {
        this.sleepMood = 'happy';
      } else if (hours < 7) {
        this.sleepMood = 'tired';
      } else {
        this.sleepMood = 'lazy';
      }
    },
  
    eat(meals) {
      if (meals === 3) {
        this.healthRate = 100;
      } else if (meals === 2) {
        this.healthRate = 75;
      } else if (meals === 1) {
        this.healthRate = 50;
      }
    },
  
    buy(items) {
      this.money -= items * 10;
    },
  };
  
  const person3 = Object.create(PersonOLOO).init("Ahmed mohamed", 200, '', 0);
  person3.sleep(7);
  person3.eat(1);
  person3.buy(5);
  console.log(person3);

//4 Factory Functions
function createPersonFactory(fullName, money, sleepMood, healthRate) {
    return {
      fullName,
      money,
      sleepMood,
      healthRate,
  
      sleep(hours) {
        if (hours === 7) {
          this.sleepMood = 'happy';
        } else if (hours < 7) {
          this.sleepMood = 'tired';
        } else {
          this.sleepMood = 'lazy';
        }
      },
  
      eat(meals) {
        if (meals === 3) {
          this.healthRate = 100;
        } else if (meals === 2) {
          this.healthRate = 75;
        } else if (meals === 1) {
          this.healthRate = 50;
        }
      },
  
      buy(items) {
        this.money -= items * 10;
      },
    };
  }
  
  const person4 = createPersonFactory("Karim adel", 5000, '', 0);
  person4.sleep(6);
  person4.eat(2);
  person4.buy(4);
  console.log(person4);
  
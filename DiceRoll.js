runGame();
function runGame(){
  let monsterDamage;
  let charHealth;
  let bossHealth;
  let boss;
  let bossArmorClass;
  let hitNeed = 20;
  let charClass = prompt("Enter Class 1.Fighter 2.Barbarian 3.Rogue 4.Cleric 5.Mage");
  chooseClass(charClass);
  function chooseClass(charClass){
    if(charClass < 6){
      if(charClass == 1){
        console.log("You have selected Fighter");
        charHealth = 20;
        armorClass = 16;
        console.log("Your max HP is " + charHealth);
      }
      if(charClass == 2){
        console.log("You have selected Barbarian");
        charHealth = 16;
        armorClass = 15;
        console.log("Your max health is " + charHealth);
      }
      if(charClass == 3){
        console.log("You have selected Rogue");
        charHealth = 14;
        armorClass = 12;
        console.log("Your max health is " + charHealth)
      }
      if(charClass == 4){
        console.log("You have selected Cleric");
        charHealth = 22;
        armorClass = 17;
        console.log("Your max health is " + charHealth);
      }
      if(charClass == 5){
        console.log("You have selected Mage");
        charHealth = 12;
        armorClass = 11;
        console.log("Your max health is " + charHealth);
      }
    }
    else {
      console.log("You have not selected a proper number");
    }
  }
  let bossName = randomMonsterGenerator();
  if(bossName == "Skeleton"){
    bossHealth == 15;
  }
  if(bossName == "Elemental"){
    bossHealth = 20;
  }
  if(bossName == "Giant Beetle"){
    bossHealth = 22;
  }
  if(bossName == "Worg"){
    bossHealth = 18;
  }
  if(bossName == "Tiefling"){
    bossHealth = 28;
  }
  boss = bossName;
  console.log("You have encountered: " + bossName);
  console.log("Hitpoints: " + bossHealth);

  if(charHealth > 0 && bossHealth > 0){
    while(charClass == 1 && bossHealth > 0 && charHealth > 0){ // Fighter
      let action = announceMeleeOptions();
      console.clear();
      if(action == 1){
        let damage = fighterAttack();
        bossHealth = damageHealth(bossHealth, damage);
        announceAttackMonster(damage, bossHealth);
      }
      else if(action == 2){
        announceBlock();
      }
      else if(action == 3){
        announceBackUp();
      }
      else{
        announceSkip();
      }
      let damage = attackMonster();
      charHealth = damageHealth(charHealth, damage);
      announceAttackChar(damage, charHealth);
    }
    while(charClass == 2 && bossHealth > 0 && charHealth > 0){ // Barbarian
      let action = announceMeleeOptions();
      console.clear();
      if(action == 1){
        let damage = barbarianAttack();
        bossHealth = damageHealth(bossHealth, damage);
        announceAttackMonster(damage, bossHealth);
      }
      else if(action == 2){
        announceBlock();
      }
      else if(action == 3){
        announceBackUp();
      }
      else{
        announceSkip();
      }
      let damage = attackMonster();
      charHealth = damageHealth(charHealth, damage);
      announceAttackChar(damage, charHealth);
    }
    while(charClass == 3 && bossHealth > 0 && charHealth > 0){ // Rogue
      let action = announceMeleeOptions();
      console.clear();
      if(action == 1){
        let damage = rogueAttack();
        bossHealth = damageHealth(bossHealth, damage);
        announceAttackMonster(damage, bossHealth);
      }
      else if(action == 2){
        announceBlock();
      }
      else if(action == 3){
        announceBackUp();
      }
      else{
        announceSkip();
      }
      let damage = attackMonster();
      charHealth = damageHealth(charHealth, damage);
      announceAttackChar(damage, charHealth);
    }
    while(charClass == 4 && bossHealth > 0 && charHealth > 0){ // cleric
      let action = announceClericOptions();
      console.clear();
      if(action == 1){
        let damage = clericAttack();
        bossHealth = damageHealth(bossHealth, damage);
        announceAttackMonster(damage, bossHealth);
      }
      if(action == 2){
        announceBlock();
      }
      if(action == 3){
        announceBackUp();
      }
      if(action == 4){
        let heal = healSelf();
        charHealth = charHealth + heal;
        announceHeal(heal, charHealth);
      }
      else {
        announceSkip();
      }
      let damage = attackMonster();
      charHealth = damageHealth(charHealth, damage);
      announceAttackChar(damage, charHealth);
    }
    while(charClass == 5 && bossHealth > 0 && charHealth > 0){ // Mage
      let action = announceMageOptions();
      console.clear();
      if(action == 1){
        let damage = mageAttack();
        bossHealth = damageHealth(bossHealth, damage);
        announceAttackMonster(damage, bossHealth);
      }
      else if(action == 2){
        announceBlock();
      }
      else if(action == 3){
        aanounceBackUp();
      }
      else if(action == 4){
        let damage = castFireBall(bossName);
        bossHealth = damageHealth(bossHealth, damage);
        announceAttackMonster(damage, bossHealth);
      }
      else{
        announceSkip();
      }
      let damage = attackMonster();
      charHealth = damageHealth(charHealth, damage);
      announceAttackChar(damage, charHealth);
      }
    }
  else if(charHealth <= 0){
    console.log("You died!");
  }
  else if(bossHealth <= 0){
    console.log("You win!");
  }
 }
function randomMonsterGenerator(){
  let monsters = ["Skeleton", "Elemental", "Giant Beetle", "Worg", "Tiefling"];
  let monsters1 = Math.floor(Math.random() * monsters.length) +1 ;
  let boss = monsters[monsters1];
  return boss;
}
function rollDice(input){
  let answer;
  if(input == 4){
    answer = Math.floor( Math.random() * input)+1;
  }
  else if(input == 6){
    answer = Math.floor( Math.random() * input)+1;
  }
  else if(input == 8){
    answer = Math.floor( Math.random() * input)+1;
  }
  else if(input == 10){
    answer = Math.floor( Math.random() * input)+1;
  }
  else if(input == 12){
    answer = Math.floor( Math.random() * input)+1;
  }
  else if(input == 20){
    answer = Math.floor( Math.random() * input)+1;
  }
   return answer;
 }
 function healSelf(health){
   let regHeal = 8;
   let newHealth = rollDice(regHeal);
   return newHealth;
 }
 function barbarianAttack(){
   if(rollDice(hitNeed) >= 15){
     let meleeWeapon = 10;
     let hit = rollDice(meleeWeapon);
   }
   else {
       hit = 0
       console.log("Miss!");
   }
 return hit;
 }
 function fighterAttack(){
   let meleeWeapon = 6;
   let attack = rollDice(meleeWeapon) + rollDice(meleeWeapon);
   return attack;
 }
 function rogueAttack(){
   let meleeWeapon = 4;
   let attack = rollDice(meleeWeapon) + rollDice(meleeWeapon) + rollDice(meleeWeapon);
   return attack;
 }
 function clericAttack(){
   let meleeWeapon = 8;
   let attack = rollDice(meleeWeapon);
   return attack;
 }
 function mageAttack(){
   let meleeWeapon = 4;
   let attack = rollDice(meleeWeapon);
   return attack;
 }
 function castFireBall(boss){
   if(boss == "Elemental"){
     console.log("Elemental is immune to magic!");
     }
   else{
     let fireBallCheck = 10;
     let hitCheck = 20;
       if(rollDice(hitCheck) >= 14){
         let damage = rollDice(fireBallCheck);
         return damage;
       }
   }
  }
 function attackMonster(){
   let meleeWeapon = 6;
   let attack = rollDice(meleeWeapon)
   return attack;
 }
 function damageHealth(charHealth, damage){
   let health = charHealth - damage;
   return health;
 }
function announceAttackMonster(damage, health){
  console.log("You attack the monster for " + damage + " damage");
  console.log("Monster has " + health + " health left");
}
function announceAttackChar(damage, health){
  console.log("The monster attacks you for " + damage + " damage");
  console.log("You have " + health + " health left!");
}
function announceMeleeOptions(){
  let options = prompt("Options 1. Melee 2. Block 3. Back Up");
  return options;
}
function announceClericOptions(){
  let options = prompt("Options 1. Melee 2. Block 3. Back Up 4. Heal Self");
  return options;
}
function announceMageOptions(){
  let options = prompt("Options 1. Melee 2. Block 3. Back Up 4. Fireball");
  return options;
}
function announceBlock(){
  console.log("You are in the blocking position!");
}
function announceBackUp(){
  console.log("You back up!");
}
function announceSkip(){
  console.log("You skip your turn");
}
function announceHeal(heal, heal2){
  console.log("You heal yourself for " + heal + " health");
  console.log("You have a total of " + heal2 + " health");
}

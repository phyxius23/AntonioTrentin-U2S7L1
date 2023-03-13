class User {
   constructor (_firstName, _lastName, _age, _location) {
      this.firstName = _firstName
      this.lastName = _lastName
      this.age = _age
      this.location = _location
   }

   static compare(userA, userB){
      if (userA.age > userB.age) {
         return `${userA.firstName} ${userA.lastName} è più vecchia/o di ${userB.firstName} ${userB.lastName}`;
      } else {
         return `${userB.firstName} ${userB.lastName} è più vecchia/o di ${userA.firstName} ${userA.lastName}`;
      }
   }
}

const mariaRossi = new User("Maria", "Rossi", 58, "Godric's Hollow");
const giuseppeVerdi = new User("Giuseppe", "Verdi", 78, "Ottery St. Catchpole");
const luciaBianchi = new User("Lucia", "Bianchi", 45, "Little Hangleton");
const chiaraRosa = new User("Chiara", "Rosa", 27, "Hogsmeade");

console.log(mariaRossi);
console.log(giuseppeVerdi);
console.log(luciaBianchi);
console.log(chiaraRosa);

console.log(User.compare(mariaRossi, giuseppeVerdi));
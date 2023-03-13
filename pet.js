class Pet {
   constructor (_petName, _ownerName, _species, _breed) {
      this.petName = _petName
      this.ownerName = _ownerName
      this.species =_species
      this.breed = _breed
   }

   static isOwner(petA, petB){
      
   }

}

let myForm = document.querySelector('#myForm');
let listWrapper = document.querySelector('#listWrapper');
let button = document.querySelector('.btn');
const arrayPet = [];

button.addEventListener('click', function(){
   let petNameForm = document.getElementById('petName').value;
   let ownerNameForm = document.getElementById('ownerName').value;
   let speciesForm = document.getElementById('species').value;
   let breedForm = document.getElementById('breed').value;

   // pusho i valori recuperati dal form all'interno di un array formato da più oggetti istanziati dalla classe Pet
   arrayPet.push(new Pet(petNameForm, ownerNameForm, speciesForm, breedForm));
   console.log(arrayPet);

   // appendListItem()
   appendListItem(arrayPet[arrayPet.length-1]);
   
   myForm.reset();
})

function appendListItem(lastObjPet){
   let arrayValuePet = Object.values(lastObjPet);
   let tr = document.createElement('tr');

   arrayValuePet.forEach(value => {
      let td = document.createElement('td');
      let contentTd = document.createTextNode(value);
      td.appendChild(contentTd);
      tr.appendChild(td);
   })
   listWrapper.appendChild(tr);
}




// function appendListItem(arrayPet){
//    let li = document.createElement('li');
//    let contentLi = document.createTextNode(`${arrayPet.petName}, ${arrayPet.ownerName}, ${arrayPet.species}, ${arrayPet.breed}`);

//    li.append(contentLi);
//    listWrapper.append(li);
// }

// const Schia = new Pet("Schia", "Antonio", "Cane", "Labrador");
// const Nina = new Pet("Nina", "Ilaria", "Cane", "Labrador");
// const Bosco = new Pet("Bosco", "Luisa", "Cane", "Mixed breed");
// const Rarity = new Pet("Rarity", "Aurora", "Gatto", "Ragdoll");
// const Ulisse = new Pet("Bosco", "Luisa", "Cane", "Mixed breed");
// const Pedro = new Pet("Bosco", "Laura", "Gatto", "Siamese");

// let petName = document.getElementById('petName').value;
// console.log(petName);

// function reset(petNameForm, ownerNameForm, speciesForm, breedForm){
//    petNameForm = "";
//    ownerNameForm = "";
//    speciesForm = "";
//    breedForm = "";
//       console.log(petNameForm, ownerNameForm, speciesForm, breedForm);

// }
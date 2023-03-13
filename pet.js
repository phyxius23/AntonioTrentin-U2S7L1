class Pet {
   constructor (_petName, _ownerName, _species, _breed) {
      this.petName = _petName
      this.ownerName = _ownerName
      this.species =_species
      this.breed = _breed
   }

   static isSameOwner(pet1, pet2) {
      return pet1.ownerName === pet2.ownerName;
    }

}

let myForm = document.querySelector('#myForm');
let listWrapper = document.querySelector('#listWrapper');
let button = document.querySelector('.btn');
const arrayPet = [];

button.addEventListener('click', function(){
   let petNameForm = myForm.petName.value;
   let ownerNameForm = myForm.ownerName.value;
   let speciesForm = myForm.species.value;
   let breedForm = myForm.breed.value;

   // pusho i valori recuperati dal form all'interno di un array formato da più oggetti istanziati dalla classe Pet
   arrayPet.push(new Pet(petNameForm, ownerNameForm, speciesForm, breedForm));

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
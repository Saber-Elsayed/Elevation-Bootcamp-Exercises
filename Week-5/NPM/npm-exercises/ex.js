var validator = require("validator");
const { faker } = require("@faker-js/faker");

console.log(validator.isEmail("foo@bar.com"));
console.log(validator.isEmail("shoobert@dylan"));
console.log(validator.isMobilePhone("786-329-9958", "en-US")); //=> true
let blacklist = ["!", "?", ".", "@", "~", ",", "'"];
let text = "I'M SO EXCITED!!!~!";
let cleanedText = validator.blacklist(text, blacklist);
cleanedText = cleanedText.toLowerCase();
console.log(cleanedText);

const makeHuman = function (number) {
  const people = [];

  for (let i = 0; i < number; i++) {
    people.push(
      faker.image.url(),
      faker.person.firstName(),
      faker.company.name()
    );
  }
  return people;
};

const numberOfPeople = 5;
console.log(makeHuman(numberOfPeople));

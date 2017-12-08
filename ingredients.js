var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:

var index = 0;

while (index < ingredients.length) {
  console.log(ingredients[index]);
  index ++;
}

// Write a for loop that prints out the contents of ingredients:

for (i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:

for (i = ingredients.length; i >=0; i--) {
  // condition removes the eighth index from printing undefined -- I think this is what the industry calls a hack.
  if (ingredients[i] || false) {
    console.log(ingredients[i]);
  }
}

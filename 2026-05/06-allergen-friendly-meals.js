function getAllergenFriendlyMeals(meals, allergens) {
  const friendlyMeals = [];

  for (const [meal, ingredients] of meals) {
    const hasAllergen = allergens.some((allergen) =>
      ingredients.includes(allergen),
    );

    if (!hasAllergen) {
      friendlyMeals.push(meal);
    }
  }

  return friendlyMeals;
}

/*
Allergen Friendly Meals
Given an array of meals and an array of allergens to avoid, return the names of all the meals that contain none of the given allergens.

Each meal is in the format [meal, allergens], where meal is the name of the meal, and allergens is an array of the allergens the meal contains. For example, ["pasta", ["wheat", "milk"]].
Allergens to avoid will be an array of strings.
Return safe meal names in the same order given. If no meal is safe, return an empty array.
*/
console.log(
  getAllergenFriendlyMeals(
    [
      ["pasta", ["wheat", "milk"]],
      ["salad", ["nuts"]],
    ],
    ["milk"],
  ),
); // should return ["salad"].
console.log(
  getAllergenFriendlyMeals(
    [
      ["steak", ["soy"]],
      ["fried rice", []],
      ["fish tacos", ["fish", "wheat"]],
      ["chicken parmesan", ["wheat", "milk"]],
    ],
    ["soy", "fish"],
  ),
); // should return ["fried rice", "chicken parmesan"].
console.log(
  getAllergenFriendlyMeals(
    [
      ["oatmeal", ["nuts"]],
      ["pancakes", ["wheat", "milk"]],
      ["granola", []],
      ["yogurt", ["milk"]],
      ["eggs", ["eggs", "milk"]],
      ["toast", ["wheat"]],
    ],
    ["eggs", "milk"],
  ),
); // should return ["oatmeal", "granola", "toast"].
console.log(
  getAllergenFriendlyMeals(
    [
      ["oatmeal", ["nuts"]],
      ["pancakes", ["wheat", "milk"]],
      ["granola", []],
      ["yogurt", ["milk"]],
      ["eggs", ["eggs", "milk"]],
      ["toast", ["wheat"]],
    ],
    ["wheat", "nuts"],
  ),
); // should return ["granola", "yogurt", "eggs"].

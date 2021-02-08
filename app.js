// get random meals
for (let i = 0; i < 9; i++) {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(res => res.json())
        .then(data => randomMeals(data.meals[0]))
}

// put random meals in html
function randomMeals(meals) {
    const mealList = document.getElementById('meal-list');
    const mealDiv = document.createElement('div');
    mealDiv.addEventListener("click", mealInfo);
    mealDiv.className = "meal col-md-3";
    mealList.appendChild(mealDiv);
    mealDiv.style.display = 'block';
    mealDiv.innerHTML = `<img src=${meals.strMealThumb}>
    <h5>${meals.strMeal}</h5>
    `;
}

//search meals
document.getElementById('search-btn').addEventListener("click", function() {
    const mealName = document.getElementById("search-box").value;
    console.log(mealName);
    if (mealName) {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`)
            .then(res => res.json())

            // call function to show the information of meal
            .then(data => showMealInfo(data.meals[0], mealName))

            // show error if meal not found
            .catch(error => alert(`${mealName} not found`))
    }
    else {
        alert("Enter a meal name to search");
    }
})

// details of each meal
function mealInfo() {
    const mealName = this.getElementsByTagName('h5')[0].innerText;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`)
        .then(res => res.json())
        .then(data => showMealInfo(data.meals[0], mealName))
}


//home button to clear the meal information
document.getElementById('home').addEventListener("click", function() {
    const mealInfo = document.getElementById('meal-details');
    mealInfo.style.display = 'none';
    const mealList = document.getElementById('meal-list');
    mealList.style.display = "block";
    document.getElementById('search-box').value = '';
})

// show meal information in separate div
function showMealInfo(meal) {
    const mealDiv = document.getElementById('meal-details');
    mealDiv.style.display = "flex";
    mealDiv.style.backgroundColor = "orange";
    const mealList = document.getElementById('meal-list');
    mealList.style.display = "none";
    mealDiv.innerHTML = `<img src=${meal.strMealThumb}>
    <h5>${meal.strMeal}</h5>
    <br>
    <h5>Ingredients</h5>
    <ul>
         <li>${meal.strIngredient1}hello</li>
         <li>${meal.strIngredient2}</li>
         <li>${meal.strIngredient3}</li>
         <li>${meal.strIngredient4}</li>
         <li>${meal.strIngredient5}</li>
     </ul>
    `
}

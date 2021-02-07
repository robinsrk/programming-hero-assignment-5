for (let i = 0; i < 9; i++) {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(res => res.json())
        // .then(data => randomMeals(data))
        .then(data => randomMeals(data.meals[0]))
}

function randomMeals(meals) {
    const mealList = document.getElementById('meal-list');
    const mealDiv = document.createElement('div');
    // // mealDiv.createElement('img').src = meals.meals[0].strMealThumb;
    // console.log(mealList);
    mealDiv.addEventListener("click", mealInfo);
    // const pic = document.createElement('pic');
    // const p = document.createElement('p');
    // p.innerText(`${meals.meals[0].strMeal}`)
    // const picSrc=meals.strMealThumb;
    mealDiv.className = "meal col-md-3";
    // pic.src = `${picSrc}/preview`;
    // mealDiv.appendChild(pic);
    mealList.appendChild(mealDiv);
    // console.log(meals.meals[0].strMealThumb);
    // document.getElementById('search-box').addEventListener('click',)
    mealDiv.style.display = 'block';
    mealDiv.innerHTML = `<img src=${meals.strMealThumb}>
    <h5>${meals.strMeal}</h5>
    
    `;
}
document.getElementById('search-btn').addEventListener("click", function () {
    const searchName = document.getElementById("search-box").value;
    displayMealDetails(searchName);
})
const displayMealDetails = meal => {
    const meals = fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`)
        .then(res => res.json())
        .then(data => console.log(data.meals[0].strMeal));
    document.getElementById('meal-list').innerHTML = `<p>hello world</p>`
    document.getElement
}

function mealInfo() {
    console.log("hello world");
    const mealName = this.getElementsByTagName('h5')[0].innerText;
    const mealDiv = document.getElementById('meal-details');
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`)
        .then(res => res.json())
        .then(data => console.log(this))
        .then(data => function (data) {
            // mealDiv.innerHTML = `<img src=${data.meals[0].strMealThumb}
            // <h5>Ingredients</h5>
            // <ul>
            //     <li>${data.meals[0].strIngredient1}hello</li>
            //     <li>${data.meals[0].strIngredient2}</li>
            //     <li>${data.meals[0].strIngredient3}</li>
            //     <li>${data.meals[0].strIngredient4}</li>
            //     <li>${data.meals[0].strIngredient5}</li>
            // </ul>
            // `
            const p = document.createElement('p');
            p.innerText = "hello world";
            mealDiv.appendChild(p);
            mealDiv.innerHTML = `<img src=${meals.strMealThumb}>
    <h5>${meals.strMeal}</h5>
    
    `;
    mealDiv.style.backgroundColor= "balck";
        })

}
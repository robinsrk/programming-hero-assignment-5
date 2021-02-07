document.getElementById('search-btn').addEventListener("click", function(){
    const searchName = document.getElementById("search-box").value;
    console.log(searchName);
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=${"searchName"}')
    .then(res => res.json())
    .then(data => console.log(data))
})
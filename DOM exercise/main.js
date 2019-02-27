function makeRecipe() {
    var strText = document.getElementById("exampleFormControlTextarea1").nodeValue;

    var result = strText;
    document.getElementById(`spanResult`).textContent = result;

}
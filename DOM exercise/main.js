function makeRecipe() {
    let strText = document.getElementById("exampleFormControlTextarea1").value;
    let strText1 = document.getElementById("exampleFormControlInput1").value;
    let strText2 = document.getElementById("exampleFormControlTextarea2").value;
    
    let result = [strText, strText1, strText2]
    document.getElementById(`spanResult`).textContent = result;

    

   

}
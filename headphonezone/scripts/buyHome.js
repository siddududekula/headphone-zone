document.querySelector(".submit-btn").addEventListener("click", myfuction)
var arr1 = JSON.parse(localStorage.getItem("test_price")) || [];


function myfuction() {
    event.preventDefault()
  
    let data = {
        price: document.querySelector('input[type="checkbox"]:checked')
    }


  var data2=data.price.value;
    arr1.push(data2)
   
   
    localStorage.setItem("test_price", JSON.stringify(arr1))

    window.location.href="buy2nd.html";
   


}
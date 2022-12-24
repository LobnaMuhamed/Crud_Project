// var x = window.prompt("Enter your job:-")
// if (x =="Teacher")
// {
//     console.log ("your level is low");
// }

// else if (x== "Doctor")
// {
//     console.log ("your level is average");
// }

// else if (x=="Engineer")
// {
//     console.log ("you level is high");
// }

// else 
// {
//     console.log ("sorry");

// }


// var x = window.prompt("Enter your job:-")


// switch(x) {
//     case "Teacher":
//         console.log ("your level is low");
//         break;


//     case "Doctor":
//         console.log ("your level is average");
//         break;

//     case "Engineer":
//         console.log ("you level is high");
//         break;

//     default:
//         console.log ("sorry");

// }
// var cartona = "";
// for(var i=0 ; i<100  ; i++ )
// {   
//      cartona += '<div class="col-md-3"><img src="" class="wd-100"><h1>Lobna</h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p></div>'
// ;
// }
// document.getElementById("demo").innerHTML=cartona;


// function calproduct (price , profit , tax ) {
//      var result1 = price + profit ;
//      var result2 = result1 * tax ;
//      console.log (result2);
//      return result2 ;
// }
// var x = calproduct (30 , 15 , 1.7)





// function getRes ( e ,y)
// {
//      var sum = e +y
//      var result = sum *2
//      console.log (result) ;
// }
// getRes (x , 3)

// (function sayhello() {
//      var userName = document.getElementById("userName").value;
//      window.alert("Hello " + userName);
// })();


// var user = { 
//      firstName: ("Ahmed"),
//      age:25,
//      gender: ("Male"),
//      salary: 7000,
//      isMarried : true ,
//      wife : {firstName:("Aya"), age:23 , gender :("female")},
//      welcome : function (){
//           console.log ("welcome back");

//      }

// };
// console.log (use.age)

//      user.welcome();
// var family =["Mom","Hadeer","Noor","Donia","Lobna"]
// for ( var i=0 ;i < family.length;i++)
//      {
//           console.log (family[i])

//      }




var productName = document.getElementById("productName");
var productPrice = document.getElementById("productPrice");
var productCadegory = document.getElementById("productCadegory");
var productDescription = document.getElementById("productDescription");

var productsContainer;
var errors = ``;

if (localStorage.getItem("productList") == null) {
     productsContainer = [];
}
else {
     productsContainer = JSON.parse(localStorage.getItem("productList"))
     displayproducts();
}
function addProudct() {
     if (valetadProductName() == true) {
          var product = {
               name: productName.value,
               price: productPrice.value,
               category: productCadegory.value,
               desc: productDescription.value,

          }
          productsContainer.push(product);
          localStorage.setItem("productList", JSON.stringify(productsContainer));

          displayproducts();

          productClear();
     }
     else {
          document.getElementById("alert").innerHTML=errors;
     }

}

function productClear() {
     productName.value = "";
     productPrice.value = "";
     productCadegory.value = "";
     productDescription.value = "";
}
function displayproducts() {

     var cartoona = ``;

     for (var i = 0; i < productsContainer.length; i++) {

          cartoona += `<tr>
          <td>${i}</td>
          <td>${productsContainer[i].name}</td>
          <td>${productsContainer[i].price}</td>
          <td>${productsContainer[i].category}</td>
          <td>${productsContainer[i].desc}</td>
          <td><button onclick="updateProduct(${i})" class="btn btn-outline-warning">update</button></td>
          <td><button onclick="deleteProduct(${i})" class="btn btn-outline-danger">delete</button></td>
          </tr>`;

     }
     document.getElementById("tableForm").innerHTML = cartoona;
}



function checkInputs() {
     if (productName.value != "" && productPrice.value != "" && productCadegory.value != "" && productDescription.value != "") {
          return true;
     }
     else {
          return false;
     }
}
function deleteProduct(productIndex) {
     productsContainer.splice(productIndex, 1)
     localStorage.setItem("productList", JSON.stringify(productsContainer));

     displayproducts();
}
function searchProduct(searchTerm) {
     cartoona = ``;
     for (var i = 0; i < productsContainer.length; i++) {
          if (productsContainer[i].name.toLowerCase().includes(searchTerm.toLowerCase()) == true) {
               cartoona += `<tr>
               <td>${i}</td>
               <td>${productsContainer[i].name}</td>
               <td>${productsContainer[i].price}</td>
               <td>${productsContainer[i].category}</td>
               <td>${productsContainer[i].desc}</td>
               <td><button class="btn btn-outline-warning">update</button></td>
               <td><button onclick="deleteProduct(${i})" class="btn btn-outline-danger">delete</button></td>
     
               </tr>`;
          }

     }
     document.getElementById("tableForm").innerHTML = cartoona;
}
function updateProduct(productIndex) {
     productName.value = productsContainer[productIndex].name;
     productPrice.value = productsContainer[productIndex].price;
     productCadegory.value = productsContainer[productIndex].category;
     productDescription.value = productsContainer[productIndex].desc;
     localStorage.setItem("productList", JSON.stringify(productsContainer));

     displayproducts();


}
function valetadProductName() {
     var regex = /^[A-Z][a-z]{3,8}$/;
     if (regex.test(productName.value) == true) {
          return true;
     }
     else {
     
          errors += `<p> ProductName in-valid </p>` ;
          return false;
     }
}














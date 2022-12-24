var productName = document.getElementById("productName"); //koll input
var productCatagory = document.getElementById("productCatagory"); //koll input
var productdesc = document.getElementById("productdesc"); //koll input
var btnapp = document.getElementById("upp");
var Productcontainer;

if (localStorage.getItem("productlist") == null) {
  Productcontainer = [];
} else {
  Productcontainer = JSON.parse(localStorage.getItem("productlist"));
  displaydata();
}
//مشكله
function ADDproduct() {
  if (validation() == true) {
    var product = {
      Name: productName.value,
      Catagory: productCatagory.value,
      desc: productdesc.value,
    }
    Productcontainer.push(product);
    localStorage.setItem("productlist", JSON.stringify(Productcontainer));
    clearform();
    displaydata();
  } else {
    alert(" productname-invalid");
  }
}

function clearform() {
  productName.value = "";
  productCatagory.value = "";
  productdesc.value = "";
}
function displaydata() {
  var carton = ``;
  for (var i = 0; i < Productcontainer.length; i++) {
    carton += `<tr>
    <td>${i}</td> 
    <td>${Productcontainer[i].Name}</td>
    <td>${Productcontainer[i].Catagory}</td>
    <td>${Productcontainer[i].desc}</td>
    <td><button onclick="updateData(${i});" class="btn btn-outline-warning">Update</button></td>
    <td><button onclick="deletedata(${i});" class="btn btn-outline-danger">delete</button></td>
     </tr>`;
  }

  document.getElementById("tabledata").innerHTML = carton;
}
function checkempty() {
  if (
    productName.value != "" &&
    productdesc.value != "" &&
    productCatagory.value != ""
  ) {
    return true;
  } else {
    return false;
  }
}
function deletedata(index) {
  Productcontainer.splice(index, 1);
  localStorage.setItem("productlist", JSON.stringify(Productcontainer));
  displaydata();
}
function searchproduct(theSearch) {
  var cartoona = ``;
  for (var i = 0; i < Productcontainer.length; i++) {
    if (
      Productcontainer[i].Name.toLowerCase().includes(
        theSearch.toLowerCase()
      ) == true
    ) {
      cartoona += `<tr><td>${i}</td> 
     <td>${Productcontainer[i].Name}</td>
     <td>${Productcontainer[i].Catagory}</td>
     <td>${Productcontainer[i].desc}</td>
     <td><button class="btn btn-outline-warning">Update</button></td>
     <td><button onclick="deletedata(${i});" class="btn btn-outline-danger">delete</button></td>
       </tr>`;
    }
  }
  document.getElementById("tabledata").innerHTML = cartoona;
}
function updateData(app) {
  productName.value = Productcontainer[app].Name;
  productCatagory.value = Productcontainer[app].Catagory;
  productdesc.value = Productcontainer[app].desc;
  btnapp.innerHTML = "update";
}
//مشكله
function validation() {
  var regex = /^[A-Z][a-z]{3,8}$/;
  if (regex.test(productName.value) == true) {
    return true;
  } else {
      alert("In Valid")
    return false;
  }
}

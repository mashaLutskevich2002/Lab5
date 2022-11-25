//task1

function validPIB(pib_name) {
  let result = pib_name.match("^[а-яА-ЯІі]+ +[А-ЯІ]+.[А-ЯІ]+.$");
  return result;
}
function validVariant(variant) {
  let result = variant.match("^[м.]+ +[0-9]{6}$");
  return result;
}
function validGroup(group) {
  let result = group.match("^[А-ЯІ0-9-]{5}$");
  return result;
}
function validPhoneNumber(phone_number) {
  let result = phone_number.match("^[(0-9)-]{13,15}$");
  return result;
}
function validEmail(id_card) {
  let result = id_card.match("^([a-z0-9_-]+\.)*[a-z0-9_-]+@gmail+(\.[a-z0-9_-]+)*\.com$");
  return result;
}

function validFunc() {
  //валідність ПІБ
  const name = document.getElementById("name").value;
  if (validPIB(name)) {
    document.getElementById("name").style.border = "solid green";
    document.getElementById("nameValid").innerHTML = `ПІБ: ${name}`;
  } else {
    document.getElementById("name").style.border = "solid red";
    document.getElementById("nameValid").innerHTML = "Невірне ПІБ";
  }
  const group = document.getElementById("gruppa").value;
  if (validGroup(group)) {
    document.getElementById("gruppa").style.border = "solid green";
    document.getElementById("gruppaValid").innerHTML = `Група: ${group}`;
  } else {
    document.getElementById("gruppa").style.border = "solid red";
    document.getElementById("gruppaValid").innerHTML = "Невірна група";
  } 
  //валідність номеру телефону
  const phone = document.getElementById("phone").value;
  if (validPhoneNumber(phone)) {
    document.getElementById("phone").style.border = "solid green";
    document.getElementById("phoneValid").innerHTML = `Номер телефону:
    ${phone}`;
  } else {
    document.getElementById("phone").style.border = "solid red";
    document.getElementById("phoneValid").innerHTML = "Невірний телефон";
  }
  //валідність адреси
  const variant = document.getElementById("variant").value;
  if (validVariant(variant)) {
    document.getElementById("variant").style.border = "solid green";
    document.getElementById("variantValid").innerHTML = `Адреса:
    ${variant}`;
  } else {  
    document.getElementById("variant").style.border = "solid red";
    document.getElementById("variantValid").innerHTML = "Невірна адреса";
  }  
  //валідність пошти
  const email = document.getElementById("email").value;
  if (validEmail(email)) {
    document.getElementById("email").style.border = "solid green";
    document.getElementById(
      "emailValid"
    ).innerHTML = `Номер картки: ${email}`;
  } else {
    document.getElementById("email").style.border = "solid red";
    document.getElementById("emailValid").innerHTML =
      "Неправильна пошта";
  }
}

//task2
const main = document.getElementsByName("main");
const row1 = document.getElementById("row7");
const row2 = document.getElementById("row8");
const row3 = document.getElementById("row9");
const row4 = document.getElementById("row10");
const row5 = document.getElementById("row11");
const row6 = document.getElementById("row12");
const colorInput = document.getElementById("colorInput");
//зміна рядка на рандомний колір при наведенні на першку клітинку
function getRandom(min, max) {
  return Math.ceil(Math.random() * (max - min) + min);
}
main[0].addEventListener("mouseover", function () {
  row4.style.backgroundColor = `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)},
    ${getRandom(0, 255)})`;
});

main[0].addEventListener("mouseout", function () {
  row1.style.backgroundColor = "white";
  row1.style.backgroundColor = "white";
  row2.style.backgroundColor = "white";
  row3.style.backgroundColor = "white";
  row4.style.backgroundColor = "white";
  row5.style.backgroundColor = "white";
  row6.style.backgroundColor = "white";
});

//зміна коліра на обраний при кліці на першу клітинку
main[0].addEventListener("click", function () {
  row4.style.backgroundColor = colorInput.value;
});

main[0].addEventListener("dblclick", function () {
  row2.style.backgroundColor = colorInput.value;
  row4.style.backgroundColor = colorInput.value;
  row6.style.backgroundColor = colorInput.value;
});

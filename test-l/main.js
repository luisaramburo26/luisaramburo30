
const btnGenerar = document.getElementById('btn-generar');
const contenido = document.getElementById('contenido');



btnGenerar.addEventListener("click", () => {
  
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  var raw = JSON.stringify({
    "username": "actualizacion@gmail.com",
    "userpassword": "actualizacion",
    "usertype": 1
  });
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  
  fetch("https://tokendao.aforecoppel.com/oauthTokenDao/getToken", requestOptions)
    .then(response => response.text())
    .then(result => contenido.innerHTML = result)
    .catch(error => console.log('error', error));

});
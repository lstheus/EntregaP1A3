







document.querySelector("#btn-back").addEventListener("click", () => {
 window.history.back()

});

// logout


document.querySelector("#logout").addEventListener("click", () => {
  window.location.href="http://127.0.0.1:5500/src/TelaInicial/telaInicial.html";

 
 });

//  <button class="btnEntrar" >Entre</button>

            

//  <span>Ou</span>


// <button class="btnCadastrar">Cadastre-se</button></a>


document.querySelector(".btnEntrar").addEventListener("click", () => {
  window.location.href="http://127.0.0.1:5500/src/login/login.html";

 
 });

 document.querySelector("#btnCadastrar").addEventListener("click", () => {
  window.location.href="http://127.0.0.1:5500/src/register/register.html";

 
 });


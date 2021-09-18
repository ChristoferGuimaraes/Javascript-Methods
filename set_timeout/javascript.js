let time = document.querySelector("#num");
let button = document.querySelector("#but");
let res = document.querySelector("#res");
let i;

but.onclick = () => {
    res.innerHTML = 'Carregando...'
    setTimeout(() => {
    
    if (time.value <= 0) {
      return (res.innerHTML = "Digite um valor acima de 0");
    }
    res.innerHTML = "";
    if (time.value === "1") {
      res.innerHTML += `Demorou apenas ${time.value} segundo para aparecer <br>`;
    } else res.innerHTML += `Demorou ${time.value} segundos para aparecer <br>`;
  }, `${time.value * 1000}`);
  return
};

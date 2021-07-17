const params = { headers: { Accept: "application/json" } };

const btnJ = document.getElementsByClassName("btn-info")[0];
const btnP = document.querySelector(".btn-outline-light");

async function getDadJoke() {
  try {
    const res = await axios.get("https://icanhazdadjoke.com/", params);
    console.log(res.data.joke);
    return res.data.joke;
  } catch (err) {
    console.log(err);
    return "Something went wrong!"
  }
}

async function getBtc(){
  try {
    const pobj = await axios.get("https://api.cryptonator.com/api/ticker/btc-usd", params)
    console.log(pobj);
    return pobj.data.ticker;
  } catch (error) {
    console.log(error);
    return "Something went wrong!"; 
  }
}


btnJ.addEventListener("click", async function () {
  document.querySelector(".modal-title").textContent = "Yes. Here:";
  const joke = await getDadJoke();
  const list = document.getElementsByClassName("modal-body")[0];
  list.textContent = joke;
  // const newLI = document.createElement("li");
  // newLI.append(joke);
  // list.append(newLI);
});

btnP.addEventListener("click", async function(){
  document.querySelector(".modal-title").textContent = "BTC price:";
  const btc = await getBtc();
  console.log(btc);
  const cont = document.querySelector(".modal-body");
  cont.innerHTML = `Bitcoin Price: <b>${btc.price}</b> ${btc.target}`;
});

const spin = document.querySelector(".bgn");

spin.addEventListener("click", function(){
  spin.classList.add("spinner-border");
  spin.textContent = "";
});

document.querySelector(".bgn").addEventListener("click", function () {
  rickroll();
});
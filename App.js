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

const params1 = { headers: { Accept: "application/json" } }; // new params for coin API
params1.headers["X-CoinAPI-Key"] = "6C019375-E6A7-4CEB-8CE5-E60BEFE4FB03"; //I know it's not good but there is no server side code.

async function getBtc(){
  try {
    const pobj = await axios.get("https://rest.coinapi.io/v1/exchangerate/BTC/INR", params1)
    console.log(pobj);
    return pobj.data;
  } catch (error) {
    console.log(error);
    return "Something went wrong!"; 
  }
}


btnJ.addEventListener("click", async function () {
  document.querySelector(".modal-title").textContent = "Yes. Here:";
  const list = document.getElementsByClassName("modal-body")[0];
  const joke = await getDadJoke();
  list.textContent = joke;
});

btnP.addEventListener("click", async function(){
  document.querySelector(".modal-title").textContent = "BTC price:";
  const cont = document.querySelector(".modal-body");
  const btc = await getBtc();

  const price = Math.round(btc.rate);
  const time = new Date(btc.time);
  console.log(btc);
  
  cont.innerHTML = `Bitcoin Price: <b>${price}</b> ${btc.asset_id_quote}<p>Time:  ${time}</p>`;
});

const spin = document.querySelector(".bgn");

spin.addEventListener("click", function(){
  spin.classList.add("spinner-border");
  spin.textContent = "";
});

document.querySelector(".bgn").addEventListener("click", function () {
  rickroll();
});
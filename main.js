let total = document.querySelector(".total p");
let add = document.querySelector(".add p");
let wit = document.querySelector(".widthdraw p");
let amb = document.querySelector("#add");
let wib = document.querySelector("#with");
let inputMoney = document.querySelector("#ia");
let inputWidthdraw = document.querySelector("#iw");
let balance = document.querySelector("h2");
let bal = document.querySelector("#bal");
let Adds = document.querySelector("#Adds");
let wd = document.querySelector("#wd");

Adds.style.display = "none";
bal.style.display = "none";
balance.style.display = "none";
wd.style.display = "none";
total.innerHTML = 0;
add.innerHTML = 0;
wit.innerHTML = 0;
amb.addEventListener("click", () => {
    bal.style.display = "none";
    balance.style.display = "none";

    if (
        inputMoney.value === "0" ||
        inputMoney.value < 0 ||
        inputMoney.value === ""
    ) {
        bal.style.display = "inline";
        inputWidthdraw.value = null;
    } else {
        bal.style.display = "none";
        add.innerHTML = Number(add.innerHTML) + Number(inputMoney.value);
        total.innerHTML = Number(total.innerHTML) + Number(inputMoney.value);
        Adds.innerHTML = `Added Money ${inputMoney.value} $`;
        inputMoney.value = null;
        setTimeout(() => {
            Adds.style.display = "inline";
        }, 100);

        setTimeout(() => {
            Adds.style.display = "none";
        }, 1000);
    }
});
wib.addEventListener("click", () => {
    bal.style.display = "none";

    let Arif = total.innerHTML;
    if (
        inputWidthdraw.value === "0" ||
        inputWidthdraw.value < 0 ||
        inputWidthdraw.value === ""
    ) {
        balance.style.display = "none";
        bal.style.display = "inline";
        inputWidthdraw.value = null;
    } else if (Number(Arif) < Number(inputWidthdraw.value)) {
        balance.style.display = "inline";
        inputWidthdraw.value = null;
        bal.style.display = "none";
    } else {
        balance.style.display = "none";
        bal.style.display = "none";
        total.innerHTML = Number(total.innerHTML) - Number(inputWidthdraw.value);
        wit.innerHTML = Number(wit.innerHTML) + Number(inputWidthdraw.value);

        let ar = inputWidthdraw.value;
        wd.innerHTML = `Widthdraw Money ${ar} $`;
        setTimeout(() => {
            wd.style.display = "inline";
        }, 100);
        setTimeout(() => {
            wd.style.display = "none";
        }, 1000);
        inputWidthdraw.value = null;
    }
});
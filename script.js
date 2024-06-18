let timeoutId;
function convert() {
    let celsius = document.querySelector(".celsius").value;
    let fahrenheit = document.querySelector(".fahrenheit").value;

    if (timeoutId) {
        clearTimeout(timeoutId);
    }
    if (celsius !== "" || fahrenheit !== "") {
        if (celsius !== "") {
            const ctf = (parseFloat(celsius) * 9 / 5) + 32;
            document.querySelector(".fahrenheit").value = `${ctf.toFixed(2)}℉`;
        } else if (fahrenheit !== "") {
            const ftc = (parseFloat(fahrenheit) - 32) * 5 / 9;
            document.querySelector(".celsius").value = `${ftc.toFixed(2)}°C`;
        }
    }
    else{
       timeoutId= setTimeout(()=>{
            document.querySelector("p").innerText="Please Enter Correct Details";
        });
        setTimeout(() => {
            clearTimeout(timeoutId);
            document.querySelector("p").innerText = "";  
        }, 4000);
    }
}
function reset(){
    document.querySelector(".celsius").value = "";
    document.querySelector(".fahrenheit").value = "";
    document.querySelector("p").innerText = "";
    if (timeoutId) {
        clearTimeout(timeoutId);
    }
}

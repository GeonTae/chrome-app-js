
const clock = document.querySelector("h2.clock")

// clock.innerText = "dhdhdh"


// function sayHello() {
//     console.log("hello");
// }

// setInterval(sayHello, 5000); // interval:  2 argument (action, ms)
// setTimeout(sayHello, 5000) //delaying action


function getClock() {
    const date = new Date();
    const hours = date.getHours().toString().padStart(2,"0");
    const minutes =date.getMinutes().toString().padStart(2,"0");
    // const seconds = date.getSeconds().toString().padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");

    clock.innerText =`${hours}:${minutes}:${seconds}`;

    // clock.innerText = new Date().toLocaleTimeString();
    // clock.innerText = new Date().toLocaleTimeString("en-US", { hour12: false });
}
getClock()
setInterval(getClock,1000);

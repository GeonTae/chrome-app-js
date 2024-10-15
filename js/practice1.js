// alert("hi");

// console.log(54545454);console.log("lalala");

// const a = 5;
// const b = 2;

// let myName = "Tae";

// console.log(a + b);
// console.log(a * b);
// console.log(a / b);

// console.log("hello " + myName)

// myName = "GTae";

// console.log("your new name is " + myName)

// const amIFat = false;
// console.log(amIFat);

// const nothing = null;
// console.log(nothing);

// let something;
// console.log(something); // undefined


// const mon = "mon"
// const tue = "tue"
// const wed = "wed"

// const daysOfWeek = ["mon", "tue", "wed"];
 
// const nonsense = [1,2, "hello", daysOfWeek];

// console.log(daysOfWeek, nonsense);

// console.log(daysOfWeek[2])
// daysOfWeek[3] = "thu"
// console.log(daysOfWeek[3])

// daysOfWeek.push("fri")
// console.log(daysOfWeek[4])






// const player = {
//     name:"Tae",
//     points: 10,
//     fat: true,
// };

// console.log(player);
// console.log(player.name);
// console.log(player["name"]);

// player.fat = false;
// console.log(player["fat"]);

// player.lastname = "potato"
// console.log(player);


// function sayHello(nameOfPerson, age) {
//     console.log("Hello my name is "+nameOfPerson+" and age is "+age);
// }

// sayHello("Tae", 29);

// function plus(a,b){
//     console.log(a+b);
// }

// plus(1,7);

// const player = {
//     name: "nico",
//     sayHello: function (otherPersonsName){
//         console.log("hello "+ otherPersonsName + " nice to meet you");
//     },
// };

// console.log(player.name)
// player.sayHello("lynn")

// console.log(console);


const calculator = {
    add :function(a,b) {
        return (a+b);
    },

    minus :function(a,b) {
        return (a-b);
    },
    multiply : function(a,b) {
        return (a*b);
    },
    divide :function(a,b) {
        return (a/b);
    },
    powerof :function(a,b) {
        return (a**b);
    },
};

// console.log(calculator.divide(6,4));


// const age = prompt("How old");
// console.log(typeof age);

// console.log(typeof parseInt(age));
// console.log(parseInt(age));


// const age_ = parseInt(prompt("How old you 2"));
// // console.log(typeof age_);
// // console.log(isNaN(age_));
// console.log(age_);

// if(isNaN(age_)){
//     console.log("It's not a number");
// }
// else{
//     console.log("good");
// };

// document.title ="Hello"

// const title = document.getElementById("title");

// console.dir(title);
// console.log(title.id);
// console.log(title.className);
// title.innerText = "changed";

// const hellos = document.getElementsByClassName("hello");
// console.log(hellos[1]);

// const title = document.getElementsByTagName("h1")
// const title = document.querySelector(".hello h1")
const h1 = document.querySelector("div.hello:first-child h1")


// function handleh1Click(){
    // const currentColor = h1.style.color;
    // let newColor;
    // if (currentColor === "blue") {
    //     newColor="tomato";
    // }
    // else {
    //     newColor = "blue";
    // }
    // h1.style.color = newColor;
    // console.log(h1.style.color);
    // console.log(currentColor);
// }

// function handleh1Click(){

//     const clickClass = "clicked"
//     if(h1.classList.contains(clickClass)){
//         h1.classList.remove(clickClass);
//     }
//     else{
//         h1.classList.add(clickClass);
//     }
// }

function handleh1Click(){
    h1.classList.toggle("clicked");
}



function handleMouseEnter(){
    console.log("mouse is here!");
    h1.innerText = "mouse is here!";
}

function handleMouseLeave(){
    console.log("mouse is left!");
    h1.innerText = "mouse is gone!";
}

function handleActionCopy(){
    alert("copied!");
}

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}

console.log(h1);
console.dir(h1);

// h1.addEventListener("click", handleh1Click);
h1.onclick = handleh1Click;
// h1.addEventListener("mouseenter", handleMouseEnter);
// h1.addEventListener("mouseleave", handleMouseLeave);

// window.addEventListener("resize", handleWindowResize);
// window.addEventListener("copy", handleActionCopy);

// h1.addEventListener("mousemove", handleh1Click);
// h1.addEventListener("mouseleave", handleh1Click);
// h1.addEventListener("mouseout", handleh1Click);


function handleWindowResize() {

    const currentWindowWidth = window.innerWidth; 
    if (currentWindowWidth < 1000) {
        // document.body.style.backgroundColor = "blue"
        document.body.classList.add("resized-below-1000")
        document.body.classList.remove("resized-1000-1500")
        document.body.classList.remove("resized-over-1500")
    }
    else if (currentWindowWidth >= 1000 && currentWindowWidth <1500) {
        // document.body.style.backgroundColor = "yellow"
        document.body.classList.add("resized-1000-1500")
        document.body.classList.remove("resized-below-1000")
        document.body.classList.remove("resized-over-1500")
    }
    else {
    //    document.body.style.backgroundColor = "purple"
        document.body.classList.add("resized-over-1500")
        document.body.classList.remove("resized-1000-1500")
        document.body.classList.remove("resized-below-1000")
    }
  }
  
  


window.addEventListener("resize",handleWindowResize);
handleWindowResize();

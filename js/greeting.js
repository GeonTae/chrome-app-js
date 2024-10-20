const loginForm = document.querySelector(".login-form")
// const loginForm = document.getElementsByClassName("login-form")

const loginInput = loginForm.querySelector(".login-form input")
// const loginButton = loginForm.querySelector(".login-form button")

const link = document.querySelector("a");

const greeting = document.querySelector(".greeting")

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
//=========================+=========================+=========================+
function loginBtnClick() {
    // console.log("it's clicked!");
    // console.dir(loginInput);
    // console.log("hello", loginInput.value);
    const username = loginInput.value;
//     if(username ==="") {
//         alert("please write your name");
//     }
//     else if(username.length > 15 ){
//         alert("Your name is too long.")
//     }
    console.log(username);
}

function loginSubmit(event){
    event.preventDefault();
    // 브라우저가 기본 동작을 실행하지 못하게 막기 
    // event object는 preventDefault함수를 기본적으로 갖고 있음
    // console.log(loginInput.value);

    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);

    // localStorage.setItem(USERNAME_KEY, loginInput.value);

    loginForm.classList.add(HIDDEN_CLASSNAME);
    console.log(username);
    
    // greeting.innerText="Hi " + username;
    // paintGreetings_();
    paintGreetings(username);
}   

// 이 preventDefault 함수는 EventListener 함수의 '첫 번째 argument' 안에 있는 함수이다. 
// 첫 arument는 지금 막 벌어진 event들에 대한 정보를 갖고 있다.
// JS는(기본적으로)argument를 담아서 함수를 호출하는데, 
// 이 argument가 기본 정보들을 제공하고 있다. 
// ex) 누가 submit주체인지, 몇 시에 submit을 했는지 등등 콘솔에 출력해보면 알 수 있음

//1
// function paintGreetings_() {
//     const username = localStorage.getItem(USERNAME_KEY);
//     greeting.classList.remove(HIDDEN_CLASSNAME);
//     greeting.innerText=`Hi ${username}, nice to meet you!`;
// }

//2
function paintGreetings(username) {
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText=`Hi ${username}, nice to meow you!😸`;
}

function handleLinkClick(event){
    alert("clicked!")
    event.preventDefault();
    console.log(event);
    console.dir(event);
}

//=========================+=========================+=========================+
// loginButton.addEventListener("click",loginBtnClick)


// link.addEventListener("click",handleLinkClick)



const savedUsername = localStorage.getItem(USERNAME_KEY);

// reason to make the case below => when refresh, the form appears again without this.
if(savedUsername===null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", loginSubmit); //can be located of the ouside "if"
}
else { //when savedUsedname != null
    // loginForm.classList.add(HIDDEN_CLASSNAME); 
    // when you do here, it doesn't disappear until you refresh the website
    // so it's better to do it in the loginSubmit function
    // greeting.classList.remove(HIDDEN_CLASSNAME);
    // paintGreetings_()
    paintGreetings(savedUsername)
}

// username in the function loginSibmit is from loginInput.value;
// savedUsername in the "if" is from the localStroage
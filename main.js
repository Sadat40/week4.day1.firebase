import { ref, push, set, database, onValue } from "./firebase.js";
 
//get elements from index.html
let textInput = document.getElementById("textInput")
let titleInput = document.getElementById("titleInput")
let userInput = document.getElementById("userInput")

let submitBtn = document.getElementById("submitBtn")
let itemsContainer = document.getElementById("itemsContainer")
 

//refrence a part of our database
let textRef = ref(database,"text")
let titleRef = ref(database,"title")
let userRef = ref(database,"user")


//add item to database
submitBtn.onclick = function(event){
    event.preventDefault()

    let textInputVal = textInput.value
    console.log(textInputVal)
    textInput.value=""
    let newTextRef = push(textRef)
    set(newTextRef,textInputVal)

    let titleInputVal = titleInput.value
    console.log(titleInputVal)
    titleInput.value=""
    let newTitleRef = push(titleRef)
    set(newTitleRef,titleInputVal)

    let userInputVal = userInput.value
    console.log(userInputVal)
    userInput.value=""
    let newUserRef = push(userRef)
    set(newUserRef,userInputVal)
}

//show items on firebase in our items container
onValue(textRef, (snapshot)=>{
    itemsContainer.innerHTML = ""
    let data = snapshot.val();
    console.log(data)

    for(let key in data){
        console.log(data[key])
        
        let newTitle = document.createElement("h2")
        newTitle.innerHTML = data[key]

        let newUser = document.createElement("p")
        newUser.innerHTML = "Username: "+data[key]

        let newText = document.createElement("p")
        newText.innerHTML = data[key]

        itemsContainer.append(newTitle,newUser,newText)
    }
})
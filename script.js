let usrName = document.querySelector("#usrName")
let btnSbmt = document.querySelector(".btnsbmt")
let greeting = document.querySelector(".dsplyGrtng")

btnSbmt.addEventListener("click", () => {
  //removing any accidental or intentional spaces from the user input
  const name = usrName.value.trim()

  //display personalized messag if user has entered name otherwise alert the user to enter name
  if (name === "") {
    alert("Please enter your name!")
    return
  } else {
    let message = messageGen()
    greeting.innerHTML = `<span>Hello, ${name}!</span> Welcome! <br> ${message} ${name}!`
    usrName.value = ""
  }
})

// function for generating time based message

function messageGen() {
  const hour = new Date().getHours()
  if (hour >= 5 && hour < 12) {
    return "Good Morning"
  } else if (hour >= 12 && hour < 17) {
    return "Good Afternoon"
  } else if (hour >= 17 && hour < 21) {
    return "Good Evening"
  } else {
    return "Good Night"
  }
}

let name = document.querySelector("#usrName")
let btnSbmt = document.querySelector(".btnsbmt")
let msg = document.querySelector(".dsplyGrtng")

btnSbmt.addEventListener("click", () => {
  if (name.value !== "") {
    msg.textContent = `Hello, ${name.value}! Welcome to our app!`
    name.value = ""
  } else {
    alert("Enter a valid name please.")
  }
})

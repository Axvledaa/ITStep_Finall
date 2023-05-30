let delivery = document.getElementById("delivery")
let pickup = document.getElementById("pickup")


delivery.onclick = function(){
    pickup.classList.add("second")
    pickup.classList.remove("first")
    delivery.classList.add("first")
    delivery.classList.remove("second")
}

pickup.onclick = function(){
    pickup.classList.add("first")
    pickup.classList.remove("second")
    delivery.classList.add("second")
    delivery.classList.remove("first")
}
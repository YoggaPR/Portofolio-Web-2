var buyButton = document.getElementsByClassName("btn-primary")
var delButton = document.getElementsByClassName("btn-danger")
var purchase = document.getElementsByClassName("btn-dark")
console.log(buyButton)
console.log(document.getElementsByClassName("btn-primary")[1])

function prepareButton(){ 
    for(var i = 0; i < buyButton.length; i++ ){
        var button = buyButton[i]
        button.addEventListener("click", btnClick)
    }

    for(var i = 0; i < delButton.length; i++ ){
        var buttonDel = delButton[i]
        buttonDel.addEventListener("click", rmEl)
    }

    for(var i = 0; i < purchase.length; i++ ){
        var buttonPur = purchase[i]
        buttonPur.addEventListener("click", purchaseItem)
    }
}

prepareButton()

function rmEl(event){
    var btnTarget = event.target
    btnTarget.parentElement.parentElement.remove()
}

function btnClick(event){
    var btnTarget = event.target
    var itemVal = btnTarget.parentElement
    var imgVal = itemVal.getElementsByClassName("itemImage")[0].src
    var nameVal = itemVal.getElementsByClassName("itemName")[0].innerText
    var priceVal = itemVal.getElementsByClassName("itemPrice")[0].innerText
    addToCart(imgVal,nameVal,priceVal)
}

function addToCart(i,n,p){
    var addNanti = document.getElementsByClassName("kart")[0]
    var elBaru = document.createElement("div")
    var htmComp1 = `
    <div class="cart-row">
        <div class="cart-row cart-row1">
            <img src="${i}" alt="">
        </div>
        <div class="cart-row2"><p>${p}</p></div>
        <div class="cart-row3"><p>${n}</p></div>
        <div class="cart-row4"><button type="button" class="btn btn-danger">Delete</button></div>
    </div>`
    elBaru.innerHTML = htmComp1
    addNanti.append(elBaru)
    prepareButton()
}

function purchaseItem(){
    alert("Thank you for your purchase")
}
var input = document.getElementById("todoInput")
var ulParent = document.getElementById("ulParent")

function addTodo(){

    if(!input.value){
        alert("ENTER TODO VALUE")
        return
    }
    var liElement = document.createElement("li")
    var liTxt = document.createTextNode(input.value)
    liElement.appendChild(liTxt)
    // console.log(liElement)
    liElement.className = "list-group-item d-flex w-75 p-3 text-white mx-auto align-items-center justify-content-between"
    liElement.setAttribute("style" , "background-color: black;")
    

    var div = document.createElement("div")
    var editBtn = document.createElement("button")
    var editTxt = document.createTextNode("Edit")
    editBtn.appendChild(editTxt)
    editBtn.className = "btn "
    editBtn.setAttribute("style", "background-color: green;")
    editBtn.setAttribute("onclick" , "editBtn(this)")

    var removeBtn = document.createElement("button")
    var removeTxt = document.createTextNode("Delete")
    removeBtn.appendChild(removeTxt)
    removeBtn.className = " btn mx-3"
    removeBtn.setAttribute("style", "background-color: red;")
    removeBtn.setAttribute("onclick" , "removeBtn(this)")


    // console.log(removeBtn)

    div.appendChild(editBtn)
    div.appendChild(removeBtn)
    liElement.appendChild(div)

    ulParent.appendChild(liElement)
    input.value = ""
}

function editBtn(element){
    console.log("editnBtn", element.parentNode.parentNode.firstChild.nodeValue)
    var li = element.parentNode.parentNode
    var placeholder = li.firstChild.nodeValue
    var editValue = prompt("Edit Value" , placeholder)

    li.firstChild.nodeValue = editValue

}

function removeBtn(removed){
    removed.parentNode.parentNode.remove()
}

function clearAll(){
    ulParent.innerHTML = " "
}
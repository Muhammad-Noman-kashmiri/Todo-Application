var list=document.getElementById("list");

function addTodo(){
    var todo_item=document.getElementById("todo-item")

//create li
    var li=document.createElement('li')
    var liText=document.createTextNode(todo_item.value)
    li.appendChild(liText)

    if(liText>60){
        li.setAttribute("class","li")
    }
  

   //create delete button 
var delBtn=document.createElement('button')
var delText=document.createTextNode("Delete")
delBtn.setAttribute("class","btn")
delBtn.setAttribute("onclick","deleteItem(this)")

delBtn.appendChild(delText)
li.appendChild(delBtn)
 //create Edit button 
 var editBtn=document.createElement('button')
 var editText=document.createTextNode("Edit")
 editBtn.appendChild(editText)
 li.appendChild(editBtn)
 editBtn.setAttribute("onclick","editItem(this)")
 editBtn.setAttribute("class","ebtn")

    list.appendChild(li)
    todo_item.value=""
    console.log(li)
}


function deleteItem(d){
d.parentNode.remove()
}



function deleteAll(){
  list.innerHTML=""
    }

    function editItem(e) {
var val= e.parentNode.firstChild.nodeValue;
var editValue=prompt("Ënter Edit Value",val)    
e.parentNode.firstChild.nodeValue=editValue
console.log(e.parentNode.firstChild)   
    }






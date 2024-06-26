// add item
const form=document.querySelector(".form");
form.addEventListener("submit" , function(ev){

    ev.preventDefault(); 

    let input=document.querySelector("#inp");
    let value=input.value;
    //console.log(value);
    addItem(value);
    input.value="";
})

function addItem(value){

    let ul=document.querySelector(".TaskList");

    let li=document.createElement("li");   // creating element
    li.classList.add("listItem");          // adding class

    li.innerHTML=`${value}<span><button class="delete">Delete</button></span>`;

    ul.append(li);
}

// delete
const ul = document.querySelector(".TaskList");
//console.log(ul);

ul.addEventListener("click" ,function(ev){
    //console.log(ev);
    let classname = ev.target.className;
    //console.log(ev.target.className);

    let item = ev.target;

    if(classname=="delete"){

        let itemToBeDlt =item.parentElement.parentElement;
        itemToBeDlt.remove();
        //console.log(itemToBeDlt);
    }
} )
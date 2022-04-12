const form = document.querySelector(".typing-area"),
//incoming_id = form.querySelector(".incoming_id").value,
inputField = form.querySelector(".input-field"),
sendBtn = form.querySelector("button"),
chatBox = document.querySelector(".chat-box");

form.onsubmit = (e)=>{
    e.preventDefault();
}


sendBtn.onclick = ()=>{
    //start ajax
    let xhr = new XMLHttpRequest(); //create xml object
    xhr.open("POST", "php/insert-chat.php", true);
    xhr.onload = ()=>{
      if(xhr.readyState === XMLHttpRequest.DONE){
          if(xhr.status === 200)
          {
              inputField.value="";
              scrollToBottom()
          }
      }
    }
    //send the form data through ajax to php
    let formData = new FormData(form); //creating new formdata object
    xhr.send(formData); //sending the form data to php
}

chatBox.onmouseenter = ()=>{  //help to keep scrolling cause ajax response every 500 ms this function prevent this
    chatBox.classList.add("active");
}

chatBox.onmouseleave = ()=>{
    chatBox.classList.remove("active");
}

setInterval(() =>{
    //start ajax
    let xhr = new XMLHttpRequest(); //creating xml object
    xhr.open("POST", "php/get-chat.php", true);
    xhr.onload = ()=>{
      if(xhr.readyState === XMLHttpRequest.DONE){
          if(xhr.status === 200)
          {
            let data = xhr.response;
            chatBox.innerHTML=data;
            if(!chatBox.classList.contains("active")){ //if active class not contains in chatbox the scroll to bottom 
                scrollToBottom();
              }
          }
      }
    }
    let formData = new FormData(form); //creating new formdata object
    xhr.send(formData); //sending the form data to php
    
  }, 500); //this function will run frequently after 500ms

function scrollToBottom(){
    chatBox.scrollTop = chatBox.scrollHeight;
}
    
const searchBar = document.querySelector(".users .search input"),
searchBtn = document.querySelector(".users .search button");

searchBtn.onclick = () =>{
    searchBar.classList.toggle("active");
    searchBar.focus();
    searchBtn.classList.toggle("active")

}






setInterval(() =>{
    //start ajax
    let xhr = new XMLHttpRequest(); //creating xml object
    xhr.open("GET", "php/users.php", true);
    xhr.onload = ()=>{
      if(xhr.readyState === XMLHttpRequest.DONE){
          if(xhr.status === 200){
            let data = xhr.response;
            if(!searchBar.classList.contains("active")){
              usersList.innerHTML = data;
            }
          }
      }
    }
    xhr.send();
  }, 500); //this function will run frequently after 500ms
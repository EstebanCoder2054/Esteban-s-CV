

data = {
    id:5,
    name:"juan"
}

fetch("https://randomuser.me/api/",{
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
        "Content-Type": "application/json",
        // "Content-Type": "application/x-www-form-urlencoded",
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
}).then((value) =>{
    return value.json();
}).then((value) => {
    return value.results[0]
}).then((value) => {
    let nombre = document.getElementById("nombre");
    nombre.innerHTML = value.name.title + " " + value.name.first + " " + value.name.last;
})



let about = document.getElementById("about");
let getAbout = document.getElementById("getAbout");
let resume = document.getElementById("resume");
let getResume = document.getElementById("getResume");
let works = document.getElementById("works");
let getWorks = document.getElementById("getWorks");
let blog = document.getElementById("blog");
let getBlog = document.getElementById("getBlog");
let contact = document.getElementById("contact");
let getContact = document.getElementById("getContact");

function remove() {
    about.classList.remove('view');
    getAbout.classList.remove('selected');
    resume.classList.remove('view');
    getResume.classList.remove('selected');
    works.classList.remove('view');
    getWorks.classList.remove('selected');
    blog.classList.remove('view');
    getBlog.classList.remove('selected');
    contact.classList.remove('view');
    getContact.classList.remove('selected');
}

getAbout.addEventListener('click', function (e) {
    if (window.innerWidth > 1040) {
        e.preventDefault();
        remove('about');
        about.classList.add('view');
        getAbout.classList.add('selected');
    }

});
getResume.addEventListener('click', function (e) {
    if (window.innerWidth > 1040) {
        e.preventDefault();
        remove();
        resume.classList.add('view');
        getResume.classList.add('selected');
    }
})
getWorks.addEventListener('click', function (e) {
    if (window.innerWidth > 1040) {
        e.preventDefault();
        remove();
        works.classList.add('view');
        getWorks.classList.add('selected');
    }
})
getBlog.addEventListener('click', function (e) {
    if (window.innerWidth > 1040) {
        e.preventDefault();
        remove();
        blog.classList.add('view');
        getBlog.classList.add('selected');
    }
})
getContact.addEventListener('click', function (e) {
    if (window.innerWidth > 1040) {
        e.preventDefault();
        remove();
        contact.classList.add('view');
        getContact.classList.add('selected');
    }

})

var email = document.getElementById("email");
var form = document.getElementById("form");

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I expect an e-mail, darling!");
  } else {
    email.setCustomValidity("");
  }
});

form.addEventListener("submit", function (event) {
    event.preventDefault();
  });

 //Empieza mi código - Esteban Escobar
 
 //obteniendo los valores por su id desde el HTML
let all = document.getElementById("All");
let photo = document.getElementById("Photo");
let video = document.getElementById("Video");
let music = document.getElementById("Music");
let design = document.getElementById("Design");

//agrupando los elementos por el nombre de su respectiva clase
let fotos = [];
let videos = [];
let musicas = [];
let diseños = [];
fotos = document.getElementsByClassName("foto");
videos = document.getElementsByClassName("video");
musicas = document.getElementsByClassName("musica");
diseños = document.getElementsByClassName("diseño");

//creando el contador de elemnto (fotos) en total
let cont = 0
cont = fotos.length + videos.length + musicas.length + diseños.length;

//añadiendo el evento a cada item del menú
all.addEventListener("click", function(event){
    console.log("has presionado en All");
    
    for(let i = 0; i < cont; i++){
        
        fotos[i].style.display = "block";
        videos[i].style.display = "block";
        musicas[i].style.display = "block";
        diseños[i].style.display = "block";
        
  }

});

photo.addEventListener("click", function(event){
    console.log("has presionado en photo");
    
    for(let i = 0; i < fotos.length; i++){
        
        fotos[i].style.display = "block";
        videos[i].style.display = "none";
        musicas[i].style.display = "none";
        diseños[i].style.display = "none";
        
    }
});

video.addEventListener("click", function(event){
    console.log("has presionado en video");

    for(let i = 0; i < videos.length; i++){

        fotos[i].style.display = "none";
        videos[i].style.display = "block";
        musicas[i].style.display = "none";
        diseños[i].style.display = "none";
        
    }
});

music.addEventListener("click", function(event){
    console.log("has presionado en music");

    for(let i = 0; i < musicas.length; i++){

        fotos[i].style.display = "none";
        videos[i].style.display = "none";
        musicas[i].style.display = "block";
        diseños[i].style.display = "none";
        
        
    }
});

design.addEventListener("click", function(event){
    console.log("has presionado en design");

    for(let i = 0; i < diseños.length; i++){

        fotos[i].style.display = "none";
        videos[i].style.display = "none";
        musicas[i].style.display = "none";
        diseños[i].style.display = "block";
        
        
    }
});

//aplicando el modal en JS
let modal = document.getElementById("myModal");

//el span cerrará el modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Get the image's id that opens the modal
let abrirModal1Btn = document.getElementById("abrirImg1");
let abrirModal2Btn = document.getElementById("abrirImg2");
let abrirModal3Btn = document.getElementById("abrirImg3");
let abrirModal4Btn = document.getElementById("abrirImg4");
let abrirModal5Btn = document.getElementById("abrirImg5");
let abrirModal6Btn = document.getElementById("abrirImg6");
let abrirModal7Btn = document.getElementById("abrirImg7");
let abrirModal8Btn = document.getElementById("abrirImg8");

// When the user clicks the button, open the modal 
abrirModal1Btn.onclick = function() {
    modal.style.display = "block";
    console.log("1"); 
}

abrirModal2Btn.onclick = function() {
    modal.style.display = "block";
    console.log("2");
}

abrirModal3Btn.onclick = function() {
    modal.style.display = "block";
}

abrirModal4Btn.onclick = function() {
    modal.style.display = "block";
}

abrirModal5Btn.onclick = function() {
    modal.style.display = "block";
}

abrirModal6Btn.onclick = function() {
    modal.style.display = "block";
}

abrirModal7Btn.onclick = function() {
    modal.style.display = "block";
}

abrirModal8Btn.onclick = function() {
    modal.style.display = "block";
}

//guardando la info del formulario en el local storage
let nombreCompleto = document.getElementById("name");

let correo = document.getElementById("email")

let mensaje = document.getElementById("message");

let botonEnviar = document.getElementById("btnEnviar");

botonEnviar.addEventListener("click", function(event){

    let persona = {
        nombreCompleto: nombreCompleto,
        correo: correo,
        mensaje: mensaje
     }
    
    localStorage.setItem("datos", JSON.stringify(persona)); 

});

//para que el objeto anterior pase al local storage no como objeto si no como string se usa la función: JSON.stringify()
//para que el objeto pase de ser un string a un objeto se usa la función JSON.parse
//para comprobar que si me está quedando con valores verídicos puedo retornarlos con la siguiente función:
obtener_localStorage = function(){

    let individuo = JSON.parse(  localStorage.getItem("persona")  );

    console.log(individuo);

}

obtener_localStorage();


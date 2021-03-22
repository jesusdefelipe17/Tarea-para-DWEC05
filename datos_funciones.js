function inicio() {

//Se obtiene el valor de la URL desde el navegador
var actual = window.location+'';
//Se realiza la división de la URL
var split = actual.split("?");
//Se obtiene el ultimo valor de la URL

var final = split[1].replace(/%20/g, " ")

var arrayDatos = final.split("+");


console.log(arrayDatos);


/*
<div class="column">
    <div class="card">
      <img src="/w3images/team1.jpg" alt="Jane" style="width:100%">
      <div class="container">
        <h2>Jane Doe</h2>
        <p class="title">CEO & Founder</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>example@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
*/

    





    var tituloImagen = document.createElement("h2");
    tituloImagen.id="tituloImagen";
    tituloImagen.innerText = arrayDatos[0];
    document.getElementById("container").appendChild(tituloImagen);

    var srcImagen = document.createElement("img");
   
    
    var srcImagen = document.getElementById("imagen");
    srcImagen.src = arrayDatos[2];
    
    var descripcionImagen = document.createElement("P");
    descripcionImagen.id="descripcionImagen";
    descripcionImagen.innerText = arrayDatos[1];
    document.getElementById("container").appendChild(descripcionImagen);
    
    
    
    var coordsImagen = document.createElement("P");
    coordsImagen.id="coordsImagen";
    coordsImagen.innerText = arrayDatos[3];
    document.getElementById("container").appendChild(coordsImagen);
    
    var authorImagen = document.createElement("P");
    authorImagen.id="authorImagen";
    authorImagen.innerText = arrayDatos[4];
    document.getElementById("container").appendChild(authorImagen);
    
    var categoriaImagen = document.createElement("P");
    categoriaImagen.id="categoriaImagen";
    categoriaImagen.innerText = arrayDatos[5];
    document.getElementById("container").appendChild(categoriaImagen);


}

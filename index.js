const app1 = document.getElementById('kevin');
const app2 = document.getElementById('maria');
let mensaje_1 = "Kevin Enrique Peña Galindo";
let mensaje_2 = "Maria Elena Ortega Caratagena";


function nombre(app,mensaje) {

const typewriter = new Typewriter(app, {
    loop:true,
    delay:75
});

typewriter
.typeString(mensaje)
.pauseFor(500)
.start();

}

nombre(app1,mensaje_1);
nombre(app2,mensaje_2);
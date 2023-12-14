/*Este es el archivo de configuración de Vue*/
console.log("elementos vue");
console.log(Vue);

const estudiantes=[{nombre:'Reymon', apellido:'Hidalgo'}, {nombre:'Alexander', apellido:'Beltrán'},
{nombre:'Alexa', apellido:'Beltrán'},  {nombre:'Anahí', apellido:'Beltrán'},
{nombre:'Alexander', apellido:'Zurita'}]
console.log(estudiantes)
console.table(estudiantes)

const app = Vue.createApp({
  /*para que Vue reconozco el código javascript usamos las llaves en el lambda
  /*  template:`
    <h1>Hola Mundo</h1>
    <p>Desde App.js</p>
   
    <h6>{{1+1}}</h6>
    <p>{{[1,2,3,4,5,6,7]}}</p>
    <p>{{false? "verdadero ; 'falso'"}}</p>
    `
    */
  /*OPTIONS API */
  methods: {
    cambiarMensaje() {
      console.log("Se está cambiando el mensaje");
      console.log(this.mensaje);
      this.mensaje = "Valor cambiado: :)";
    },
  sumar() {
    console.log("Sumando...");
    console.log(this.valor);
    this.valor++;
  },
  agregarEstudiante(){
    console.log("Agregando estudiante...");
    //const estu={nombre:this.nombre, apellido:this.apellido};
    //Para agregar al inicio de la lista
    //this.lista.unshift(estu)
    //Para agregar al final de lista
    this.lista.push({nombre:this.nombre, apellido:this.apellido})
  },
  //El atributo event viaja por defecto
  presionandoTecla(event){
    console.log("presionando...")
    console.log(event.charCode)
    if(event.charCode===13 && document.getElementById("idApellido").innerText){
      this.agregarEstudiante()
    }
  }
  },
  watch: {},
  /*Controlamos el modelo con data; con sus Propiedades reactivas*/
  data() {
    return {
      mensaje: "Hola mundo desde Vue.js",
      valor: 100,
      lista:estudiantes,
      nombre:null,
      apellido:null
    };
  },
});
/* este es el Id para llamar en el html*/
app.mount("#myApp");

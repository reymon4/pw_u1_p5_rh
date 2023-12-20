console.log("elementos vue");
console.log(Vue);

/*  DECLARACION DE ESTUDIANTES */
const estudiantes = [

  { nombre: 'Nicole', apellido: 'Zurita', edad: 22 },
  { nombre: 'Julia', apellido: 'Beltrán', edad: 45 },
  { nombre: 'Reymon', apellido: 'Hidalgo', edad: 24 }
]
console.table(estudiantes)

const app = Vue.createApp({

  /*OPTIONS API */
  methods: {
    agregarEstudiante(){
      console.log('Agregando Estudiante...')
      this.lista.push({nombre: this.nombre, apellido: this.apellido, edad: this.edad}) 
      console.log(this.nombre)
    },
  },


  watch: {},


  data() {
    return {
      lista:      estudiantes,
      nombre:     undefined,
      apellido:   undefined,
      edad:       undefined
    };
  },
});
app.mount("#studentForm");

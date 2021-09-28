exports.createPages = async ({actions, graphql, reporter}) => {

    //trae las habitaciones para saber cuantas paginas hay que crear
    const resultado = await graphql(`   
    query {
        allDatoCmsHabitacion {
            nodes {
                slug
        }
      }
    }
    `)
    
    //me arroja un error en consola si hago mal el query
    if(resultado.errors) {  
        reporter.panic("No hubo resultados", resultado.errors)
    }

    const habitaciones = resultado.data.allDatoCmsHabitacion.nodes

    //si hay habitaciones, crear las paginas
    habitaciones.forEach(habitacion => {    {/*itero sobre las habitaciones para crear su correspondiente pagina dinamicamente*/}
        actions.createPage({    //createPage toma ciertos argumentos para utilizar determinado componente
            path: habitacion.slug,  //va a crear la ruta segun el nombre que tenga el slug
            component: require.resolve("./src/components/habitaciones.js"), //le indico que componente va a cargar
            context: {
                slug: habitacion.slug   //slug va a ser una variable que se va a pasar a habitaciones.js
            }
        })
    });
}
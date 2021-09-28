import { graphql, useStaticQuery } from "gatsby";

const useHabitaciones = () => {

    //obtengo los datos de todas las habitaciones
    const data = useStaticQuery(graphql`
    query {
        allDatoCmsHabitacion {
            nodes {
                id
                titulo
                contenido
                slug
                imagen {
                    gatsbyImageData
                }
            }
        }
    }
    `)

    
    return data.allDatoCmsHabitacion.nodes.map(habitacion => ({ //envio los datos de cada habitacion a los demas componentes
        titulo: habitacion.titulo,
        id: habitacion.id,
        contenido: habitacion.contenido,
        imagen: habitacion.imagen,
        slug: habitacion.slug,
    }))

}
 
export default useHabitaciones;
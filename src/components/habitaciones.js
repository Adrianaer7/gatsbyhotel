import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage as Imagen } from 'gatsby-plugin-image';
import Layout from "../components/layout"
import { css } from '@emotion/react';

//obtengo la todos los datos de la habitacion segun la variable slug que le paso desde el gatsby-node
export const query = graphql`   
query($slug: String!) {
	allDatoCmsHabitacion(filter: {slug: { eq: $slug }}) {
		nodes {
		titulo
        contenido
        imagen {
				gatsbyImageData
            }
        }
    }
}
`

const HabitacionTemplate = ({data}) => {    //obtengo la data de la consulta de arriba.

    const {titulo, contenido, imagen} = data.allDatoCmsHabitacion.nodes[0]    //como va a haber una sola habitacion por pagina, va a traer el array siempre en posicion 0

    return ( 
        <Layout>
            <main
                css={css`
                    margin: 0px auto;
                    max-width: 1200px;
                `}
            >
                <h1
                    css={css`
                        text-align: center;
                        margin-top: 4rem;
                    `}
                >{titulo}</h1>
                <p>{contenido}</p>
                <Imagen image={imagen.gatsbyImageData}/>
            </main>
        </Layout>
     );
}
 
export default HabitacionTemplate;
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage as Imagen } from 'gatsby-plugin-image';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const TextoInicio = styled.div`
    padding-top: 4rem;
    max-width: 1200px;
    width: 95%;
    margin: 0px auto;

    @media(min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 1rem;
    }

    p {
        line-height: 2;
    }
`

const ContenidoInicio = () => {

    //traigo toda la info de la pagina principal
    const informacion = useStaticQuery(graphql` 
    query {
        allDatoCmsPagina(filter: {slug: {eq: "inicio"}}) {
            nodes {
                titulo
                contenido
                imagen {
                    gatsbyImageData
                }      
            }
      }
    }
    `)

    const {titulo, contenido, imagen} = informacion.allDatoCmsPagina.nodes[0]

    return ( 
        <>
            <h2
                css={css`
                    text-align: center;
                    font-size: 4rem;
                    margin-top: 4rem;
                `}
            >{titulo}
            </h2>

            <TextoInicio>
                <p>{contenido}</p>
                <Imagen image={imagen.gatsbyImageData} alt="inicio"/>  {/*El GatsbyImage sirve para achicar el peso de la imagen */}
            </TextoInicio>
        </>
     );
}
 
export default ContenidoInicio;
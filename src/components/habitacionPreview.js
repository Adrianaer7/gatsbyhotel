import React from 'react';
import { GatsbyImage as Imagen } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const Boton = styled(Link)`
    margin-top: 2rem;
    padding: 1rem;
    background-color: rgba(44,62,80,.85);
    width: 100%;
    color: white;
    display: block;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 700;
    text-align: center;
    
`

const HabitacionPreview = ({habitacion}) => {   //obtengo los datos de la habitacion que viene del array del index.js

    const {contenido, imagen, titulo, slug} = habitacion

    return ( 
        <div
            css={css`
                border: 1px solid #e1e1e1;
                margin-bottom: 2rem;
            `}
        >
            <Imagen
                image={imagen.gatsbyImageData} alt="habitaciones"
            />
            <div
                css={css`
                    padding: 3rem;
                `}
            >
                <h3
                    css={css`
                        font-size: 3rem;
                    `}
                >{titulo}
                </h3>

                <p
                    css={css`   //pongo todo esto para que el boton se quede abajo en la card aunque el texto sea corto
                    overflow: hidden;
                    height:300px;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;

                    `}
                >{contenido}
                </p>

                <Boton to={slug}>Ver habitacion</Boton>
            </div>
        </div>
     );
}
 
export default HabitacionPreview;
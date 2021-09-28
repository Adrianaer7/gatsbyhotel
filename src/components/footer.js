import React from 'react';
import { Link } from 'gatsby';
import Navegacion from './nav';
import { css } from '@emotion/react';
import styled from '@emotion/styled';


const EnlaceHome = styled(Link)`
    color: white;
    text-align: center;
    text-decoration: none;
`

const Footer = ({title}) => {   //traigo el titulo del layout

    const year = new Date().getFullYear()   //consigo el año para poder ponerlo abajo

    return (
        <>
            <footer
                css={css`
                    background-color: rgb(44,62,80);
                    margin-top: 5rem;
                    padding: 1rem;
                `}
            >
                <div
                    css={css`
                        max-width: 1200px;
                        margin: 0px auto;

                        @media (min-width: 768px) {
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                        }
                    `}
                >
                    <Navegacion/>

                    <EnlaceHome to="/">
                        <h1>Hotel Gatsby</h1>
                    </EnlaceHome>
                    
                </div>
            </footer>
            <p
                css={css`
                    text-align: center;
                    color: white;
                    background-color: rgb(33,44,55);
                    margin: 0px;
                    padding: 1rem;
                `}
            >
                {title}. Todos los derechos reservados {year} &copy;
            </p>
        </>
     );
}
 
export default Footer;
import React from 'react';
import { Helmet } from 'react-helmet';  //Esto me permite modificar el nombre de la pagina e importar fuentes, etc...
import Header from './header';
import Footer from './footer';
import useSeo from "../hooks/use-seo"
import { Global, css } from '@emotion/react';

const Layout = (props) => {

    const seo = useSeo()    //traigo del hook use-seo.js

    const {fallbackSeo: {title, description}} = seo   //extraigo los valores que necesito


    return ( 
        <>
            <Global
               styles={css` //al ser Global, tengo que llamarlo por styles. Si es css, puedo llamarlo por css
                    html {
                        font-size: 62.5%;
                        box-sizing: border-box; //esto y el before y after de abajo son para que las cards tengan el mismo margen de derecha e izquierda. Solucion encontrada en https://www.paulirish.com/2012/box-sizing-border-box-ftw/
                    }
                    *, *:before, *:after {
                    box-sizing: inherit;
                    }
                    body {
                        font-size: 18px;
                        font-size: 1.8rem;
                        line-height: 1.5;
                        font-family: "PT Sans", sans-serif;
                    }
                    h1, h2, h3 {
                        margin: 0px;
                        line-height: 1.5;
                    }
                    h1, h2 {
                        font-family: "Roboto", serif;
                    }
                    h3 {
                        font-family: "PT Sans", sans-serif;
                    }
                    ul {
                        list-style: none;
                        margin: 0;
                        padding: 0;
                    }
               `} 
            />
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />   {/*Muestra una descripcion en google de el contenido de la pagina */}
                <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" rel="stylesheet"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Roboto:wght@400;700&display=swap" rel="stylesheet"/>
            </Helmet>

            <Header/>
                {props.children}    {/*gracias a los props.children, todo lo que esté en este componente, se va a mostrar en el componente donde lo importemos */}
            <Footer
                title={title}
            />
        </>
     );
}
 
export default Layout;
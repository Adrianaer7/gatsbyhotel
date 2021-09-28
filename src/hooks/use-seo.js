import { graphql, useStaticQuery } from "gatsby";

const useSeo = () => {

    //traigo el nombre de la pagina, titulo de reserva, subfijo de titulo y descripcion de DatoCMS
    const data = useStaticQuery(graphql`
    query {
        datoCmsSite {
            globalSeo {
                siteName
                titleSuffix
                fallbackSeo {
                    title
                    description
                }
            }
        }
    }
    `)

    return data.datoCmsSite.globalSeo;
}
 
export default useSeo;
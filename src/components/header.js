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

const Header = () => {
    return ( 
        <header
            css={css`
                background-color: rgb(44,62,80);
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
                <EnlaceHome to="/">
                    <h1>Hotel Gatsby</h1>
                </EnlaceHome>
                
                <Navegacion/>
            </div>
        </header>
     );
}
 
export default Header;
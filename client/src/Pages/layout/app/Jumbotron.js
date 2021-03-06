import React from 'react'
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import background from '../../../assets/bitcoin.jpg';


const Styles = styled.div`
    .jumbo {
        background: url(${background}) no-repeat fixed bottom;
        background-size: cover;
        color: #efefef;
        innerHeight: 200px;
        position: relative;
        z-index:-2;
        marginBottom: 0!important;
    }

    .overlay {
        background-color: #000;
        opacity: 0.6;
        position: isAbsolute;
        top: 0;
        left:0;
        bottom: 0;
        right: 0;
        z-index: -1;
    }
    `;


    export const Jumbotron = () => (
        <Styles>
            <Jumbo fluid className="jumbo" style={{marginBottom: 0}}> 
                <div className="overlay"></div>
                <Container>
                    <h1>Welcome</h1>
                    <p>Crypto portfolio tracker</p>
                </Container>
            </Jumbo>
        </Styles>
    )
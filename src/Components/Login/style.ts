import styled from "styled-components";

export const Container = styled.div`
font-family:sans-serif;
letter-spacing:0.2px;
background: #dfe6e9;
height: 100vh;
width: 100vw;
`
export const Content =  styled.div`
padding: 50px;


form {
    color: #dfe6e9;
    background: #ecf0f1;
    box-shadow: 0px 4px 4px rgba(0,0,0,0.5);
    width:100%;
    max-width: 340px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding: 20px;
    border-radius: 30px;

    h2 {
        color: black;
        span{
            color: #6c5ce7
        }
    }
    button {
        margin-top: 20px;
    }
}

`
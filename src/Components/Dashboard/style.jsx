import styled from "styled-components";

export const Container = styled.div`
font-family:sans-serif;
letter-spacing:0.2px;
background: #dfe6e9;
height: 100vh;
width: 100vw;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
img {
    border-radius: 100%;
    width: 150px;
    height: 150px;
    margin-bottom: 10px;
    box-shadow: 0px 4px 4px rgba(0,0,0,0.5)
}
img:hover {
    transition: 0.5s;
    width: 160px;
    height: 160px;
    cursor: pointer;
}
`
export const Content =  styled.div`
padding: 50px;




`
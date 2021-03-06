import styled, { css } from "styled-components"

// UI Styles
export const UICard = css`

  box-shadow: 4px 4px 10px -5px rgba(0,0,0,0.75);
  border-radius: 12px;

`

export const UIButton = css`

  & { 
  padding: 5px;
  border-radius: 5px;
  border: 2px solid ${props => props.theme.background};
  background: ${props => props.theme.primary};
  color: ${props => props.theme.text};
  font-size: 17px;
  cursor: pointer;
  }

  &:hover{
    background: ${props => props.theme.secondary};
    transition: 0.3s;
  }

  .disabled{
    background: ${props => props.theme.background};
    color: ${props => props.theme.tertiary};
    cursor: not-allowed;
  }

`
// Styled Components UIs

export const StyledButton = styled.button`

  ${UIButton}

`

export const StyledLink = styled.div`

  & > a {
    ${UIButton};
    text-decoration: none;
  }

`

export const StyledLoading = styled.div`
.loader {
    color: ${props => props.theme.tertiary};
    font-size: 90px;
    text-indent: -9999em;
    overflow: hidden;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    margin: 72px auto;
    position: relative;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation: load6 1.7s infinite ease, round 1.7s infinite ease;
    animation: load6 1.7s infinite ease, round 1.7s infinite ease;
  }
  @-webkit-keyframes load6 {
    0% {
      box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
    }
    5%,
    95% {
      box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
    }
    10%,
    59% {
      box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;
    }
    20% {
      box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;
    }
    38% {
      box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;
    }
    100% {
      box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
    }
  }
  @keyframes load6 {
    0% {
      box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
    }
    5%,
    95% {
      box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
    }
    10%,
    59% {
      box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;
    }
    20% {
      box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;
    }
    38% {
      box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;
    }
    100% {
      box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
    }
  }
  @-webkit-keyframes round {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes round {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`

export const StyledModal = styled.div`

  & {
    z-index: 100;
    max-width: 100%;
    width: 750px;
    display: block;
    margin: 0 auto;
    background: ${props => props.theme.primary};
    color: ${props => props.theme.text};
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  & > header{
    padding: 3% 2%;
    text-align: center;
    font-size: 18px ;
  }

`

export const StyledBackdrop = styled.div`

  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  z-index: 75;

`

export const StyledAlertStatus = styled.section`

  &{
    ${UICard};
    padding: 10px 0;
    max-width: 768px;
    margin: 0 auto; 
  }

  & > figure{
    width: 150px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-itmes: center;
    padding: 0px;
    margin: 0 auto;
  }
  
  & > figure > img{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-itmes: center;
  }

  & > main{
    padding: 10px 0;
    text-align: center;
  }

  & > footer{
    display: flex;
    justify-content: center;
    align-itmes: center;
  }

  `

// Styled Components

export const StyledHeader = styled.header`

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 2%;
    background-color: ${props => props.theme.primary};

    & > figure > h2{
        color: ${props => props.theme.text};
        font-size: 30px;
    }

    & > nav > ul{
        display: flex;
    }

    & > nav > ul > li{
        margin-right: 25px;
        list-style-type: none;
    }

    & > nav > ul > li > a{
        text-decoration: none;
        color: ${props => props.theme.text};
        font-size: 18px;
    }

    & > nav > ul > li > a:hover,
    & > nav > ul > li > a:active,
    & > nav > ul > li > a.active
    {
        color: ${props => props.theme.background};
        border-bottom: 2px solid ${props => props.theme.background};
    }

`

export const StyledContainer = styled.main`

    padding: 3% 2%;
    margin: 0 auto;
    display: block;

`

export const StyledFilm = styled.article`

  &{
    width: 100%;
    max-width: 650px;
    height: 175px;
    margin: 15px auto;
    background-color: ${props => props.theme.secondary};
    color: ${props => props.theme.text};
    display: flex;
    padding: -5px 0;
    padding-right: 1%;
    ${UICard};
  }

  .figure{
    width: 400px;
    height: 100%;
  }
  
  .figure > img{
    width: 100%;
    height: 100%;
    border-radius: 10px 0px 0px 10px;
  }

  .info{
    width: calc(250px - 1%);
    padding: 3%;
  }

  .info__name{
    font-size: 18px;
    font-weight: bold;
    min-width: 100px;
    height: 65px;
  }

  .info__btn{
    margin-top: 40px;
    display: flex;
    justify-content: flex-end;
  }


`

export const StyledFilmCard = styled.main`

  &{
    
  }

  .goBack {
    width: 64px;
    height: 64px;
    cursor: pointer;
    margin-bottom: 10px;
  }
  
  .goBack: hover{
    ${UICard};
    border-radius: 50%;
  }

  .goBack img{
    width: 100%;
  }

  .card-container{
    display: block;
    margin: 0 auto;
  }

  .figure {
    width: 100%;
    max-width: 768px;
    display: block;
    margin: 0 auto;
  }
  
  .figure img{
    width: 100%;
    ${UICard};
  }

  .card-container__title, 
  .card-container__text{
    text-align: justify;
    max-width: 768px;
    display: block;
    margin: 0 auto;
    padding: 10px 0;
    font-size: 18px;
  }

  .card-container__title{
    font-size: 23px;
    text-align: center;
  }
  
  .card-container__footer{
    display: flex;
    justify-content: space-around;
    flex-direction: row-reverse;
    margin: 0 2%;
  }

  .footer__link{
    ${UIButton};
    text-decoration: none;
  }
`
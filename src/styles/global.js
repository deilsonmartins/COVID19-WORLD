import { createGlobalStyle } from 'styled-components'; /* Biblioteca para gerenciar estilos */

export default createGlobalStyle`

    
    @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');


    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        font: 400 14px Roboto, sans-serif;
        background: #fff;
        -webkit-font-smoothing: antialiased
    }

    input, button, textarea {
        font: 400px 18px Roboto, sans-serif;
    }

`

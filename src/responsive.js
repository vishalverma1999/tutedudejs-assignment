import { css } from "styled-components"

export const mobile = (props) => {        // this function will return media query
    return css`                        
    @media only screen and (max-width:800px){
            ${props}
    }
    `
}

export const desktop = (props) => {        // this function will return media query
    return css`                        
    @media only screen and (min-width:430px){
            ${props}
    }
    `
}

export const laptop = (props) => {        // this function will return media query
    return css`                        
    @media only screen and (min-width: 801px) and (max-width: 1050px){
            ${props}
    }
    `
}
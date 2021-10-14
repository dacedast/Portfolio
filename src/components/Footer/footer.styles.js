import css from "styled-components";
import { Link } from "react-scroll";

export const Logo1 = css(Link)`
    position: relative;
    display: inline-block;
    color: #333;
    text-decoration: none;
    font-size: 1.5em;
    font-weight: 500;
    text-transform: uppercase;
    cursor: pointer;
`;

export const Footer1 = css.footer`
    padding: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #f8f8f8;
    border-top: 1px solid rgba(0,0,0,0.05);
    @media screen and (max-width: 1024px) {
        padding: 40px 20px;
    }

`;
export const Text = css.p`
    color: #333;
    text-align: center;
    letter-spacing: 1px;
`;

export const Wrapper = css.div`
    display: flex; 
    padding-top: 10px;
`;
export const IconS = css.a`
    margin: 0 10px 0 10px;
    cursor: pointer;
    color: #333;
    transition: 0.25s ease-in-out;
    &:hover {
        color: rgba(51, 51, 51, 0.6)
    }
`;

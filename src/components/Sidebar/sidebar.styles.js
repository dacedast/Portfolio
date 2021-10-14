import css from "styled-components";
import { Link } from "react-scroll";
import { Link as LinkR } from "react-router-dom";

export const Navigation = css.aside`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 999;
    transition: 0.3s;
    opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
    visibility: ${({ isOpen }) => (isOpen ? "100%" : "hidden")};
`;

export const NavItem = css(Link)`
    cursor: pointer;
    margin: 10px 0;
    color: #333;
    font-size: 1.2em;
    display: inline-block;
    font-weight: 400;
    text-transform: uppercase;
    transition: .3s ease-in-out;
    &:hover {
        transform: scale(1.09);
    }
`;
export const NavItemR = css(LinkR)`
    cursor: pointer;
    margin: 10px 0;
    color: #333;
    font-size: 1.2em;
    display: inline-block;
    overflow: hidden;
    font-weight: 400;
    text-transform: uppercase;
    text-decoration: none;
    transition: .3s ease-in-out;
    &:hover {
        transform: scale(1.09);
    }
    
`;

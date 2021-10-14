import css from "styled-components";
import { Link } from "react-scroll";

export const Header = css.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: ${({ scrollNav }) => (scrollNav ? "10px 80px" : "20px 100px")} ;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    z-index: 1000;
    transition: 0.5s;
    border-bottom: 1px solid rgba(0,0,0,0.05);
    @media screen and (max-width: 991px) {
        padding: ${({ scrollNav }) => (scrollNav ? "10px 10px" : "20px 20px")};
    }
`;

export const Logo1 = css(Link)`
    position: relative;
    height: 20px;
    display: inline-block;
    color: #333;
    text-decoration: none;
    // font-size: 1.5em;
    // font-weight: 500;
    text-transform: uppercase;
    cursor: pointer;
    
`;

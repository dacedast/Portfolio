import css from "styled-components";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

export const Section = css.section`
    position: relative;
    padding: 100px;
    width: 100%;
    min-height: 100vh;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 1024px) {
        padding: 20px;
    }

`;
export const Img = css.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const ContentBx = css(motion.div)`
    position: relative;
    z-index: 1;
    background: #fff;
    padding: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: -30px 30px 20px rgba(0,0,0,0.3);
    h2 {
        font-size: 2em;
        font-weight: 500;
        color: #333;
        letter-spacing: 2px;
        text-align: center;
        text-transform: uppercase;
    }
    h4 {
        font-size: 1.2em;
        font-weight: 300;
        letter-spacing: 4px;
        text-align: center;
        color: #333;
        text-transform: uppercase;
    }
    @media screen and (max-width: 1024px) {
        padding: 40px 30px;
    }
`;
export const Button = css(Link)`
    position: relative;
    display: inline-block;
    padding: 8px 20px;
    margin-top: 20px;
    cursor: pointer;
    border: 2px solid #333;
    color: #333;
    background: #fff;
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
    transition: 0.25s;
    &:hover {
        color: #fff;
        background: #333;
    }
`;

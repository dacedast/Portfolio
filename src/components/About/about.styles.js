import css from "styled-components";
import { Link } from "react-scroll";
import { Link as LinkR } from "react-router-dom";

export const Section = css.section`
    position: relative;
    padding: 100px;
    width: 100%;
    min-height: 100vh;
    background: #fff;
    @media screen and (max-width: 1024px) {
        padding: 20px;
    }
`;

export const Title = css.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h2 {
        position: relative;
        font-weight: 500;
        letter-spacing: 2px;
        font-size: 1.4em;
        text-transform: uppercase;
        color: #333;
        &:before {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 40px;
            height: 6px;
            background: #333;
        }
    }
    @media screen and (max-width: 1024px) {
        padding-top: 50px;
    }
`;

export const ContentBx = css.div`
    position: relative;
    margin-top: 40px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 40px;
    @media screen and (max-width: 1024px) {
        grid-template-columns: repeat(1,1fr);
    }
`;

export const Content = css.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    p {
        color: #333;
        font-weight: 300;
        text-align: justify;
        strong {
            font-weight: 400;
        }
    }
`;

export const ImgBx = css.div`
    min-height: 400px;
`;
export const Img = css.img`
    width: 100%;
`;

export const Wrapper = css.div`
    display: flex; 
    padding-top: 10px;
    justify-content: center;
`;

export const Button = css(Link)`
    position: relative;
    display: inline-block;
    padding: 8px 20px;
    cursor: pointer;
    border: 2px solid #333;
    color: #333;
    background: #fff;
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
    transition: 0.25s;
    margin-bottom: 3em;
    &:hover {
        color: #fff;
        background: #333;
    }
    @media screen and (max-width: 1024px) {
        margin-top: 20px;
        margin-bottom: 0;
    }
`;

export const LinkB = css(LinkR)`
    text-decoration: none;
    cursor: pointer;
    color: #333;
    font-weight: 400;
`;

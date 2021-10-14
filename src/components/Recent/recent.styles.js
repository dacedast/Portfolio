import css from "styled-components";
import { Link } from "react-router-dom";
export const Section = css.section`
    position: relative;
    padding: 100px;
    width: 100%;
    min-height: 100vh;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
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
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
    margin-top: 20px;
    @media screen and (max-width: 1024px) {
        grid-template-columns: repeat(1,1fr);
    }
`;

export const Btn2 = css(Link)`
    position: relative;
    display: inline-block;
    padding: 8px 20px;
    margin-top: 20px;
    cursor: pointer;
    border: 2px solid #333;
    color: #333;
    background: #fff;
    font-size: 1em;
    font-weight: 500;
    letter-spacing: 3px;
    text-transform: uppercase;
    transition: 0.25s;
    text-decoration: none;
    margin-top: 5em;
    background: #333;
    color: #fff;
    &:hover {
        color: #333;
        background: #fff;
    }
`;

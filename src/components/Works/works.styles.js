import css from "styled-components";
import { Link } from "react-router-dom";

export const Section = css.section`
    position: relative;
    padding: 50px;
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
export const BacktoMain = css(Link)`
    margin-top: 40px;
    max-width: 700px;
    text-align: center;
    cursor: pointer;
    text-decoration: none;
    color: #333;
    transition: .5s;
    border-bottom: 1px solid #333;

`;
export const ContentBx = css.div`
    position: relative;
    margin-top: 30px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
    margin-bottom: 20px;
    @media screen and (max-width: 1024px) {
        grid-template-columns: repeat(1,1fr);
        margin-left: 20px;
    }
`;

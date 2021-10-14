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
    p {
        color: #333;
    }
    @media screen and (max-width: 1024px) {
        padding: 20px;
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

import css from "styled-components";

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
    p {
        margin-top: 40px;
        max-width: 700px;
        text-align: center;
    }
    @media screen and (max-width: 1024px) {
        padding-top: 40px;
    }
`;

export const ContactForm = css.form`
    position: relative;
    width: 100%;
    max-width: 700px;
    margin-top: 20px;
`;
export const Row = css.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    margin-top: 20px;
    @media screen and (max-width: 1024px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;
export const Row2 = css.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`;
export const NameInput = css.input`
    width: 100%;
    padding: 10px;
    border: 1px solid #333;
    outline: none;
    background: #fff;
    color: #333;
    font-size: 16px;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 2px;
    overflow: hidden;
`;
export const LastNameInput = css.input`
    width: 100%;
    padding: 10px;
    border: 1px solid #333;
    outline: none;
    background: #fff;
    color: #333;
    font-size: 16px;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 2px;
        overflow: hidden;

`;
export const EmailInput = css.input`
    width: 100%;
    padding: 10px;
    border: 1px solid #333;
    outline: none;
    background: #fff;
    color: #333;
    font-size: 16px;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 2px;
        overflow: hidden;

`;
export const MobileNoInput = css.input`
    width: 100%;
    padding: 10px;
    border: 1px solid #333;
    outline: none;
    background: #fff;
    color: #333;
    font-size: 16px;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 2px;
        overflow: hidden;

`;
export const TextArea = css.textarea`
    width: 100%;
    padding: 10px;
    border: 1px solid #333;
    outline: none;
    background: #fff;
    color: #333;
    font-size: 16px;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 2px;
    resize: none;
    height: 200px;
        overflow: hidden;

`;
export const Button = css.input`
    position: relative;
    display: inline-block;
    padding: 8px 20px;
    margin-top: 20px;
    cursor: pointer;
    border: 1px solid #333;
    color: #333;
    background: #fff;
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 2px;
    text-transform: uppercase;
    transition: 0.25s;
    &:hover {
        color: #fff;
        background: #333;
    }
`;

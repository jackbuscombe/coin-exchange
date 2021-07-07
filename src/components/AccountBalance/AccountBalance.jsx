import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const Section = styled.section`
    font-size: 1.5rem;
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0 1em;
    padding: 0.25em 1em;
`;

const ButtonBalance = styled.button`
    background: navy;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0 1em;
    padding: 0.25em 1em;
`;

export default function AccountBalance(props) {
        const buttonText = props.showBalance ? "Hide Balance" : "Show Balance";
        let content = null;
        if (props.showBalance) {
            content = <>Balance: ${props.amount}</>
        }
        let balance = props.showBalance ? <span>Balance: ${props.amount}</span> : null;
        return (
            <Section>
                {content}
                <ButtonBalance onClick={props.handleToggleShowBalance}>{buttonText}</ButtonBalance>
            </Section>
        );
}

AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
}
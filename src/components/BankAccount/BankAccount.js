import React from "react";
import "./BankAccount.css";

const BankAccount = () => {
    const [account, setAccount] = React.useState({
        name: "Fran",
        savings: 5000,
        founds: 1000,
    });

    const takeMoney = () => {
        const newAccount = { ...account };
        newAccount.savings < 50 
            ? alert("Amigo... aún no has ahorrado 50€") 
            : (newAccount.savings -= 50);
        setAccount(newAccount);
    };

    const addMoney = () => {
        const newAccount = {
        ...account,
        savings: account.savings + 100,
        };
        setAccount(newAccount);
    };

    const addMoneyToFounds = () => {
        const newAccount = { ...account };
        if (newAccount.savings <= 999) {
            alert("Primero tienes que ahorrar al menos 1.000€");
        } else {
            newAccount.savings -= 1000;
            newAccount.founds += 1000;
        }
        setAccount(newAccount);
    };

    return (
        <>
        <p>El titular de la cuenta es: {account.name}</p>
        <p>El saldo de la cuenta de ahorros es: {account.savings}€</p>
        <p>El total del fondo de inversión es: {account.founds}€</p>

        <button onClick={takeMoney}>Retirar 50€</button>
        <button onClick={addMoney}>Ingresar 100€</button>
        <button onClick={addMoneyToFounds}>Meter en fondos 1000€</button>
        </>
    );
    };

export default BankAccount;

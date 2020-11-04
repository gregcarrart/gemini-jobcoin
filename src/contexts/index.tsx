import React, { createContext, useState, useCallback } from "react"

interface Transaction {
    amount: string,
    timestamp: string,
    toAddress: string,
    fromAddress: string,
}

export interface JwtContextData {
    jwt: string;
    setJwt: (token: string) => void;
    balance: string;
    setBalance: (amount: string) => void;
    transactions: Transaction[];
    setTransactions: (transactions: Transaction[]) => void;
};
   
export const jwtContextDefaultValue: JwtContextData = {
    jwt: '',
    setJwt: () => null,
    balance: '',
    setBalance: () => null,
    transactions: [],
    setTransactions: () => null,
};
   
const MainContext = createContext<JwtContextData>(jwtContextDefaultValue);

const MainContextProvider = (props: any) => {
    const [jwt, setToken] = useState<string>('');
    const [balance, setBalanceAmount] = useState<string>('');
    const [transactions, setTransactionsData] = useState<Transaction[]>([]);

    const setJwt = useCallback((token) => {
        setToken(token);
    }, [setToken]);

    const setBalance = useCallback((amount) => {
        setBalanceAmount(amount);   
    }, [setBalanceAmount]);

    const setTransactions = useCallback((transactions) => {
        setTransactionsData(transactions);   
    }, [setTransactionsData]);

    return (
        <MainContext.Provider value={{
            jwt,
            setJwt,
            balance,
            setBalance,
            transactions,
            setTransactions,
        }}>
            {props.children}
        </MainContext.Provider>
    );
};

export { MainContextProvider, MainContext };
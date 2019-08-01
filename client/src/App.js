import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import {ApolloProvider as ApolloHooksProvider} from 'react-apollo-hooks';
import {Main} from './Main';
const client = new ApolloClient({
    uri: 'http://localhost:3005/graphql'
});

const App = () => {
    return (
        <ApolloProvider client={client}>
            <ApolloHooksProvider client={client}>
                <BrowserRouter>
                    <Main />
                </BrowserRouter>
            </ApolloHooksProvider>
        </ApolloProvider>
    );
};

export default App;

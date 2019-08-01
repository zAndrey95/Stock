import { gql } from 'apollo-boost';

export const manufacturersQuery = gql`
    query manufacturersQuery {
        manufacturers {
            id
            name
            country
        }
    }
`;
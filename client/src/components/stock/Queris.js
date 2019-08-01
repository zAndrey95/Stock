import { gql } from 'apollo-boost';

export const locationsQuery = gql`
    query locationsQuery {
        locations {
            id
            name
            address
            description
        }
    }
`;
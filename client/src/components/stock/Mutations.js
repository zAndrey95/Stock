import { gql } from 'apollo-boost';

export const locationMutationAdd = gql`
    mutation locationMutationAdd($name: String!, $address: String!, $description: String) {
        addLocation(name: $name, address: $address, description: $description) {
            name
            address
            description
        }
    }
`;

export const locationMutationUpd = gql`
    mutation locationMutationUpd($id: ID!, $name: String!, $address: String!, $description: String) {
        updateLocation(id: $id, name: $name, address: $address, description: $description) {
            id
            name
            address
            description
        }
    }
`;

export const locationMutationDel = gql`
    mutation locationMutationDel($id: ID!) {
        deleteLocation(id: $id) {
            id
        }
    }
`;

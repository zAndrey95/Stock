const graphql = require('graphql');

const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt, GraphQLSchema, GraphQLList } = graphql;

const Movies = require('../models/movie');
const Directors = require('../models/director');
const Manufacturers = require('../models/manufacturer');
const Locations = require('../models/location');

const ManufacturerType = new GraphQLObjectType({
    name: 'Manufacturer',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        country: { type: GraphQLString },
    }),
});

const LocationType = new GraphQLObjectType({
    name: 'Location',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        address: {type: GraphQLString},
        description: {type: GraphQLString},
    }),
});

const MovieType = new GraphQLObjectType({
    name: 'Movie',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
        director: {
            type: DirectorType,
            resolve(parent, args) {
                return Directors.findById(parent.directorId);
            }
        }
    }),
});

const DirectorType = new GraphQLObjectType({
    name: 'Director',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
        movies: {
            type: new GraphQLList(MovieType),
            resolve(parent, args) {
                return Movies.findById({ directorId: parent.id});
            }
        }
    }),
});

const Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        movie: {
            type: MovieType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Movies.findById(args.id);
            }
        },
        director: {
            type: DirectorType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Directors.findById(args.id)
            }
        },
        movies: {
            type: new GraphQLList(MovieType),
            resolve(parent, args) {
                return Movies.find({});
            },
        },
        directors: {
            type: new GraphQLList(DirectorType),
            resolve(parent, args) {
                return Directors.find({});
            }
        },
        manufacturers: {
            type: new GraphQLList(ManufacturerType),
            resolve(parent, args) {
                return Manufacturers.find({});
            },
        },
        locations: {
            type: new GraphQLList(LocationType),
            resolve(parent, args) {
                return Locations.find({});
            },
        },
    },
});

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addDirector: {
            type: DirectorType,
            args: {
                name: {type: GraphQLString},
                age: {type: GraphQLInt},
            },
            resolve(parent, args) {
                const director = new Directors({
                    name: args.name,
                    age: args.age,
                });
                director.save();
            },
        },
        addManufacturer: {
            type: ManufacturerType,
            args: {
                name: { type: GraphQLString },
                country: { type: GraphQLString },
            },
            resolve(parent, args) {
                const manufacturer = new Manufacturers({
                    name: args.name,
                    country: args.country,
                });
                manufacturer.save();
            },
        },
        deleteManufacturer: {
            type: ManufacturerType,
            args: {
                id: { type: GraphQLID }
            },
            resolve(parent, args) {
                return Manufacturers.findByIdAndDelete(args.id);
            },
        },
        updateManufacturer: {
            type: ManufacturerType,
            args: {
                id: { type: GraphQLID },
                name: { type: GraphQLString },
                country: { type: GraphQLString },
            },
            resolve(parent, args) {
                return Manufacturers.findByIdAndUpdate(
                    args.id,
                    { $set: { name: args.name, country: args.country } },
                    {new: true},
                    );
            },
        },
        addLocation: {
            type: LocationType,
            args: {
                name: { type: GraphQLString },
                address: { type: GraphQLString },
                description: { type: GraphQLString },
            },
            resolve(parent, args) {
                const location = new Locations({
                    name: args.name,
                    address: args.address,
                    description: args.description,
                });
                location.save();
            },
        },
        updateLocation: {
            type: LocationType,
            args: {
                id: {type: GraphQLID},
                name: {type: GraphQLString},
                address: {type: GraphQLString},
                description: {type: GraphQLString},
            },
            resolve(parent, args) {
                return Locations.findByIdAndUpdate(
                    args.id,
                    {$set: {name: args.name, address: args.address, description: args.description}},
                    {new: true},
                );
            },
        },
    }
});

module.exports = new GraphQLSchema({
    query: Query,
    mutation: Mutation,
});
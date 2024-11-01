import { useMemo } from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

export type PokemonType = {
    id: string;
    name: string;
    types: string[];
    number: string;
    weight: any;
    height: any;
    classification: string;
    resistant: string[];
    weaknesses: string[];
    attacks: any;
    fleeRate: number;
    maxCP: number;
    evolutions: string[];
    evolutionRequirements: {
        amount: number;
        name: string;
    };
    maxHP: number;
    image: string;
};

export type PokemonOption = {
    value: PokemonType['id'];
    label: PokemonType['name'];
};

export const GET_POKEMONS = gql`
    query pokemons($first: Int!) {
        pokemons(first: $first) {
            id
            name
            image
            types
            number
            classification
            resistant
            weaknesses
            fleeRate
            maxCP
            maxHP
            evolutions {
                name
            }
            evolutionRequirements {
                amount
                name
            }
            weight {
                minimum
                maximum
            }
            height {
                minimum
                maximum
            }
            attacks {
                fast {
                    name
                    type
                    damage
                }
                special {
                    name
                    type
                    damage
                }
            }
        }
    }
`;

export const useGetPokemons = () => {
    const { data, ...queryRes } = useQuery(GET_POKEMONS, {
        variables: {
            first: 151, // Keep hard coded
        },
    });

    const pokemons: PokemonType[] = useMemo(() => data?.pokemons || [], [data]);

    const pokemonOptions: PokemonOption[] = useMemo(
        () =>
            pokemons.map((p: PokemonType) => ({ value: p.id, label: p.name })),
        [pokemons]
    );

    return {
        pokemons,
        pokemonOptions,
        ...queryRes,
    };
};

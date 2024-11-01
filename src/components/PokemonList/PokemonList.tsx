import { createUseStyles } from 'react-jss';
import { useGetPokemons } from '../../hooks/useGetPokemons';
import ListItemCard from '../ListItemCard';

export const PokemonList = () => {
    const classes = useStyles();
    const { pokemons, pokemonOptions, loading } = useGetPokemons();

    return (
        <div className={classes.root}>
            {loading && <div>Loading...</div>}
            {pokemons.map((pkmn) => (
                <ListItemCard key={pkmn.id} pokemon={pkmn} />
            ))}
        </div>
    );
};

const useStyles = createUseStyles(
    {
        root: {
            width: '100%',
            textAlign: 'center',
            padding: '4rem',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.1rem',
            alignItems: 'center',
        },
    },
    { name: 'PokemonList' }
);

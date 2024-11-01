import { createUseStyles } from 'react-jss';
import { PokemonType } from '../hooks/useGetPokemons';
import { PokemonTypeStyle, pokemonTypeStyles } from '../constants';

type Props = {
    pokemon: PokemonType;
};

export default function ListItemCard({ pokemon }: Props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.imageContainer}>
                <img
                    src={pokemon.image}
                    alt={pokemon.name}
                    className={classes.image}
                />
            </div>
            <div className={classes.details}>
                <div className={classes.primaryDetails}>
                    <div className={classes.nameWrapper}>
                        <span className={classes.number}>
                            {Number(pokemon.number)}
                        </span>
                        <h2 className={classes.name}>{pokemon.name}</h2>
                    </div>
                    <p className={classes.classification}>
                        {pokemon.classification}
                    </p>
                </div>
                <div className={classes.typesWrapper}>
                    {pokemon?.types?.map((type) => {
                        const { background, color }: PokemonTypeStyle =
                            pokemonTypeStyles[type.toLowerCase()] || {
                                background: '#ccc',
                                color: '#000',
                            };
                        return (
                            <span
                                key={type}
                                className={classes.type}
                                style={{
                                    backgroundColor: background,
                                    color: color,
                                }}
                            >
                                {type}
                            </span>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

const useStyles = createUseStyles(
    {
        root: {
            borderRadius: '10px',
            background: '#131924',
            maxWidth: '900px',
            width: '100%',
            display: 'flex',
            padding: '16px',
            marginBottom: '16px',
            alignItems: 'center',
            transition: 'all 0.3s',
            cursor: 'pointer',
            '&:hover': {
                background: '#1f2a38',
                transform: 'scale(1.01)',
                boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.2)',
            },
        },
        imageContainer: {
            flex: '0 0 auto',
            marginRight: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        image: {
            width: '100px',
            height: '100px',
            borderRadius: '4px',
        },
        details: {
            flex: '1',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        primaryDetails: {
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
            padding: '1rem',
        },
        number: {
            borderRadius: '40px',
            width: '40px',
            height: '40px',
            background: 'rgba(255,255,255,.04)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        nameWrapper: {
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
        },
        name: {
            fontSize: '24px',
            margin: '0',
        },
        classification: {
            fontSize: '16px',
            fontStyle: 'italic',
            margin: '4px 0',
        },
        typesWrapper: {
            display: 'flex',
            gap: '4px',
        },
        type: {
            padding: '4px 1rem',
            borderRadius: '5px',
            background: '#fff',
            color: '#000',
            textTransform: 'capitalize',
        },
    },
    { name: 'ListItemCard' }
);

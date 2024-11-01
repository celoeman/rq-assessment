import { createUseStyles } from 'react-jss';
import { PokemonList } from '../components';
import PokemonListNav from '../components/Nav/PokemonListNav';

export const ListPage = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <PokemonListNav />
            <PokemonList />
        </div>
    );
};

const useStyles = createUseStyles(
    {
        root: {
            width: '100%',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
    },
    { name: 'ListPage' }
);

import { createUseStyles } from 'react-jss';

export default function PokemonListNav() {
    const classes = useStyles();

    return <div className={classes.root}>PokemonListNav</div>;
}

const useStyles = createUseStyles(
    {
        root: {
            width: '100%',
            height: '80px',
            position: 'sticky',
            top: 0,
            background: '#171E2b',
            zIndex: 100,
        },
    },
    { name: 'PokemonListNav' }
);

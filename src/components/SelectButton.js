import { makeStyles } from '@material-ui/core'
import React from 'react'
import { Classnames } from 'react-alice-carousel'

function SelectButton({children, selected, onClick}) {
    const useStyles = makeStyles({
        selectbutton: {
            border: '1px solid gold',
            borderRadius: 5,
            padding: 5,
            paddingLeft: 20,
            paddingRight: 20,
            fontFamily: 'Montserrat',
            cursor: 'pointer',
            backgroundColor: selected ? 'gold' : '',
            color: selected ? 'black' : '',
            fontWeight: selected ? 700 : 500,
            "&:hover": {
                backgroundColor: 'gold',
                color: 'black'
            },
            width: '22%',
            margin: 5,
        }
    });
    const classes = useStyles();
    return (
        <span className={classes.selectbutton}
        onClick={onClick}>
            {children}
        </span>
    )
}

export default SelectButton

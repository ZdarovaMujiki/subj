import { Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles(theme => ({
    root: {
        fontFamily: "Open Sans",
        fontSize: "4vw",
        color: "#F67599",
        width: "65vw",
        height: "13vw",
    },
    outlined: {
        borderRadius: "6px",
        border: "5px solid #F67599",
        width: "22vw",
        height: "13vw",
    }
}))

interface Props {
    children?: React.ReactNode;
    icon: React.ReactNode;
}

function SecondaryButton({ children, icon } : Props) {
    const classes = useStyles();
    return (
        <Button variant="outlined" classes={classes} className="Button1" startIcon={icon}>{children}</Button>
    )
}

export default SecondaryButton;
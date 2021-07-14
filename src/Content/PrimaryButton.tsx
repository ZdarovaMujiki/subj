import { Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles(theme => ({
    root: {
        fontFamily: "Open Sans",
        fontSize: "4vw",
        backgroundColor: "#F67599",
        color: "white",
        border: "none",
        width: "65vw",
        height: "13vw",
    }
}))

interface Props {
    children?: React.ReactNode;
}

function PrimaryButton({ children } : Props) {
    const classes = useStyles();
    return (
        <Button variant="contained" classes={classes} className="Button1">{children}</Button>
    )
}

export default PrimaryButton;
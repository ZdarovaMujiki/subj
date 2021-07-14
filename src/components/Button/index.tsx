import { Button as MuiButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles({
  root: {
    fontFamily: "Open Sans",
    fontSize: "14px",
    backgroundColor: "#F67599",
    color: "white",
    border: "none",
    width: "100%",
  },
  outlined: {
    color: "#F67599",
    width: "fit-content",
    backgroundColor: "#FFF",
    borderRadius: "2px",
    border: "2px solid #F67599",
  },
  label: {
    padding: "9px",
  },
});

interface Props {
  children?: React.ReactNode;
  variant?: "text" | "outlined" | "contained";
  icon?: React.ReactNode;
}

function Button({ children, variant, icon }: Props) {
  const classes = useStyles();

  return (
    <MuiButton variant={variant} classes={classes} startIcon={icon}>
      {children}
    </MuiButton>
  );
}

export default Button;

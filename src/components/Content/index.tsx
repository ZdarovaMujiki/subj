import React from "react";
import styles from "./Content.module.css";
import FavoriteBorderRoundedIcon from "@material-ui/icons/FavoriteBorderRounded";
import Button from "../Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  icon: {
    width: "14px",
    height: "14px",
  },
});

function Content() {
  const classes = useStyles();

  return (
    <div className={styles.Main}>
      <div className={styles.Buttons}>
        <Button>Get Tickets</Button>
        <Button
          variant="outlined"
          icon={<FavoriteBorderRoundedIcon className={classes.icon} />}
        >
          Save
        </Button>
      </div>
      <p>
        That is a really huge and important event that take place every Sunday in Moscow.
        Music, people, coffee, you! That is a really huge and important event that take
        place every Sunday in Moscow. Music, people, coffee, you! That is a really huge
        and important event that take place every Sunday in Moscow. Music, people, coffee,
        you! That is a really huge and important event that take place every Sunday in
        Moscow. Music, people, coffee, you!
      </p>
    </div>
  );
}

export default Content;

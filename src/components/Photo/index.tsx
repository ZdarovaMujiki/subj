import styles from "./Photo.module.css";
import avatar from "../../assets/avatar.png";

import WatchLaterIcon from "@material-ui/icons/WatchLater";
import GTranslateIcon from "@material-ui/icons/GTranslate";
import EuroRoundedIcon from "@material-ui/icons/EuroRounded";
import { makeStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";
import { Avatar } from "@material-ui/core";
import Column from "../Column";

const useStyles = makeStyles({
  avatar: {
    width: "28px",
    height: "28px",
  },
  icon: {
    width: "1rem",
    height: "1rem",
    color: grey[300],
  },
  title: {
    color: "#FFF",
    width: "80%",
    fontSize: "2rem",
    margin: 0,
  },
});

function Photo() {
  const classes = useStyles();

  return (
    <div className={styles.Main}>
      <h1 className={classes.title}>Wooden kanoe free workshop</h1>
      <div className={styles.Info}>
        <Column primaryText="Duration" secondaryText="2 Hours">
          <WatchLaterIcon className={classes.icon} />
        </Column>
        <Column primaryText="Language" secondaryText="English">
          <GTranslateIcon className={classes.icon} />
        </Column>
        <Column primaryText="Price" secondaryText="20-50€">
          <EuroRoundedIcon className={classes.icon} />
        </Column>
      </div>
      <div className={styles.Organizer}>
        <Avatar alt="girl" src={avatar} className={classes.avatar} />
        <p className={styles.name}>Julia Shumans</p>
      </div>
    </div>
  );
}

export default Photo;

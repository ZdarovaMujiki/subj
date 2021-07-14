import styles from './Photo.module.css'
import photo from './Photo.png'

import WatchLaterIcon from '@material-ui/icons/WatchLater';
import GTranslateIcon from '@material-ui/icons/GTranslate';
import EuroRoundedIcon from '@material-ui/icons/EuroRounded';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';
import { Avatar } from '@material-ui/core';
import Column from './Column/Column';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "9vw",
      height: "9vw",
    },
    icon: {
      width: "4vw",
      height: "4vw",
      color: grey[300],
    }
  }),
);

function Photo() {
    const classes = useStyles();
    return (
        <div className={styles.Main}>
            <h1>Wooden kanoe<br/>free workshop</h1>
            <div className={styles.Info}>
              <Column primaryText="Duration" secondaryText="2 Hours"><WatchLaterIcon className={classes.icon}/></Column>
              <Column primaryText="Language" secondaryText="English"><GTranslateIcon className={classes.icon}/></Column>
              <Column primaryText="Price" secondaryText="20-50€"><EuroRoundedIcon className={classes.icon}/></Column>
            </div>
            <div className={styles.Organizer}>
                <Avatar alt="girl" src={photo} className={classes.root}/>
                <p className={styles.text}>Julia Shumans</p>
            </div>
        </div>
    )
}

export default Photo;
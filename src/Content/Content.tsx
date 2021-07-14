import styles from './Content.module.css'
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    icon: {
      width: "4vw",
      height: "4vw",
    }
  }),
);

function Content() {
    const classes = useStyles();
    return (
        <div className={styles.Main}>
            <div className={styles.Buttons}>
                <PrimaryButton>Get Tickets</PrimaryButton>
                <SecondaryButton icon={<FavoriteBorderRoundedIcon className={classes.icon}/>}>Save</SecondaryButton>
            </div>
            <p className={styles.text}>That is a really huge and important event that take place every Sunday in Moscow. Music, people, coffee, you! That is a really huge and important event that take place every Sunday in Moscow. Music, people, coffee, you!
           That is a really huge and important event that take place every Sunday in Moscow. Music, people, coffee, you! That is a really huge and important event that take place every Sunday in Moscow. Music, people, coffee, you! </p>
        </div>
    )
}

export default Content;
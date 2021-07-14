import styles from './Column.module.css'

interface Props {
    children?: React.ReactNode;
    primaryText: string;
    secondaryText: string;
}

function Column({children, primaryText, secondaryText} : Props) {
    return (
    <div className={styles.Column}>
        {children}
        <p className={styles.text1}>{primaryText}</p> 
        <p className={styles.text2}>{secondaryText}</p>
    </div>)
}

export default Column
import styles from "./Column.module.css";

interface Props {
  children?: React.ReactNode;
  primaryText: string;
  secondaryText: string;
}

const Column = ({ children, primaryText, secondaryText }: Props) => (
  <div className={styles.Column}>
    {children}
    <p className={styles.textPrimary}>{primaryText}</p>
    <p className={styles.textSecondary}>{secondaryText}</p>
  </div>
);

export default Column;

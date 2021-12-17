import styles from './Card.module.css';

const Card = props => {
  return (
    <div className={styles.card}>
      <div className={`${styles.highlight} ${styles[`${props.className}`]}`}>
        {props.children}
      </div>
    </div>
  );
};
export default Card;

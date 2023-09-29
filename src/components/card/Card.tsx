import styles from './Card.module.scss';

type CardProps = {
  children: React.ReactNode;
  cardClass: string;
};

const Card = ({ children, cardClass }: CardProps): JSX.Element => {
  return <div className={`${styles.card} ${cardClass}`}>{children}</div>;
};

export default Card;

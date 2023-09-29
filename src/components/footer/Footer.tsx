import styles from './Footer.module.scss';

export const date = new Date();
export const year = date.getFullYear();

const Footer = () => {
  return (
    <div className={styles.footer}>
      Copyright &copy; {year}{' '}
      <strong className={styles.bold}>Techie Emma</strong>
    </div>
  );
};

export default Footer;

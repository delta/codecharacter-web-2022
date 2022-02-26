import styles from './Row.module.css';

interface props {
  reverse?: Boolean;
  image?: any;
  title: String;
  description?: String;
}

export default function Row(props: props): JSX.Element {
  let { reverse, image, title, description } = props;

  return (
    <div className={`${styles.rowContainer} ${reverse ? styles.reverse : ''}`}>
      <div className={styles.imageContainer}>
        <img src={image} />
      </div>
      <div className={styles.descriptionContainer}>
        <div>
          <div className={styles.title}>{title}</div>
          <div className={styles.description}>{description}</div>
        </div>
      </div>
    </div>
  );
}

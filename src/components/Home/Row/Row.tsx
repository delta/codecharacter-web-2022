import styles from './Row.module.css';

interface props {
  reverse?: boolean;
  image?: string;
  title: string;
  description?: Array<string>;
}

export default function Row(props: props): JSX.Element {
  const { reverse, image, title, description } = props;

  return (
    <div className={`${styles.rowContainer} ${reverse ? styles.reverse : ''}`}>
      <div className={styles.imageContainer}>
        <img src={image} />
      </div>
      <div className={styles.descriptionContainer}>
        <div className={styles.title}>{title}</div>
        {description &&
          description.map((item: string) => (
            <div key={item} className={styles.description}>
              {item}
            </div>
          ))}
      </div>
    </div>
  );
}

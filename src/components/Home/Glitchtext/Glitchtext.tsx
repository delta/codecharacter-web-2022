import styles from './Glitchtext.module.css';
export default function Glitchtext(prop: { value: string }): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <div className={styles.glitchtext}>{prop.value}</div>
        <div className={styles.glitchtext}>{prop.value}</div>
        <div className={styles.glitchtext}>{prop.value}</div>
      </div>
    </div>
  );
}

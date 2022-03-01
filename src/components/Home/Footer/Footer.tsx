import { NavLink } from 'react-router-dom';
import styles from './footer.module.css';

export default function Footer(): JSX.Element {
  return (
    <div className={styles.footerContainer}>
      <div>
        <div>
          <div className={styles.heading}> Contact</div>
          <div className={styles.container}>
            <div>Subramanian: 9499926470</div>
            <div>Rinish: 9442129406</div>
            <div>Dipesh: 9654220462</div>
            <div>Vikash: 7050352720</div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div className={styles.heading}>Quick Links</div>
          <div className={styles.container}>
            <div>
              <NavLink className={styles.links} to="/dashboard">
                DashBoard
              </NavLink>
            </div>
            <div>
              <a
                className={styles.links}
                href="https://codecharacter-docs-2022.vercel.app/"
                rel="noreferrer noopener"
              >
                Documentation
              </a>
            </div>
            <div>
              <a
                className={styles.links}
                href="https://discord.gg/ePQrhrSNk5"
                target="_blank"
                rel="noopener noreferrer"
              >
                Forum
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import Link from 'next/link';
import styles from './Header.module.css';

export default function Header () {
  return (
    <div className={styles.header}>
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <Link href="/">
              <a>
                <img src="/h-logo.svg" />
              </a>
            </Link>
          </div>

          <div>
            <a className={styles.discordButton} target="_blank" href="https://discord.com/invite/M9mNK6MBbu">Gabung Discord</a>
          </div>
        </div>
      </div>
    </div>
  );
}

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
                <img className={styles['img-logo']} src="/h-logo.svg" />
              </a>
            </Link>
          </div>

          <div>
            {/* to be filled in later */}
          </div>
        </div>
      </div>
    </div>
  );
}

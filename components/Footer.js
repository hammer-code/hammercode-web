import { whatsappLink } from '../lib/url';
import styles from './Footer.module.css';

export default function Footer () {
  return (
    <footer className={styles.footer}>
      <div className="container mx-auto">
      <div className="grid grid-cols-4 gap-4">
        <div>
          <h2 className="text-lg font-bold mb-4">Ayo Gabung</h2>
          <ul>
            <li className="mb-2"><a className="link" target="_blank" href="https://discord.com/invite/M9mNK6MBbu">Discord</a></li>
            <li className="mb-2"><a className="link" target="_blank" href="https://www.instagram.com/hmrcode/">Instagram</a></li>
            <li className="mb-2"><a className="link" target="_blank" href="https://www.facebook.com/groups/695578487303771/">Facebook</a></li>
          </ul>
        </div>
        <div></div>
        <div></div>
        <div>
        <h2 className="text-lg font-bold mb-4">Kontak</h2>
          <ul>
            <li>
              <a className="text-secondary underline" href={whatsappLink} target="_blank">Whatsapp +62 822-9167-6911</a>
            </li>
          </ul>

          <p>Jl. Kijang Utara III No. 13, Birobuli Selatan, Palu</p>
        </div>
      </div>
      </div>
    </footer>
  );
}

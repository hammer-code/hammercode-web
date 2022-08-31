import Link from "next/link";
import { whatsappLink, whatsappNo } from "lib/url";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className={styles.footer}>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div></div>
            <div className="px-4">
              <h2 className="text-lg font-bold mb-4">Resources</h2>
              <ul>
                <li className="mb-2">
                  <Link className="link" href="/">
                    Home
                  </Link>
                </li>
                <li className="mb-2">
                  <Link className="link" href="/about">
                    Tentang Kami
                  </Link>
                </li>
              </ul>
            </div>
            <div className="px-4">
              <h2 className="text-lg font-bold mb-4">Ayo Gabung</h2>
              <ul>
                <li className="mb-2">
                  <a
                    className="link"
                    target="_blank"
                    href="https://discord.com/invite/M9mNK6MBbu"
                  >
                    Discord
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    className="link"
                    target="_blank"
                    href="https://www.instagram.com/hmrcode/"
                  >
                    Instagram
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    className="link"
                    target="_blank"
                    href="https://www.facebook.com/groups/695578487303771/"
                  >
                    Facebook
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    className="link"
                    target="_blank"
                    href="https://github.com/hammer-code"
                  >
                    Github
                  </a>
                </li>
              </ul>
            </div>
            <div className="px-4">
              <h2 className="text-lg font-bold mb-4">Kontak</h2>
              <ul>
                <li>
                  <a
                    className="text-secondary underline"
                    href={whatsappLink}
                    target="_blank"
                  >
                    Whatsapp {whatsappNo}
                  </a>
                </li>
                <li>
                  <a
                    className="text-secondary underline"
                    href="mailto:hammercode28@gmail.com"
                  >
                    hammercode28@gmail.com
                  </a>
                </li>
              </ul>

              <p>
                <a href="https://goo.gl/maps/6BS2dTYcE7wws94w6" target="_blank">
                  Jl. Lagarutu No. 28, Tanamodindi, Palu
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center py-8 text-white bg-black">
        {year} &copy; Penggiat Teknologi Palu Berkarya
      </div>
    </footer>
  );
}

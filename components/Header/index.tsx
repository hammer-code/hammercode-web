import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styles from "./Header.module.css";
// About.js
import { useTranslations } from "next-intl";
import LocaleSwitcher from "../LocaleSwitcher";

function NavLink({
  href,
  children,
}: {
  href: string;
  children?: React.ReactNode;
}) {
  const router = useRouter();
  const isActive = router.pathname === href;
  const className = isActive ? "text-secondary" : "";

  const mappedChildren = React.Children.map(children, function (node) {
    if (!React.isValidElement(node)) return node;

    return React.cloneElement(node, { className, ...node.props });
  });

  if (!mappedChildren?.length) return null;

  return (
    <Link href={href} locale={router.locale} className="text-red-800">
      {mappedChildren[0]}
    </Link>
  );
}

export default function Header() {
  const t = useTranslations("nav");

  return (
    <div className={styles.header}>
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <Link href="/">
              <a>
                <img className={styles["img-logo"]} src="/h-logo.svg" />
              </a>
            </Link>
          </div>

          <div>
            <ul className="flex">
              <li className="inline-block px-2 mr-2">
                <NavLink href="/about">
                  <a>{t("about")}</a>
                </NavLink>
              </li>
              <li className="inline-block px-2 mr-2">
                <NavLink href="/event">
                  <a>{t("event")}</a>
                </NavLink>
              </li>
              <li className="inline-block px-2">
                <a href="https://medium.com/hammercode" target="_blank">
                  Blog
                </a>
              </li>
              {/* <li className="inline-block px-2 mr-2"><NavLink href="/curriculum"><a>{t('curriculum')}</a></NavLink></li>
              <li className="inline-block px-2"><NavLink href="/sponsorship"><a>{t('support-us')}</a></NavLink></li> */}
              <span className="px-3">|</span>
              <LocaleSwitcher />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

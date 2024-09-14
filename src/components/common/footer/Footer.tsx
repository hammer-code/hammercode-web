import React from "react";

const Footer = () => {
  const date = new Date();
  return (
    <footer className="bg-slate-950 dark:bg-slate-950 p-8">
      <p className="text-center text-white">{date.getFullYear()} © Penggiat Teknologi Palu Berkarya</p>
    </footer>
  );
};

export default Footer;

import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Made with love | Copyright ⓒ of Luqman Hakim {year}</p>
    </footer>
  );
}

export default Footer;

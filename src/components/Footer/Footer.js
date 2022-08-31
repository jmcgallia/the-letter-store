import footerCSS from "./Footer.module.css";

function Footer() {
  return (
    <footer className={footerCSS.footer}>
      <p><a href="https://github.com/jordan-mcgalliard/the-letter-store">@jordan-mcgalliard</a></p>
      <p>Images from <a href="https://www.pexels.com/license/">Pexels.com</a></p>
    </footer>
  )
}

export default Footer;
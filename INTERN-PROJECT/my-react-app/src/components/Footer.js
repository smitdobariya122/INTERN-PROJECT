function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>© {year} Watch Store. All rights reserved.</p>
    </footer>
  );
}

export default Footer;

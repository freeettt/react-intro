import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <img 
        src="https://img.lovepik.com/png/20231118/car-logo-on-a-white-background-clipart-vector_629764_wh1200.png" 
        alt="Автомобільний логотип" 
        className="footer-logo"
      />
      <nav className="footer-links">
        <a href="#">Про авто</a>
        <a href="#">Спортивні моделі</a>
        <a href="#">Контакти</a>
        <a href="#">Галерея</a>
      </nav>
      <p className="footer-text">© 2025 Auto Encyclopedia. Усі права захищені.</p>
      <img 
        src="https://e7.pngegg.com/pngimages/20/597/car-banner-thumbnail.png" 
        alt="Автомобіль у русі" 
        className="footer-banner"
      />
      <div className="footer-social">
        <p>Слідкуйте за нами:</p>
        <a href="#">Facebook</a> | <a href="#">Instagram</a> | <a href="#">YouTube</a>
      </div>
    </footer>
  );
}

export default Footer;

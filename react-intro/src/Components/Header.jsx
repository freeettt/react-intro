import "./Header.css";

function Header() {
  return (
    <header className="header">
      <img 
        src="https://cdn-icons-png.flaticon.com/512/741/741407.png" 
        alt="Логотип автоенциклопедії" 
        className="header-logo"
      />
      <h1 className="header-title">Ласкаво просимо до Автоенциклопедії</h1>
      <p className="header-subtitle">Дізнайтеся більше про світ автомобілів!</p>
      <img 
        src="https://cdn-icons-png.flaticon.com/512/1085/1085570.png" 
        alt="Зображення автомобіля" 
        className="header-cars"
      />
    </header>
  );
}

export default Header;

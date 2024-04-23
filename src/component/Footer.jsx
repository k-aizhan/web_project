import "../style/component.css"
const Footer = () => {
   return (
    <>
      <footer>
        <div className="footer-container">
          <div className="footer-block fb-row">
            <p>Just_photo_aya 2024. Все права защищены.</p>
            <a className="footer-title">Контакты:</a>
            <a style={{color: "var(--gray)"}}>Aizhan</a>
            <a href="mailto:just_photo@mail.kz">just_photo@mail.kz</a>
            <a>+7-707-000-00-00</a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer;

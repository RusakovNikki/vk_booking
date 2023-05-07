import React from "react"

interface IFooter {
  currentref: React.RefObject<HTMLDivElement>
}

const Footer: React.FC<IFooter> = ({ currentref }) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__top">
            <ul className="footer__items">
              <li className="footer__item">
                <a
                  className="footer__item-link footer__item-link--vk"
                  href="https://vk.com/nike_gcs"
                  target="_blank"
                  rel="noreferrer"
                >
                  Vk
                </a>
              </li>
              <li className="footer__item">
                <a
                  className="footer__item-link footer__item-link--telegram"
                  href="https://t.me/Nikita_Rusakov1337"
                  target="_blank"
                  rel="noreferrer"
                >
                  Telegram
                </a>
              </li>
              <li className="footer__item">
                <a
                  className="footer__item-link footer__item-link--git"
                  href="https://github.com/RusakovNikki"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__content" ref={currentref} id="footer">
        <div className="container">
          <p className="footer__copy">
            © Nikita Rusakov, {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

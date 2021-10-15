import "./Footer.scss";

function Footer() {
    
  return (
		<footer className="footer">
			<div className="footer__content">
				<div className="footer__items">
					<li className="footer__item--title">GÉNÉRAL</li>
					<li className="footer__item">Job Board</li>
					<li className="footer__item">Contact</li>
				</div>
				<div className="footer__items">
					<li className="footer__item--title">LÉGAL</li>
					<li className="footer__item">Termes et conditions</li>
					<li className="footer__item">Mentions légales</li>
				</div>
				<div className="footer__items">
					<li className="footer__item--title">Nos réseaux sociaux</li>
					<li className="footer__item--socials">Facebook</li>
					<li className="footer__item--socials">LinkedIn</li>
					<li className="footer__item--socials">Twitter</li>
					<li className="footer__item--socials">Instagram</li>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
function mainSite() {
    document.getElementById("footer").innerHTML = `
    <footer class="custom-footer">
        <div class="footer-container d-flex justify-content-around align-items-center">
            <div class="footer-section">
                <h3>קישורים מהירים</h3>
                <ul>
                    <li><a href="#about">מי אנחנו</a></li>
                    <li><a href="#projects">הפרויקטים שלנו</a></li>
                    <li><a href="#contact">צור קשר</a></li>
                </ul>
            </div>

            <div class="footer-section">
                <h3>עקוב אחרינו</h3>
                <ul class="social-links d-flex justify-content-between">
                    <li>
                        <a href="tel:+972527485255" aria-label="Call us">
                            <img src="./img/contact-us/call.png" alt="Call us">
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/roaa.aude?igsh=MWZjMWFnY21zYXV4MA==" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram">
                            <img src="./img/contact-us/instagram-logo.png" alt="Instagram logo">
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/roaa-aude-061147310?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" aria-label="Follow us on LinkedIn">
                            <img src="./img/contact-us/linkedin-big-logo.png" alt="LinkedIn logo">
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/roaa.aude?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook">
                            <img src="./img/contact-us/facebook-app-symbol.png" alt="Facebook logo">
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom text-center mt-4">
            <p class="copy">This website has been created by Roaa Aude. &copy; ${
                (new Date().getFullYear())
            }</p>
        </div>
    </footer>
    `;
}
mainSite();

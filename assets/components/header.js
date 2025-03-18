class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
        this.innerHTML = `
        <header id="header">
            <a href="index.html" class="logo"><b>y-SIS</b> - The young group of the Italian Statistical Society</a>
            <ul class="icons">
                <li><a href="https://twitter.com/y_SIStatistica" class="icon fa-twitter" target="_blank"><span class="label">Twitter</span></a></li>
                <li><a href="https://www.facebook.com/youngSIStatistica" class="icon fa-facebook" target="_blank"><span class="label">Facebook</span></a></li>
                <li><a href="https://www.instagram.com/young_sistat/" class="icon fa-instagram" target="_blank"><span class="label">Instagram</span></a></li>
            </ul>
        </header>
        `;
    }
}

customElements.define('header-component', Header);

const headerTemplate = document.createElement("template");

headerTemplate.innerHTML = `
    <style>
      header {
        background-color: white;
        max-width: 1280px;
        width: 100%;
        display: flex;
        justify-content: center;

        position: sticky;
        top: 0;
        z-index: 100;

        transition: transform 0.3s ease-in-out;
      }

      .hide {
        transform: translateY(-100%);
      }

      .container {
        max-width: 1024px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        border-bottom: 2px solid #bebebe;
      }
        
      .container img {
        box-sizing: content-box;
        width: 112px;
        height: 32px;
        /* object-fit solo perché é fatto male l'svg */
        object-fit: cover;
        padding: 20px 24px;
      }

      nav ul {
        list-style: none;
        display: flex;
        height: 100%;
        margin: 0;
        padding: 0;
      }

      nav ul li {
        list-style: none;
        padding-left: 12px;
        padding-right: 12px;
      }

      nav ul li a {
        text-transform: uppercase;
        color: #bebebe;
        font-weight: 500;
        text-decoration: none;
        display: flex;
        height: 100%;
            align-items: center;
        position: relative;
      }

      nav ul li:first-of-type {
        padding-left: 0;
      }

      nav ul li:last-of-type {
        padding-right: 0;
      }

      nav ul li a::after {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        content: "";
        height: 4px;

        background-color: transparent;
        transition: background-color 0.3s ease;
      }

      nav ul li a:hover::after {
        background-color: #00b2c2;
      }

      nav ul li a:active {
        background-color: #00b2c2;
        color: white;
      }
    </style>
    <header id="header" class="header">
      <div class="container">
        <img src="../public/assets/images/logo.svg" alt="logo" />
        <nav>
          <ul>
            <li><a href="#">Only at pagopa</a></li>
            <li><a href="#">Teams</a></li>
            <li><a href="#">Benefits</a></li>
            <li><a href="#">Locations</a></li>
            <li><a href="#">Interviewing</a></li>
            <li><a href="#">Jobs</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </nav>
      </div>
    </header>

    <script type="text/javascript" src="./scrollTransitions.js"></script>
    `;

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const headerFont = document.querySelector(
      'link[href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@400;500;700&family=Titillium+Web:wght@400;700&display=swap"]'
    );

    const shadowRoot = this.attachShadow({ mode: "closed" });

    if (headerFont) {
      shadowRoot.appendChild(headerFont.cloneNode());
    }

    shadowRoot.appendChild(headerTemplate.content);
  }
}

customElements.define("main-header", Header);

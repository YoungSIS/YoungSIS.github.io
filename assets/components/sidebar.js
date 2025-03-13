class Sidebar extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
        this.innerHTML = `
        <div id="sidebar">
			<div class="inner">
                <nav id="menu">
                    <header class="major">
                        <h2>Menu</h2>
                    </header>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li>
                            <span class="opener">Events</span>
                            <ul>
                                <li><a href="upcoming_events.html">Upcoming events</a></li>
                                <li><a href="past_events.html">Past events</a></li>
                            </ul>
                        </li>
                        <li>
                            <span class="opener">Board</a></span>
                            <ul>
                                <li><a href="officers.html">Current officers</a></li>
                                <li><a href="past_officers.html">Past officers</a></li>
                            </ul>
                        </li>
                        <li><a href="tell_me_y.html">Tell me y-SIS</a></li>
                        <li><a href="phd_list.html">PhD programmes in statistics</a></li>
                        <li><a href="registration.html">Join us</a></li>
                        <li><a href="regulation_it.html">Regulations</a></li>
                        <li><a href="links.html">Useful links</a></li>
                    </ul>
                </nav>

                <section>
                    <header class="major">
                        <h2>Get in touch</h2>
                    </header>
                    <ul class="contact">
                        <li class="fa-envelope-o"><a href="mailto:youngsis.2013@gmail.com">youngsis.2013@gmail.com</a></li>
                        <li class="fa-facebook"><a href="https://www.facebook.com/youngSIStatistica">Facebook</a></li>
                        <li class="fa-twitter"><a href="https://twitter.com/y_SIStatistica">Twitter</a></li>
                        <li class="fa-instagram"><a href="https://www.instagram.com/young_sistat/">Instagram</a></li>
                    </ul>
                </section>
            </div>
        </div>
        `;
    }
}
  
customElements.define('sidebar-component', Sidebar);

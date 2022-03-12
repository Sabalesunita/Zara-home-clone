function navbar() {
    return `
    <div id="navbar" class="flex">
    <div id="left" class="flex material-icons">
    <span class="material-icons">menu</span>

    <div>
        <p id="zara">ZARA HOME</p>
    </div>
</div>
<div id="middle" class="flex">
    <label for="">SEARCH</label>
    <input type="search">
</div>
<div id="right" class="flex">
    <div onclick="window.location.href='/login page/login.html'">
        <i class="fa fa-user"></i>
        LOGIN
    </div>
    <div class="material-icons">
        work_outline
    </div>
</div>
</div>
<section>
        <img id="logo1" src="https://www.zarahome.com/static/itxwebstandard/images/logo.svg" alt="">

        <div id="menu_list">
            <ul class="menu">
                <li id="newin-btn"><a href="#"> NEW IN </a>
                    <ul id="newin">
                        <li><a href="#">COLLECTION </a></li>
                        <li><a href="#">KIDS </a></li>
                    </ul>
                </li>


                <li id="bedroom-btn"><a href="/bedroom/bedroom.html">BEDROOM </a>
                    <ul id="bedroom">
                        <li><a href="#">DUVET COVERS </a></li>
                        <li><a href="#">FLAT SHEETS </a></li>
                        <li><a href="#">PILLOWCASES </a></li>
                        <li><a href="#">FITTED SHEETS </a></li>
                        <li><a href="#">OUILTS </a></li>
                        <li><a href="#">BEDSPREADS </a></li>
                        <li><a href="#">BLANKETS </a></li>
                        <li><a href="#">CUSIONS </a></li>
                        <li><a href="#">CURTAINS </a></li>
                    </ul>
                </li>

                <li id="clothing-btn"><a href="#">CLOTHING & FOOTWARE </a></li>
                <ul id="clothing">
                    <li><a href="#">WOMEN </a></li>
                    <li><a href="#">MEN </a></li>
                    <li><a href="#">FOOTWARE </a></li>
                    <li><a href="#">ACCESSORIES </a></li>
                </ul>

                <li id="living-btn"><a href="/Living room/livingroom.html">LIVING ROOM </a>
                        <ul id="living">
                            <li><a href="#"> FURNITURE & RUGS</a></li>
                            <li><a href="#"> PHOTO FRAMES</a></li>
                            <li><a href="#">BASKETS </a></li>
                            <li><a href="#"> VASES</a></li>
                            <li><a href="#"> DECORATIVE CUSIONS</a></li>
                            <li><a href=""></a>CURTAINS</li>
                            <li><a href=""></a>DOOR KNOBS</li>
                            <li><a href="">DECOR ACCESSORIES</a></li>
                        </ul>
                    </li>

                <li id="dinig-btn"><a href="#">DINING </a>
                        <ul id="dining">
                            <li><a href="#">TABLECLOTHS </a></li>
                            <li><a href="#"> PLACEMATS</a></li>
                            <li><a href="#"> TABLE RUNNERS</a></li>
                            <li><a href="#"> KITCHEN TEXTTILES</a></li>
                            <li><a href="#"> TABLE ACCESSORIES</a></li>
                        </ul>
                </li>

                <li id="bathroom-btn"><a href="/bedroom/Bathroom/bathroom.html">BATHROOM </a>            
                        <ul id="bathroom">
                            <li><a href="#"> TOWELS</a></li>
                            <li><a href="#">BATHROBES </a></li>
                            <li><a href="#">BATHROOM ACCESSORIES </a></li>     
                        </ul>
                </li>

                <li id="kids-btn"><a href="#">KIDS </a>     
                        <ul id="kids">
                            <li><a href="#">BEDROOM </a></li>
                            <li><a href="#">DUVET covers </a></li>
                            <li><a href="#"> PILLOWCASS</a></li>
                            <li><a href="#">BLANKETS </a></li>
                            <li><a href="#">CUSIONS </a></li>
                        </ul>
                </li>

                <li id="stories-btn"><a href="#">STORIES </a>
                        <ul id="stories">
                            <li><a href="#">VISUAL DIARIES | NEW YORK  </a></li>
                            <li><a href="#">VISUAL DIARIES |PARIS  </a></li>
                            <li><a href="#"> THE ART OF LIVING</a></li>
                          
                        </ul>
                </li>

                <li id="info-btn"><a href="#">+INFO </a>
                        <ul id="info">
                            <li><a href="/Help/help.html">HELP </a></li>
                            <li><a href="/Contact/contact.html">CONTACT US </a></li>
                            <li><a href="/Guest/guest.html">GUEST PURCHASE </a></li>  
                        </ul>
                </li>

            </ul>
        </div>
    </section>
`;
}

function footer() {
    return `
    <div id="footer_1st"> 
    <p>JOIN OUR NEWSLETTER - ENTER YOUR EMAIL ADDRESS</p>
    <input type="text">
</div>
<div id="footer_2nd">
    <div id="follow">
        <p>Follow us on</p>
        <div class="icon"> 
        <i class="fab fa-facebook-f"></i>
        <i class="fab fa-instagram"></i>
        <i class="fab fa-pinterest-p"></i>
        <i class="fa fa-youtube"></i>
        <i class="fab fa-twitter"></i>
        <i class="fa fa-spotify"></i>  
        </div>
    </div>

    <div id="download">
        <p>Download our app</p>
        <div class="icon">
            <i class="fab fa-apple"></i>
        </div>
    </div>
</div>

<div id="footer_3rd">
    <div>
        <h5>POLICIES</h5>
        <a href="#">
            <p>TERMS AND CONDITIONS</p>
        </a>
        <a href="#">
            <p>PRIVACY POLICY</p>
        </a>
        <a href="#">
            <p>COOKIES POLICY</p>
        </a>
        <a href="#">
            <p>COOKIES SETTINGS</p>
        </a>
        <a href="#">
            <p>LEGAL MENTIONS
            </p>
        </a>
    </div>
    <div>
        <h5>COMPANY</h5>
        <a href="#">
            <p>WORK WITH US</p>
        </a>
        <a href="#">
            <p>PRESS</p>
        </a>
    </div>
    <div>
        <h5>CONTACT</h5>
        <a href="#">
            <p>CONTACT US</p>
        </a>
        <a href="#">
            <p>GUEST PURCHASE</p>
        </a>
    </div>
</div>
    
    `;
}
export { navbar, footer };
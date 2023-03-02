import './footer.styles.scss';

const Footer = () => {
    return (
        <div className="footer">
            <div className="sb-footer section-padding">
                <div className="sb-footer-links">
                    <div className="sb-footer-links-div">
                        <h4>PARTNERSHIP</h4>

                    </div>
                    <div className="sb-footer-links-div">
                        <h4>OFFICE</h4>
                        <p>Address - HQ
                            5 Royle Crescent
                            London W13 0BH
                            United Kingdom
                        </p>
                        
                    </div>
                    <div className="sb-footer-links-div">
                        <h4>CONTACT US</h4>
                        <p>Info@goagilecloud.com</p>
                        <p>+44 7920 461147</p>
                    </div>
                </div>
            </div>

            <hr></hr>

            <div className="sb-footer-below">
                <div className="footer-copyrights">
                    <p>
                        @{new Date().getFullYear()} GoAgileCloud. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
}
 
export default Footer;
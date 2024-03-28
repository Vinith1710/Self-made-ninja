import socialYoutube from '../../Assets/social/youtube.png';
import socialFacebook from '../../Assets/social/facebook.png';
import socialInstagram from '../../Assets/social/instagram.png';
import socialLinkedIn from '../../Assets/social/linkedin.png';
import socialGit from '../../Assets/social/gitlab.png';
import socialTelegram from '../../Assets/social/telegram.png';
import socialDiscord from '../../Assets/social/discord.png';
import socialTwitter from '../../Assets/social/twitter.png';
import labWhite from '../../Assets/icons/Labs-White.png';
import vpn4 from '../../Assets/icons/Vpn-4.png';
function Footer() {
    return (
        <>
            <footer class="footer-wrapper">
                <div class="footer-items-wrapper">
                    <ul class="footer-items">
                        <div class="section-sub-title">Company</div>
                        <li><a href="aboutus">About Us</a></li>
                        <li><a href="team" >Core Team</a></li>
                        <li><a href="contactus">Contact Us</a></li>
                    </ul>
                    <ul class="footer-items">
                        <div class="section-sub-title">Career</div>
                        <li><a href="https://forms.gle/S8B3L31Rw2uwfq4e6" target="_blank">Hire from us</a></li>
                        <li><a href="https://forms.gle/gvDgNfQw8k77swXc7" target="_blank" >Apply as mentor</a></li>
                        <li><a href="https://forms.gle/qV6Ay2FgKXBv1Sop8" target="_blank" >Work with us</a></li>
                    </ul>
                    <ul class="footer-items">
                        <div class="section-sub-title">Resources</div>
                        <li><a href="https://blog.selfmade.ninja" target="_blank">Blog</a></li>
                        <li><a href="https://www.youtube.com/watch?v=AlgIX4RZV14&list=PLRRsXF6W98Sudlltrf8rrxbPnzkHcHgG3" target="_blank" >Free Python Marathon</a></li>
                        <li><a href="https://www.youtube.com/watch?v=na5Zt2XFwRY&list=PLRRsXF6W98Su-DL4sg2MkOrPpXYtbmxK9" target="_blank" >Git Workshop</a></li>
                    </ul>

                    <ul class="footer-items">
                        <div class="section-sub-title">Products</div>
                        <li class="footer-product">
                            <img loading="lazy" src={labWhite} alt="sna-logo" class="footer-product-logo no-margin"/>
                            <img loading="lazy" src={vpn4} alt="sna-logo" class="footer-product-logo no-margin"/>
                        </li>
                    </ul>
                </div>
                <hr class="line"/>
                <ul class="footer-last">
                    <li><a href="#"><span>&copy;</span> Copyright 2023 Selfmade Ninja Academy Pvt ltd</a></li>
                    <li><a href="terms">Terms & Conditions</a></li>
                    <li><a href="policy">Privacy policy</a></li>
                    <li class="footer-social-media"><a href="https://www.youtube.com/c/SelfmadeNinjaAcademy" target="_blank"><img src={socialYoutube} alt="Sna Logo"/></a>
                        <a href="https://www.facebook.com/selfmade.ninja/" target="_blank"><img src={socialFacebook}  /></a>
                        <a href="https://www.instagram.com/selfmade.ninja/" target="_blank"><img src={socialInstagram}  /></a>
                        <a href="https://www.linkedin.com/company/selfmade-ninja-academy/" target="_blank"><img src={socialLinkedIn}  /></a>
                        <a href="https://git.selfmade.ninja/" target="_blank"><img src={socialGit}  /></a>
                        <a href="https://t.me/snacommunity" target="_blank"><img src={socialTelegram}  /></a>
                        <a href="https://discord.gg/N3uHsEr5" target="_blank"><img src={socialDiscord}  /></a>
                        <a href="https://twitter.com/selfmade_ninja" target="_blank"><img src={socialTwitter}  /></a>
                    </li>
                </ul>
            </footer>
        </>
                    )
}
export default Footer;
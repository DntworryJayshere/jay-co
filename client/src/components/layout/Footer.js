import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Footer() {
	return (
		<>
			<div className="footer-container">
				<section className="footer-subscription">
					<p className="footer-subscription-heading">
						Join the newsletter to receive our best scheduling deals
					</p>
					<p className="footer-subscription-text">
						You can unsubscribe at any time.
					</p>
					<Form>
						<input
							className="footer-input"
							name="email"
							type="email"
							placeholder="Your Email"
						/>
						<Button variant="light">Subscribe</Button>
					</Form>
				</section>
				<div class="footer-links">
					<div className="footer-link-wrapper">
						<div class="footer-link-items">
							<h2>About Us</h2>
							<Link to="/sign-up">How it works</Link>
							<Link to="/">Testimonials</Link>
							<Link to="/">Careers</Link>
							<Link to="/">Investors</Link>
							<Link to="/">Terms of Service</Link>
						</div>
						<div class="footer-link-items">
							<h2>Contact Us</h2>
							<Link to="/">Contact</Link>
							<Link to="/">Support</Link>
							<Link to="/">Destinations</Link>
							<Link to="/">Sponsorships</Link>
						</div>
					</div>
					<div className="footer-link-wrapper">
						<div class="footer-link-items">
							<h2>Videos</h2>
							<Link to="/">Submit Video</Link>
							<Link to="/">Ambassadors</Link>
							<Link to="/">Agency</Link>
							<Link to="/">Influencer</Link>
						</div>
						<div class="footer-link-items">
							<h2>Social</h2>
							<Link to="/">Instagram</Link>
							<Link to="/">Facebook</Link>
							<Link to="/">Github</Link>
							<Link to="/">Twitter</Link>
						</div>
					</div>
				</div>
				<div class="website-rights">Jay&Co © 2020</div>
			</div>
		</>
	);
}

export default Footer;

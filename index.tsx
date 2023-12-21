import { FC } from 'react'
import Image from 'next/image'

import classes from './PlantLandingPage.module.scss'

import mainSectionImage from './assets/images/pngwing 5.png'
import logo from './assets/images/img.png'
import smalLogo from './assets/images/abstract-tree-logo-removebg-preview 1.png'
import secondSectionPlant1 from './assets/images/Rectangle 6.jpg'
import secondSectionPlant2 from './assets/images/nagy-arnold-X_IvVDuHvDQ-unsplash 1.jpg'
import secondSectionPlant3 from './assets/images/charles-deluvio-_78djVBBQIQ-unsplash 2.jpg'
import secondSectionPlant4 from './assets/images/Rectangle 11.jpg'
import secondSectionPlant5 from './assets/images/charles-deluvio-_78djVBBQIQ-unsplash 3.jpg'
import secondSectionPlant6 from './assets/images/charles-deluvio-_78djVBBQIQ-unsplash 4.jpg'
import secondSectionPlant7 from './assets/images/pngwing 11.png'
import secondSectionPlant8 from './assets/images/pngwing 10.png'
import secondSectionPlant9 from './assets/images/Group 208.png'
import footerMainImage from './assets/images/pngwing 1.png'

import socialFacebookIcon from './assets/icons/facebook 1.png'
import socialInstagramIcon from './assets/icons/instagram 1.png'
import socialTwitterIcon from './assets/icons/twitter 1.png'
import socialYoutubeIcon from './assets/icons/youtube 1.png'

import checkIcon from './assets/icons/Group 201.svg'

export const PlantLandingPage: FC = () => {
	return (
		<div className={classes.root}>
			<div className={classes.mainSection}>
				<header>
					<div className={classes.logo}>
						<Image src={smalLogo} alt={'Logo'} />
					</div>
					<nav className={classes.navLink}>
						<ul>
							<li>
								<a href="#">Home</a>
							</li>
							<li>
								<a href="#">About</a>
							</li>
							<li>
								<a href="#">Contact</a>
							</li>
							<li>
								<div className={classes.orderBtn}>
									<button>Order now</button>
								</div>
							</li>
						</ul>
					</nav>
				</header>
				<div className={classes.mainImage}>
					<Image src={mainSectionImage} alt={'Logo'} />
				</div>
				<div className={classes.infoBlock}>
					<h1 className={classes.headTitle}>Plant a tree today</h1>
					<h2 className={classes.title}>
						it will help us breathe tomorrow.
					</h2>
					<p className={classes.description}>
						We know how important trees are to our existence and for
						the well-being of the planet at large, which is why we
						have put together a number
					</p>
					<div className={classes.orderNowContainer}>
						<div className={classes.orderBtn}>
							<button>Order now</button>
						</div>
						<div className={classes.sellInfo}>
							<div className={classes.sellBlock}>
								<div className={classes.count}>355+</div>
								<div className={classes.title}>
									Awesome collection
								</div>
							</div>
							<div className={classes.sellBlock}>
								<div className={classes.count}>100+</div>
								<div className={classes.title}>
									Sell everyday
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={classes.secondSection}>
				<div className={classes.row}>
					<div className={classes.titleBlock}>
						<h2 className={classes.title}>
							Plant are the lungs of the world
						</h2>
						<div className={classes.image}>
							<Image src={secondSectionPlant2} alt="" />
						</div>
					</div>
					<div className={classes.descriptionBlock}>
						<div className={classes.image}>
							<Image src={secondSectionPlant1} alt="" />
						</div>
						<p className={classes.text}>
							That were not animals, and included algae and
							however, all current definitions{' '}
						</p>
						<div className={classes.orderBtn}>
							<button>Order now</button>
						</div>
					</div>
				</div>
				<div className={classes.row}>
					<div className={classes.descriptionBlock}>
						<div className={classes.image}>
							<Image src={secondSectionPlant3} alt="" />
						</div>
						<div className={classes.initiativeList}>
							<ul>
								<li>
									<div className={classes.checkBlock}>
										<Image src={checkIcon} alt="" />
									</div>
									<span>
										Ost plants are multicellular organisms.
										Green plants obtain most of their energy{' '}
									</span>
								</li>
								<li>
									<div className={classes.checkBlock}>
										<Image src={checkIcon} alt="" />
									</div>{' '}
									<span>
										Sunlight takes about 8.3 minutes to
										reach Earth from the surface of the Sun.
									</span>
								</li>
								<li>
									<div className={classes.checkBlock}>
										<Image src={checkIcon} alt="" />
									</div>{' '}
									<span>
										Researchers can measure the intensity of
										sunlight using a sunshine recorder
									</span>
								</li>
								<li>
									<div className={classes.checkBlock}>
										<Image src={checkIcon} alt="" />
									</div>
									<span>
										That were not animals, and included
										algae and fungi however,
									</span>
								</li>
							</ul>
						</div>
					</div>
					<div className={classes.titleBlock}>
						<h2 className={classes.title}>
							A great initiative indeed
						</h2>
						<div className={classes.image}>
							<Image src={secondSectionPlant4} alt="" />
						</div>
					</div>
				</div>
				<div className={classes.row}>
					<div className={classes.titleBlock}>
						<h2 className={classes.title}>See our latest video</h2>
						<div className={classes.image}>
							<Image src={secondSectionPlant5} alt="" />
						</div>
					</div>
					<div className={classes.descriptionBlock}>
						<div className={classes.image}>
							<Image src={secondSectionPlant6} alt="" />
						</div>
						<p className={classes.text}>
							lants are predominantly photosynthetic eukaryotes of
							the kingdom Plantae. Historically, the plant kingdom
							massed all living things
						</p>
					</div>
				</div>
				<div className={classes.row}>
					<div className={classes.descriptionBlock}>
						<div className={classes.productBlock}>
							<div className={classes.productImage}>
								<Image src={secondSectionPlant7} alt="" />
							</div>
							<div className={classes.productInfo}>
								<p className={classes.title}>Eled Doming</p>
								<p className={classes.description}>
									Amet minim mollit non deserunt ullamco est
									sit aliqua dolor do amet sint. Velit officia
									consequat duis enim velit mollit.
								</p>
								<span className={classes.price}>$50.00</span>
							</div>
						</div>
						<div className={classes.productBlock}>
							<div className={classes.productImage}>
								<Image src={secondSectionPlant8} alt="" />
							</div>
							<div className={classes.productInfo}>
								<p className={classes.title}>Eled Doming</p>
								<p className={classes.description}>
									Amet minim mollit non deserunt ullamco est
									sit aliqua dolor do amet sint. Velit officia
									consequat duis enim velit mollit.
								</p>
								<span className={classes.price}>$50.00</span>
							</div>
						</div>
						<p className={classes.text}>
							that were not animals, and included algae and fungi
							however, all current definitions{' '}
						</p>
					</div>
					<div className={classes.titleBlock}>
						<h2 className={classes.title}>
							Get our greatest plants
						</h2>
						<div className={classes.productBlock}>
							<div className={classes.productImage}>
								<Image src={secondSectionPlant9} alt="" />
							</div>
							<div className={classes.productInfo}>
								<p className={classes.title}>Eled Doming</p>
								<p className={classes.description}>
									Amet minim mollit non deserunt ullamco est
									sit aliqua dolor do amet sint. Velit officia
									consequat duis enim velit mollit.
								</p>
								<span className={classes.price}>$50.00</span>
							</div>
						</div>
						<div className={classes.orderBtn}>
							<button>Order now</button>
						</div>
					</div>
				</div>
			</div>
			<footer className={classes.footer}>
				<div className={classes.imageBlock}>
					<Image src={logo} alt="" />
				</div>
				<div className={classes.aboutUsList}>
					<p className={classes.blockName}>About Us</p>
					<ul>
						<li>
							<a href="#">Testimonial</a>
						</li>
						<li>
							<a href="#">CONTACT US</a>
						</li>
						<li>
							<a href="#">Feature</a>
						</li>
					</ul>
				</div>
				<div className={classes.aboutUsList}>
					<p className={classes.blockName}>Policy Library</p>
					<ul>
						<li>
							<a href="#">SITEMAP</a>
						</li>
						<li>
							<a href="#">EN ESPAROL</a>
						</li>
					</ul>
				</div>
				<div className={classes.followUs}>
					<p className={classes.blockName}>Follow Us</p>
					<div className={classes.socialList}>
						<a href="#">
							<Image src={socialFacebookIcon} alt="" />
						</a>
						<a href="#">
							<Image src={socialInstagramIcon} alt="" />
						</a>
						<a href="#">
							<Image src={socialTwitterIcon} alt="" />
						</a>
						<a href="#">
							<Image src={socialYoutubeIcon} alt="" />
						</a>
					</div>
				</div>

				<Image src={footerMainImage} alt="" />
			</footer>
		</div>
	)
}

export default PlantLandingPage

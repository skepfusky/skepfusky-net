import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBars,
	faClose,
	faExternalLinkAlt,
	faLightbulb
} from "@fortawesome/free-solid-svg-icons";
import {
	faGithub,
	faInstagram,
	faItunesNote,
	faSoundcloud,
	faSpotify,
	faTwitter,
	faYoutube
} from "@fortawesome/free-brands-svg-icons";

export default function Header() {
	const router = useRouter();

	const [isOpen, setIsOpen] = useState(false);
	const toggleMenu = () => setIsOpen(!isOpen);

	// If isOpen is true add a style to the body element to make the menu appear
	useEffect(() => {
		isOpen
			? (document.body.style.overflow = "hidden")
			: (document.body.style.overflow = "visible");
	}, [isOpen]);

	// Detect of the ESC key is pressed anywhere on the document
	useEffect(() => {
		const gtfo = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				setIsOpen(false);
			}
		};
		document.addEventListener("keydown", gtfo);
		return () => document.removeEventListener("keydown", gtfo);
	}, []);

	const [stickyClass, setStickyClass] = useState("");

	useEffect(() => {
		window.addEventListener("scroll", stickNavbar);
		return () => window.removeEventListener("scroll", stickNavbar);
	}, []);

	const stickNavbar = () => {
		let windowHeight = window.scrollY;
		if (window !== undefined)
			windowHeight > 1 ? setStickyClass("gradient-toggle") : setStickyClass("");
	};

	return (
		<header className={`${stickyClass} ${isOpen ? "header-active" : ""}`}>
			<div className="wrapper-interactive">
				<button
					id="burger-menu"
					className={isOpen ? "burger-active" : ""}
					onClick={toggleMenu}
				>
					<FontAwesomeIcon icon={isOpen ? faClose : faBars} />
				</button>
				<strong id="site-wordmark">
					<Link href="/">skepfusky</Link>
				</strong>
			</div>
			{/* Big ass toggle menu */}
			<div
				id="toggle-menu-container"
				className={isOpen ? "toggled-menu-open" : "toggled-menu-closed"}
			>
				<div id="toggle-menu-wrapper">
					<h2>Site navigation</h2>
					<hr />
					<nav id="toggle-nav-menu">
						<Link href="/projects">
							<a onClick={toggleMenu}>Projects</a>
						</Link>
						<Link href="/discography">
							<a onClick={toggleMenu}>Discography</a>
						</Link>
						<Link href="/blog">
							<a onClick={toggleMenu}>Blog</a>
						</Link>
						<Link href="/about">
							<a onClick={toggleMenu}>About</a>
						</Link>
					</nav>
					<div id="toggle-lower-third">
						<span id="desktop-esc-info">
							<FontAwesomeIcon icon={faLightbulb} className="pr-2" />
							Protip: You can press{" "}
							<span className="px-1  mx-1 text-sm rounded-md border-neutral-200 border-2">
								ESC
							</span>{" "}
							to close the menu
						</span>
						<div className="flex justify-between items-center">
							<span>
								V5: Contentful &bull; Copyright &copy; 2014-
								{new Date().getFullYear()} Fusky & Co., LLC. All rights
								reserved.
							</span>
							<span>
								<button id="theme-toggle">
									<FontAwesomeIcon icon={faLightbulb} className="mr-2" />
									Theme: Dark
								</button>
							</span>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}
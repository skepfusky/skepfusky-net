import { FontAwesomeIcon as FaIcon } from "@fortawesome/react-fontawesome"
import {
	faCode,
	faExternalLink,
	faInfoCircle
} from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"
import styles from "@/styles/Home.module.scss"
import { ProjectItemProps } from "@/models/Interfaces"
import { useInView } from "react-intersection-observer"

export default function ProjectCard({
	projectTitle,
	description,
	img,
	techIcons,
	repoLink,
	pageLink,
	extLink
}: ProjectItemProps) {
	const { ref, inView } = useInView({
		threshold: 0,
		triggerOnce: true,
		delay: 600,
		rootMargin: "-100px 0px -200px 0px"
	})

	return (
		<div
			ref={ref}
			className={
				inView ? styles["io-viewport-outside"] : styles["io-viewport-enter"]
			}
		>
			<div
				className={styles["featured-project-card"]}
				itemScope
				itemType="http://schema.org/CreativeWork"
			>
				<div className={styles["featured-project-image"]}>
					{img ? (
						<img
							itemType="logo"
							src={img}
							alt={`Image for a project, ${projectTitle}.`}
						/>
					) : (
						<div>lol</div>
					)}
				</div>
				<div className={styles["tech-icons"]}>
					{techIcons?.map((icon, index) => (
						<i className={`devicon-${icon}`} key={index} />
					))}
				</div>
				<h3>{projectTitle}</h3>
				<p itemType="description">{description}</p>
				{/* <p itemType="license">MIT</p> */}
				<div className="py-2 flex justify-center gap-x-2">
					{repoLink && (
						<Link href={`https://github.com/${repoLink}`} passHref>
							<a className="link-btn flex items-center text-sm" target="_blank">
								<FaIcon icon={faCode} size="sm" className="pr-1" />
								Code
							</a>
						</Link>
					)}
					{pageLink && (
						<Link href={pageLink} passHref>
							<a className="link-btn flex items-center text-sm">
								<FaIcon icon={faInfoCircle} size="sm" className="pr-1" />
								About
							</a>
						</Link>
					)}
					{extLink && (
						<Link href={extLink} passHref>
							<a className="link-btn flex items-center text-sm">
								Website
								<FaIcon icon={faExternalLink} size="sm" className="pl-1" />
							</a>
						</Link>
					)}
				</div>
			</div>
		</div>
	)
}

export function CardSkeleton() {
	return (
		<div className={styles["featured-project-loading-card"]}>
			<div className={styles["featured-project-loading-image"]}></div>
			<div className={styles["featured-project-loading-title"]}></div>
			<div className={styles["featured-project-loading-description"]}></div>
			<div className="py-2 flex justify-center gap-x-2"></div>
		</div>
	)
}
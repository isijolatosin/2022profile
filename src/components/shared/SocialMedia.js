import React from 'react'
import { BsYoutube } from 'react-icons/bs'
import { RiLinkedinBoxFill } from 'react-icons/ri'
import { VscGithubInverted } from 'react-icons/vsc'

const SocialMedia = () => {
	return (
		<div className="social-media-list tw-mt-[30px]">
			<a
				href="https://www.linkedin.com/in/oluwatosin-isijola-33333ba8/"
				target="_blank"
				rel="noopener noreferrer">
				<RiLinkedinBoxFill size={20} />
			</a>
			<a
				href="https://www.youtube.com/channel/UCGg2VrjT2wLcWbf6S5DMt7A"
				target="_blank"
				rel="noopener noreferrer">
				<BsYoutube size={20} />
			</a>
			<a
				href="https://github.com/isijolatosin"
				target="_blank"
				rel="noopener noreferrer">
				<VscGithubInverted size={20} />
			</a>
		</div>
	)
}

export default SocialMedia

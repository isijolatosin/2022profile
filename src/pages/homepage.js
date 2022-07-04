import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/shared/Layout'
import SocialMedia from '../components/shared/SocialMedia'

const Homepage = () => {
	const profileImg = require('../assets/profile.jpeg')
	const [isShow, setIsShow] = React.useState(false)

	setTimeout(() => {
		setIsShow(true)
	}, 2000)
	return (
		<div className="homeBg custome-font tw-h-screen tw-flex tw-items-center tw-justify-center">
			<div className="tw-bg-black tw-h-[100%] md:tw-h-[85%] tw-w-[100%] md:tw-w-[85%]">
				<Layout>
					{isShow ? (
						<div className="fade tw-flex tw-flex-col md:tw-flex-row tw-h-[600px] tw-items-center tw-justify-center">
							<div className="img-wrapper">
								<img src={profileImg} alt="" />
							</div>
							<div className="tw-flex tw-flex-col tw-mt-10 md:tw-mt-0 tw-text-white md:tw-ml-10">
								<span className="tw-text-2xl">Explore with Me</span>
								<Link to="/about/oluwatosin-isijola">
									<button className="tw-bg-white tw-text-neutral-900 tw-px-5 tw-py-1 tw-tracking-widest hover:tw-bg-black hover:tw-text-[#bba371] tw-ease-in tw-duration-300 hover:tw-cursor-pointer tw-mt-5">
										About Me
									</button>
								</Link>
								<SocialMedia />
							</div>
						</div>
					) : (
						<div className="tw-h-screen tw-bg-black">
							<div className="load-wrapper tw-mt-10 tw-top-[16%] md:tw-top-[30%] tw-left-[50%]">
								<div className="circle"></div>
								<div className="circle"></div>
								<div className="circle"></div>
							</div>
						</div>
					)}
				</Layout>
			</div>
		</div>
	)
}

export default Homepage

import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/shared/Layout'
import SocialMedia from '../components/shared/SocialMedia'

const Aboutpage = () => {
	const email = 'tisijola7@gmail.com'
	const profileImg = require('../assets/profile.jpeg')
	const [isShow, setIsShow] = React.useState(false)

	setTimeout(() => {
		setIsShow(true)
	}, 2000)
	return (
		<div className="homeBg custome-font tw-h-[100%] md:tw-h-screen tw-flex tw-items-center tw-justify-center">
			<div className="tw-bg-black tw-h-[100%] lg:tw-h-[85%] md:tw-w-[90%] tw-w-[100%]">
				<Layout>
					{isShow ? (
						<div className="fade tw-flex tw-flex-col md:tw-flex-row tw-justify-between tw-w-[90%] md:tw-w-[70%] tw-mx-auto tw-mt-20">
							<div className="tw-mt-20 md:tw-mt-0 tw-text-white tw-w-[100%] md:tw-w-[50%] md:tw-order-1 tw-order-2">
								<h1 className="custome-font tw-uppercase tw-text-[25px] md:tw-text-[50px]">
									oluwatosin isijola
								</h1>
								<h2 className="tw-text-2xl tw-w-[80%] tw-my-5">
									Toronto based{' '}
									<strong className="tw-text-[#bba371]">Developer</strong>{' '}
									focused on{' '}
									<strong className="tw-text-[#bba371]">UX Designs</strong> and{' '}
									<strong className="tw-text-[#bba371]">
										Frontend development.
									</strong>
								</h2>
								<span className="tw-tracking-widest">
									A precise creative individual with a sense of service, highly
									crafted in graphic designing with years of experience in
									corporate brand development, layout editing, typography,
									concept creation, design and development. Incorporate creative
									flair, originality, and a strong visual sense. Confidently
									able to bring simplified strategic concepts to clients and
									colleagues. Able to put up excellent presentation,
									compilation, editing and design skills. Knowledge of most
									types of graphic design software, including object oriented
									management and metadata management software.
								</span>
							</div>
							<div className="tw-relative md:tw-order-2 tw-order-1 tw-mb-10 md:tw-mb-0">
								<img
									className="tw-w-[200px] md:tw-w-[300px] tw-rounded-lg md:tw-rounded-none"
									src={profileImg}
									alt=""
								/>
								<h3 className="tw-text-xl tw-my-5 tw-text-[#bba371]">
									Stay connected and let the good work begin.
								</h3>
								<Link to="/contact/oluwatosin-isijola">
									<button className="tw-bg-white tw-text-neutral-900 tw-px-5 tw-py-1 tw-tracking-widest hover:tw-bg-black hover:tw-text-[#bba371] tw-ease-in tw-duration-300 hover:tw-cursor-pointer">
										{email}
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

export default Aboutpage

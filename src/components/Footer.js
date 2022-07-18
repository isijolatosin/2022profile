import React from 'react'
import { SiTreyarch } from 'react-icons/si'

function Footer() {
	return (
		<footer>
			<div className="tw-flex tw-justify-center tw-mt-[-50px] md:tw-mt-[30px] tw-text-xs tw-font-bold tw-tracking-wider tw-text-neutral-500 ">
				<div className="tw-pr-1 tw-border-r-2 tw-border-r-neutral-800 md:tw-flex">
					<p className="">
						&copy; {new Date().getUTCFullYear()} <span>oluwatosin</span>
						<span> • All right reserved</span>
					</p>
				</div>
				<div className="lg:tw-flex tw-ml-1">
					<p className="tw-flex tw-items-center">
						Designed by{' '}
						<span className="rose-gold tw-ml-1">
							<a
								href="https://www.linkedin.com/in/oluwatosin-isijola-33333ba8/"
								target="_blank"
								rel="noopener noreferrer">
								<SiTreyarch size={15} />
							</a>
						</span>
					</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer

import React from 'react'
import { BsLink45Deg } from 'react-icons/bs'
import Layout from '../components/shared/Layout'

const Projects = () => {
	const [isShow, setIsShow] = React.useState(false)
	const [linkShow, setLinkShow] = React.useState(false)
	const [linkKey, setLinkKey] = React.useState(null)
	const airbnb = require('../assets/airbnb.jpeg')
	const hairposey = require('../assets/hairposey.jpeg')
	const hulu = require('../assets/hululu.jpeg')
	const modelEst = require('../assets/modelEst.jpeg')
	const netflix = require('../assets/netflix.jpeg')
	const pvg = require('../assets/pvg.jpeg')
	const joel = require('../assets/joel.jpeg')
	const imgArray = [
		{
			url: modelEst,
			link: 'https://www.model-est.com/',
			id: '1',
			name: 'modelEst',
		},
		{
			url: airbnb,
			link: 'https://airbnb-clone-32e27.web.app/',
			id: '2',
			name: 'AirBnB-Clone',
		},
		{
			url: hairposey,
			link: 'https://www.hairposey.com/',
			id: '3',
			name: 'HairPosey',
		},
		{
			url: hulu,
			link: 'https://hulu-clone-demo-app.netlify.app/',
			id: '4',
			name: 'Hulu-Clone',
		},
		{
			url: pvg,
			link: 'https://www.pvginternational-s.com/',
			id: '5',
			name: 'pvg-internationalS',
		},

		{
			url: netflix,
			link: 'https://netflix-clone-ced2a.web.app/',
			id: '6',
			name: 'Netflix-Clone',
		},
		{
			url: joel,
			link: 'https://joelarueyastudio.netlify.app/',
			id: '7',
			name: 'joelarueyastudio',
		},
	]

	setTimeout(() => {
		setIsShow(true)
	}, 2000)

	const handleShowLink = (key) => {
		setLinkKey(key)
		setLinkShow(true)
	}
	const handleHideLink = () => {
		setLinkShow(false)
	}

	return (
		<div className="homeBg custome-font md:tw-h-screen tw-flex tw-items-center tw-justify-center">
			<div className="tw-bg-black tw-h-[100%] md:tw-h-[85%] tw-w-[100%] md:tw-w-[85%]">
				<Layout>
					{isShow ? (
						<div className="tw-w-[90%] md:tw-w-[70%] tw-mx-auto tw-mt-[70px] md:tw-mt-[30px]">
							<h1 className="tw-text-white tw-mb-[50px] md:tw-mb-[70px] tw-text-2xl">
								Projects
							</h1>
							<div className="fade tw-relative gallery tw-hidden md:tw-w-[65vw] md:tw-h-[50vmin] md:tw-flex tw-mx-auto">
								{imgArray.map((item, idx) => (
									<>
										<div
											key={item?.id}
											onMouseOver={() => handleShowLink(item.id)}
											onMouseLeave={handleHideLink}
											className="img tw-relative">
											<img src={item.url} alt="" />
											{linkKey === item?.id && linkShow && (
												<a href={item.link} target="_blank" rel="noreferrer">
													<div className="tw-flex tw-bg-white tw-text-black tw-absolute tw-bottom-[20px] tw-items-center tw-px-5">
														<BsLink45Deg size={35} />
														<span>{item?.name}</span>
													</div>
												</a>
											)}
										</div>
									</>
								))}
							</div>
							<div className="md:tw-hidden">
								{imgArray.map((item, idx) => (
									<>
										<div
											key={item?.id}
											onMouseOver={() => handleShowLink(item.id)}
											onMouseLeave={handleHideLink}
											className="img tw-relative tw-w-[300px] tw-h-[400px] tw-mb-10 tw-mx-auto">
											<img
												src={item.url}
												alt=""
												className="object-contain tw-h-full tw-rounded-lg"
											/>
											{linkKey === item?.id && linkShow && (
												<a href={item.link} target="_blank" rel="noreferrer">
													<div className="tw-shadow-lg tw-flex tw-bg-white tw-text-black tw-absolute tw-bottom-[20px] tw-items-center tw-px-5">
														<BsLink45Deg size={35} />
														<span>{item?.name}</span>
													</div>
												</a>
											)}
										</div>
									</>
								))}
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

export default Projects

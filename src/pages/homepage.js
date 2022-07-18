import React from 'react'
import { CgClose } from 'react-icons/cg'
import { RiChat1Fill } from 'react-icons/ri'
import emailjs from 'emailjs-com'
import { Link } from 'react-router-dom'
import Layout from '../components/shared/Layout'
import SocialMedia from '../components/shared/SocialMedia'

const Homepage = () => {
	const profileImg = require('../assets/profile.jpeg')
	const [isShow, setIsShow] = React.useState(false)
	const [chatError, setChatError] = React.useState(false)
	const [chatSuccess, setChatSuccess] = React.useState(false)
	const [showForm, setShowForm] = React.useState(false)
	const [chatDetail, setChatDetail] = React.useState({
		name: '',
		title: '',
		email: '',
		message: '',
	})

	setTimeout(() => {
		setIsShow(true)
	}, 2000)

	const handleChangeChat = (e) => {
		setChatDetail({ ...chatDetail, [e.target.name]: e.target.value })
	}

	const SubmitInqury = (e) => {
		e.preventDefault()

		if (
			chatDetail.name === '' ||
			chatDetail.title === '' ||
			chatDetail.email === '' ||
			chatDetail.message === ''
		) {
			setChatError(true)
		}
		if (
			chatDetail.name === '' &&
			chatDetail.title === '' &&
			chatDetail.email === '' &&
			chatDetail.message === ''
		) {
			setChatError(true)
		} else if (
			chatDetail.name !== '' &&
			chatDetail.title !== '' &&
			chatDetail.email !== '' &&
			chatDetail.message !== ''
		) {
			try {
				const messageParams = {
					name: chatDetail.name,
					message: chatDetail?.message,
					client: chatDetail?.email,
				}
				emailjs
					.send(
						'service_dyboc4s',
						'template_nso903l',
						messageParams,
						'jhK1XJk3wCjqblLiF'
					)
					.then((res) => {})
					.catch((err) => console.log(err))
				setChatDetail({
					name: '',
					title: '',
					email: '',
					message: '',
				})
			} catch (error) {
				console.log(error)
				setChatError(error.message)
			}

			setTimeout(() => {
				setChatSuccess(true)
			}, 1000)
		}
	}

	return (
		<div className="homeBg custome-font tw-h-screen tw-flex tw-items-center tw-justify-center">
			<div className="tw-bg-black tw-h-[100%] lg:tw-h-[85%] md:tw-w-[90%] md:tw-h-[85%] tw-w-[100%]">
				<Layout>
					{isShow ? (
						<div className="fade tw-flex tw-flex-col md:tw-flex-row tw-h-[600px] tw-items-center md:tw-justify-center tw-pt-[70px] md:tw-mt-0">
							<div className="img-wrapper tw-w-[150px] tw-h-[150px] md:tw-w-[250px] md:tw-h-[250px]">
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
							<div
								onClick={() => setShowForm(!showForm)}
								className="md:tw-hidden tw-fixed tw-bottom-[40px] tw-right-[20px] tw-bg-[#18151d] tw-text-[#bba371] tw-p-3 tw-rounded-[30px] tw-z-40 tw-cursor-pointer hover:md:tw-bg-white hover:md:tw-text-neutral-900 tw-ease-in tw-duration-300">
								<RiChat1Fill />
							</div>
							<div
								className={`${
									showForm
										? 'tw-right-0 md:tw-right-[8px]'
										: 'tw-right-[-550px] md:tw-right-[-350px]'
								} tw-w-[100%] tw-h-screen tw-px-5 tw-pt-[115px] md:tw-pt-0 md:tw-max-h-[600px] md:tw-w-[350px] tw-fixed tw-z-30 tw-bg-black tw-p-2 tw-rounded-md tw-bottom-0 md:tw-bottom-[50px] tw-text-white tw-ease-in tw-duration-300`}>
								<form onSubmit={SubmitInqury}>
									<div className="tw-flex tw-justify-end tw-mt-5">
										<div
											onClick={() => {
												setShowForm(false)
												setChatError(false)
												setChatSuccess(false)
												setChatDetail({
													name: '',
													title: '',
													email: '',
													message: '',
												})
											}}
											className="tw-text-md tw-text-white tw-bg-neutral-900 tw-w-[30px] tw-h-[30px] tw-p-[8px] tw-flex tw-items-center tw-justify-center tw-rounded-full tw-shadow-lg tw-ease-in tw-duration-300 tw-cursor-pointer hover:md:tw-bg-white hover:md:tw-text-neutral-900">
											<CgClose />
										</div>
									</div>
									<p className="tw-text-center tw-leading-5 tw-text-xs tw-my-3 tw-font-bold tw-w-[80%] tw-mx-auto">
										Please fill out the form below and we will get back to you
										as soon as possible
									</p>
									<div>
										<input
											type="text"
											name="name"
											id="name"
											value={chatDetail.name}
											onChange={handleChangeChat}
											placeholder="Name"
											className="tw-bg-transparent tw-block tw-mx-auto tw-w-[100%] tw-px-3 tw-py-2 tw-text-xs tw-shadow-xl placeholder:tw-text-xs focus:tw-outline-none focus:tw-border-gray-200 focus:tw-ring-1 focus:tw-ring-gray-200 isabled:tw-bg-gray-50 disabled:tw-text-gray-500 disabled:tw-border-gray-200 disabled:tw-shadow-none invalid:tw-border-red-500 invalid:tw-text-red-600 focus:invalid:tw-border-red-500 focus:invalid:tw-ring-red-500 tw-outline-0 tw-mb-1 placeholder:tw-text-white tw-font-bold"
										/>
									</div>
									<div>
										<input
											type="text"
											name="title"
											id="title"
											value={chatDetail.title}
											onChange={handleChangeChat}
											placeholder="Topic"
											className="tw-bg-transparent tw-block tw-mx-auto tw-w-[100%] tw-px-3 tw-py-2 tw-text-xs tw-shadow-xl placeholder:tw-text-xs focus:tw-outline-none focus:tw-border-gray-200 focus:tw-ring-1 focus:tw-ring-gray-200 isabled:tw-bg-gray-50 disabled:tw-text-gray-500 disabled:tw-border-gray-200 disabled:tw-shadow-none invalid:tw-border-red-500 invalid:tw-text-red-600 focus:invalid:tw-border-red-500 focus:invalid:tw-ring-red-500 tw-outline-0 tw-mb-1 placeholder:tw-text-white tw-font-bold"
										/>
									</div>
									<div>
										<input
											type="email"
											name="email"
											id="email"
											value={chatDetail.email}
											onChange={handleChangeChat}
											placeholder="Email"
											className="tw-bg-transparent tw-block tw-mx-auto tw-w-[100%] tw-px-3 tw-py-2 tw-text-xs tw-shadow-xl placeholder:tw-text-xs focus:tw-outline-none focus:tw-border-gray-200 focus:tw-ring-1 focus:tw-ring-gray-200 isabled:tw-bg-gray-50 disabled:tw-text-gray-500 disabled:tw-border-gray-200 disabled:tw-shadow-none invalid:tw-border-red-500 invalid:tw-text-red-600 focus:invalid:tw-border-red-500 focus:invalid:tw-ring-red-500 tw-outline-0 tw-mb-1 placeholder:tw-text-white tw-font-bold"
										/>
									</div>
									<div>
										<textarea
											name="message"
											rows={10}
											cols={25}
											value={chatDetail.message}
											onChange={handleChangeChat}
											placeholder="Message..."
											className="tw-bg-transparent tw-block tw-mx-auto tw-w-[100%] tw-px-3 tw-py-2 tw-text-xs tw-shadow-xl focus:tw-outline-none focus:tw-border-gray-200 focus:tw-ring-1 focus:tw-ring-gray-200 isabled:tw-bg-gray-50 disabled:tw-text-gray-500 disabled:tw-border-gray-200 disabled:tw-shadow-none invalid:tw-border-red-500 invalid:tw-text-red-600 focus:invalid:tw-border-red-500 focus:invalid:tw-ring-red-500 tw-outline-0 tw-mb-1 placeholder:tw-font-bold placeholder:tw-text-white tw-font-bold"
										/>
									</div>
									{chatError && (
										<div className="tw-text-center tw-text-xs tw-mt-2 tw-text-red-700">
											<span>Please enter required field(s) above</span>
										</div>
									)}
									{chatSuccess && (
										<div className="tw-text-center tw-text-xs tw-mt-2 tw-text-blue-700">
											<span>Message Sent!</span>
										</div>
									)}
									<button
										className="tw-w-full tw-bg-neutral-900 tw-text-white tw-text-center tw-text-xs tw-py-2 tw-mt-3 tw-mb-10 tw-cursor-pointer hover:tw-bg-white hover:tw-text-neutral-900 tw-ease-in tw-duration-300"
										type="submit">
										Send message
									</button>
								</form>
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

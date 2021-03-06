import React from 'react'
import emailjs from 'emailjs-com'
import Layout from '../components/shared/Layout'
import { useNavigate } from 'react-router-dom'
import SocialMedia from '../components/shared/SocialMedia'

const Contact = () => {
	const [showResponse, setShowResponse] = React.useState(false)
	const [isShow, setIsShow] = React.useState(false)
	const navigate = useNavigate()

	const [contactInput, setcontactInput] = React.useState({
		name: '',
		email: '',
		subject: '',
		message: '',
		error: null,
	})

	const handleContactInput = (e) => {
		setcontactInput({ ...contactInput, [e.target.name]: e.target.value })
	}

	const messageParams = {
		name: contactInput?.name,
		message: contactInput?.message,
		client: contactInput?.email,
	}

	function handleSubmit(e) {
		e.preventDefault()
		try {
			emailjs
				.send(
					'service_dyboc4s',
					'template_nso903l',
					messageParams,
					'jhK1XJk3wCjqblLiF'
				)
				.then((res) => {})
				.catch((err) => console.log(err))
			setcontactInput({
				name: '',
				email: '',
				subject: '',
				message: '',
				error: null,
			})
		} catch (error) {
			console.log(error)
			setcontactInput({ ...contactInput, error: error.message })
		}

		setShowResponse(true)
	}
	React.useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	setTimeout(() => {
		setIsShow(true)
	}, 2000)
	return (
		<div className="homeBg custome-font lg:tw-h-screen tw-flex tw-items-center tw-justify-center">
			<div className="tw-relative tw-bg-black tw-h-[100%] md:tw-h-[85%] tw-w-[100%] md:tw-w-[90%]">
				<Layout>
					{isShow ? (
						<div className="fade relative tw-pt-[90px] md:tw-pt-[30px] tw-w-[80%] md:tw-w-[50%] tw-mx-auto">
							<h1 className="tw-text-white tw-text-center tw-text-3xl">
								CONNECT <span className="tw-text-xl">with</span>{' '}
								<span className="tw-font-bold">Oluwatosin</span>
							</h1>
							<div className="">
								<form onSubmit={handleSubmit} className="tw-mt-[60px] ">
									<div className="">
										<input
											type="text"
											name="name"
											id="name"
											value={contactInput.name}
											onChange={handleContactInput}
											placeholder="Full Name"
											className="tw-w-[100%] tw-mb-5 tw-text-[#bba371] tw-font-light tw-bg-transparent tw-block tw-px-3 tw-py-2 tw-border-neutral-700 tw-rounded-[2px] tw-text-sm tw-border-[1px] tw-placeholder-neutral-300 focus:tw-outline-none focus:tw-border-black focus:tw-ring-1 focus:tw-ring-black disabled:tw-bg-neutral-50 disabled:tw-text-neutral-500 disabled:tw-border-neutral-200 disabled:tw-shadow-none invalid:tw-border-red-500 invalid:tw-text-red-600 focus:tw-invalid:border-red-500 focus:tw-invalid:ring-red-500 tw-outline-0 tw-tracking-widest"
										/>
										<input
											type="text"
											name="email"
											id="email"
											value={contactInput.email}
											onChange={handleContactInput}
											placeholder="Email"
											className="tw-w-[100%] tw-mb-5 tw-text-[#bba371] tw-font-light tw-bg-transparent tw-block tw-px-3 tw-py-2 tw-border-neutral-700 tw-rounded-[2px] tw-text-sm tw-border-[1px] tw-placeholder-neutral-300 focus:tw-outline-none focus:tw-border-black focus:tw-ring-1 focus:tw-ring-black disabled:tw-bg-neutral-50 disabled:tw-text-neutral-500 disabled:tw-border-neutral-200 disabled:tw-shadow-none invalid:tw-border-red-500 invalid:tw-text-red-600 focus:tw-invalid:border-red-500 focus:tw-invalid:ring-red-500 tw-outline-0 tw-tracking-widest"
										/>
										<input
											type="text"
											name="subject"
											id="subject"
											value={contactInput.subject}
											onChange={handleContactInput}
											placeholder="subject"
											className="tw-w-[100%] tw-mb-5 tw-text-[#bba371] tw-font-light tw-bg-transparent tw-block tw-px-3 tw-py-2 tw-border-neutral-700 tw-rounded-[2px] tw-text-sm tw-border-[1px] tw-placeholder-neutral-300 focus:tw-outline-none focus:tw-border-black focus:tw-ring-1 focus:tw-ring-black disabled:tw-bg-neutral-50 disabled:tw-text-neutral-500 disabled:tw-border-neutral-200 disabled:tw-shadow-none invalid:tw-border-red-500 invalid:tw-text-red-600 focus:tw-invalid:border-red-500 focus:tw-invalid:ring-red-500 tw-outline-0 tw-tracking-widest"
										/>
										<textarea
											id="message"
											rows="10"
											cols="50"
											name="message"
											value={contactInput.message}
											onChange={handleContactInput}
											placeholder="message..."
											className="tw-w-[100%] tw-mb-5 tw-text-[#bba371] tw-font-light tw-bg-transparent tw-block tw-px-3 tw-py-2 tw-border-neutral-700 tw-rounded-[2px] tw-text-sm tw-border-[1px] tw-placeholder-neutral-300 focus:tw-outline-none focus:tw-border-black focus:tw-ring-1 focus:tw-ring-black disabled:tw-bg-neutral-50 disabled:tw-text-neutral-500 disabled:tw-border-neutral-200 disabled:tw-shadow-none invalid:tw-border-red-500 invalid:tw-text-red-600 focus:tw-invalid:border-red-500 focus:tw-invalid:ring-red-500 tw-outline-0 tw-tracking-widest"
										/>
										<div className="text-center text-xs text-red-800">
											{contactInput.error ? (
												<p>Error message: {contactInput.error}</p>
											) : null}
										</div>
										<button
											disabled={
												!contactInput.name ||
												!contactInput.email ||
												!contactInput.subject ||
												!contactInput.message
											}
											className="hover:tw-cursor-pointer tw-bg-white tw-w-[30%] tw-text-black tw-py-2 tw-text-sm tw-font-light tw-tracking-wide hover:tw-bg-black tw-ease-in tw-duration-300 hover:tw-text-[#bba371]"
											type="submit">
											Send inquiry
										</button>
										{showResponse && (
											<div className="tw-flex tw-flex-col tw-text-center tw-text-white">
												<span className="tw-mt-5 tw-text-[#bba371] tw-font-light tw-tracking-widest tw-text-sm">
													Your enquiry has been submitted to oluwatosin
												</span>
												<div className="tw-flex tw-flex-row tw-w-[70%] tw-mx-auto">
													<span
														onClick={() => {
															navigate('/')
														}}
														className="tw-font-bold tw-bg-white tw-text-black hover:tw-cursor-pointer tw-mx-auto tw-text-[12px] tw-mt-5 tw-px-5 tw-py-1 hover:tw-bg-black hover:tw-text-[#bba371] tw-ease-in tw-duration-300">
														Back to Home
													</span>
													<span
														onClick={() => {
															navigate('/work')
														}}
														className="tw-font-bold tw-bg-white tw-text-black hover:tw-cursor-pointer tw-mx-auto tw-text-[12px] tw-mt-5 tw-px-5 tw-py-1 hover:tw-bg-black hover:tw-text-[#bba371] tw-ease-in tw-duration-300">
														Back to Work
													</span>
												</div>
											</div>
										)}
										<div className="tw-flex tw-justify-center">
											<SocialMedia />
										</div>
									</div>
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

export default Contact

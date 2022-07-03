import React from 'react'
import { AiOutlineSisternode } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'

function Nav() {
	const navigate = useNavigate()
	const links = [
		{ value: 'about', id: '1' },
		{ value: 'work', id: '2' },
		{ value: 'contact', id: '3' },
	]
	const handleNav = (data) => {
		if (data === 'about') {
			navigate('/about/oluwatosin-isijola')
		} else if (data === 'work') {
			navigate('/work')
		} else {
			navigate('/contact/oluwatosin-isijola')
		}
	}
	const path = window.location.pathname.split('/')?.[1]
	return (
		<div className="tw-flex tw-flex-row tw-justify-between tw-items-center tw-m-3">
			<Link to="/" className="tw-text-neutral-500">
				<AiOutlineSisternode size={25} />
			</Link>
			<div className="tw-text-white tw-flex">
				{links?.map((item) => (
					<div
						onClick={() => handleNav(item?.value)}
						className={`tw-mx-5 ${
							path === item?.value && 'tw-text-[#bba371]'
						} tw-text-md tw-tracking-widest tw-font-bold hover:tw-text-[#bba371] tw-duration-300 tw-ease-in hover:tw-cursor-pointer tw-capitalize`}
						key={item.id}>
						<span>{item.value}</span>
					</div>
				))}
			</div>
		</div>
	)
}

export default Nav

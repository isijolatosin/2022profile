import Footer from '../Footer'
import Nav from '../Navigation/Nav'

function Layout({ children }) {
	return (
		<div>
			<div>
				<Nav />
			</div>
			<div className="tw-mt-2">{children}</div>
			<div>
				<Footer />
			</div>
		</div>
	)
}

export default Layout

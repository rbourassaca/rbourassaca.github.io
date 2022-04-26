import Script from 'next/script'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
	if (window.netlifyIdentity) {
		window.netlifyIdentity.on('init', (user) => {
			if (!user) {
				window.netlifyIdentity.on('login', () => {
					document.location.href = '/admin/'
				})
			}
		})
	}
	return (
		<>
			<Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
			<Component {...pageProps} />
		</>
	)
}

export default MyApp

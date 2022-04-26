import Script from 'next/script'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
			<Component {...pageProps} />
		</>
	)
}

export default MyApp

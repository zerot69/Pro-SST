import Header from "../layout/header";
import Footer from "../layout/footer";

export default function Home() {
	return (
		<>
			<Header />
			<div className="h-screen flex justify-center items-center text-3xl">Thank you for your message!</div>
			<Footer />
		</>
	);
}

import Header from "./layout/header";
import ServerSideTrackingContent from "./components/1-server-side-tracking";
import ImportanceContent from "./components/2-sst-importance";
import AdvantagesContent from "./components/3-sst-advantages";
import Offers from "./components/4-offers";
import Dashboard from "./components/5-dashboard";
import Technologies from "./components/6-technologies";
import Contact from "./components/7-contact";
import Partners from "./components/8-partners";
import Footer from "./layout/footer";

export default function Home() {
	return (
		<>
			<Header />
			<main className="bg-[#292929] text-white">
				<ServerSideTrackingContent />
				<ImportanceContent />
				<hr className="w-full h-4 my-12 bg-[#FF621E] border-0"></hr>
				<AdvantagesContent />
				<Offers />
				<Dashboard />
				<div className="flex flex-col px-48 py-12 bg-[#FF621E] text-2xl">
					<div className="grid grid-cols-3 gap-8 justify-between">
						<div className="col-span-2">
							<p className="font-bold">Sichern Sie sich ein umfassende und lückenlose Datenerhebung mit serverseitigem Tracking!</p>
						</div>
						<div>
							<button className="bg-[#292929] text-white rounded-lg px-8 py-4">Jetzt Kontakt aufnehmen</button>
						</div>
					</div>
				</div>
				<Technologies />
				<Contact />
				<Partners />
			</main>
			<Footer />
		</>
	);
}

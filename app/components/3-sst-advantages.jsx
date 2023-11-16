export default function AdvantagesContent() {
	const symbol = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="54"
			height="54"
			className="fill-orange-500"
			viewBox="0 0 16 16">
			<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
			<path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
		</svg>
	);
	return (
		<>
			<div className="flex flex-col px-48 py-12">
				<h1 className="text-3xl font-bold py-4">Was sie die Vorteile von serverseitigem Tracking?</h1>
				<div className="grid grid-cols-2">
					<div className="flex flex-row items-center gap-4 py-4">
						{symbol}
						<div className="col-span-1 py-2">
							<p className="text-lg">DSGVO-konform</p>
							<p className="text-sm">Besuche & Conversions erfassen ohne US-Datentransfer</p>
						</div>
					</div>
					<div className="flex flex-row items-center gap-4 py-4">
						{symbol}
						<div className="col-span-1 py-2">
							<p className="text-lg">Valide Daten</p>
							<p className="text-sm">Totale Opt-In Freiheit, Tracking trotz Cookie-Ablehnung</p>
						</div>
					</div>
					<div className="flex flex-row items-center gap-4 py-4">
						{symbol}
						<div className="col-span-1 py-2">
							<p className="text-lg">Lorem Ipsum</p>
							<p className="text-sm">Serverseitige Datenerfassung & Auswertung</p>
						</div>
					</div>
					<div className="flex flex-row items-center gap-4 py-4">
						{symbol}
						<div className="col-span-1 py-2">
							<p className="text-lg">Lorem Ipsum</p>
							<p className="text-sm">Made & Stored in Germany</p>
						</div>
					</div>
					<div className="flex flex-row items-center gap-4 py-4">
						{symbol}
						<div className="col-span-1 py-2">
							<p className="text-lg">Lorem Ipsum</p>
							<p className="text-sm">Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
						</div>
					</div>
					<div className="flex flex-row items-center gap-4 py-4">
						{symbol}
						<div className="col-span-1 py-2">
							<p className="text-lg">Lorem Ipsum</p>
							<p className="text-sm">Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

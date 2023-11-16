import Image from "next/image";
export default function ServerSideTrackingContent() {
	return (
		<div
			className="bg-scroll bg-[url('/header.webp')]"
			style={{
				backgroundPosition: "right",
				backgroundSize: "contain",
				backgroundRepeat: "no-repeat",
			}}>
			<div className="flex flex-col px-48 py-12">
				<h1 className="text-4xl font-bold py-8">Server Side Tracking</h1>
				<p className="text-3xl py-8">
					<span className="text-[#FF621E]">DSGVO-konforme </span>vollständige Webanalyse durch
					<p>Server Side Tagging und Tracking</p>
				</p>
				<button className="bg-[#FF621E] max-w-[24ch] text-white my-4 py-3 px-1.5 rounded-lg items-center justify-between text-2xl">
					Jetzt Kontakt aufnehmen
				</button>
			</div>

			<div className="flex flex-col px-48 py-12 justify-stretch items-center">
				<div className="mb-32 grid gap-x-12 lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
					<div className="group rounded-lg border border-transparent px-5 py-4 transition-colors text-center text-[#292929] bg-white hover:border-gray-500 hover:bg-gray-200 hover:scale-105 md:m-4">
						<Image
							src="/dsgvo.svg"
							alt="DSGVO-konform"
							width={100}
							height={100}
							className="mx-auto py-4"
						/>
						<p className="m-0 max-w-[30ch] text-xl">DSGVO-konform</p>
					</div>

					<div className="group rounded-lg border border-transparent px-5 py-4 transition-colors text-center text-[#292929] bg-white hover:border-gray-500 hover:bg-gray-200 hover:scale-105 md:m-4">
						<Image
							src="/daten.svg"
							alt="Umfassende Datenaggregierung"
							width={100}
							height={100}
							className="mx-auto py-4"
						/>
						<p className="m-0 max-w-[30ch] text-xl">Umfassende Datenaggregierung</p>
					</div>

					<div className="group rounded-lg border border-transparent px-5 py-4 transition-colors text-center text-[#292929] bg-white hover:border-gray-500 hover:bg-gray-200 hover:scale-105 md:m-4">
						<Image
							src="/individulisierbar.svg"
							alt="Individualisierbar"
							width={125}
							height={125}
							className="mx-auto py-4"
						/>
						<p className="m-0 max-w-[30ch] text-xl">Individualisierbar</p>
					</div>
				</div>
			</div>
		</div>
	);
}

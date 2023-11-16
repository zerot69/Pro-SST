import Image from "next/image";
export default function Dashboard() {
	return (
		<>
			<div className="flex flex-col px-48 py-12">
				<h1 className="text-3xl font-bold py-4">Dashboard</h1>
				<div className="grid grid-cols-2 place-items-center gap-8">
					<div className="col-span-1 py-2">
						<Image
							width={540}
							height={350}
							object-fit="contain"
							src="/image.png"
							alt="Image alt text"
							className="rounded-xl"
						/>
					</div>
					<div className="col-span-1 py-2">
						<h1 className="text-3xl py-2">
							Alles Wichtige <span className="text-[#FF621E]">auf einen Blick</span>
						</h1>
						<p className="text-md">
							Tracken Sie Ihre Nutzer, die Sitzungen, die Absprungrate und die Sitzungsdauer Ihrer Webseite in Echtzeit.
						</p>
					</div>
				</div>
			</div>

			<div className="flex flex-col px-48 py-12 bg-[#202020]">
				<div className="grid grid-cols-2 place-items-center gap-8">
					<div className="col-span-1 py-2">
						<h1 className="text-3xl py-2">
							<span className="text-[#FF621E]">Geografie</span>
						</h1>
						<p className="text-md">Finden Sie heraus aus welcher Geografischen Lage die Nutzer Ihrer Webseite kommen.</p>
					</div>
					<div className="col-span-1 py-2">
						<Image
							width={540}
							height={350}
							object-fit="contain"
							src="/weltkarte.webp"
							alt="Image alt text"
							className="rounded-xl"
						/>
					</div>
				</div>
			</div>
			<div className="flex flex-col px-48 py-12">
				<div className="grid grid-cols-2 place-items-center gap-8">
					<div className="col-span-1 py-2">
						<Image
							width={540}
							height={350}
							object-fit="contain"
							src="/image.png"
							alt="Image alt text"
							className="rounded-xl"
						/>
					</div>
					<div className="col-span-1 py-2">
						<h1 className="text-3xl py-2">
							<span className="text-[#FF621E]">Aktuell</span> und gerätespezifisch
						</h1>
						<p className="text-md">
							Zu welcher Tageszeit wird Ihre Webseite am meisten besucht? Oder welche Geräte greifen vorzugsweise auf Ihre Webseite zu?
							Finden Sie es mit dem schubwerk Tracking heraus!
						</p>
					</div>
				</div>
			</div>

			<div className="flex flex-col px-48 py-12 bg-[#202020]">
				<div className="grid grid-cols-2 place-items-center gap-8">
					<div className="col-span-1 py-2">
						<h1 className="text-3xl py-2">
							<span className="text-[#FF621E]">Event Tracking</span>
						</h1>
						<p className="text-md">
							Tracken Sie alle Events, wie Klicks auf Menüs, Links und Buttons, und fügen Sie ganz simpel genau die Events, die Sie
							brauchen, zu Ihrer Übersicht hinzu!
						</p>
					</div>
					<div className="col-span-1 py-2">
						<Image
							width={540}
							height={350}
							object-fit="contain"
							src="/image.png"
							alt="Image alt text"
							className="rounded-xl"
						/>
					</div>
				</div>
			</div>
		</>
	);
}

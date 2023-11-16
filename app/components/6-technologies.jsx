import Image from "next/image";

export default function Dashboard() {
	const Technologies = [
		{
			scr: "/bilder/google-ads.webp",
			alt: "Google Ads",
		},
		{
			scr: "/bilder/matomo.webp",
			alt: "Matomo",
		},
	];
	return (
		<>
			<div className="flex flex-col px-48 py-12">
				<h1 className="text-3xl font-bold py-4">Unterstützte Trackingtechnologien</h1>
				<div className="grid grid-cols-3 place-items-center gap-8 py-4">
					<div className="col-span-1 py-2 flex bg-white rounded-xl w-full h-full mx-auto justify-center ">
						<Image
							width={150}
							height={150}
							src="/bilder/google-ads.webp"
							alt="Google Ads"
							className="p-4"
						/>
					</div>
					<div className="col-span-1 py-2 flex bg-white rounded-xl w-full h-full mx-auto justify-center ">
						<Image
							width={150}
							height={150}
							src="/bilder/matomo.webp"
							alt="Matomo"
							className="p-4"
						/>
					</div>
					<div className="col-span-1 py-2 flex bg-white rounded-xl w-full h-full mx-auto justify-center ">
						<Image
							width={150}
							height={150}
							src="/bilder/google-ads.webp"
							alt="Google Ads"
							className="p-4"
						/>
					</div>
				</div>
			</div>
		</>
	);
}

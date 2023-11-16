import Image from "next/image";

export default function Partners() {
	const Partners = [
		{
			scr: "/partners/adobe-marketing-cloud.svg",
			alt: "Adobe Marketing Cloud",
		},
		{
			scr: "/partners/copernica.svg",
			alt: "Copernica",
		},
		{
			scr: "/partners/echobot.svg",
			alt: "Echobot",
		},
		{
			scr: "/partners/google-cloud.svg",
			alt: "Google Cloud",
		},
		{
			scr: "/partners/google-partner.svg",
			alt: "Google Partner",
		},
		{
			scr: "/partners/id-media.svg",
			alt: "ID Media",
		},
		{
			scr: "/partners/pactas.svg",
			alt: "Pactas",
		},
		{
			scr: "/partners/searchmetrics.svg",
			alt: "Searchmetrics",
		},
	];
	return (
		<>
			<div className="flex flex-col px-48 py-12 bg-white text-[#292929]">
				<h1 className="text-3xl font-bold py-4">Auszug unserer Zertifizierungen und Partner</h1>
				<div className="grid grid-cols-4 place-items-center gap-8 py-8">
					{Partners.map((item, index) => (
						<div
							key={index}
							className="col-span-1 py-2 flex bg-white rounded-xl w-full h-full mx-auto justify-center border overflow-visible hover:scale-105 hover:shadow-md">
							<Image
								width={150}
								height={150}
								src={item.scr}
								alt={item.alt}
								className="p-4"
							/>
						</div>
					))}
				</div>
			</div>
		</>
	);
}

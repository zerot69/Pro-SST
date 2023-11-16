import Image from "next/image";
export default function ImportanceContent() {
	const symbol = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="16"
			height="16"
			className="fill-orange-500"
			viewBox="0 0 16 16">
			<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
			<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
		</svg>
	);
	return (
		<>
			<div className="grid grid-cols-2 place-items-center gap-8 py-24">
				<Image
					src="/foto.webp"
					alt="Foto"
					width={850}
					height={850}
					className="rounded-r-3xl place-self-start	"
				/>
				<div className="col-span-1 py-2">
					<h1 className="text-3xl font-bold py-4 pr-8">Warum ist serverseitiges Tracking wichtig?</h1>
					<p className="text-base py-4 pr-24">
						Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
						aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
						takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
						tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
						rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
					</p>
					<h2 className="text-xl font-bold py-4">Probleme mit herkömmlichen Tracking:</h2>
					<div className="flex flex-row items-center gap-4">
						{symbol}
						<p className="text-base py-1">30 % Datenverlust</p>
					</div>
					<div className="flex flex-row items-center gap-4">
						{symbol}
						<p className="text-base py-1">Keine validen Daten</p>
					</div>
					<div className="flex flex-row items-center gap-4">
						{symbol}
						<p className="text-base py-1">Cookies können abgelehnt werden</p>
					</div>
				</div>
			</div>
		</>
	);
}

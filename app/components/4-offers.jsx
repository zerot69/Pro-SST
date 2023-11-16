import Image from "next/image";

export default function Offers() {
	return (
		<>
			<div className="flex flex-col px-48 py-12  bg-gradient-to-b from-[#292929] to-[#202020]">
				<h1 className="text-3xl font-bold py-4">Unsere Angebote</h1>
				<div className="grid grid-cols-4 space-x-4">
					<div className="col-span-1 py-2">
						<div className="bg-white border-none rounded-xl">
							<Image
								width={550}
								height={550}
								src="/image.png"
								alt="Image alt text"
								className="rounded-t-xl"
							/>
							<div className="p-6 text-black">
								<p className="text-lg font-semibold text-orange-400">Light</p>
								<p className="text-xs">100€</p>
								<ul className="list-disc list-inside py-2 marker:text-orange-400">
									<li className="text-md">Lorem ipsum dolor</li>
									<li className="text-md">Lorem ipsum dolor</li>
									<li className="text-md">Lorem ipsum dolor</li>
									<li className="text-md">Lorem ipsum dolor</li>
								</ul>
							</div>
							<button className="bg-orange-400 w-full p-2 text-white rounded-b-xl">Mehr erfahren</button>
						</div>
					</div>
					<div className="col-span-1 py-2">
						<div className="bg-white border-none rounded-xl">
							<Image
								width={550}
								height={550}
								src="/image.png"
								alt="Image alt text"
								className="rounded-t-xl"
							/>
							<div className="p-6 text-black">
								<p className="text-lg font-semibold text-orange-500">Standard</p>
								<p className="text-xs">100€</p>
								<ul className="list-disc list-inside py-4 marker:text-orange-500">
									<li className="text-md">Lorem ipsum dolor</li>
									<li className="text-md">Lorem ipsum dolor</li>
									<li className="text-md">Lorem ipsum dolor</li>
									<li className="text-md">Lorem ipsum dolor</li>
								</ul>
							</div>
							<button className="bg-orange-500 w-full p-2 text-white rounded-b-xl">Mehr erfahren</button>
						</div>
					</div>
					<div className="col-span-1 py-2">
						<div className="bg-white border-none rounded-xl">
							<Image
								width={550}
								height={550}
								src="/image.png"
								alt="Image alt text"
								className="rounded-t-xl"
							/>
							<div className="p-6 text-black">
								<p className="text-lg font-semibold text-orange-600">Plus</p>
								<p className="text-xs">100€</p>
								<ul className="list-disc list-inside py-4 marker:text-orange-600">
									<li className="text-md">Lorem ipsum dolor</li>
									<li className="text-md">Lorem ipsum dolor</li>
									<li className="text-md">Lorem ipsum dolor</li>
									<li className="text-md">Lorem ipsum dolor</li>
								</ul>
							</div>
							<button className="bg-orange-600 w-full p-2 text-white rounded-b-xl">Mehr erfahren</button>
						</div>
					</div>
					<div className="col-span-1 py-2">
						<div className="bg-white border-none rounded-xl">
							<Image
								width={550}
								height={550}
								src="/image.png"
								alt="Image alt text"
								className="rounded-t-xl"
							/>
							<div className="p-6 text-black">
								<p className="text-lg font-semibold text-orange-700">Extra</p>
								<p className="text-xs">100€</p>
								<ul className="list-disc list-inside py-4 marker:text-orange-700">
									<li className="text-md">Lorem ipsum dolor</li>
									<li className="text-md">Lorem ipsum dolor</li>
									<li className="text-md">Lorem ipsum dolor</li>
									<li className="text-md">Lorem ipsum dolor</li>
								</ul>
							</div>
							<button className="bg-orange-700 w-full p-2 text-white rounded-b-xl">Mehr erfahren</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

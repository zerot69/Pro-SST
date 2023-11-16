import Link from "next/link";

export default function Footer() {
	return (
		<>
			<div className="grid grid-cols-5 place-items-center gap-8 px-24 py-12 bg-[#202020]">
				<div className="col-span-1">
					<h1 className="text-3xl font-bold">
						Pro<span className="text-[#FF621E]">SST</span>
					</h1>
					<p className="text-base py-4">Ein Dienst der ProPerforma GmbH</p>
					<div className="text-base py-4">
						<p>ProSST</p>
						<p>Breite Str. 155</p>
						<p>50667 Köln</p>
					</div>
					<div className="text-base py-4">
						<p>www.prosst.de</p>
						<p>info@prosst.de</p>
						<p>Tel.: 0221 / 677865511</p>
					</div>
					<p className="text-sm py-8">© 2023 ProSST</p>
				</div>

				<div className="col-span-2 w-full">
					<p className="text-base py-1 mt-2">Vor- und Nachname *</p>
					<input
						type="text"
						className="w-full text-sm p-2 mt-1 border rounded-md text-black focus:outline-none focus:ring-1 focus:ring-blue-600"
						placeholder="Max Mustermann"
						required
					/>

					<p className="text-base py-1 mt-2">Unternehmen *</p>
					<input
						type="text"
						className="w-full text-sm p-2 mt-1 border rounded-md text-black focus:outline-none focus:ring-1 focus:ring-blue-600"
						placeholder="Muster GmbH"
						required
					/>

					<p className="text-base py-1 mt-2">E-Mail Adresse *</p>
					<input
						type="email"
						className="w-full text-sm p-2 mt-1 border rounded-md text-black focus:outline-none focus:ring-1 focus:ring-blue-600"
						placeholder="maxmustermann@mail.de"
						required
					/>

					<p className="text-base py-1 mt-2">Telefonnummer *</p>
					<input
						type="tel"
						className="w-full text-sm p-2 mt-1 border rounded-md text-black focus:outline-none focus:ring-1 focus:ring-blue-600"
						placeholder="0123456789"
						required
					/>
				</div>
				<div className="col-span-2">
					<p className="text-base py-1 mt-2">Gewünschte Trackingtechnologie</p>
					<select
						className="w-full text-sm p-2 mt-1 border rounded-md text-black focus:outline-none focus:ring-1 focus:ring-blue-600"
						name="tracking"
						id="tracking">
						<option value="google">Google Ads</option>
						<option value="matomo">Matomo</option>
						<option value="other">Andere</option>
					</select>

					<p className="text-base py-1 mt-2">Nachricht</p>
					<textarea
						className="w-full text-sm p-2 mt-1 border rounded-md text-black focus:outline-none focus:ring-1 focus:ring-blue-600"
						name="message"
						id="message"
						cols="30"
						rows="4"></textarea>

					<input
						type="checkbox"
						id="Terms and Conditions"
						name="Terms and Conditions"
						value="Terms and Conditions"></input>
					<label
						for="Terms and Conditions"
						className="px-2 text-xs">
						Hiermit akzeptiere ich die{" "}
						<a
							href="/datenschutz"
							className="text-[#FF621E] underline">
							Datenschutzbestimmungen
						</a>
					</label>

					<Link href={"/thank-you"}>
						<button
							type="submit"
							className="w-full text-base mt-6 p-4 rounded-md text-white bg-[#FF621E] focus:outline-none focus:ring-1 focus:ring-blue-600">
							Kontakt aufnehmen
						</button>
					</Link>
				</div>
			</div>
		</>
	);
}

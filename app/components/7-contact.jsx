"use client";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Contact() {
	return (
		<>
			<div className="flex flex-col px-48 py-12">
				<h1 className="text-3xl font-bold py-4">Kontakt aufnehmen</h1>
				<p className="text-base py-2 mt-4">Vor- und Nachname *</p>
				<input
					type="text"
					className="w-full text-sm p-4 mt-1 border rounded-md text-black focus:outline-none focus:ring-1 focus:ring-blue-600"
					placeholder="Max Mustermann"
					required
				/>

				<p className="text-base py-2 mt-4">Unternehmen *</p>
				<input
					type="text"
					className="w-full text-sm p-4 mt-1 border rounded-md text-black focus:outline-none focus:ring-1 focus:ring-blue-600"
					placeholder="Muster GmbH"
					required
				/>

				<p className="text-base py-2 mt-4">E-Mail Adresse *</p>
				<input
					type="email"
					className="w-full text-sm p-4 mt-1 border rounded-md text-black focus:outline-none focus:ring-1 focus:ring-blue-600"
					placeholder="maxmustermann@mail.de"
					required
				/>

				<p className="text-base py-2 mt-4">Telefonnummer *</p>
				<input
					type="tel"
					className="w-full text-sm p-4 mt-1 border rounded-md text-black focus:outline-none focus:ring-1 focus:ring-blue-600"
					placeholder="0123456789"
					required
				/>

				<p className="text-base py-2 mt-4">Gewünschte Trackingtechnologie</p>
				<select
					className="w-full text-sm p-4 mt-1 border rounded-md text-black focus:outline-none focus:ring-1 focus:ring-blue-600"
					name="tracking"
					id="tracking">
					<option value="google">Google Ads</option>
					<option value="matomo">Matomo</option>
					<option value="other">Andere</option>
				</select>

				<p className="text-base py-2 mt-4">Nachricht</p>
				<textarea
					className="w-full text-sm p-4 mt-1 border rounded-md text-black focus:outline-none focus:ring-1 focus:ring-blue-600"
					name="message"
					id="message"
					cols="30"
					rows="10"></textarea>

				<div className="flex items-center py-2">
					<input
						type="checkbox"
						id="Terms and Conditions"
						name="Terms and Conditions"
						value="Terms and Conditions"></input>
					<label
						htmlFor="Terms and Conditions"
						className="text-xs px-2">
						Hiermit akzeptiere ich die{" "}
						<a
							href="/datenschutz"
							className="text-[#FF621E] underline">
							Datenschutzbestimmungen
						</a>
					</label>
				</div>

				<Link href={"/thank-you"}>
					<button
						type="submit"
						className="w-full text-base mt-6 p-4 rounded-md text-white bg-[#FF621E] focus:outline-none focus:ring-1 focus:ring-blue-600">
						Kontakt aufnehmen
					</button>
				</Link>
			</div>
		</>
	);
}

"use client";

import Header from "@/components/header";

export default function Home() {
	return (
	  <div>
	      <Header />
		<div className="container mx-auto max-w-3xl px-4 py-2">
			<div className="grid gap-6">
				<section className="rounded-lg border p-4">
					<h2 className="mb-2 font-medium">Landing page</h2>
				</section>
			</div>
		</div>
	  </div>
	);
}

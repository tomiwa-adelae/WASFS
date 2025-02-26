import Head from "next/head";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

const montserrat = Montserrat({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
	title: "West African School of Forensic Studies | Accredited Forensic Training & Certifications",
	description:
		"Join the West African School of Forensic Studies (WASFS) for accredited forensic auditing, criminal investigations, and digital forensics training. 100% online, globally recognized certifications.",
	keywords:
		"forensic studies, forensic training, digital forensics certification, fraud auditing courses, forensic science school, criminal investigations training, IICFIP certification, cybercrime investigation, forensic accounting diploma, wasfs, prof akinteye ademola, ademola, akinteye, simon akinteye",
	openGraph: {
		images: "/assets/images/opengraph.png",
	},
	metadataBase: new URL("https://wasfs.vercel.app"),
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<Head>
				<meta property="og:image" content="/opengraph.png" />
				<meta
					property="og:image"
					content="/assets/images/opengraph.png"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, user-scalable=no"
				/>
				<meta
					data-n-head="ssr"
					data-hid="viewport"
					name="viewport"
					content="width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=1"
				/>
			</Head>
			<body className={montserrat.className}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}

"use client";

import { Button } from "@/components/ui/button";
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";
import { FormLabel } from "./ui/form";
import { Input } from "@/components/ui/input";
import { formUrlQuery, removeKeysFromQuery } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ScrollArea } from "./ui/scroll-area";

export function DesiredPrograms() {
	const [query, setQuery] = useState("");

	const router = useRouter();

	const searchParams = useSearchParams();

	useEffect(() => {
		const delayDebounceFn = setTimeout(() => {
			let newUrl = "";

			if (query) {
				newUrl = formUrlQuery({
					params: searchParams.toString(),
					key: "query",
					value: query,
				});
			} else {
				newUrl = removeKeysFromQuery({
					params: searchParams.toString(),
					keysToRemove: ["query"],
				});
			}

			router.push(newUrl, { scroll: false });
		}, 3000);
		return () => clearTimeout(delayDebounceFn);
	}, [query, searchParams, router]);

	return (
		<Drawer>
			<DrawerTrigger asChild>
				<div>
					<FormLabel>Desired Programs</FormLabel>
					<div className="h-14 w-full mt-2.5 justify-start inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm transition-colors border border-input bg-background hover:bg-accent hover:text-accent-foreground px-4 py-2 cursor-pointer">
						Select desired programs
					</div>
				</div>
			</DrawerTrigger>
			<DrawerContent className="h-[90vh]">
				<ScrollArea className="h-full">
					<div className="relative mx-auto w-full lg:max-w-4xl container pt-8 pb-16">
						<h4 className="uppercase text-primary font-semibold text-lg">
							All our programs
						</h4>
						<div className="bg-white z-10 sticky top-0">
							<Input
								type="text"
								placeholder={`Search programs...`}
								onChange={(e) => setQuery(e.target.value)}
								className="mt-4"
							/>
						</div>
						<div className="mt-10 grid gap-4 grid-cols-2 lg:grid-cols-3">
							<div className="bg-[#F8F9FA] rounded-md shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] group overflow-hidden">
								<Image
									src={
										"/assets/images/investigation-law-img.jpg"
									}
									alt={"Investigation law"}
									width={1000}
									height={1000}
									className="w-full object-cover h-32 aspect-video rounded-t-md group-hover:scale-105 transition-all"
								/>
								<div className="py-4 px-4">
									<h4 className="text-blue-400 uppercase text-sm font-medium hover:text-primary mb-4 transition-all">
										Certified Digital Forensic Investigator
										(CDFI)
									</h4>
									<DrawerClose asChild>
										<Button className="w-full" size={"sm"}>
											Select
										</Button>
									</DrawerClose>
								</div>
							</div>
						</div>
					</div>
				</ScrollArea>
			</DrawerContent>
		</Drawer>
	);
}

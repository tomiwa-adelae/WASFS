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

export function DesiredPrograms() {
	return (
		<Drawer>
			<DrawerTrigger asChild>
				<div>
					<FormLabel>Desired Programs</FormLabel>
					<div className="h-14 w-full mt-2.5 justify-start inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm transition-colors border border-input bg-background hover:bg-accent hover:text-accent-foreground px-4 py-2">
						Select desired programs
					</div>
				</div>
			</DrawerTrigger>
			<DrawerContent>
				<div className="mx-auto w-full max-w-sm"></div>
			</DrawerContent>
		</Drawer>
	);
}

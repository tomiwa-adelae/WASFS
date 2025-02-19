import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";

export function MobileNavbar() {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant="ghost" size={"icon"}>
					<Image
						src={"/assets/icons/menu.svg"}
						alt={"Menu Icon"}
						width={1000}
						height={1000}
						className="w-[30px] h-[30px] "
					/>
				</Button>
			</SheetTrigger>
			<SheetContent>
				<SheetHeader>
					<SheetTitle>Edit profile</SheetTitle>
					<SheetDescription>
						Make changes to your profile here. Click save when
						you're done.
					</SheetDescription>
				</SheetHeader>
				<div className="grid gap-4 py-4"></div>
				<SheetFooter>
					<SheetClose asChild>
						<Button type="submit">Save changes</Button>
					</SheetClose>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	);
}

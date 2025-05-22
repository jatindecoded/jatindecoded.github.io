"use client "
import { Menu } from "lucide-react";
import properties from "../data/properties.json"
import { Space_Grotesk } from "next/font/google"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { useState } from "react";

interface MenuItem {
	title: string;
	url: string;
	description?: string;
	icon?: React.ReactNode;
	items?: MenuItem[];
}

const renderMobileMenuItem = (item: MenuItem) => {

	return (
		<a key={item.title} href={item.url} className="text-md font-semibold">
			{item.title}
		</a>
	);
};
const NavbarMobile = ({
	logo = {
		url: properties.domain.value,
		src: properties["media.logo"].media[0],
		alt: "logo",
		title: properties["company.name"].value,
	},
	menu,
	auth
}: {
	logo?: {
		url: string;
		src: string;
		alt: string;
		title: string;
	};
	menu: MenuItem[]
	auth: {
		login: {
			title: string;
			url: string;
		};
		signup: {
			title: string;
			url: string;
		};
	};
}) => {
	const [open, setOpen] = useState(false);

	/* Mobile Menu */
	return (
		< div className="block lg:hidden" >
			<div className="flex items-center justify-between">
				{/* Logo */}
				<a href={logo.url} className="flex items-center gap-2">
					<img src={logo.src} className="max-h-8 border-1 rounded-md" alt={logo.alt} />
				</a>

				<div className="pt-1 flex flex-col">
					<span className={`text-md uppercase font-bold ${spaceGrotesk.className} tracking-tight `}>
						{logo.title}
					</span>
					<a href={`tel:+91-${properties["contact.phone.visible"].value}`} className={`text-xs font-semibold text-muted-foreground text-center leading-[0.5] `}>
						+91-{properties["contact.phone.visible"].value}
					</a>
				</div>
				<Sheet open={open} onOpenChange={setOpen}>
					<SheetTrigger asChild>
						<Button variant="outline" size="icon">
							<Menu className="size-4" />
						</Button>
					</SheetTrigger>
					<SheetContent className="overflow-y-auto">
						<SheetHeader>
							<SheetTitle>
								<a href={logo.url} className="flex items-center gap-2">
									<img src={logo.src} className="max-h-8" alt={logo.alt} />
								</a>
							</SheetTitle>
						</SheetHeader>
						<div className="flex flex-col gap-6 p-4">
							<Accordion
								type="single"
								collapsible
								className="flex w-full flex-col gap-4"
							>
								{menu.map((item) => renderMobileMenuItem(item))}
							</Accordion>

							<div className="flex flex-col gap-3">
								<Button asChild variant="outline">
									<a href={auth.login.url}>{auth.login.title}</a>
								</Button>
								<Button asChild>
									<a href={auth.signup.url}>{auth.signup.title}</a>
								</Button>
							</div>
						</div>
					</SheetContent>
				</Sheet>
			</div>
		</div >
	)
}

export { NavbarMobile };
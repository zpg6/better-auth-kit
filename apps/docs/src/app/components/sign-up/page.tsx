"use client";

import { BuilderProvider } from "../utils/builder-provider";
import { BuilderSidebar } from "../utils/builder-sidebar";
import { SignUp } from "./component";
import { BuilderExport } from "../utils/builder-export";

export default function Page() {
	return (
		<div className="w-full h-full relative flex justify-center items-center pr-[var(--fd-sidebar-width)] bg-gradient-to-br from-fd-border/10 to-fd-border/50">
			<BuilderProvider
				defaultValue={{
					oauth: {
						placement: "below",
						isIconOnly: false,
						facebook: false,
						apple: false,
						google: true,
						discord: false,
						github: true,
						microsoft: false,
						tiktok: false,
						twitch: false,
						twitter: false,
						dropbox: false,
						linkedin: false,
						gitlab: false,
						reddit: false,
						roblox: false,
						spotify: false,
						vk: false,
					},
					form: {
						name: true,
						email: true,
						password: true,
						submit: true,
					},
				}}
			>
				<SignUp />
				<BuilderExport />
				<BuilderSidebar />
			</BuilderProvider>
		</div>
	);
}

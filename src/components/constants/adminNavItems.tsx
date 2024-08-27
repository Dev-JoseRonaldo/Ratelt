import { NavItem } from "@/interfaces/navbarTypes";
import speedometer from "../../../public/assets/speedometerIcon.svg"
import speedometerMuted from "../../../public/assets/speedometerIconMuted.svg"
import chartIcon from "../../../public/assets/chartIcon.svg"
import chartIconMuted from "../../../public/assets/chartIconMuted.svg"
import membershipIcon from "../../../public/assets/membershipIcon.svg"
import membershipIconMuted from "../../../public/assets/membershipIconMuted.svg"
import templateIcon from "../../../public/assets/templateIcon.svg"
import templateIconMuted from "../../../public/assets/templateIconMuted.svg"
import settingsIcon from "../../../public/assets/settingsIcon.svg"
import settingsIconMuted from "../../../public/assets/settingsIconMuted.svg"



export const NavItems: NavItem[] = [
	{
		title: "Overview",
		ActivedIcon: speedometer,
		MutedIcon:speedometerMuted,
		href: "/",
	},
	{
		title: "Insights",
		ActivedIcon: chartIcon,
		MutedIcon:chartIconMuted,
		href: "",
	},
	{
		title: "Templates",
		ActivedIcon: templateIcon,
		MutedIcon:templateIconMuted,
		href: "",
	},{
		title: "Membership",
		ActivedIcon: membershipIcon,
		MutedIcon:membershipIconMuted,
		href: "",
	},
	{
		title: "Settings",
		ActivedIcon: settingsIcon,
		MutedIcon:settingsIconMuted,
		href: "",
	}

];

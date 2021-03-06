import React from "react";
import useApexTheme from "../../common/Hooks/useTheme";

export const Images = {
	CopyIcon: require("./fi-rr-copy-alt-1.svg").default,
	WalletDisconnectIcon: require("./walletDisconnect.svg").default,
	
};
export const SvgLogo = ({fillColor, ...restProps}) => (
	<svg
		width={127}
		height={19}
		viewBox="0 0 127 19"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...restProps}>
		<path
			d="M12.048 15.24H6.048L5.136 18H0.192L6.36 1.08H11.784L17.928 18H12.96L12.048 15.24ZM10.872 11.64L9.048 6.168L7.248 11.64H10.872ZM32.8292 6.72C32.8292 7.744 32.5892 8.68 32.1092 9.528C31.6452 10.36 30.9332 11.032 29.9732 11.544C29.0292 12.04 27.8692 12.288 26.4932 12.288H24.1652V18H19.4612V1.08H26.4932C27.8532 1.08 29.0052 1.32 29.9492 1.8C30.9092 2.28 31.6292 2.944 32.1092 3.792C32.5892 4.64 32.8292 5.616 32.8292 6.72ZM26.0372 8.544C27.3652 8.544 28.0292 7.936 28.0292 6.72C28.0292 5.488 27.3652 4.872 26.0372 4.872H24.1652V8.544H26.0372ZM39.423 4.848V7.608H44.823V11.184H39.423V14.232H45.543V18H34.719V1.08H45.543V4.848H39.423ZM58.4514 18L55.1634 13.224L52.3554 18H47.0034L52.4994 9.336L46.8114 1.08H52.3554L55.5474 5.736L58.2834 1.08H63.6354L58.2114 9.6L63.9954 18H58.4514ZM76.3136 15.24H70.3136L69.4016 18H64.4576L70.6256 1.08H76.0496L82.1936 18H77.2256L76.3136 15.24ZM75.1376 11.64L73.3136 6.168L71.5136 11.64H75.1376ZM92.2948 18L88.9348 11.76H88.4308V18H83.7268V1.08H91.1428C92.5028 1.08 93.6548 1.32 94.5988 1.8C95.5428 2.264 96.2548 2.912 96.7348 3.744C97.2148 4.56 97.4548 5.48 97.4548 6.504C97.4548 7.656 97.1348 8.672 96.4948 9.552C95.8708 10.416 94.9508 11.032 93.7348 11.4L97.5508 18H92.2948ZM88.4308 8.544H90.7588C91.3988 8.544 91.8788 8.392 92.1988 8.088C92.5188 7.784 92.6788 7.344 92.6788 6.768C92.6788 6.224 92.5108 5.8 92.1748 5.496C91.8548 5.176 91.3828 5.016 90.7588 5.016H88.4308V8.544ZM112.338 1.08V4.824H107.826V18H103.122V4.824H98.658V1.08H112.338ZM120.462 18.168C118.494 18.168 116.878 17.704 115.614 16.776C114.35 15.832 113.67 14.488 113.574 12.744H118.59C118.638 13.336 118.814 13.768 119.118 14.04C119.422 14.312 119.814 14.448 120.294 14.448C120.726 14.448 121.078 14.344 121.35 14.136C121.638 13.912 121.782 13.608 121.782 13.224C121.782 12.728 121.55 12.344 121.086 12.072C120.622 11.8 119.87 11.496 118.83 11.16C117.726 10.792 116.83 10.44 116.142 10.104C115.47 9.752 114.878 9.248 114.366 8.592C113.87 7.92 113.622 7.048 113.622 5.976C113.622 4.888 113.894 3.96 114.438 3.192C114.982 2.408 115.734 1.816 116.694 1.416C117.654 1.016 118.742 0.816 119.958 0.816C121.926 0.816 123.494 1.28 124.662 2.208C125.846 3.12 126.478 4.408 126.558 6.072H121.446C121.43 5.56 121.27 5.176 120.966 4.92C120.678 4.664 120.302 4.536 119.838 4.536C119.486 4.536 119.198 4.64 118.974 4.848C118.75 5.056 118.638 5.352 118.638 5.736C118.638 6.056 118.758 6.336 118.998 6.576C119.254 6.8 119.566 7 119.934 7.176C120.302 7.336 120.846 7.544 121.566 7.8C122.638 8.168 123.518 8.536 124.206 8.904C124.91 9.256 125.51 9.76 126.006 10.416C126.518 11.056 126.774 11.872 126.774 12.864C126.774 13.872 126.518 14.776 126.006 15.576C125.51 16.376 124.782 17.008 123.822 17.472C122.878 17.936 121.758 18.168 120.462 18.168Z"
			fill={fillColor}
		/>
	</svg>
);

export function ApexHubLogo({fillColor, ...restProps}) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="115"
			height="18"
			fill="none"
			viewBox="0 0 115 18"
			{...restProps}>
			<path
				fill={fillColor}
				d="M12.048 14.24h-6L5.136 17H.192L6.36.08h5.424L17.928 17H12.96l-.912-2.76zm-1.176-3.6L9.048 5.168l-1.8 5.472h3.624zm21.957-4.92c0 1.024-.24 1.96-.72 2.808-.464.832-1.176 1.504-2.136 2.016-.944.496-2.104.744-3.48.744h-2.328V17h-4.704V.08h7.032c1.36 0 2.512.24 3.456.72.96.48 1.68 1.144 2.16 1.992.48.848.72 1.824.72 2.928zm-6.792 1.824c1.328 0 1.992-.608 1.992-1.824 0-1.232-.664-1.848-1.992-1.848h-1.872v3.672h1.872zm13.386-3.696v2.76h5.4v3.576h-5.4v3.048h6.12V17H34.719V.08h10.824v3.768h-6.12zM58.451 17l-3.288-4.776L52.355 17h-5.352L52.5 8.336 46.811.08h5.544l3.192 4.656L58.283.08h5.352L58.211 8.6l5.784 8.4h-5.544zM80.754.08V17H76.05v-6.792h-5.736V17H65.61V.08h4.704v6.36h5.736V.08h4.704zm7.3 0v9.816c0 .912.208 1.616.624 2.112.432.496 1.08.744 1.944.744.864 0 1.512-.248 1.944-.744.448-.512.672-1.216.672-2.112V.08h4.704v9.816c0 1.552-.328 2.88-.984 3.984a6.364 6.364 0 01-2.688 2.472c-1.12.544-2.368.816-3.744.816-1.376 0-2.608-.272-3.696-.816-1.072-.56-1.92-1.384-2.544-2.472-.608-1.088-.912-2.416-.912-3.984V.08h4.68zm23.278 8.232c.992.224 1.776.72 2.352 1.488.592.752.888 1.616.888 2.592 0 1.44-.496 2.568-1.488 3.384-.992.816-2.384 1.224-4.176 1.224h-8.376V.08h8.112c1.728 0 3.08.384 4.056 1.152.992.768 1.488 1.848 1.488 3.24 0 .992-.264 1.824-.792 2.496-.512.656-1.2 1.104-2.064 1.344zM105.236 6.8h2.376c1.184 0 1.776-.488 1.776-1.464 0-1.008-.592-1.512-1.776-1.512h-2.376V6.8zm2.736 6.408c1.184 0 1.776-.496 1.776-1.488 0-.512-.16-.904-.48-1.176-.304-.272-.744-.408-1.32-.408h-2.712v3.072h2.736z"></path>
		</svg>
	);
}

export function ApexSearchIcon({fillColor, ...restProps}) {
	return (
		<svg
			width={18}
			height={18}
			viewBox="0 0 18 18"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...restProps}>
			<path
				d="M17.875 16.46l-4-4.005a2.441 2.441 0 00-.43-.35l-1-.69a7.015 7.015 0 00.046-8.754A6.995 6.995 0 003.973.69a7.011 7.011 0 003.052 13.327c1.588 0 3.13-.54 4.37-1.531l.75 1c.089.13.19.25.3.361l4 4.005a.5.5 0 00.71 0l.7-.7a.501.501 0 00.02-.692zm-10.85-4.445c-2.761 0-5-2.241-5-5.006a5.003 5.003 0 015-5.006c2.761 0 5 2.241 5 5.006a5.01 5.01 0 01-1.465 3.54 4.997 4.997 0 01-3.535 1.466z"
				fill={fillColor}
			/>
		</svg>
	);
}

export function DayLightIcon(props) {
	const {colorMode, colorPlates} = useApexTheme();
	const [fillColor, setFillColor] = React.useState(colorPlates.lighterDark);
	const [circleFill, setCircleFill] = React.useState("none");
	const handleMouseEnter = (e) => {
		setFillColor(colorPlates.textOnBg);
		setCircleFill(colorMode === "light" ? colorPlates.lightGray : "none");
	};
	const handleMouseLeave = () => {
		setFillColor(colorPlates.lighterDark);
		setCircleFill("none");
	};
	return (
		<svg
			width={36}
			height={36}
			viewBox="0 0 36 36"
			fill="none"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			xmlns="http://www.w3.org/2000/svg"
			{...props}>
			<circle cx={18} cy={18} r={17.5} fill={circleFill} stroke={fillColor} />
			<path
				d="M18 13.148a.773.773 0 01-.773-.773v-1.688a.773.773 0 111.546 0v1.688a.773.773 0 01-.773.773zM18 26.086a.773.773 0 01-.773-.773v-1.688a.773.773 0 111.546 0v1.688a.773.773 0 01-.773.773zM21.977 14.797a.774.774 0 01-.547-1.32l1.194-1.193a.773.773 0 011.093 1.093l-1.193 1.194a.773.773 0 01-.547.226zM12.829 23.945a.773.773 0 01-.547-1.32l1.194-1.194a.774.774 0 111.093 1.094l-1.193 1.193a.772.772 0 01-.547.227zM25.313 18.773h-1.688a.773.773 0 110-1.546h1.688a.773.773 0 110 1.546zM12.375 18.773h-1.688a.773.773 0 110-1.546h1.688a.773.773 0 110 1.546zM23.17 23.944a.772.772 0 01-.547-.227l-1.193-1.193a.773.773 0 011.094-1.094l1.193 1.194a.774.774 0 01-.546 1.32zM14.023 14.797a.769.769 0 01-.547-.226l-1.193-1.194a.773.773 0 011.094-1.093l1.193 1.193a.774.774 0 01-.547 1.32zM18 21.586a3.586 3.586 0 110-7.172 3.586 3.586 0 010 7.172z"
				fill={fillColor}
			/>
		</svg>
	);
}

export function UserIcon(props) {
	const {colorMode, colorPlates} = useApexTheme();
	const [fillColor, setFillColor] = React.useState(colorPlates.lighterDark);
	const [circleFill, setCircleFill] = React.useState("none");
	const handleMouseEnter = (e) => {
		setFillColor(colorPlates.textOnBg);
		setCircleFill(colorMode === "light" ? colorPlates.lightGray : "none");
	};
	const handleMouseLeave = () => {
		setFillColor(colorPlates.lighterDark);
		setCircleFill("none");
	};
	return (
		<svg
			width={36}
			height={36}
			viewBox="0 0 36 36"
			fill="none"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			xmlns="http://www.w3.org/2000/svg"
			{...props}>
			<circle cx={18} cy={18} r={17.5} fill={circleFill} stroke={fillColor} />
			<g clipPath="url(#clip0_1607_26340)">
				<path
					d="M18 18a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm0-7.5a3 3 0 110 5.999 3 3 0 010-5.999zm0 9a6.758 6.758 0 00-6.75 6.75.75.75 0 101.5 0 5.25 5.25 0 1110.5 0 .75.75 0 101.5 0A6.758 6.758 0 0018 19.5z"
					fill={fillColor}
				/>
			</g>
			<defs>
				<clipPath id="clip0_1607_26340">
					<path fill={fillColor} transform="translate(9 9)" d="M0 0H18V18H0z" />
				</clipPath>
			</defs>
		</svg>
	);
}

export function WalletIcon(props) {
	const {colorMode, colorPlates} = useApexTheme();
	const [fillColor, setFillColor] = React.useState(colorPlates.lighterDark);
	const [circleFill, setCircleFill] = React.useState("none");
	const handleMouseEnter = (e) => {
		setFillColor(colorPlates.textOnBg);
		setCircleFill(colorMode === "light" ? colorPlates.lightGray : "none");
	};
	const handleMouseLeave = () => {
		setFillColor(colorPlates.lighterDark);
		setCircleFill("none");
	};
	return (
		<svg
			width={36}
			height={36}
			viewBox="0 0 36 36"
			fill="none"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			xmlns="http://www.w3.org/2000/svg"
			{...props}>
			<circle cx={18} cy={18} r={17.5} fill={circleFill} stroke={fillColor} />
			<path
				d="M23.625 14.063h-11.25c-.932 0-1.688.755-1.688 1.687v6.75c0 .932.756 1.688 1.688 1.688h11.25c.932 0 1.688-.756 1.688-1.688v-6.75c0-.932-.756-1.688-1.688-1.688z"
				stroke={fillColor}
				strokeWidth={1.5}
				strokeLinejoin="round"
			/>
			<path
				d="M23.462 14.063v-1.055a1.758 1.758 0 00-2.087-1.726l-9.259 1.58a1.758 1.758 0 00-1.428 1.728v1.723"
				stroke={fillColor}
				strokeWidth={1.5}
				strokeLinejoin="round"
			/>
			<path
				d="M21.938 20.25a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25z"
				fill={fillColor}
			/>
		</svg>
	);
}

export function DarkModeIcon(props) {
	const {colorMode, colorPlates} = useApexTheme();
	const [fillColor, setFillColor] = React.useState(colorPlates.lighterDark);
	const [circleFill, setCircleFill] = React.useState("none");
	const handleMouseEnter = (e) => {
		setFillColor(colorPlates.textOnBg);
		setCircleFill(colorMode === "light" ? colorPlates.lightGray : "none");
	};
	const handleMouseLeave = () => {
		setFillColor(colorPlates.lighterDark);
		setCircleFill("none");
	};
	return (
		<svg
			width={36}
			height={36}
			viewBox="0 0 36 36"
			fill="none"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			xmlns="http://www.w3.org/2000/svg"
			{...props}>
			<circle cx={18} cy={18} r={17.5} fill={circleFill} stroke={fillColor} />
			<path
				d="M18.281 25.874a8.156 8.156 0 01-8.156-8.156c0-3.305 1.898-6.268 4.838-7.547a.561.561 0 01.74.74c-.337.775-.515 1.768-.515 2.87a7.04 7.04 0 007.03 7.03c1.102 0 2.095-.178 2.87-.515a.561.561 0 01.74.74c-1.28 2.94-4.242 4.838-7.547 4.838z"
				fill={fillColor}
			/>
		</svg>
	);
}

export function TelegramIcon({fillColor, ...restProps}) {
	return (
		<svg
			width={24}
			height={25}
			viewBox="0 0 24 25"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...restProps}>
			<path
				d="M20.665 4.708l-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701H9.84l.002.001-.314 4.692c.46 0 .663-.211.92-.46l2.212-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"
				fill={fillColor}
			/>
		</svg>
	);
}

export function TikTokIcon({fillColor, ...restProps}) {
	return (
		<svg
			width={24}
			height={25}
			viewBox="0 0 24 25"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...restProps}>
			<path
				d="M19.59 7.681a4.83 4.83 0 01-3.77-4.25v-.44h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64c.298-.002.595.042.88.13v-3.5a6.833 6.833 0 00-1-.05A6.33 6.33 0 005 21.091a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1h-.04z"
				fill={fillColor}
			/>
		</svg>
	);
}

export function InstagramIcon({fillColor, ...restProps}) {
	return (
		<svg
			width={24}
			height={25}
			viewBox="0 0 24 25"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...restProps}>
			<path
				d="M12 9.867a3.13 3.13 0 00-3.124 3.124A3.13 3.13 0 0012 16.115a3.13 3.13 0 003.124-3.124A3.13 3.13 0 0012 9.867zm9.37 3.124c0-1.294.012-2.576-.06-3.867-.073-1.5-.415-2.832-1.512-3.929-1.1-1.099-2.428-1.439-3.928-1.511-1.294-.073-2.576-.061-3.867-.061-1.294 0-2.576-.012-3.868.06-1.5.073-2.831.416-3.928 1.512-1.1 1.1-1.439 2.429-1.512 3.929-.072 1.293-.06 2.575-.06 3.867 0 1.291-.012 2.575.06 3.867.073 1.5.415 2.831 1.512 3.928 1.1 1.1 2.428 1.44 3.928 1.512 1.294.072 2.576.06 3.867.06 1.294 0 2.576.012 3.868-.06 1.5-.073 2.83-.415 3.928-1.512 1.099-1.1 1.439-2.428 1.512-3.928.075-1.292.06-2.574.06-3.867zM12 17.798a4.8 4.8 0 01-4.807-4.807A4.8 4.8 0 0112 8.184a4.8 4.8 0 014.807 4.807A4.8 4.8 0 0112 17.798zm5.004-8.689a1.121 1.121 0 01-1.123-1.122c0-.621.502-1.123 1.123-1.123a1.121 1.121 0 01.43 2.16 1.122 1.122 0 01-.43.085z"
				fill={fillColor}
			/>
		</svg>
	);
}

export function DiscordIcon({fillColor, ...restProps}) {
	return (
		<svg
			width={24}
			height={25}
			viewBox="0 0 24 25"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...restProps}>
			<g clipPath="url(#clip0_1797_14175)">
				<path
					d="M20.317 5.483c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 00-.079.036c-.21.37-.444.85-.607 1.23a18.566 18.566 0 00-5.488 0 12.36 12.36 0 00-.617-1.23.077.077 0 00-.079-.038c-1.714.29-3.354.8-4.885 1.491a.07.07 0 00-.032.027C.533 10.084-.32 14.546.1 18.952a.08.08 0 00.031.055 20.031 20.031 0 005.993 2.98.078.078 0 00.084-.026 13.83 13.83 0 001.226-1.963.074.074 0 00-.04-.104 13.211 13.211 0 01-1.873-.878.076.076 0 01-.037-.06.075.075 0 01.03-.065c.125-.093.251-.19.371-.287a.076.076 0 01.078-.01c3.927 1.764 8.18 1.764 12.061 0a.074.074 0 01.08.01c.12.097.244.194.371.287a.075.075 0 01.02.1.076.076 0 01-.026.025c-.598.344-1.22.635-1.872.877a.075.075 0 00-.041.105c.36.687.771 1.341 1.224 1.962a.077.077 0 00.084.028 19.964 19.964 0 006.003-2.98.075.075 0 00.032-.055c.5-5.094-.838-9.52-3.55-13.442a.06.06 0 00-.03-.028zM8.02 16.27c-1.182 0-2.157-1.069-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.177 1.077 2.158 2.38 0 1.312-.957 2.38-2.158 2.38zm7.976 0c-1.184 0-2.158-1.069-2.158-2.38 0-1.312.956-2.38 2.158-2.38 1.21 0 2.176 1.077 2.156 2.38 0 1.312-.946 2.38-2.157 2.38z"
					fill={fillColor}
				/>
			</g>
			<defs>
				<clipPath id="clip0_1797_14175">
					<path fill="#fff" transform="translate(0 .991)" d="M0 0H24V24H0z" />
				</clipPath>
			</defs>
		</svg>
	);
}

export function TwitterIcon({fillColor, ...restProps}) {
	return (
		<svg
			width={24}
			height={25}
			viewBox="0 0 24 25"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...restProps}>
			<path
				d="M23.642 5.928c-.834.37-1.732.62-2.674.733a4.67 4.67 0 002.047-2.578 9.3 9.3 0 01-2.957 1.13 4.66 4.66 0 00-7.938 4.25 13.229 13.229 0 01-9.602-4.868 4.66 4.66 0 001.442 6.22 4.646 4.646 0 01-2.11-.583v.06a4.66 4.66 0 003.737 4.568 4.692 4.692 0 01-2.104.08 4.661 4.661 0 004.352 3.234 9.348 9.348 0 01-5.786 1.995 9.5 9.5 0 01-1.112-.065 13.175 13.175 0 007.14 2.093c8.57 0 13.254-7.098 13.254-13.254 0-.2-.005-.402-.014-.602a9.47 9.47 0 002.323-2.41l.002-.003z"
				fill={fillColor}
			/>
		</svg>
	);
}

export function NotificationIcon(props) {
	const {colorMode, colorPlates} = useApexTheme();
	const [fillColor, setFillColor] = React.useState(colorPlates.lighterDark);
	const [circleFill, setCircleFill] = React.useState("none");
	const handleMouseEnter = (e) => {
		setFillColor(colorPlates.textOnBg);
		setCircleFill(colorMode === "light" ? colorPlates.lightGray : "none");
	};
	const handleMouseLeave = () => {
		setFillColor(colorPlates.lighterDark);
		setCircleFill("none");
	};
	return (
		<svg
			width={36}
			height={36}
			viewBox="0 0 36 36"
			fill="none"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			xmlns="http://www.w3.org/2000/svg"
			{...props}>
			<circle cx={18} cy={18} fill={circleFill} r={17.5} stroke={fillColor} />
			<g clipPath="url(#clip0_2083_23396)">
				<path
					d="M25.916 19.247l-1.425-5.127a6.99 6.99 0 00-13.56.355L9.83 19.436A3.75 3.75 0 0013.489 24h.836a3.75 3.75 0 007.35 0h.628a3.75 3.75 0 003.614-4.753zM18 25.5a2.251 2.251 0 01-2.112-1.5h4.224A2.25 2.25 0 0118 25.5zm6.094-3.889a2.233 2.233 0 01-1.791.89h-8.814a2.251 2.251 0 01-2.196-2.739l1.103-4.962a5.49 5.49 0 0110.65-.279l1.425 5.127a2.234 2.234 0 01-.377 1.963z"
					fill={fillColor}
				/>
			</g>
			<defs>
				<clipPath id="clip0_2083_23396">
					<path fill={fillColor} transform="translate(9 9)" d="M0 0H18V18H0z" />
				</clipPath>
			</defs>
		</svg>
	);
}

export function GlobIcon() {
	const {colorPlates} = useApexTheme();
	const [fillColor, setFillColor] = React.useState(colorPlates.lighterDark);

	const handleMouseEnter = (e) => {
		setFillColor(colorPlates.textOnBg);
	};
	const handleMouseLeave = () => {
		setFillColor(colorPlates.lighterDark);
	};
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="18"
			height="18"
			fill="none"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			viewBox="0 0 18 18">
			<path
				fill={fillColor}
				d="M9 0a9 9 0 109 9 9.01 9.01 0 00-9-9zm7.5 9c0 1.47-.433 2.907-1.246 4.131l-.894-.895a.375.375 0 01-.11-.264v-.722A2.25 2.25 0 0012 9H9.75A.75.75 0 019 8.25v-.375a.375.375 0 01.375-.375 1.875 1.875 0 001.875-1.875v-.75a.375.375 0 01.375-.375h1.034a1.887 1.887 0 001.325-.549l.283-.283A7.477 7.477 0 0116.5 9zm-14.963.722l2.368 2.369a2.234 2.234 0 001.592.659H7.5a.75.75 0 01.75.75v2.962a7.511 7.511 0 01-6.713-6.74zm8.213 6.74V13.5a2.25 2.25 0 00-2.25-2.25H5.497a.75.75 0 01-.531-.22L1.622 7.687a7.484 7.484 0 0111.47-4.965l-.168.168a.38.38 0 01-.265.11h-1.034A1.875 1.875 0 009.75 4.875v.75A.375.375 0 019.375 6 1.875 1.875 0 007.5 7.875v.375a2.25 2.25 0 002.25 2.25H12a.75.75 0 01.75.75v.722c.001.496.199.973.549 1.325l1.003 1.002a7.479 7.479 0 01-4.552 2.163z"></path>
		</svg>
	);
}

export function FavoriteIcon({fillColor}) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			fill={fillColor}
			viewBox="0 0 24 24">
			<path fill="none" d="M0 0h24v24H0z"></path>
			<path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path>
		</svg>
	);
}

export function RightChevron() {
	return (
		<svg
			width={24}
			height={24}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M9 18L15 12L9 6"
				stroke="white"
				strokeWidth={2}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

export function LeftChevron() {
	return (
		<svg
			width={24}
			height={24}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M15 18L9 12L15 6"
				stroke="white"
				strokeWidth={2}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

export function ApexHubHome() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="20"
			height="21"
			fill="none"
			viewBox="0 0 20 21">
			<path
				stroke="#BFBFBF"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeMiterlimit="10"
				strokeWidth="1.5"
				d="M16.875 18.625H3.125v-7.5H2.022c-.711 0-1.043-.887-.507-1.355l7.317-6.93c.655-.62 1.68-.62 2.336 0l7.317 6.93c.536.467.204 1.355-.508 1.355h-1.102v7.5z"></path>
			<path
				stroke="#BFBFBF"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeMiterlimit="10"
				strokeWidth="1.5"
				d="M12.5 18.625h-5v-3.75a2.5 2.5 0 015 0v3.75z"></path>
		</svg>
	);
}

export function ApexHubGame() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="18"
			height="13"
			fill="none"
			viewBox="0 0 18 13">
			<path
				fill="#BFBFBF"
				d="M13.157.004H4.843A4.774 4.774 0 00.074 4.773v5.722c0 1.379 1.122 2.5 2.5 2.5.675 0 1.331-.279 1.8-.765L7.05 9.452a2.613 2.613 0 011.873-.795h.154c.703 0 1.385.29 1.873.795l2.676 2.778a2.512 2.512 0 001.8.765c1.379 0 2.5-1.122 2.5-2.5V4.773c0-2.63-2.14-4.77-4.769-4.77zm3.519 10.491a1.251 1.251 0 01-2.15.868L11.85 8.585a3.87 3.87 0 00-2.773-1.178h-.154c-1.04 0-2.05.43-2.773 1.178l-2.676 2.777a1.251 1.251 0 01-2.15-.867V4.773a3.523 3.523 0 013.519-3.52h8.314a3.523 3.523 0 013.519 3.52v5.722z"></path>
			<path
				fill="#BFBFBF"
				d="M6.365 4.27h-.698v-.698a.625.625 0 10-1.25 0v.698h-.698a.625.625 0 100 1.25h.698v.698a.625.625 0 101.25 0V5.52h.698a.625.625 0 100-1.25zM13.351 3.23a.614.614 0 00-.216-.36.66.66 0 00-.158-.095.58.58 0 00-.177-.044.588.588 0 00-.243.024.649.649 0 00-.26.155.757.757 0 00-.078.096.537.537 0 00-.058.108.605.605 0 00-.035.36.645.645 0 00.13.275.653.653 0 00.188.154.602.602 0 00.295.075.645.645 0 00.346-.106.655.655 0 00.173-.172.562.562 0 00.058-.108.586.586 0 00.044-.178.63.63 0 00-.009-.184zM13.351 6.315a.615.615 0 00-.216-.36.784.784 0 00-.102-.068.552.552 0 00-.113-.047.621.621 0 00-.623.156.655.655 0 00-.136.203.606.606 0 00-.035.36.645.645 0 00.13.275.653.653 0 00.188.154.726.726 0 00.113.047.636.636 0 00.42-.02.653.653 0 00.245-.181.751.751 0 00.068-.102.565.565 0 00.061-.172.614.614 0 000-.245zM14.894 4.773a.615.615 0 00-.265-.397.618.618 0 00-.286-.102.589.589 0 00-.243.024.597.597 0 00-.215.114.63.63 0 00-.216.605.646.646 0 00.129.275.656.656 0 00.19.154.592.592 0 00.232.071.645.645 0 00.243-.024.59.59 0 00.165-.078.572.572 0 00.173-.173.878.878 0 00.058-.107.814.814 0 00.035-.118.614.614 0 000-.244zM11.808 4.773a.645.645 0 00-.13-.274.563.563 0 00-.136-.123.618.618 0 00-.285-.102.588.588 0 00-.243.024.627.627 0 00-.417.779.624.624 0 001.21-.304z"></path>
		</svg>
	);
}

export function ApexHubChat() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="20"
			height="20"
			fill="none"
			viewBox="0 0 20 20">
			<path
				fill="#BFBFBF"
				d="M15.386 19.322a.703.703 0 01-.53-.24l-2.249-2.57c-.905.233-1.837.35-2.772.35-2.493 0-4.846-.813-6.622-2.284C1.401 13.077.403 11.066.403 8.92c0-2.146 1-4.155 2.81-5.657C4.99 1.792 7.343.98 9.835.98c2.493 0 4.846.81 6.62 2.282 1.813 1.501 2.811 3.512 2.811 5.657 0 2.291-1.153 4.439-3.176 5.946v3.754a.704.704 0 01-.704.703v-.001zm-2.542-4.311a.703.703 0 01.53.24l1.308 1.494v-2.24a.704.704 0 01.308-.582c1.824-1.248 2.87-3.071 2.87-5.003 0-3.6-3.599-6.53-8.023-6.53-4.424-.001-8.023 2.93-8.023 6.53 0 3.601 3.597 6.534 8.021 6.534a9.621 9.621 0 002.804-.412.703.703 0 01.205-.031z"></path>
			<path
				fill="#BFBFBF"
				d="M7.314 10.856c-.023 0-.047 0-.07-.003l-.068-.01a.586.586 0 01-.066-.018.741.741 0 01-.34-.228.635.635 0 01-.107-.176.655.655 0 01-.05-.2.69.69 0 01.203-.567.815.815 0 01.107-.088.583.583 0 01.121-.065.632.632 0 01.2-.05.682.682 0 01.401.08.633.633 0 01.166.123.82.82 0 01.088.107.684.684 0 01.088.186.678.678 0 010 .41.83.83 0 01-.088.186.75.75 0 01-.14.153.671.671 0 01-.24.13.625.625 0 01-.136.027.662.662 0 01-.07.003zM12.547 10.856a.66.66 0 01-.204-.03c-.02-.007-.043-.015-.064-.024a.79.79 0 01-.177-.106.615.615 0 01-.098-.098.748.748 0 01-.106-.177.861.861 0 01-.04-.132.73.73 0 010-.275.572.572 0 01.04-.132.635.635 0 01.065-.121.762.762 0 01.139-.154.727.727 0 01.518-.156.766.766 0 01.2.05.763.763 0 01.176.106.674.674 0 01.175.213.708.708 0 01.053.127c.007.022.012.047.017.067a.625.625 0 01.01.207.767.767 0 01-.05.2.712.712 0 01-.319.351.79.79 0 01-.194.07.729.729 0 01-.14.014zM9.93 10.857a.709.709 0 01-.673-.5l-.017-.067a.68.68 0 01.017-.344.668.668 0 01.088-.186.585.585 0 01.088-.107.71.71 0 01.944-.046.617.617 0 01.098.098.76.76 0 01.106.177.77.77 0 01.05.2.637.637 0 01-.01.209.554.554 0 01-.04.131.604.604 0 01-.065.122.773.773 0 01-.139.154.738.738 0 01-.242.129c-.022.007-.047.012-.067.017a.603.603 0 01-.137.013z"></path>
		</svg>
	);
}

export function ApexHubStakingStates() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="16"
			height="17"
			fill="none"
			viewBox="0 0 16 17">
			<path
				fill="#BFBFBF"
				d="M6.985 16.302a6.875 6.875 0 01-6.87-6.87c0-3.788 3.081-6.87 6.87-6.87a.586.586 0 01.586.586v5.698h5.698a.586.586 0 01.586.586c0 3.788-3.08 6.87-6.87 6.87zM6.4 3.762a5.706 5.706 0 00-5.112 5.669 5.703 5.703 0 005.698 5.7 5.706 5.706 0 005.668-5.113H6.985a.586.586 0 01-.586-.586v-5.67z"></path>
			<path
				fill="#BFBFBF"
				d="M15.23 8.212H8.79a.586.586 0 01-.587-.586V1.185A.586.586 0 018.79.599a7.035 7.035 0 017.027 7.027.586.586 0 01-.586.586zM9.375 7.04h5.24a5.865 5.865 0 00-5.24-5.24v5.24z"></path>
		</svg>
	);
}
export function ApexHubEvents() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="18"
			height="17"
			fill="none"
			viewBox="0 0 18 17">
			<path
				fill="#BFBFBF"
				d="M14 16.625H4A3.125 3.125 0 01.875 13.5V4.75A3.125 3.125 0 014 1.625h10a3.125 3.125 0 013.125 3.125v8.75A3.125 3.125 0 0114 16.625zM4 2.875A1.875 1.875 0 002.125 4.75v8.75A1.875 1.875 0 004 15.375h10a1.875 1.875 0 001.875-1.875V4.75A1.875 1.875 0 0014 2.875H4z"></path>
			<path
				fill="#BFBFBF"
				d="M14 14.125h-2.5a.624.624 0 01-.625-.625V11a.624.624 0 01.625-.625H14a.624.624 0 01.625.625v2.5a.624.624 0 01-.625.625zm-1.875-1.25h1.25v-1.25h-1.25v1.25zM16.5 6.625h-15a.625.625 0 010-1.25h15a.625.625 0 110 1.25zM5.875 4.125A.625.625 0 015.25 3.5V1A.625.625 0 016.5 1v2.5a.625.625 0 01-.625.625zM12.125 4.125A.625.625 0 0111.5 3.5V1a.625.625 0 111.25 0v2.5a.625.625 0 01-.625.625z"></path>
		</svg>
	);
}

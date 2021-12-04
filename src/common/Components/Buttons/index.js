import {styled} from "@mui/system";
import React from "react";
import {FavoriteIcon} from "../../../assets/images";
import "./index.scss";

export const GradientBorderBUtton = ({
	component: Tag = "button",
	children,
	gradient,
	bgColor,
	color,
	className,
	border,
	roundCorner,
	...restProps
}) => {
	const StyledButton = styled(Tag)`
		min-width: 100px;
		height: 36px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: ${roundCorner ? "100rem" : "0.375rem"};
		color: ${color ?? "var(--fontColor)"};
		border: ${border ? "solid 2px transparent" : "none"};
		background-image: linear-gradient(
				rgba(255, 255, 255, 0),
				rgba(255, 255, 255, 0)
			),
			${gradient ?? "var(--gradientOne)"};
		background-origin: border-box;
		background-clip: content-box, border-box;
		box-shadow: 2px 1000px 1px ${bgColor ?? "var(--lightGray)"} inset;
		transition: background-color 300ms ease;
		&:hover {
			box-shadow: none;
			color: white;
			transition: background-color 200ms ease-out;
		}
	`;
	return (
		<StyledButton
			className={`GradientBorderBUtton tf-button2 ${className ?? ""}`}
			{...restProps}>
			{children}
		</StyledButton>
	);
};

export const FavButton = ({iconFillColor, count, className, ...restProps}) => (
	<button className={`favButton ${className ?? ""}`} {...restProps}>
		<span
			className={`favButton__icon ${className ? `${className}__icon` : ""}`}>
			<FavoriteIcon fillColor={iconFillColor} />
		</span>
		<span
			className={`favButton__label ${className ? `${className}__label` : ""}`}>
			{count}
		</span>
	</button>
);

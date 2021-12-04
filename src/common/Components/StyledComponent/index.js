import { Container } from "@mui/material";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";
import {
	TabsUnstyled,
	TabUnstyled,
	TabsListUnstyled,
	TabPanelUnstyled,
} from "@mui/base";

export const ApexContainer = ({ children, ...restProps }) => (
	<Container fixed disableGutters {...restProps}>
		{children}
	</Container>
);

export const StyledInputElement = styled("input")`
	font-weight: 400;
	font-size: 1rem;
	line-height: 1.4375em;
	background: transparent;
	border: none;
	outline: none !important;
	padding: 8px 15px;
	padding-left: 0;
	transition: width 300ms ease;
	width: 330px;
	&:focus {
		outline: none;
		width: 350px;
		transition: width 200ms ease-out;
	}
`;

export const StyledButton = styled("button")`
	border-radius: 50%;
	outline: none !important;
	background: transparent;
	border: none;
	margin-left: 18px;
	cursor: pointer;
	&.forWalletIcon{
		border-radius:50%;
		width:36px;
		height:36px;
		border:1.5px solid var(--lighterDark)
	}
`;

export const StyledDOMLink = styled(Link)`
	margin-left: 18px;
`;

export const GradientSectionTitle = styled("p", {
	shouldForwardProp: (prop) => prop !== "gradient" && prop !== "background",
	name: "GradientSectionTitle",
	slot: "Root",
})`
	background: ${(props) =>
		props.gradient ??
		"linear-gradient(89.79deg, #00ffa3 0.17%, #dc1fff 10.82%)"};
	background-clip: border-box;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	font-weight: 800;
	font-size: 17px;
	line-height: 22px;
	position: relative;
	margin-top: 15px;
	text-transform: uppercase;
	&::after{
		content: "";
    position: absolute;
    height: 1px;
    width: 54px;
    left: 105px;
    background: ${(props) =>
		props.gradient ??
		"linear-gradient(89.79deg, #00ffa3 0.17%, #dc1fff 10.82%)"};
    transform: rotate(180deg);
    top: 10px;
}
	}
`;

export const Tab = styled(TabUnstyled)`
  background: transparent;
  padding: 12px 20px;
  font-size: 17px;
  border: none;
  outline: none;
  color: var(--fontColor);
  cursor: pointer;
  margin-right: 12px;
  font-weight: 400;
  min-width: 100px;
  &:hover {
    color: var(--secondaryColor);
  }
  &.Mui-selected {
    color: var(--secondaryColor);
    font-weight: 500;
    border: 1px solid var(--darkGray);
    border-bottom: none;
    border-radius: 8px 8px 0 0;
    min-width: 100px;
  }
`;
export const TabsList = styled(TabsListUnstyled)`
  border-bottom: 1px solid var(--darkGray);
`;
export const TabPanel = styled(TabPanelUnstyled)``;

export const Tabs = styled(TabsUnstyled)``;

export const StyledTabs = { Tabs, TabPanel, TabsList, Tab }
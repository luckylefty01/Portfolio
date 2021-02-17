import React from "react";
// Material UI
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Tab from "@material-ui/core/Tab";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
// import Logo from "./components/assets/images/logo.png";

const styles = makeStyles((theme) => ({
    toolBarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "2rem",
    },
    logo: {
        marginLeft: "2rem",
        width: "6rem", 
    },
    tabContainer: {
        marginLeft: "auto",
    },
}));

export default function Header() {
    const classes = styles()
    const theme = useTheme()
    const routes = [
        {
            name: "About", 
            link: "#about",
        },
        { name: "Contact", link: "#contact" },
        { name: "Experience", link: "#experience"},
    ];

    const tabs = (
		<React.Fragment>
			<div className={classes.tabContainer}>
				{routes.map((route, id) => {
					return (
						<Tab value={route.id} label={route.name} key={`${route}.${id}`}>
							{route.name}
						</Tab>
					);
				})}
			</div>
		</React.Fragment>
	);

	return (
		<React.Fragment>
			<AppBar position="fixed" color="primary">
				<Toolbar disableGutters>   {tabs}
                <Button disableRipple>
						{/* <img src={Logo} className={classes.logo} alt={"logo"} /> */}
					</Button>
                </Toolbar>
			</AppBar>
            <div className="classes.toolBarMargin">

            </div>
		</React.Fragment>
	);
}
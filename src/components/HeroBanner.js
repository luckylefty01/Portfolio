import React from "react";
// MUI
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
// Assets
import BannerImage from "../components/assets/images/banner.jpg";

const styles = makeStyles((theme) => ({
	mainContainer: {
		height: "60vh",
	},
	heroBackground: {
		backgroundImage: `url(${BannerImage})`,
		backgroundPosition: "center",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		height: "100%",
		width: "100%",
	},
    contactBtn: {
        ...theme.button,
        marginLeft: "1rem",
    },
    heroBannerText: {
        marginLeft: "1.5rem",
    }
}));
export default function HeroBanner() {
	const classes = styles();
	const heroBanner = (
		<React.Fragment>
			<Grid
				className={classes.mainContainer}
				container
				alignItems="center"
				direction="row"
			>
				<Grid item className = {classes.heroBackground}>
					<Typography variant="h5" align="left" style={{ marginTop: "1rem"}}>
						Hi, I'm
					</Typography><Typography variant="h3" align="left">
						James Torres
					</Typography>
					<Typography variant="h3" align="left">
						I make web apps.
					</Typography>
                    <Button className={classes.contactBtn} href="mailto:james.torres01@gmail.com">
					Get In Touch
				</Button>
				</Grid>
			</Grid>
		</React.Fragment>
	);
	return <React.Fragment>{heroBanner}</React.Fragment>;
}
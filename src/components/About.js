import React from "react";
// MUI
import Grid from "@material-ui/core/Grid";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery"
// import Avatar from "./../assets/avatar.png";

const styles = makeStyles ((theme) => ({
    aboutMeBody :{
        ...theme.typography.body1,
    },
    avatar: {
        maxWidth: "20rem",
    },
}));

export default function About() {
    const classes = styles()
    const theme = useTheme()
    // media queries
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))
    
    return(
        <React.Fragment>
            <Grid container 
                justify="space-around" 
                alignItems="center" 
                direction="column">
            
                <Grid item>
                    <Typography variant="h4" align={matchesSM ? "center" : "left"}>About Me</Typography>
                    <Typography variant="h5">Add info</Typography>
                </Grid>
                {/* <Grid item>
                    <img src={Avatar} alt="Avatar" className={classes.avatar}/>
                </Grid> */}
            </Grid>
        </React.Fragment>
    );
}
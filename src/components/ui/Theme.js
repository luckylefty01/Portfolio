import {createMuiTheme} from "@material-ui/core/styles"

const myBlue = "#00017C"
const myGreen = "#4EC274"
const myWhite = "white"

export default createMuiTheme ({
    palette: {
        common: {blue: `${myBlue}`, green :`${myGreen}`},
        primary: { main: `${myBlue}`},
        secondary: { main: `${myGreen}`},
    },
    typography: {
        h1: {},
        h2: {},
        h3: {
            color: myWhite,
        },
        h5 :{} 
    },
    button: {
		marginLeft: "2.5rem",
		backgroundColor: myGreen,
		color: "white",
		borderRadius: "35px",
		height: "30px",
		padding: "10px",
		fontSize: "1rem",
	},
})
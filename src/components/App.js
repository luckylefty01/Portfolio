import React from "react";
import theme from "./ui/Theme";
import {ThemeProvider} from "@material-ui/styles";
import Header from "./ui/Header";
import HeroBanner from "./HeroBanner";
import About from "./About";
import Experience from "./Experience"

function App() {
	return (
    <ThemeProvider theme={theme}>
			<Header />
			<HeroBanner />
			<About />
			<Experience />
		</ThemeProvider>
  )
}


export default App;

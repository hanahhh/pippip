import React from "react";
import { signInPath, signUpPath } from "./constants"

const Form = React.lazy(() => import("./components/form/Form"))

// This is route inside Body.js which handle which form is showing when route changing
const routes = [
	{
		path: signInPath,
		exact: true,
		component: Form,
		name: "FormRight",
	},
	{
		path: signUpPath,
		exact: true,
		component: Form,
		name: "FormRight",
	},
];

export default routes;

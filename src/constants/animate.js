export const fadeIn = {
	hidden: {
		opacity: 0,
	},
	show: {
		opacity: 1,
	},
};
export const downToCenter = {
	hidden: {
		translateY: "-200%",
		translateX: "-50%",
		opacity: 0,
	},
	show: {
		translateY: "-50%",
		translateX: "-50%",
		opacity: 1,
		transition: { delay: 0 },
	},
};

export const slideDown = {
	hidden: {
		opacity: 0,
		top: "-100px",
	},
	show: {
		opacity: 1,
		top: "0%",
		transition: {
			duration: 1,
		},
	},
};

export const fadeInTime = {
	hidden: {
		opacity: 0,
	},
	show: {
		opacity: 1,
		transition: {
			duration: 1.5,
		},
	},
};

export const fadeInTime3Sec = {
	hidden: {
		opacity: 0,
	},
	show: {
		opacity: 1,
		transition: {
			duration: 1.5,
		},
	},
};
export const slideFromLeft = {
	hidden: {
		left: "-100%",
		opacity: 0,
	},
	show: {
		left: "0",
		opacity: 1,
		transition: {
			duration: 2.25,
		},
	},
};
export const slideFromRight = {
	hidden: {
		transform: "translateX(200%)",
		opacity: 0,
	},
	show: {
		transform: "translateX(0%)",
		opacity: 1,
		transition: {
			duration: 2,
		},
	},
};
export const slideFromRightSpecial = {
	hidden: {
		transform: "translateX(200%)",
		opacity: 0,
	},
	show: {
		transform: "translateX(0%)",
		opacity: 1,
		transition: {
			duration: 1.25,
		},
	},
};
//translate(calc(-50% + 72 * 3px), 0)
export const fadeInTimeSpecial = {
	hidden: {
		opacity: 0,
	},
	show: {
		opacity: 1,
		transition: {
			duration: 0.75,
			delay: 1.5,
		},
	},
};
export const slideFromBottom = {
	hidden: {
		top: "100%",
		opacity: 0,
	},
	show: {
		top: "0",
		opacity: 1,
		transition: {
			duration: 0.5,
		},
	},
};

export const slideFromBottom1 = {
	hidden: {
		transform: "translateY(200%)",
		opacity: 0,
	},
	show: {
		transform: "translateY(0%)",
		opacity: 1,
		transition: {
			duration: 0.5,
		},
	},
};

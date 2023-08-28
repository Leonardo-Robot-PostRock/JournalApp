import { useState, useEffect } from 'react';

const useResponsiveDrawerWidth = () => {
	const [drawerWidth, setDrawerWidth] = useState(240); // Initial value

	useEffect(() => {
		const mediaQueries = [
			{ query: '(min-width: 1920px)', width: 400 },
			{ query: '(min-width: 1440px)', width: 260 }, // Custom media query
		];

		const updateDrawerWidth = () => {
			const matchedQuery = mediaQueries.find((queryObj) => window.matchMedia(queryObj.query).matches);
			if (matchedQuery) {
				setDrawerWidth(matchedQuery.width);
			} else {
				setDrawerWidth(240); // Default width
			}
		};

		mediaQueries.forEach((queryObj) => {
			const mediaQuery = window.matchMedia(queryObj.query);
			mediaQuery.addEventListener('change', updateDrawerWidth);
		});

		// Call it initially to set the correct width based on the current media queries
		updateDrawerWidth();

		// Clean up the event listeners when the component unmounts
		return () => {
			mediaQueries.forEach((queryObj) => {
				const mediaQuery = window.matchMedia(queryObj.query);
				mediaQuery.removeEventListener('change', updateDrawerWidth);
			});
		};
	}, []);

	return drawerWidth;
};

export default useResponsiveDrawerWidth;

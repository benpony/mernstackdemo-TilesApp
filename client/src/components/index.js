import React, { useCallback, useRef, useMemo } from "react";
import TextField from "@material-ui/core/TextField";
import CircularProgress from "@material-ui/core/CircularProgress";

export const renderTextField = ( {
	label,
	input,
	meta: { touched, invalid, error },
	...custom
} ) => (
	<TextField
		label={label}
		error={touched && invalid}
		helperText={touched && error}
		variant="outlined"
		{...input}
		{...custom}
	/>
);

export const LoadingIndicator = () => {
	return ( <div style={{
		width: "100%",
		height: "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	}}>
		<CircularProgress
			disableShrink
			color="secondary" />
	</div> );
};

export const useLongPress = ( {
	onClick = () => {},
	onLongPress = () => {},
	ms = 300,
} = {} ) => {
	const timerRef = useRef( false );
	const eventRef = useRef( {} );

	const callback = useCallback( () => {
		onLongPress( eventRef.current );
		eventRef.current = {};
		timerRef.current = false;
	}, [ onLongPress ] );

	const start = useCallback(
		( ev ) => {
			ev.persist();
			eventRef.current = ev;
			timerRef.current = setTimeout( callback, ms );
		},
		[ callback, ms ]
	);

	const stop = useCallback(
		( ev ) => {
			ev.persist();
			eventRef.current = ev;
			if ( timerRef.current ) {
				clearTimeout( timerRef.current );
				onClick( eventRef.current );
				timerRef.current = false;
				eventRef.current = {};
			}
		},
		[ onClick ]
	);

	return useMemo(
		() => ( {
			onMouseDown: start,
			onMouseUp: stop,
			onMouseLeave: stop,
			onTouchStart: start,
			onTouchEnd: stop,
		} ),
		[ start, stop ]
	);
};
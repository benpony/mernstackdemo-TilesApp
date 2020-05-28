import React from "react";
import { withRouter } from "react-router-dom";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HistoryIcon from "@material-ui/icons/HistorySharp";
import FaceIcon from "@material-ui/icons/FaceSharp";
import FingerPrintIcon from "@material-ui/icons/Fingerprint";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCartSharp";
import MenuOpenIcon from "@material-ui/icons/MenuSharp";
import { useStyles } from "./NavigationDrawerStyle";

const NavDrawer = ( { history } ) => {
	const classes = useStyles();
	const [ state, setState ] = React.useState( {
		top: false,
		left: false,
		bottom: false,
		right: false,
	} );

	const toggleDrawer = ( anchor, open ) => ( event ) => {
		if ( event.type === "keydown" && ( event.key === "Tab" || event.key === "Shift" ) ) {
			return;
		}

		setState( { ...state, [anchor]: open } );
	};

	const list = ( anchor ) => (
		<div
			className={clsx( classes.list, {
				[classes.fullList]: anchor === "top" || anchor === "bottom",
			} )}
			role="presentation"
			onClick={toggleDrawer( anchor, false )}
			onKeyDown={toggleDrawer( anchor, false )}>
			<List>
				{[ "" ].map( ( text, index ) => (
					<ListItem button key={text}>
						<ListItemText primary={text} />
					</ListItem>
				) )}
			</List>
			<Divider className={classes.divider}/>
			<List>
				{[ [ "Order", "/", <ShoppingCartIcon key={1} className={classes.listIcon}/> ],
					[ "My Orders", "/orders", <HistoryIcon key={2} className={classes.listIcon}/> ],
					[ "Admin?", "/admin", <FaceIcon key={3} className={classes.listIcon}/> ] ].map( ( navItem, index ) => (
					<ListItem
						button
						key={navItem[0]}
						onClick={()=> history.push( navItem[1] )}
						className={classes.listItem}>
						<ListItemIcon>{navItem[2]}</ListItemIcon>
						<ListItemText primary={navItem[0]} />
					</ListItem>
				) )}
			</List>
		</div>
	);

	return (
		<div className={classes.root}>
			{[ "left" ].map( ( anchor ) => (
				<React.Fragment key={anchor}>
					<Button onClick={toggleDrawer( anchor, true )}>
						<MenuOpenIcon className={classes.menuButton}/>
					</Button>
					<Drawer anchor={anchor}
						open={state[anchor]}
						onClose={toggleDrawer( anchor, false )}>
						{list( anchor )}
					</Drawer>
				</React.Fragment>
			) )}
		</div>
	);
};

export default withRouter( NavDrawer ) ;

import {
    Card,
    CardContent,
    Fab,
    List,
    ListItem,
    makeStyles,
    Typography,
    IconButton,
    Grid,
} from "@material-ui/core";
import { KeyboardArrowDown, Stop, List as ListIcon } from "@material-ui/icons";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => {
    return {
        root: {
            position: "absolute",
            bottom: 20,
            left: 20,
            borderRadius: 10,
            zIndex: 1,
            [theme.breakpoints.up("md")]: {
                width: 300,
            },
            [theme.breakpoints.down("md")]: {
                width: 250,
                bottom: 5,
                left: 5,
                fontSize: 1,
            },
        },
    };
});

const listItemStyles = makeStyles({
    root: {
        padding: 0,
        margin: 0,
    },
});

function Legends() {
    const legends = useSelector((state) => state.legends);
    const classes = useStyles();
    const listClasses = listItemStyles();
    const [showLegend, setShowLegend] = useState(true);

    const toggleLegend = (e) => {
        setShowLegend(!showLegend);
    };

    return (
        <>
            <Fab
                style={{
                    zIndex: 1,
                    position: "absolute",
                    bottom: 20,
                    left: 20,
                }}
                onClick={toggleLegend}
                size="small"
            >
                <ListIcon />
            </Fab>
            <Card
                classes={classes}
                style={{ display: showLegend ? "block" : "none" }}
            >
                <IconButton onClick={toggleLegend}>
                    <KeyboardArrowDown />
                </IconButton>
                <CardContent>
                    <Grid container columngrid='true'>
                        <Grid item>
                            <Typography>Legends</Typography>
                        </Grid>
                        <Grid item>
                            <List>
                                {legends.map((legend, index) => {
                                    return (
                                        <ListItem
                                            disableGutters
                                            classes={listClasses}
                                            key={index}
                                        >
                                            <Typography
                                                key={index}
                                                style={{ fontSize: "0.75rem" }}
                                            >
                                                <Stop
                                                    style={{
                                                        fill: legend.color,
                                                    }}
                                                />{" "}
                                                {legend.text}
                                            </Typography>
                                        </ListItem>
                                    );
                                })}
                            </List>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </>
    );
}

export default Legends;

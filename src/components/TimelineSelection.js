import { makeStyles, Typography } from "@material-ui/core";
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLegend } from "../actions/legendActions";
import { setSelectedSedacLayer } from "../actions/selectedSedacLayerActions";


const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

function TimelineSelection() {
  const category = useSelector((state) => state.category);
  const [sedacLayerKey, setsedacLayerKey] = useState("");
  const [timelines, setTimelines] = useState([]);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    let timelines = category.timelines ? category.timelines : [];
    
    if (timelines.length) {
        setTimelines(timelines);    
      setsedacLayerKey(timelines[0].key)
      selectYear(timelines[0])
    }
  }, [category]);


  const selectYear = (sedacLayer) => {
    dispatch(setSelectedSedacLayer(sedacLayer.key));
    dispatch(setLegend(sedacLayer.legends))
  };

  return category.timelines ? (
    <div style={{marginTop:20}}>
      <Typography variant="overline" gutterBottom>
        Timeline
      </Typography>
      <ToggleButtonGroup
        value={sedacLayerKey}
        exclusive
      >
        {timelines.map((timeline, index) => {
          return (
            <ToggleButton
              value={timeline.key}
              onClick={(e) => {
                selectYear(timeline);
                setsedacLayerKey(timeline.key);
                
              }}
              
              key={index}
            >
              {timeline.year}
            </ToggleButton>
          );
        })}
      </ToggleButtonGroup>
    </div>
  ) : (
    ""
  );
}

export default TimelineSelection;

import { MenuItem } from "@material-ui/core";
import { FormControl, InputLabel, Select } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSedacLayer } from "../actions/sedacLayerActions";

const sedacLayersList = [
    {
        name: "Population Density",
        key: "population_density",
        purpose:
            "To provide estimates of population density for the years 2000, 2005, 2010, 2015, and 2020, based on counts consistent with national censuses and population registers, as raster data to facilitate data integration.",
        timelines: [
            {
                year: 2000,
                label: "Population Density 2000",
                key: "gpw-v4:gpw-v4-population-density-rev11_2000",
                legends: [
                    { color: "#ddd", text: "No Data" },
                    { color: "#fff2d1", text: "< 1" },
                    { color: "#ffdaa6", text: "1 - 5" },
                    { color: "#fab855", text: "5 - 25" },
                    { color: "#fd8d3c", text: "25 - 250" },
                    { color: "#f03b20", text: "250 - 1,000" },
                    { color: "#bd0026", text: "> 1,000 (persons per sq. km.)" },
                ],
            },
            {
                year: 2005,
                label: "Population Density 2005",
                key: "gpw-v4:gpw-v4-population-density-rev11_2005",
                legends: [
                    { color: "#ddd", text: "No Data" },
                    { color: "#fff2d1", text: "< 1" },
                    { color: "#ffdaa6", text: "1 - 5" },
                    { color: "#fab855", text: "5 - 25" },
                    { color: "#fd8d3c", text: "25 - 250" },
                    { color: "#f03b20", text: "250 - 1,000" },
                    { color: "#bd0026", text: "> 1,000 (persons per sq. km.)" },
                ],
            },
            {
                year: 2010,
                label: "Population Density 2010",
                key: "gpw-v4:gpw-v4-population-density-rev11_2010",
                legends: [
                    { color: "#ddd", text: "No Data" },
                    { color: "#fff2d1", text: "< 1" },
                    { color: "#ffdaa6", text: "1 - 5" },
                    { color: "#fab855", text: "5 - 25" },
                    { color: "#fd8d3c", text: "25 - 250" },
                    { color: "#f03b20", text: "250 - 1,000" },
                    { color: "#bd0026", text: "> 1,000 (persons per sq. km.)" },
                ],
            },
            {
                year: 2015,
                label: "Population Density 2015",
                key: "gpw-v4:gpw-v4-population-density-rev11_2015",
                legends: [
                    { color: "#ddd", text: "No Data" },
                    { color: "#fff2d1", text: "< 1" },
                    { color: "#ffdaa6", text: "1 - 5" },
                    { color: "#fab855", text: "5 - 25" },
                    { color: "#fd8d3c", text: "25 - 250" },
                    { color: "#f03b20", text: "250 - 1,000" },
                    { color: "#bd0026", text: "> 1,000 (persons per sq. km.)" },
                ],
            },
            {
                year: 2020,
                label: "Population Density 2020",
                key: "gpw-v4:gpw-v4-population-density_2020",
                legends: [
                    { color: "#ddd", text: "No Data" },
                    { color: "#fff2d1", text: "< 1" },
                    { color: "#ffdaa6", text: "1 - 5" },
                    { color: "#fab855", text: "5 - 25" },
                    { color: "#fd8d3c", text: "25 - 250" },
                    { color: "#f03b20", text: "250 - 1,000" },
                    { color: "#bd0026", text: "> 1,000 (persons per sq. km.)" },
                ],
            },
        ],
    },

    {
        name: "Population Count",
        key: "population_count",
        purpose:
            "To provide estimates of population count for the years 2000, 2005, 2010, 2015, and 2020, consistent with national censuses and population registers, as raster data to facilitate data integration.",
        timelines: [
            {
                year: 2000,
                label: "Population Count 2000",
                key: "gpw-v4:gpw-v4-population-count-adjusted-to-2015-unwpp-country-totals-rev11_2000",
                legends: [
                    { color: "#fff", text: "No Data" },
                    { color: "#ffffe0", text: "< 1" },
                    { color: "#aacbb8", text: "1 - 5" },
                    { color: "#509892", text: "5 - 25" },
                    { color: "#227096", text: "25 - 250" },
                    { color: "#284285", text: "250 - 1,000" },
                    { color: "#000066", text: "> 1,000 (persons)" },
                ],
            },
            {
                year: 2005,
                label: "Population Count 2005",
                key: "gpw-v4:gpw-v4-population-count-adjusted-to-2015-unwpp-country-totals-rev11_2005",
                legends: [
                    { color: "#fff", text: "No Data" },
                    { color: "#ffffe0", text: "< 1" },
                    { color: "#aacbb8", text: "1 - 5" },
                    { color: "#509892", text: "5 - 25" },
                    { color: "#227096", text: "25 - 250" },
                    { color: "#284285", text: "250 - 1,000" },
                    { color: "#000066", text: "> 1,000 (persons)" },
                ],
            },
            {
                year: 2015,
                label: "Population Count 2015",
                key: "gpw-v4:gpw-v4-population-count-adjusted-to-2015-unwpp-country-totals-rev11_2015",
                legends: [
                    { color: "#fff", text: "No Data" },
                    { color: "#ffffe0", text: "< 1" },
                    { color: "#aacbb8", text: "1 - 5" },
                    { color: "#509892", text: "5 - 25" },
                    { color: "#227096", text: "25 - 250" },
                    { color: "#284285", text: "250 - 1,000" },
                    { color: "#000066", text: "> 1,000 (persons)" },
                ],
            },
            {
                year: 2020,
                label: "Population Count 2020",
                key: "gpw-v4:gpw-v4-population-count-rev11_2020",
                legends: [
                    { color: "#fff", text: "No Data" },
                    { color: "#ffffe0", text: "< 1" },
                    { color: "#aacbb8", text: "1 - 5" },
                    { color: "#509892", text: "5 - 25" },
                    { color: "#227096", text: "25 - 250" },
                    { color: "#284285", text: "250 - 1,000" },
                    { color: "#000066", text: "> 1,000 (persons)" },
                ],
            },
        ],
    },

    {
        name: "Development Threat Index",
        key: "development_threat_index",
        timelines: [
            {
                year: "Index",
                label: "Development Threat Index",
                key: "lulc:lulc-development-threat-index",
                legends: [
                    { color: "#ddd", text: "No Data" },
                    { color: "#fff2d1", text: "< 1" },
                    { color: "#ffdaa6", text: "1 - 5" },
                    { color: "#fab855", text: "5 - 25" },
                    { color: "#fd8d3c", text: "25 - 250" },
                    { color: "#f03b20", text: "250 - 1,000" },
                    { color: "#bd0026", text: "> 1,000 (persons per sq. km." },
                ],
            },
        ],
    },

    {
        name: "Urban Rural Population Land Area Estimates",
        key: "urban_rural_population_land_area_estimates",
        timelines: [
            {
                year: "Index ",
                label: "Urban Rural Population Land Area Estimates",
                key: "lulc:lecz-urban-rural-population-land-area-estimates-v2_urban-rural-zones-10m",
                legends: [
                    { color: "#ddd", text: "No Data" },
                    { color: "#fff2d1", text: "< 1" },
                    { color: "#ffdaa6", text: "1 - 5" },
                    { color: "#fab855", text: "5 - 25" },
                    { color: "#fd8d3c", text: "25 - 250" },
                    { color: "#f03b20", text: "250 - 1,000" },
                    { color: "#bd0026", text: "> 1,000 (persons per sq. km." },
                ],
            },
        ],
    },

    {
        name: "Drought Hazard Frequency Distribution",
        key: "drought_hazard_frequency_distribution",
        timelines: [
            {
                year: "Index",
                label: "Drought Hazard Frequency Distribution",
                key: "ndh:ndh-drought-hazard-frequency-distribution",
                legends: [
                    { color: "#ddd", text: "No Data" },
                    { color: "#fff2d1", text: "< 1" },
                    { color: "#ffdaa6", text: "1 - 5" },
                    { color: "#fab855", text: "5 - 25" },
                    { color: "#fd8d3c", text: "25 - 250" },
                    { color: "#f03b20", text: "250 - 1,000" },
                    { color: "#bd0026", text: "> 1,000 (persons per sq. km." },
                ],
            },
        ],
    },

    {
        name: "Earthquake Frequency Distribution",
        key: "earthquake_hazard_frequency_distribution",
        timelines: [
            {
                year: "Index",
                label: "Earthquake Frequency Distribution",
                key: "ndh:ndh-earthquake-frequency-distribution",
                legends: [
                    { color: "#ddd", text: "No Data" },
                    { color: "#fff2d1", text: "< 1" },
                    { color: "#ffdaa6", text: "1 - 5" },
                    { color: "#fab855", text: "5 - 25" },
                    { color: "#fd8d3c", text: "25 - 250" },
                    { color: "#f03b20", text: "250 - 1,000" },
                    { color: "#bd0026", text: "> 1,000 (persons per sq. km." },
                ],
            },
        ],
    },

    {
        name: "Flood Hazard Frequency Distribution",
        key: "flood_hazard_frequency_distribution",
        timelines: [
            {
                year: "Index",
                label: "Flood Hazard Frequency Distribution",
                key: "ndh:ndh-flood-hazard-frequency-distribution",
                legends: [
                    { color: "#ddd", text: "No Data" },
                    { color: "#fff2d1", text: "< 1" },
                    { color: "#ffdaa6", text: "1 - 5" },
                    { color: "#fab855", text: "5 - 25" },
                    { color: "#fd8d3c", text: "25 - 250" },
                    { color: "#f03b20", text: "250 - 1,000" },
                    { color: "#bd0026", text: "> 1,000 (persons per sq. km." },
                ],
            },
        ],
    },

    {
        name: "Volcano Hazard Frequency Distribution",
        key: "volcano_hazard_frequency_distribution",
        timelines: [
            {
                year: "Index",
                label: "Volcano Hazard Frequency Distribution",
                key: "ndh:ndh-volcano-hazard-frequency-distribution",
                legends: [
                    { color: "#ddd", text: "No Data" },
                    { color: "#fff2d1", text: "< 1" },
                    { color: "#ffdaa6", text: "1 - 5" },
                    { color: "#fab855", text: "5 - 25" },
                    { color: "#fd8d3c", text: "25 - 250" },
                    { color: "#f03b20", text: "250 - 1,000" },
                    { color: "#bd0026", text: "> 1,000 (persons per sq. km." },
                ],
            },
        ],
    },

    {
        name: "Night light",
        key: "night_light",
        timelines: [
            {
                year: "Index",
                label: "Night light",
                key: "sdei:sdei-viirs-dmsp-dlight",
                legends: [
                    { color: "#ddd", text: "No Data" },
                    { color: "#fff2d1", text: "< 1" },
                    { color: "#ffdaa6", text: "1 - 5" },
                    { color: "#fab855", text: "5 - 25" },
                    { color: "#fd8d3c", text: "25 - 250" },
                    { color: "#f03b20", text: "250 - 1,000" },
                    { color: "#bd0026", text: "> 1,000 (persons per sq. km." },
                ],
            },
        ],
    },
];

function SedacLayerSelection() {
    const dispatch = useDispatch();
    const [selectedCategory, setSelectedCategory] = useState('');
    
    return (
        <div style={{marginTop:20}}>
            <FormControl fullWidth>
                <InputLabel id="category">SEDAC Data</InputLabel>
                <Select
                    labelId="category"
                    id="category"
                    value={selectedCategory ? selectedCategory : ""}
                    onChange={(e) => {
                        let selectedCategory = e.target.value;
                        setSelectedCategory(selectedCategory);
                        let sedacLayer = sedacLayersList.find( category => category.key === selectedCategory);
                        dispatch(setSedacLayer(sedacLayer));
                    }}
                >
                    {sedacLayersList.map((category, index) => {
                        return (
                            <MenuItem
                                value={category.key ? category.key : ""}
                                key={index}
                            >
                                {category.name}
                            </MenuItem>
                        );
                    })}
                </Select>
            </FormControl>
        </div>
    );
}

export default SedacLayerSelection;

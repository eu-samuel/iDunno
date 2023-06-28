import React from "react";
import { SettingsWindow } from "./Styles";
import { ColorPicker } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";

export const Settings = (props) => {

    return (
        <SettingsWindow color={props.color.hex}>
            <div className={props.setts ? "on" : "off"}>
                <div className="amount">
            <div className="input">
                <span>Number of cards:</span>
                <input
                value={props.amount}
                onChange={(e) => props.setAmount(e.target.value)}
                type='number'
                />
            </div>
                <p>P.s make a new search to update.</p>
            </div>
            <div className="colors">
                <ColorPicker width={256} height={100} color={props.color} onChange={props.setColor} hideRGB hideHEX hideHSV dark />
            </div>
            </div>
        </SettingsWindow>
    )
}
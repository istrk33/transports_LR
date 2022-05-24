'use strict'

/**
 * search texfield
 * @param {*} data 
 * @param {*} props 
 * @returns 
 */
module.exports = (data, props) => {
    const white = 0xFFFFFFFF;
    const black = 0xFFFFFFFF;
    return {
        type: "container",
        padding: {
            bottom: 1,
            left: 3,
            right: 3,
        },
        child: {
            type: "flex",
            children: [
                {
                    type: "icon",
                    value: props.iconData,
                    color: black,
                    size: 25
                },
                {
                    type: "radio",
                    groupValue: "travelType",
                    value: props.iconData,
                    style: {
                        hovercolor: 0xFFAAAAFD,
                        activeColor: 0xFFFFFFFF,
                        focusColor:0xFF55FF22
                    },
                    onPressed: {
                        action: "radioClick"
                    }
                }
            ]
        }
    }
}
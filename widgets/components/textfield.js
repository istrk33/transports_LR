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
            type: "textfield",
            value: "",
            style: {
                textStyle: {
                    color: black,
                },
                decoration: {
                    icon: {
                        type: "icon",
                        value: props.iconData,
                        color: black,
                        size: 25
                    },
                    focusedBorder: {
                        type: "underline",
                        borderSide: {
                            color: black
                        }
                    },
                    label: {
                        type: "text",
                        value: props.labelValue,
                        style: {
                            color: black
                        }
                    }
                }
            },
            // onChanged: {
            //     action: "searchTextChanged",
            // }
        }
    }
}

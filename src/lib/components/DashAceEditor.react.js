import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";

function onChange(newValue) {
  console.log("change", newValue);
}

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class DashAceEditor extends Component {
    render() {
        const {id, className, value} = this.props;

        return (
            <AceEditor
                mode="java"
                theme="github"
                value={value}
				className={classnames('container__editor', className)}
                onChange={onChange}
                name={id}
            />
        );
    }
}

DashAceEditor.defaultProps = {};

DashAceEditor.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * The value displayed in the input.
     */
    value: PropTypes.string,

    /**
     * Often used with CSS to style elements with common properties.
     */
    className: PropTypes.string,
    /**
     * onValueChange={code => setProps({ value: code })}
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};

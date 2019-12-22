import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import AceEditor from "react-ace";

import 'ace-builds/src-min-noconflict/ext-language_tools';
import 'ace-builds/src-min-noconflict/ext-searchbox';
import 'ace-builds/src-min-noconflict/ext-spellcheck';

import "ace-builds/src-min-noconflict/mode-python";
import "ace-builds/src-min-noconflict/mode-sql";
import "ace-builds/src-min-noconflict/theme-github";
import "ace-builds/src-min-noconflict/theme-monokai";
import "ace-builds/src-min-noconflict/theme-tomorrow";
import "ace-builds/src-min-noconflict/theme-twilight";
import "ace-builds/src-min-noconflict/theme-textmate";

import NormMode from "./NormMode";

/**
 * Dash component wraps up react-ace editor
 * https://github.com/securingsincity/react-ace
 */
export default class DashAceEditor extends Component {

    componentDidMount() {
        if (this.props.mode === 'norm') {
            this.refs.aceEditor.editor.getSession().setMode(new NormMode());
        }
        const autocompleter = this.props.autocompleter;
        if (autocompleter) {
            const langTools = window.ace.acequire("ace/ext/language_tools");
            const rhymeCompleter = {
                getCompletions: function(editor, session, pos, prefix, callback) {
                    if (prefix.length === 0) {
                        callback(null, []);
                        return
                    }
                    fetch(autocompleter + prefix)
                        .then(response => response.json())
                        .then(wordList => {
                            callback(null, wordList);
                        })
                        .catch((error) => {
                            console.error(error)
                        })
                }
            };
            langTools.addCompleter(rhymeCompleter);
        }
    }

    render() {
        const {id, mode, theme, className, value, focus, placeholder, fontSize, showGutter, showPrintMargin,
            highlightActiveLine, cursorStart, wrapEnabled, readOnly, minLines, maxLines,
            enableBasicAutocompletion, enableLiveAutocompletion, enableSnippets, tabSize, debounceChangePeriod,
            editorProps, setOptions, keyboardHandler, commands, annotations, markers, style,
            setProps} = this.props;

        return (
            <AceEditor
                ref="aceEditor"
                mode={mode==='norm'?'text':mode}
                theme={theme}
                value={value}
				className={classnames('container__editor', className)}
                onChange={code => setProps({ value: code })}
                name={id}
                placeholder={placeholder}
                fontSize={fontSize}
                focus={focus}
                showGutter={showGutter}
                showPrintMargin={showPrintMargin}
                highlightActiveLine={highlightActiveLine}
                cursorStart={cursorStart}
                wrapEnabled={wrapEnabled}
                readOnly={readOnly}
                minLines={minLines}
                maxLines={maxLines}
                enableBasicAutocompletion={enableBasicAutocompletion}
                enableLiveAutocompletion={enableLiveAutocompletion}
                enableSnippets={enableSnippets}
                tabSize={tabSize}
                debounceChangePeriod={debounceChangePeriod}
                editorProps={editorProps}
                setOptions={setOptions}
                keyboardHandler={keyboardHandler}
                commands={commands}
                annotations={annotations}
                markers={markers}
                style={style}
            />
        );
    }
}

DashAceEditor.defaultProps = {
    id: 'ace-editor',
    placeholder: 'Type code here ...',
    mode: 'python',
    theme: 'monokai',
    value: '',
    fontSize: 14,
    focus: false,
    showGutter: true,
    showPrintMargin: true,
    highlightActiveLine: true,
    cursorStart: 1,
    wrapEnabled: false,
    readOnly: false,
    enableBasicAutocompletion: false,
    enableLiveAutocompletion: false,
    enableSnippets: false,
    tabSize: 4,
    editorProps: { $blockScrolling: true }
};

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
     * Placeholder text to be displayed when editor is empty
     */
    placeholder: PropTypes.string,

    /**
     * Language for parsing and code highlighting
     */
    mode: PropTypes.string,

    /**
     * Theme to use
     */
    theme: PropTypes.string,

    /**
     * Font size
     */
    fontSize: PropTypes.number,

    /**
     * Focus
     */
    focus: PropTypes.bool,

    /**
     * Show gutter
     */
    showGutter: PropTypes.bool,

    /**
     * Show print margin
     */
    showPrintMargin: PropTypes.bool,

    /**
     * Highlight active line
     */
    highlightActiveLine: PropTypes.bool,

    /**
     * The location of the cursor
     */
    cursorStart: PropTypes.number,

    /**
     * Wrapping lines
     */
    wrapEnabled: PropTypes.bool,

    /**
     * Make the editor read only
     */
    readOnly: PropTypes.bool,

    /**
     * Minimum number of lines to be displayed
     */
    minLines: PropTypes.number,

    /**
     * Maximum number of lines to be displayed
     */
    maxLines: PropTypes.number,

    /**
     * Enable basic autocompletion
     */
    enableBasicAutocompletion: PropTypes.bool,

    /**
     * Enable live autocompletion
     */
    enableLiveAutocompletion: PropTypes.bool,

    /**
     * Custom autocompletion endpoint
     */
    autocompleter: PropTypes.string,

    /**
     * Enable snippets
     */
    enableSnippets: PropTypes.bool,

    /**
     * Tab size
     */
    tabSize: PropTypes.number,

    /**
     * A debounce delay period for the onChange event
     */
    debounceChangePeriod: PropTypes.number,

    /**
     * Properties to apply directly to the Ace editor instance
     */
    editorProps: PropTypes.object,

    /**
     * Options to apply directly to the Ace editor instance
     */
    setOptions: PropTypes.object,

    /**
     * Key binding mode to set, e.g., vim or emacs
     */
    keyboardHandler: PropTypes.string,

    /**
     * New commands to add to the editor
     */
    commands: PropTypes.array,

    /**
     * Annotations to show in the editor, i.e., [{row:0, column:2, type:'error', text: 'some error'}
     */
    annotations: PropTypes.array,

    /**
     * Markers to show in the editor
     */
    markers: PropTypes.array,

    /**
     * camelCased properties
     */
    style: PropTypes.object,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};


import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import AceEditor, { diff as DiffEditor } from "react-ace";

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

import CustomMode from "./CustomPythonMode";
import './diff_editor.css';

/**
 * Dash component wraps up react-ace editor
 * https://github.com/securingsincity/react-ace
 */
export default class DashAceEditor extends Component {

    customizeSplit(split) {
        this.customize(split.getEditor(0));
        this.customize(split.getEditor(1));
    }

    customize(editor) {
        const {autocompleter, syntaxKeywords, syntaxFolds} = this.props;

        if (this.props.mode !== 'python' && this.props.mode !== 'javascript' && this.props.mode !== 'sql') {
            editor.getSession().setMode(new CustomMode(syntaxKeywords, syntaxFolds));
        }

        if (autocompleter) {
            const langTools = window.ace.acequire("ace/ext/language_tools");
            const completer = {
                getCompletions: function(editor, session, pos, prefix, callback) {
                    const line = editor.getValue().split('\n')[pos.row].substring(0, pos.column);

                    fetch(autocompleter + line)
                        .then(response => response.json())
                        .then(wordList => {
                            callback(null, wordList);
                        })
                        .catch((error) => {
                            console.error(error)
                        })
                }
            };
            langTools.setCompleters([completer]);
        }
    }

    increaseFontSize(editor, setFontSize) {
        const currentFontSize = editor.getFontSize();
        editor.setFontSize(currentFontSize + 2);
        setFontSize(currentFontSize + 2);
    }

    decreaseFontSize(editor, setFontSize) {
        const currentFontSize = editor.getFontSize();
        editor.setFontSize(currentFontSize - 2);
        setFontSize(currentFontSize - 2);
    }

    saveAndRun(editor, callback) {
        const code = editor.getValue();
        callback(code)
    }

    render() {
        const {id, mode, theme, className, value, focus, placeholder, fontSize, showGutter, showPrintMargin,
            highlightActiveLine, cursorStart, wrapEnabled, readOnly, minLines, maxLines, width, height,
            enableBasicAutocompletion, enableLiveAutocompletion, enableSnippets, tabSize, debounceChangePeriod,
            editorProps, setOptions, keyboardHandler, commands, annotations, markers, style, orientation,
            setProps} = this.props;

        const defaultCommands = [
            {
                name: 'increaseFontSize',
                bindKey: {win: 'Ctrl-=', mac: 'Command-='},
                exec: () => { this.increaseFontSize(this.refs.aceEditor.editor, fz => setProps({fontSize: fz})) }
            },
            {
                name: 'decreaseFontSize',
                bindKey: {win: 'Ctrl--', mac: 'Command--'},
                exec: () => { this.decreaseFontSize(this.refs.aceEditor.editor, fz => setProps({fontSize: fz})) }
            },
            {
                name: 'saveAndRun',
                bindKey: {win: 'Ctrl-s', mac: 'Command-s'},
                exec: () => { this.saveAndRun(this.refs.aceEditor.editor, code => setProps({ value: code }))}
            }
        ];

        if (typeof(value) === 'object' && value.length > 1) {
            return (
                <DiffEditor
                    ref="aceEditor"
                    mode={(mode !== 'python' && mode !== 'javascript' && mode !== 'sql')? 'python': mode}
                    theme={theme}
                    value={value}
                    className={classnames('container__editor', className)}
                    onLoad={split => this.customizeSplit(split)}
                    name={id}
                    fontSize={fontSize}
                    focus={focus}
                    orientation={orientation}
                    showGutter={showGutter}
                    showPrintMargin={showPrintMargin}
                    highlightActiveLine={highlightActiveLine}
                    cursorStart={cursorStart}
                    wrapEnabled={wrapEnabled}
                    readOnly={readOnly}
                    minLines={minLines}
                    maxLines={maxLines}
                    width={width}
                    height={height}
                    enableBasicAutocompletion={enableBasicAutocompletion}
                    enableLiveAutocompletion={enableLiveAutocompletion}
                    enableSnippets={enableSnippets}
                    tabSize={tabSize}
                    editorProps={editorProps}
                    setOptions={setOptions}
                    style={style}
                />
            );
        }

        return (
            <AceEditor
                ref="aceEditor"
                mode={(mode !== 'python' && mode !== 'javascript' && mode !== 'sql')? 'python': mode}
                theme={theme}
                value={value}
				        className={classnames('container__editor', className)}
                onLoad={editor => this.customize(editor)}
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
                width={width}
                height={height}
                enableBasicAutocompletion={enableBasicAutocompletion}
                enableLiveAutocompletion={enableLiveAutocompletion}
                enableSnippets={enableSnippets}
                tabSize={tabSize}
                debounceChangePeriod={debounceChangePeriod}
                editorProps={editorProps}
                setOptions={setOptions}
                keyboardHandler={keyboardHandler}
                commands={commands?defaultCommands.concat(commands):defaultCommands}
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
    syntaxKeywords: {
        "variable.language": "this|super|self|",
        "support.function": "enumerate|range|pow|sum|abs|max|min|argmax|argmin|len|mean|std|median|all|any|",
        "support.type": "str|int|bool|float|type|",
        "constant.language": "True|False|none|",
        "comment.line": "#",
        "keyword.operator": "and|or|not|in|",
        "keyword.control": "def|as|from|to|import|export|return|for|with|try|catch|except|"
    },
    theme: 'github',
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
    prefixLine: false,
    triggerCaseInsensitive: true,
    width: '1000px',
    height: '1000px',
    orientation: 'below',
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
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),

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
     * Custom language syntax keywords
     */
    syntaxKeywords: PropTypes.object,

    /**
     * Custom language syntax folding characters
     */
    syntaxFolds: PropTypes.string,

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
     * Custom autocompletion prefix line or word
     */
    prefixLine: PropTypes.bool,

    /**
     * Custom autocompletion trigger words
     */
    triggerWords: PropTypes.arrayOf(PropTypes.string),

    /**
     * Custom autocompletion trigger word case insensitive
     */
    triggerCaseInsensitive: PropTypes.bool,

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
     * width, CSS style, e.g., '1000px'
     */
    width: PropTypes.string,

    /**
     * height, CSS style, e.g., '1000px'
     */
    height: PropTypes.string,

    /**
     * orientation of the diff editor, 'beside' or 'below'
     */
    orientation: PropTypes.string,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};


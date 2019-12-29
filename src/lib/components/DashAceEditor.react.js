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

import CustomMode from "./CustomPythonMode";

/**
 * Dash component wraps up react-ace editor
 * https://github.com/securingsincity/react-ace
 */
export default class DashAceEditor extends Component {

    customize(editor) {
        const {autocompleter, prefixLine, triggerWords, triggerCaseInsensitive, syntaxKeywords, syntaxFolds} = this.props;

        if (this.props.mode !== 'python' && this.props.mode !== 'javascript' && this.props.mode !== 'sql') {
            editor.getSession().setMode(new CustomMode(syntaxKeywords, syntaxFolds));
        }

        if (autocompleter) {
            const langTools = window.ace.acequire("ace/ext/language_tools");
            const reg = triggerWords? new RegExp(triggerWords.map(w => {return w + "\\s*$"}).join('|'),
                triggerCaseInsensitive?'i':null) : null;
            const completer = {
                getCompletions: function(editor, session, pos, prefix, callback) {
                    const line = (prefix.length === 0 && prefixLine) ?
                        editor.getValue().split('\n')[pos.row].substring(0, pos.column) : prefix;
                    if (reg === null || reg.test(line)) {
                        fetch(autocompleter + line)
                            .then(response => response.json())
                            .then(wordList => {
                                callback(null, wordList);
                            })
                            .catch((error) => {
                                console.error(error)
                            })
                    }
                    callback(null, []);
                }
            };
            langTools.addCompleter(completer);
        }
    }

    increaseFontSize(ref) {
        const currentFontSize = ref.aceEditor.editor.getFontSize();
        ref.aceEditor.editor.setFontSize(currentFontSize + 1);
    }

    decreaseFontSize(ref) {
        const currentFontSize = ref.aceEditor.editor.getFontSize();
        ref.aceEditor.editor.setFontSize(currentFontSize - 1);
    }

    render() {
        const {id, mode, theme, className, value, focus, placeholder, fontSize, showGutter, showPrintMargin,
            highlightActiveLine, cursorStart, wrapEnabled, readOnly, minLines, maxLines,
            enableBasicAutocompletion, enableLiveAutocompletion, enableSnippets, tabSize, debounceChangePeriod,
            editorProps, setOptions, keyboardHandler, commands, annotations, markers, style,
            setProps} = this.props;

        const fontAdjust = [
            {
                name: 'increaseFontSize',
                bindKey: {win: 'Ctrl-=', mac: 'Command-='},
                exec: () => { this.increaseFontSize(this.refs) }
            },
            {
                name: 'decreaseFontSize',
                bindKey: {win: 'Ctrl--', mac: 'Command--'},
                exec: () => { this.decreaseFontSize(this.refs) }
            }
        ];

        return (
            <AceEditor
                ref="aceEditor"
                mode={(mode !== 'python' && mode !== 'javascript' && mode !== 'sql')? 'python': mode}
                theme={theme}
                value={value}
				        className={classnames('container__editor', className)}
                onChange={code => setProps({ value: code })}
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
                enableBasicAutocompletion={enableBasicAutocompletion}
                enableLiveAutocompletion={enableLiveAutocompletion}
                enableSnippets={enableSnippets}
                tabSize={tabSize}
                debounceChangePeriod={debounceChangePeriod}
                editorProps={editorProps}
                setOptions={setOptions}
                keyboardHandler={keyboardHandler}
                commands={commands?fontAdjust.concat(commands):fontAdjust}
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
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};


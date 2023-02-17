# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class DashAceEditor(Component):
    """A DashAceEditor component.
Dash component wraps up react-ace editor
https://github.com/securingsincity/react-ace

Keyword arguments:

- id (string; default 'ace-editor'):
    The ID used to identify this component in Dash callbacks.

- annotations (list; optional):
    Annotations to show in the editor, i.e., [{row:0, column:2,
    type:'error', text: 'some error'}.

- autocompleter (string; optional):
    Custom autocompletion endpoint.

- className (string; optional):
    Often used with CSS to style elements with common properties.

- commands (list; optional):
    New commands to add to the editor.

- cursorStart (number; default 1):
    The location of the cursor.

- debounceChangePeriod (number; optional):
    A debounce delay period for the onChange event.

- editorProps (dict; default { $blockScrolling: True }):
    Properties to apply directly to the Ace editor instance.

- enableBasicAutocompletion (boolean; default False):
    Enable basic autocompletion.

- enableLiveAutocompletion (boolean; default False):
    Enable live autocompletion.

- enableSnippets (boolean; default False):
    Enable snippets.

- focus (boolean; default False):
    Focus.

- fontSize (number; default 14):
    Font size.

- height (string; default '1000px'):
    height, CSS style, e.g., '1000px'.

- highlightActiveLine (boolean; default True):
    Highlight active line.

- keyboardHandler (string; optional):
    Key binding mode to set, e.g., vim or emacs.

- markers (list; optional):
    Markers to show in the editor.

- maxLines (number; optional):
    Maximum number of lines to be displayed.

- minLines (number; optional):
    Minimum number of lines to be displayed.

- mode (string; default 'python'):
    Language for parsing and code highlighting.

- orientation (string; default 'below'):
    orientation of the diff editor, 'beside' or 'below'.

- placeholder (string; default 'Type code here ...'):
    Placeholder text to be displayed when editor is empty.

- prefixLine (boolean; default False):
    Custom autocompletion prefix line or word.

- readOnly (boolean; default False):
    Make the editor read only.

- setOptions (dict; optional):
    Options to apply directly to the Ace editor instance.

- showGutter (boolean; default True):
    Show gutter.

- showPrintMargin (boolean; default True):
    Show print margin.

- style (dict; optional):
    camelCased properties.

- syntaxFolds (string; optional):
    Custom language syntax folding characters.

- syntaxKeywords (dict; default {    "variable.language": "this|super|self|",    "support.function": "enumerate|range|pow|sum|abs|max|min|argmax|argmin|len|mean|std|median|all|any|",    "support.type": "str|int|bool|float|type|",    "constant.language": "True|False|none|",    "comment.line": "#",    "keyword.operator": "and|or|not|in|",    "keyword.control": "def|as|from|to|import|export|return|for|with|try|catch|except|"}):
    Custom language syntax keywords.

- tabSize (number; default 4):
    Tab size.

- theme (string; default 'github'):
    Theme to use.

- triggerCaseInsensitive (boolean; default True):
    Custom autocompletion trigger word case insensitive.

- triggerWords (list of strings; optional):
    Custom autocompletion trigger words.

- value (string | list of strings; default ''):
    The value displayed in the input.

- width (string; default '1000px'):
    width, CSS style, e.g., '1000px'.

- wrapEnabled (boolean; default False):
    Wrapping lines."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'dash_ace'
    _type = 'DashAceEditor'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, value=Component.UNDEFINED, className=Component.UNDEFINED, placeholder=Component.UNDEFINED, mode=Component.UNDEFINED, syntaxKeywords=Component.UNDEFINED, syntaxFolds=Component.UNDEFINED, theme=Component.UNDEFINED, fontSize=Component.UNDEFINED, focus=Component.UNDEFINED, showGutter=Component.UNDEFINED, showPrintMargin=Component.UNDEFINED, highlightActiveLine=Component.UNDEFINED, cursorStart=Component.UNDEFINED, wrapEnabled=Component.UNDEFINED, readOnly=Component.UNDEFINED, minLines=Component.UNDEFINED, maxLines=Component.UNDEFINED, enableBasicAutocompletion=Component.UNDEFINED, enableLiveAutocompletion=Component.UNDEFINED, autocompleter=Component.UNDEFINED, prefixLine=Component.UNDEFINED, triggerWords=Component.UNDEFINED, triggerCaseInsensitive=Component.UNDEFINED, enableSnippets=Component.UNDEFINED, tabSize=Component.UNDEFINED, debounceChangePeriod=Component.UNDEFINED, editorProps=Component.UNDEFINED, setOptions=Component.UNDEFINED, keyboardHandler=Component.UNDEFINED, commands=Component.UNDEFINED, annotations=Component.UNDEFINED, markers=Component.UNDEFINED, style=Component.UNDEFINED, width=Component.UNDEFINED, height=Component.UNDEFINED, orientation=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'annotations', 'autocompleter', 'className', 'commands', 'cursorStart', 'debounceChangePeriod', 'editorProps', 'enableBasicAutocompletion', 'enableLiveAutocompletion', 'enableSnippets', 'focus', 'fontSize', 'height', 'highlightActiveLine', 'keyboardHandler', 'markers', 'maxLines', 'minLines', 'mode', 'orientation', 'placeholder', 'prefixLine', 'readOnly', 'setOptions', 'showGutter', 'showPrintMargin', 'style', 'syntaxFolds', 'syntaxKeywords', 'tabSize', 'theme', 'triggerCaseInsensitive', 'triggerWords', 'value', 'width', 'wrapEnabled']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'annotations', 'autocompleter', 'className', 'commands', 'cursorStart', 'debounceChangePeriod', 'editorProps', 'enableBasicAutocompletion', 'enableLiveAutocompletion', 'enableSnippets', 'focus', 'fontSize', 'height', 'highlightActiveLine', 'keyboardHandler', 'markers', 'maxLines', 'minLines', 'mode', 'orientation', 'placeholder', 'prefixLine', 'readOnly', 'setOptions', 'showGutter', 'showPrintMargin', 'style', 'syntaxFolds', 'syntaxKeywords', 'tabSize', 'theme', 'triggerCaseInsensitive', 'triggerWords', 'value', 'width', 'wrapEnabled']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(DashAceEditor, self).__init__(**args)

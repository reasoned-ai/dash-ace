# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class DashAceEditor(Component):
    """A DashAceEditor component.
Dash component wraps up react-ace editor
https://github.com/securingsincity/react-ace

Keyword arguments:
- id (string; optional): The ID used to identify this component in Dash callbacks.
- value (string | list; optional): The value displayed in the input.
- className (string; optional): Often used with CSS to style elements with common properties.
- placeholder (string; optional): Placeholder text to be displayed when editor is empty
- mode (string; optional): Language for parsing and code highlighting
- syntaxKeywords (dict; optional): Custom language syntax keywords
- syntaxFolds (string; optional): Custom language syntax folding characters
- theme (string; optional): Theme to use
- fontSize (number; optional): Font size
- focus (boolean; optional): Focus
- showGutter (boolean; optional): Show gutter
- showPrintMargin (boolean; optional): Show print margin
- highlightActiveLine (boolean; optional): Highlight active line
- cursorStart (number; optional): The location of the cursor
- wrapEnabled (boolean; optional): Wrapping lines
- readOnly (boolean; optional): Make the editor read only
- minLines (number; optional): Minimum number of lines to be displayed
- maxLines (number; optional): Maximum number of lines to be displayed
- enableBasicAutocompletion (boolean; optional): Enable basic autocompletion
- enableLiveAutocompletion (boolean; optional): Enable live autocompletion
- autocompleter (string; optional): Custom autocompletion endpoint
- prefixLine (boolean; optional): Custom autocompletion prefix line or word
- triggerWords (list; optional): Custom autocompletion trigger words
- triggerCaseInsensitive (boolean; optional): Custom autocompletion trigger word case insensitive
- enableSnippets (boolean; optional): Enable snippets
- tabSize (number; optional): Tab size
- debounceChangePeriod (number; optional): A debounce delay period for the onChange event
- editorProps (dict; optional): Properties to apply directly to the Ace editor instance
- setOptions (dict; optional): Options to apply directly to the Ace editor instance
- keyboardHandler (string; optional): Key binding mode to set, e.g., vim or emacs
- commands (list; optional): New commands to add to the editor
- annotations (list; optional): Annotations to show in the editor, i.e., [{row:0, column:2, type:'error', text: 'some error'}
- markers (list; optional): Markers to show in the editor
- style (dict; optional): camelCased properties
- width (string; optional): width, CSS style, e.g., '1000px'
- height (string; optional): height, CSS style, e.g., '1000px'
- orientation (string; optional): orientation of the diff editor, 'beside' or 'below'
- persistence (boolean | string | number; optional): Used to allow user interactions in this component to be persisted when
the component - or the page - is refreshed. If `persisted` is truthy and
hasn't changed from its previous value, a `value` that the user has
changed while using the app will keep that change, as long as
the new `value` also matches what was given originally.
Used in conjunction with `persistence_type`.
- persisted_props (list; optional): Properties whose user interactions will persist after refreshing the
component or the page. Since only `value` is allowed this prop can
normally be ignored.
- persistence_type (a value equal to: 'local', 'session', 'memory'; optional): Where persisted user changes will be stored:
memory: only kept in memory, reset on page refresh.
local: window.localStorage, data is kept after the browser quit.
session: window.sessionStorage, data is cleared once the browser quit.

Available events: """
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, value=Component.UNDEFINED, className=Component.UNDEFINED, placeholder=Component.UNDEFINED, mode=Component.UNDEFINED, syntaxKeywords=Component.UNDEFINED, syntaxFolds=Component.UNDEFINED, theme=Component.UNDEFINED, fontSize=Component.UNDEFINED, focus=Component.UNDEFINED, showGutter=Component.UNDEFINED, showPrintMargin=Component.UNDEFINED, highlightActiveLine=Component.UNDEFINED, cursorStart=Component.UNDEFINED, wrapEnabled=Component.UNDEFINED, readOnly=Component.UNDEFINED, minLines=Component.UNDEFINED, maxLines=Component.UNDEFINED, enableBasicAutocompletion=Component.UNDEFINED, enableLiveAutocompletion=Component.UNDEFINED, autocompleter=Component.UNDEFINED, prefixLine=Component.UNDEFINED, triggerWords=Component.UNDEFINED, triggerCaseInsensitive=Component.UNDEFINED, enableSnippets=Component.UNDEFINED, tabSize=Component.UNDEFINED, debounceChangePeriod=Component.UNDEFINED, editorProps=Component.UNDEFINED, setOptions=Component.UNDEFINED, keyboardHandler=Component.UNDEFINED, commands=Component.UNDEFINED, annotations=Component.UNDEFINED, markers=Component.UNDEFINED, style=Component.UNDEFINED, width=Component.UNDEFINED, height=Component.UNDEFINED, orientation=Component.UNDEFINED, persistence=Component.UNDEFINED, persisted_props=Component.UNDEFINED, persistence_type=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'value', 'className', 'placeholder', 'mode', 'syntaxKeywords', 'syntaxFolds', 'theme', 'fontSize', 'focus', 'showGutter', 'showPrintMargin', 'highlightActiveLine', 'cursorStart', 'wrapEnabled', 'readOnly', 'minLines', 'maxLines', 'enableBasicAutocompletion', 'enableLiveAutocompletion', 'autocompleter', 'prefixLine', 'triggerWords', 'triggerCaseInsensitive', 'enableSnippets', 'tabSize', 'debounceChangePeriod', 'editorProps', 'setOptions', 'keyboardHandler', 'commands', 'annotations', 'markers', 'style', 'width', 'height', 'orientation', 'persistence', 'persisted_props', 'persistence_type']
        self._type = 'DashAceEditor'
        self._namespace = 'dash_ace'
        self._valid_wildcard_attributes =            []
        self.available_events = []
        self.available_properties = ['id', 'value', 'className', 'placeholder', 'mode', 'syntaxKeywords', 'syntaxFolds', 'theme', 'fontSize', 'focus', 'showGutter', 'showPrintMargin', 'highlightActiveLine', 'cursorStart', 'wrapEnabled', 'readOnly', 'minLines', 'maxLines', 'enableBasicAutocompletion', 'enableLiveAutocompletion', 'autocompleter', 'prefixLine', 'triggerWords', 'triggerCaseInsensitive', 'enableSnippets', 'tabSize', 'debounceChangePeriod', 'editorProps', 'setOptions', 'keyboardHandler', 'commands', 'annotations', 'markers', 'style', 'width', 'height', 'orientation', 'persistence', 'persisted_props', 'persistence_type']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(DashAceEditor, self).__init__(**args)

    def __repr__(self):
        if(any(getattr(self, c, None) is not None
               for c in self._prop_names
               if c is not self._prop_names[0])
           or any(getattr(self, c, None) is not None
                  for c in self.__dict__.keys()
                  if any(c.startswith(wc_attr)
                  for wc_attr in self._valid_wildcard_attributes))):
            props_string = ', '.join([c+'='+repr(getattr(self, c, None))
                                      for c in self._prop_names
                                      if getattr(self, c, None) is not None])
            wilds_string = ', '.join([c+'='+repr(getattr(self, c, None))
                                      for c in self.__dict__.keys()
                                      if any([c.startswith(wc_attr)
                                      for wc_attr in
                                      self._valid_wildcard_attributes])])
            return ('DashAceEditor(' + props_string +
                   (', ' + wilds_string if wilds_string != '' else '') + ')')
        else:
            return (
                'DashAceEditor(' +
                repr(getattr(self, self._prop_names[0], None)) + ')')

% Auto-generated: do not edit by hand
\name{dashAceEditor}

\alias{dashAceEditor}

\title{DashAceEditor component}

\description{
Dash component wraps up react-ace editor https://github.com/securingsincity/react-ace
}

\usage{
dashAceEditor(id=NULL, value=NULL, className=NULL, placeholder=NULL, mode=NULL,
syntaxKeywords=NULL, syntaxFolds=NULL, theme=NULL, fontSize=NULL, focus=NULL,
showGutter=NULL, showPrintMargin=NULL, highlightActiveLine=NULL,
cursorStart=NULL, wrapEnabled=NULL, readOnly=NULL, minLines=NULL, maxLines=NULL,
enableBasicAutocompletion=NULL, enableLiveAutocompletion=NULL,
autocompleter=NULL, prefixLine=NULL, triggerWords=NULL,
triggerCaseInsensitive=NULL, enableSnippets=NULL, tabSize=NULL,
debounceChangePeriod=NULL, editorProps=NULL, setOptions=NULL,
keyboardHandler=NULL, commands=NULL, annotations=NULL, markers=NULL, style=NULL,
width=NULL, height=NULL, orientation=NULL, persistence=NULL,
persisted_props=NULL, persistence_type=NULL)
}

\arguments{
\item{id}{Character. The ID used to identify this component in Dash callbacks.}

\item{value}{Character | list of characters. The value displayed in the input.}

\item{className}{Character. Often used with CSS to style elements with common properties.}

\item{placeholder}{Character. Placeholder text to be displayed when editor is empty}

\item{mode}{Character. Language for parsing and code highlighting}

\item{syntaxKeywords}{Named list. Custom language syntax keywords}

\item{syntaxFolds}{Character. Custom language syntax folding characters}

\item{theme}{Character. Theme to use}

\item{fontSize}{Numeric. Font size}

\item{focus}{Logical. Focus}

\item{showGutter}{Logical. Show gutter}

\item{showPrintMargin}{Logical. Show print margin}

\item{highlightActiveLine}{Logical. Highlight active line}

\item{cursorStart}{Numeric. The location of the cursor}

\item{wrapEnabled}{Logical. Wrapping lines}

\item{readOnly}{Logical. Make the editor read only}

\item{minLines}{Numeric. Minimum number of lines to be displayed}

\item{maxLines}{Numeric. Maximum number of lines to be displayed}

\item{enableBasicAutocompletion}{Logical. Enable basic autocompletion}

\item{enableLiveAutocompletion}{Logical. Enable live autocompletion}

\item{autocompleter}{Character. Custom autocompletion endpoint}

\item{prefixLine}{Logical. Custom autocompletion prefix line or word}

\item{triggerWords}{List of characters. Custom autocompletion trigger words}

\item{triggerCaseInsensitive}{Logical. Custom autocompletion trigger word case insensitive}

\item{enableSnippets}{Logical. Enable snippets}

\item{tabSize}{Numeric. Tab size}

\item{debounceChangePeriod}{Numeric. A debounce delay period for the onChange event}

\item{editorProps}{Named list. Properties to apply directly to the Ace editor instance}

\item{setOptions}{Named list. Options to apply directly to the Ace editor instance}

\item{keyboardHandler}{Character. Key binding mode to set, e.g., vim or emacs}

\item{commands}{Unnamed list. New commands to add to the editor}

\item{annotations}{Unnamed list. Annotations to show in the editor, i.e., [{row:0, column:2, type:'error', text: 'some error'}}

\item{markers}{Unnamed list. Markers to show in the editor}

\item{style}{Named list. camelCased properties}

\item{width}{Character. width, CSS style, e.g., '1000px'}

\item{height}{Character. height, CSS style, e.g., '1000px'}

\item{orientation}{Character. orientation of the diff editor, 'beside' or 'below'}

\item{persistence}{Logical | character | numeric. Used to allow user interactions in this component to be persisted when
the component - or the page - is refreshed. If `persisted` is truthy and
hasn't changed from its previous value, a `value` that the user has
changed while using the app will keep that change, as long as
the new `value` also matches what was given originally.
Used in conjunction with `persistence_type`.}

\item{persisted_props}{List of a value equal to: 'value's. Properties whose user interactions will persist after refreshing the
component or the page. Since only `value` is allowed this prop can
normally be ignored.}

\item{persistence_type}{A value equal to: 'local', 'session', 'memory'. Where persisted user changes will be stored:
memory: only kept in memory, reset on page refresh.
local: window.localStorage, data is kept after the browser quit.
session: window.sessionStorage, data is cleared once the browser quit.}
}

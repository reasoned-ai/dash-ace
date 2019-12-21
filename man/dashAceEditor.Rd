% Auto-generated: do not edit by hand
\name{dashAceEditor}

\alias{dashAceEditor}

\title{DashAceEditor component}

\description{
Dash component wraps up react-ace editor https://github.com/securingsincity/react-ace
}

\usage{
dashAceEditor(id=NULL, value=NULL, className=NULL, placeholder=NULL, mode=NULL, theme=NULL,
fontSize=NULL, showGutter=NULL, showPrintMargin=NULL, highlightActiveLine=NULL,
cursorStart=NULL, wrapEnabled=NULL, readOnly=NULL, minLines=NULL, maxLines=NULL,
enableBasicAutocompletion=NULL, enableLiveAutocompletion=NULL,
enableSnippets=NULL, tabSize=NULL, debounceChangePeriod=NULL, editorProps=NULL,
setOptions=NULL, keyboardHandler=NULL, commands=NULL, annotations=NULL,
markers=NULL, style=NULL)
}

\arguments{
\item{id}{Character. The ID used to identify this component in Dash callbacks.}

\item{value}{Character. The value displayed in the input.}

\item{className}{Character. Often used with CSS to style elements with common properties.}

\item{placeholder}{Character. Placeholder text to be displayed when editor is empty}

\item{mode}{Character. Language for parsing and code highlighting}

\item{theme}{Character. Theme to use}

\item{fontSize}{Numeric. Font size}

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
}

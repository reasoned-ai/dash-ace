% Auto-generated: do not edit by hand
\name{dashAceEditor}

\alias{dashAceEditor}

\title{DashAceEditor component}

\description{
Dash component wraps up react-ace editor https://github.com/securingsincity/react-ace
}

\usage{
dashAceEditor(id=NULL, annotations=NULL, autocompleter=NULL,
className=NULL, commands=NULL, cursorStart=NULL,
debounceChangePeriod=NULL, editorProps=NULL,
enableBasicAutocompletion=NULL,
enableLiveAutocompletion=NULL, enableSnippets=NULL,
focus=NULL, fontSize=NULL, height=NULL,
highlightActiveLine=NULL, keyboardHandler=NULL,
markers=NULL, maxLines=NULL, minLines=NULL, mode=NULL,
orientation=NULL, placeholder=NULL, prefixLine=NULL,
readOnly=NULL, setOptions=NULL, showGutter=NULL,
showPrintMargin=NULL, style=NULL, syntaxFolds=NULL,
syntaxKeywords=NULL, tabSize=NULL, theme=NULL,
triggerCaseInsensitive=NULL, triggerWords=NULL, value=NULL,
width=NULL, wrapEnabled=NULL)
}

\arguments{
\item{id}{Character. The ID used to identify this component in Dash callbacks.}

\item{annotations}{Unnamed list. Annotations to show in the editor, i.e., [{row:0, column:2, type:'error', text: 'some error'}}

\item{autocompleter}{Character. Custom autocompletion endpoint}

\item{className}{Character. Often used with CSS to style elements with common properties.}

\item{commands}{Unnamed list. New commands to add to the editor}

\item{cursorStart}{Numeric. The location of the cursor}

\item{debounceChangePeriod}{Numeric. A debounce delay period for the onChange event}

\item{editorProps}{Named list. Properties to apply directly to the Ace editor instance}

\item{enableBasicAutocompletion}{Logical. Enable basic autocompletion}

\item{enableLiveAutocompletion}{Logical. Enable live autocompletion}

\item{enableSnippets}{Logical. Enable snippets}

\item{focus}{Logical. Focus}

\item{fontSize}{Numeric. Font size}

\item{height}{Character. height, CSS style, e.g., '1000px'}

\item{highlightActiveLine}{Logical. Highlight active line}

\item{keyboardHandler}{Character. Key binding mode to set, e.g., vim or emacs}

\item{markers}{Unnamed list. Markers to show in the editor}

\item{maxLines}{Numeric. Maximum number of lines to be displayed}

\item{minLines}{Numeric. Minimum number of lines to be displayed}

\item{mode}{Character. Language for parsing and code highlighting}

\item{orientation}{Character. orientation of the diff editor, 'beside' or 'below'}

\item{placeholder}{Character. Placeholder text to be displayed when editor is empty}

\item{prefixLine}{Logical. Custom autocompletion prefix line or word}

\item{readOnly}{Logical. Make the editor read only}

\item{setOptions}{Named list. Options to apply directly to the Ace editor instance}

\item{showGutter}{Logical. Show gutter}

\item{showPrintMargin}{Logical. Show print margin}

\item{style}{Named list. camelCased properties}

\item{syntaxFolds}{Character. Custom language syntax folding characters}

\item{syntaxKeywords}{Named list. Custom language syntax keywords}

\item{tabSize}{Numeric. Tab size}

\item{theme}{Character. Theme to use}

\item{triggerCaseInsensitive}{Logical. Custom autocompletion trigger word case insensitive}

\item{triggerWords}{List of characters. Custom autocompletion trigger words}

\item{value}{Character | list of characters. The value displayed in the input.}

\item{width}{Character. width, CSS style, e.g., '1000px'}

\item{wrapEnabled}{Logical. Wrapping lines}
}

\value{named list of JSON elements corresponding to React.js properties and their values}


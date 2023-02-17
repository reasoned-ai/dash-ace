# AUTO GENERATED FILE - DO NOT EDIT

#' @export
dashAceEditor <- function(id=NULL, annotations=NULL, autocompleter=NULL, className=NULL, commands=NULL, cursorStart=NULL, debounceChangePeriod=NULL, editorProps=NULL, enableBasicAutocompletion=NULL, enableLiveAutocompletion=NULL, enableSnippets=NULL, focus=NULL, fontSize=NULL, height=NULL, highlightActiveLine=NULL, keyboardHandler=NULL, markers=NULL, maxLines=NULL, minLines=NULL, mode=NULL, orientation=NULL, placeholder=NULL, prefixLine=NULL, readOnly=NULL, setOptions=NULL, showGutter=NULL, showPrintMargin=NULL, style=NULL, syntaxFolds=NULL, syntaxKeywords=NULL, tabSize=NULL, theme=NULL, triggerCaseInsensitive=NULL, triggerWords=NULL, value=NULL, width=NULL, wrapEnabled=NULL) {
    
    props <- list(id=id, annotations=annotations, autocompleter=autocompleter, className=className, commands=commands, cursorStart=cursorStart, debounceChangePeriod=debounceChangePeriod, editorProps=editorProps, enableBasicAutocompletion=enableBasicAutocompletion, enableLiveAutocompletion=enableLiveAutocompletion, enableSnippets=enableSnippets, focus=focus, fontSize=fontSize, height=height, highlightActiveLine=highlightActiveLine, keyboardHandler=keyboardHandler, markers=markers, maxLines=maxLines, minLines=minLines, mode=mode, orientation=orientation, placeholder=placeholder, prefixLine=prefixLine, readOnly=readOnly, setOptions=setOptions, showGutter=showGutter, showPrintMargin=showPrintMargin, style=style, syntaxFolds=syntaxFolds, syntaxKeywords=syntaxKeywords, tabSize=tabSize, theme=theme, triggerCaseInsensitive=triggerCaseInsensitive, triggerWords=triggerWords, value=value, width=width, wrapEnabled=wrapEnabled)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DashAceEditor',
        namespace = 'dash_ace',
        propNames = c('id', 'annotations', 'autocompleter', 'className', 'commands', 'cursorStart', 'debounceChangePeriod', 'editorProps', 'enableBasicAutocompletion', 'enableLiveAutocompletion', 'enableSnippets', 'focus', 'fontSize', 'height', 'highlightActiveLine', 'keyboardHandler', 'markers', 'maxLines', 'minLines', 'mode', 'orientation', 'placeholder', 'prefixLine', 'readOnly', 'setOptions', 'showGutter', 'showPrintMargin', 'style', 'syntaxFolds', 'syntaxKeywords', 'tabSize', 'theme', 'triggerCaseInsensitive', 'triggerWords', 'value', 'width', 'wrapEnabled'),
        package = 'dashAce'
        )

    structure(component, class = c('dash_component', 'list'))
}

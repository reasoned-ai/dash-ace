# AUTO GENERATED FILE - DO NOT EDIT

dashAceEditor <- function(id=NULL, value=NULL, className=NULL, placeholder=NULL, mode=NULL, theme=NULL, fontSize=NULL, showGutter=NULL, showPrintMargin=NULL, highlightActiveLine=NULL, cursorStart=NULL, wrapEnabled=NULL, readOnly=NULL, minLines=NULL, maxLines=NULL, enableBasicAutocompletion=NULL, enableLiveAutocompletion=NULL, enableSnippets=NULL, tabSize=NULL, debounceChangePeriod=NULL, editorProps=NULL, setOptions=NULL, keyboardHandler=NULL, commands=NULL, annotations=NULL, markers=NULL, style=NULL) {
    
    props <- list(id=id, value=value, className=className, placeholder=placeholder, mode=mode, theme=theme, fontSize=fontSize, showGutter=showGutter, showPrintMargin=showPrintMargin, highlightActiveLine=highlightActiveLine, cursorStart=cursorStart, wrapEnabled=wrapEnabled, readOnly=readOnly, minLines=minLines, maxLines=maxLines, enableBasicAutocompletion=enableBasicAutocompletion, enableLiveAutocompletion=enableLiveAutocompletion, enableSnippets=enableSnippets, tabSize=tabSize, debounceChangePeriod=debounceChangePeriod, editorProps=editorProps, setOptions=setOptions, keyboardHandler=keyboardHandler, commands=commands, annotations=annotations, markers=markers, style=style)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DashAceEditor',
        namespace = 'dash_ace',
        propNames = c('id', 'value', 'className', 'placeholder', 'mode', 'theme', 'fontSize', 'showGutter', 'showPrintMargin', 'highlightActiveLine', 'cursorStart', 'wrapEnabled', 'readOnly', 'minLines', 'maxLines', 'enableBasicAutocompletion', 'enableLiveAutocompletion', 'enableSnippets', 'tabSize', 'debounceChangePeriod', 'editorProps', 'setOptions', 'keyboardHandler', 'commands', 'annotations', 'markers', 'style'),
        package = 'dashAce'
        )

    structure(component, class = c('dash_component', 'list'))
}

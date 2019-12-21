# AUTO GENERATED FILE - DO NOT EDIT

dashAceEditor <- function(id=NULL, value=NULL, className=NULL) {
    
    props <- list(id=id, value=value, className=className)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DashAceEditor',
        namespace = 'dash_ace',
        propNames = c('id', 'value', 'className'),
        package = 'dashAce'
        )

    structure(component, class = c('dash_component', 'list'))
}

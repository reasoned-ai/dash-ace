import dash
import dash_ace
import dash_html_components as html
from dash.dependencies import Input, Output
import flask
from flask import request, jsonify
from flask_cors import CORS

server = flask.Flask(__name__)
CORS(server)

app = dash.Dash(__name__,
                server=server,
                routes_pathname_prefix='/dash/'
                )

syntaxKeywords = {
    "variable.language": "this|that|super|self|sub|",
    "support.function": "enumerate|range|pow|sum|abs|max|min|argmax|argmin|len|mean|std|median|all|any|",
    "support.type": "String|Integer|Bool|Float|Image|UUID|Time|DateTime|Type|",
    "storage.modifier": "parameter|atomic|primary|optional|id|time|asc|desc|",
    "constant.language": "true|false|none|na|",
    "keyword.operator": "and|or|not|except|unless|imply|in|",
    "keyword.control": "as|from|to|import|export|return|for|exist|with|"
}

syntaxFolds = "\\:="

ace_editor = dash_ace.DashAceEditor(
        id='demo-editor',
        value='test(a: Integer) -> String := \n    return f"value is {a}"',
        theme='github',
        mode='norm',
        tabSize=2,
        syntaxKeywords=syntaxKeywords,
        syntaxFolds=syntaxFolds,
        enableBasicAutocompletion=True,
        enableLiveAutocompletion=True,
        autocompleter='/autocompleter?prefix=',
        prefixLine=True,
        triggerWords=[':', '\\.', '::'],
        placeholder='Norm code ...',
    )

app.layout = html.Div([
    html.Button('Compare', id='diff-btn'),
    ace_editor,
    html.Div(id='output')
])


@app.callback(
    Output('output', 'children'),
    [Input("demo-editor", "value")]
)
def value_change(code):
    return code


@app.callback(
    [Output(component_id='demo-editor', component_property='value'),
     Output(component_id='diff-btn', component_property='children')],
    [Input('diff-btn', 'n_clicks')]
)
def update_output_editor(n_clicks):
    if n_clicks is None:
        n_clicks = 0
    if n_clicks % 2 == 0:
        return ['test(a: Integer) -> String := \n    return f"value is {a}"',
                'test(a: Integer) -> String := return f"value is {a}"'], 'Single'
    else:
        return 'test(a: Integer) -> String := \n    return f"value is {a}"', 'Compare'


@server.route('/autocompleter', methods=['GET'])
def autocompleter():
    server.logger.info('receiving auto completing request with prefix: ' + request.args.get('prefix'))
    return jsonify([{"name": "Completed", "value": "Completed", "score": 300, "meta": "test"}])


if __name__ == '__main__':
    app.run_server(debug=True)

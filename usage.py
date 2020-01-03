import dash
import dash_ace
import dash_html_components as html
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

app.layout = html.Div([
    dash_ace.DashAceEditor(
        id='input',
        value='test(a: Integer) -> String := \n'
              '    return f"value is {a}"',
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
        placeholder='Norm code ...'
    ),
    html.Div(id='output')
])


@server.route('/autocompleter', methods=['GET'])
def autocompleter():
    server.logger.info('receiving auto completing request with prefix: ' + request.args.get('prefix'))
    return jsonify([{"name": "Completed", "value": "Completed", "score": 300, "meta": "test"}])


if __name__ == '__main__':
    app.run_server(debug=True)

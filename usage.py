import dash_ace
import dash
from dash.dependencies import Input, Output
import dash_html_components as html

app = dash.Dash(__name__)

app.layout = html.Div([
    dash_ace.DashAceEditor(
        id='input',
        value='test(a: integer) -> string := \n'
              '    return f"value is {a}"',
        theme='tomorrow',
        mode='norm',
        enableBasicAutocompletion=True,
        enableLiveAutocompletion=True,
        placeholder='Norm code ...'
    ),
    html.Div(id='output')
])


@app.callback(Output('output', 'children'), [Input('input', 'value')])
def display_output(value):
    return 'You have entered {}'.format(value)


if __name__ == '__main__':
    app.run_server(debug=True)

import dash_ace
import dash
from dash.dependencies import Input, Output
import dash_html_components as html

app = dash.Dash(__name__)

app.layout = html.Div([
    dash_ace.DashAceEditor(
        id='input',
        value='def test(a: int) -> str:\n'
              '    return f"value is {a}"',
        theme='github',
        mode='python',
        placeholder='Python code ...'
    ),
    html.Div(id='output')
])


@app.callback(Output('output', 'children'), [Input('input', 'value')])
def display_output(value):
    return 'You have entered {}'.format(value)


if __name__ == '__main__':
    app.run_server(debug=True)

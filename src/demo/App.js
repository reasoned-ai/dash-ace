/* eslint no-magic-numbers: 0 */
import React, {Component} from 'react';

import { DashAceEditor } from '../lib';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ['# test this example', '# test that example'],
            mode: 'python',
            theme: 'github',
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
        };
        this.setProps = this.setProps.bind(this);
    }

    setProps(newProps) {
        this.setState(newProps);
    }

    render() {
        return (
            <div>
                <DashAceEditor
                    setProps={this.setProps}
                    {...this.state}
                />
            </div>
        )
    }
}

export default App;

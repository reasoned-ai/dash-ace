/* eslint no-magic-numbers: 0 */
import React, {Component} from 'react';

import { DashAceEditor } from '../lib';

class App extends Component {

    constructor() {
        super();
        this.state = {
            value: '',
            mode: 'norm',
            theme: 'tomorrow',
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            autocompleter: 'http://127.0.0.1:8050/autocompleter?prefix='
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

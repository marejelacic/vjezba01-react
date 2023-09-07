import React, { Component } from 'react';
import functionCom from './functionCom';
class classCom extends Component {
    render() {
        return (
            <div>
                Komponenta definirana klasom.
                <functionCom />
            </div>
        );
    }
}

export default classCom;
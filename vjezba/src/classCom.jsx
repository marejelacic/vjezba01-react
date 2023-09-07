import React, { Component } from 'react';
import FunctionCom from './FunctionCom';
class ClassCom extends Component {
    render() {
        return (
            <div>
                Komponenta definirana klasom.
                <FunctionCom />
            </div>
        );
    }
}

export default ClassCom;
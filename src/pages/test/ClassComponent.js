import React from 'react'

class ClassComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'ClassComponent'
        }
        this.tickI = this.tickI.bind(this);
    }

    tickI() {
        this.setState(state => ({
            name: 'anc'
        }))
    }

    tick = () => {
        this.setState(state => ({
            name: 'anc'
        }))
    }

    render() {
        console.log(this)
        const { name } = this.state
        return <div className="ClassComponent" id="ClassComponent" onClick={this.tick}>{name}</div>
    }
}

export default ClassComponent;
import React from 'react'
import axios from 'axios'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from '../common/widget/valueBox'
import Row from '../common/layout/row'

const BASE_URL = 'http://localhost:3003/api'

class Dashboard2 extends React.Component {
    constructor(props){
        super(props)
        this.state = { credit: 0, debit: 0}
    }

    componentWillMount(){
        axios.get(`${BASE_URL}/billingCycles/summary`)
            .then(resp => this.setState(resp.data))
    }

    render(){
        const { credit, debit } = this.state
        return(
            <div>
                <ContentHeader title='Dashboard' small='Version 2.0' />
                <Content>
                    <Row>
                        <ValueBox cols='12 4' color='green' icon='bank'
                            value={`R$ ${credit}`} text='Total Credits' />
                        <ValueBox cols='12 4' color='red' icon='credit-card'
                            value={`R$ ${debit}`} text='Total Debits' />
                        <ValueBox cols='12 4' color='blue' icon='money'
                            value={`R$ ${credit - debit}`} text='Consolidated value' />
                    </Row>
                </Content>
            </div>
        )
    }
}

export default Dashboard2;
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getSummary } from './dashboardActions'
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from '../common/widget/valueBox'
import Row from '../common/layout/row'



class Dashboard extends React.Component {
    
    componentWillMount(){
        this.props.getSummary()
    }

    render(){
        const { credit, debit } = this.props.summary
        return(
            <div>
                <ContentHeader title='Dashboard' small='Version 1.0' />
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

const mapStateToProps = state => ({
    summary : state.dashboard.summary 
})

const mapDispatchToProps = dispatch => bindActionCreators({getSummary}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
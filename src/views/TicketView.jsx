import React from 'react'
import Ticket from '../containers/Ticket'

const TicketView = ({ history }) => {
    
    return (
        <div className="row">
            <div className="col-12">
                <Ticket history={history}/>
            </div>
        </div>
    )
}

export default TicketView

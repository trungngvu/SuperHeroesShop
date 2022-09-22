import React from 'react';
import st from './ticketClick.module.scss';
import close from '../../../images/profile/close_button.svg';

type Props = {
    ticketDetail: {
        TicketNo: string;
        Object: string;
        CreateAt: string;
    };
    setTicketDetail: (s: string)=>void;
};

const ticketClickHandler = ({ ticketDetail, setTicketDetail }: Props) => {
    return (
        <div className={st.modal}>
            <div className={st.ticket_wrapper}>
                <img className={st.close_button} src={close} onClick={() => setTicketDetail('')} />
                <div className={st.ticket_title}>Ticket n° {ticketDetail.TicketNo}</div>
                <hr />
                <div className={st.ticket_content}>
                    <div className={st.ticket_content_title}>Ticket subject</div>
                    <div className={st.ticket_object}>{ticketDetail.Object}</div>
                </div>
                <hr />
                <div className={st.ticket_comment}>
                    <input placeholder="Taping a comment..." />
                    <div className={st.commented}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac aliquam orci. In finibus
                        nunc metus, laoreet aliquet eros tincidunt.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ticketClickHandler;

import React from 'react';
import st from './ticketClick.module.scss';
import close from '../../../images/profile/close_button.svg';

const ticketClickHandler = ({ ticketDetail, setTicketDetail }) => {
    return (
        <div className={st.modal}>
            <div className={st.ticket_wrapper}>
                <img className={st.close_button} src={close} onClick={() => setTicketDetail('')} />
                <div className={st.ticket_title}>Ticket n°1354646</div>
                <hr />
                <div className={st.ticket_content}>
                    <div className={st.ticket_content_title}>Ticket subject</div>
                    <div className={st.ticket_object}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum iaculis eleifend porttitor.
                        Aenean id bibendum justo. Sed commodo et orci eu finibus. Sed eget enim dui. Nunc consectetur
                        libero leo, vitae mattis enim ultrices vel. Donec aliquet lorem in urna semper condimentum.
                        Pellentesque molestie lorem et nulla efficitur commodo. Nulla augue quam, malesuada tempus
                        porttitor quis, aliquam eget eros. Aenean sed commodo metus.
                    </div>
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

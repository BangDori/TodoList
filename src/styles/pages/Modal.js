import styled from 'styled-components';

const Modal = styled.div`
  text-align: center;

  & .modal_title {
    margin: 8px 0 16px;
    font-size: 32px;
    font-weight: bold;
    color: #ffc0cb;
  }

  & .search {
    margin: 48px 0 0;
  }

  & .rodal-dialog {
    width: 360px !important;
    margin: auto !important;
    padding: 15px !important;
  }

  & .message_box {
    margin: 16px 0;
    font-size: 16px;
    font-weight: bold;
  }
`;

export default Modal;

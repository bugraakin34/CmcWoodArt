import React from 'react';
import '../../Styles/comments.css';


export default function CommentsItems(props, { id, title, closePopup }) {
  return (props.trigger) ? (
    <div className='popup'>
        <div className='popup-inner'>
            { props.children }
            <button className='close-btn' onClick={() => props.setTrigger(false)}>Yorum Yap</button>
        </div>
    </div>
  ) : "";
}

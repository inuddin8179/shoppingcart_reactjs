// ScrollToBottom.js
import React from 'react';

const Scrollbottom = () => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <button onClick={scrollToBottom} style={styles.button}>
        v
    </button>
  );
};

const styles = {
  button: {
    position: 'fixed',
    top:'10px',
    right: '10px',
    padding: '10px 15px',
    fontSize: '16px',
    cursor: 'pointer',
    backgroundColor: '#28A745',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
  },
};

export default Scrollbottom;

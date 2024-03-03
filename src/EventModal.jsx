import React from 'react';
import Modal from 'react-modal';

const EventModal = ({ isOpen, closeModal, newEvent, handleInputChange, handleCreateEvent }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Create New Event</h2>
        </div>
        <form onSubmit={handleCreateEvent} className="modal-form">
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={newEvent.title}
            onChange={handleInputChange}
          />
          <label>Start Time:</label>
          <input
            type="datetime-local"
            name="start"
            value={newEvent.start}
            onChange={handleInputChange}
          />
          <label>End Time:</label>
          <input
            type="datetime-local"
            name="end"
            value={newEvent.end}
            onChange={handleInputChange}
          />
          <button type="submit">Create</button>
          <button onClick={closeModal}>Cancel</button>
        </form>
      </div>
    </Modal>
  );
};

export default EventModal;

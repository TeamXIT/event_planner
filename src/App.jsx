import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import Modal from 'react-modal';
import './App.css';
import CustomToolbar  from './ToolBar';
import EventModal from './EventModal';

const localizer = momentLocalizer(moment);

function App() {
  const [events, setEvents] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [newEvent, setNewEvent] = useState({ title: '', start: '', end: '' });
  const [selectedDate, setSelectedDate] = useState(null);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  const handleDateClick = (event) => {
    setSelectedDate(event.start);
  };

  const handleCreateEvent = () => {
    // Send newEvent data to backend
    // Upon successful creation, add the event to the events array
    setEvents([...events, newEvent]);
    setModalIsOpen(false);
    setNewEvent({ title: '', start: '', end: '' });
  };

  return (
    <div>
      <EventModal
        isOpen={modalIsOpen}
        closeModal={closeModal}
        newEvent={newEvent}
        handleInputChange={handleInputChange}
        handleCreateEvent={handleCreateEvent}
      />
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: '100vh', width: '100vw' }}
        views={{
          month: true,
          week: true,
          work_week: true,
          day: true
        }}
        components={{
          toolbar: props => (
            <CustomToolbar {...props} openModal={openModal} />
          ),
        }}
        onSelectSlot={handleDateClick} // Handle date selection
        selected={selectedDate} 
        className={selectedDate ? 'selected-date' : ''}
      />
    </div>
  );
}

export default App;

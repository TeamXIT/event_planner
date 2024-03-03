
import moment from 'moment';
 const CustomToolbar = ({ openModal, views, view, label, onView, onNavigate }) => {
    const currentMonth = moment(label).format('MMMM YYYY');
    
    return (
      <div className="rbc-toolbar">
        <div className="rbc-btn-group">
          <button type="button" onClick={() => onNavigate('TODAY')}>
            Today
          </button>
          <button type="button" onClick={() => onNavigate('PREV')}>
            &#9664;
          </button>
          <button type="button" onClick={() => onNavigate('NEXT')}>
            &#9654;
          </button>
          <button type="button" onClick={openModal}>
            Create New Event
          </button>
          <span className="current-month">{currentMonth}</span>
        </div>
        <div className="rbc-btn-group">
          {views.map((item, index) => (
            <button
              key={index}
              type="button"
              className={view === item ? 'rbc-active' : ''}
              onClick={() => onView(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    );
  }
  export default CustomToolbar;
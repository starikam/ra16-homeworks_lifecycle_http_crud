import './TitleReboot.css';


export const TitleReboot = ({handleUpdate}) => {
  return (
    <div className="title-reboot">
        <h2 className="note-title">Note</h2>
        <button className="btn-reboot" onClick={handleUpdate}>
            <img src='/img/refresh (1).png' alt="" />  
        </button>
    </div>
  )
}

import React from "react"
import "../styles/AlarmPopup.scss"
import succes from "../images/succes.svg"

interface IProps {
  popup: boolean
  setPopup: React.Dispatch<React.SetStateAction<boolean>>
  message: string
  status: "error" | "succes"
}

const StatusPopup: React.FC<IProps> = ({ popup, setPopup, message }) => {
  const sortRef = React.useRef<HTMLDivElement>(null)

  const hidePopup = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLDivElement
    if (
      sortRef.current &&
      !sortRef.current.innerHTML.includes(target.innerHTML)
    ) {
      setPopup(false)
    }
  }

  if (!popup) {
    return <></>
  }
  return (
    <div className="pages_popup smooth" id="popup" onClick={hidePopup}>
      <div
        className="pages_popup__container pages_popup__center occurrence"
        ref={sortRef}
      >
        <div className="pages_popup__title">
          <p>Поздравляем!</p>
          <button
            className="pages_popup__leave_btn"
            onClick={() => setPopup(false)}
          ></button>
        </div>
        <div className="decorate"></div>

        <form>
          <div className="pages_popup__form" style={{ padding: "20px" }}>
            <img className="pages_popup__img" src={succes} alt="succes" />
            {message}
          </div>
          <div className="pages_popup__buttons"></div>
        </form>
      </div>
    </div>
  )
}

export default StatusPopup

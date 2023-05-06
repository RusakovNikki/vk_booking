import React from "react"
import "../styles/AlarmPopup.scss"

interface IProps {
  alarm: boolean
  setAlarm: React.Dispatch<React.SetStateAction<boolean>>
  error: string
}

const AlarmPopup = ({ alarm, setAlarm, error }: IProps) => {
  const sortRef = React.useRef<HTMLDivElement>(null)

  const hidePopup = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLDivElement
    if (
      sortRef.current &&
      !sortRef.current.innerHTML.includes(target.innerHTML)
    ) {
      setAlarm(false)
    }
  }

  //   console.log(err)
  if (!alarm) {
    return <></>
  }
  return (
    <div className="pages_popup smooth" id="popup" onClick={hidePopup}>
      <div
        className="pages_popup__container pages_popup__center occurrence"
        ref={sortRef}
      >
        <div className="pages_popup__title">
          <p>Предупреждение!</p>
          <button
            className="pages_popup__leave_btn"
            onClick={() => setAlarm(false)}
          ></button>
        </div>
        <div className="decorate"></div>

        <form>
          <div className="pages_popup__form" style={{ padding: "20px" }}>
            {error}
          </div>
          <div className="pages_popup__buttons"></div>
        </form>
      </div>
    </div>
  )
}

export default AlarmPopup

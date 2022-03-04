import { AiOutlineBars } from "react-icons/ai";

const Topbar = ({toggle}) => {
  return (
    <div id="topbar">
        <button id="sidebarButton" onClick={toggle}>
            <AiOutlineBars/>
        </button>
    </div>
  )
}

export default Topbar
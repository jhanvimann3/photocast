import Coming from './Coming.js'

const MoreInfo = () => {
  return (
    <div id="moreinfo">
      __________________________________________
      <div className="linesInfo">
        <Coming name="Alexis" due="28.02"/>
      </div>
      <div className="linesInfo">
        <Coming name="Mohammed" due="28.02" />
      </div>

      <div className="blockInfo">
        <Coming name="Jhanvi" due="4.03" />
      </div>

      <div className="linesInfo ext">
        <Coming name="Navid" due="28.02" comment={"isMetric : boolean"}/>
      </div>

      <div className="blockInfo">
        <Coming name="Mohammed" due="4.03" comment={"isMetric : boolean"}/>
      </div>

    </div>
  )
}

export default MoreInfo

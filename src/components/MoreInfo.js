import Coming from './Coming.js'
import Humidity from './Humidity.js'
import Exposure from './Exposure.js'
import DawnDusk from './DawnDusk.js'

const MoreInfo = ({weatherData}) => {
  console.log(weatherData)
  return (
    <div id="moreinfo">
      __________________________________________
      <div className="linesInfo">
        <DawnDusk sunrise={weatherData['current']['sunrise']} sunset={weatherData['current']['sunset']}/>
      </div>
      <div className="linesInfo">
        <Exposure cloudCover={weatherData['current']['clouds']}/>
      </div>

      <div className="blockInfo">
        <Coming name="Jhanvi" due="4.03" />
      </div>

      <div className="linesInfo ext">
        <Humidity humidity={weatherData['current']['humidity']} cloud={weatherData['current']['clouds']} visibility={weatherData['current']['visibility']}/> 
      </div>

      <div className="blockInfo">
        <Coming name="Mohammed" due="4.03" comment={"isMetric : boolean"}/>
      </div>

    </div>
  )
}

export default MoreInfo

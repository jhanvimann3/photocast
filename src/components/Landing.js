import MoreInfo from './MoreInfo.js'
import Coming from './Coming.js'
import TimesTop from './TimesTop.js'

const Landing = ({weatherData}) => {
  return (
    <div id="landing">
      <div id="temperature">
        <Coming name="Jhanvi" due="28.02" comment={"isMetric : boolean"}/>
      </div>
      <div id="hours">
        <TimesTop sunrise={weatherData['current']['sunrise']} sunset={weatherData['current']['sunset']} nextSunrise={weatherData['daily']['1']['sunrise']}/>
      </div>
      <MoreInfo weatherData={weatherData}/>
    </div>
  )
}

export default Landing

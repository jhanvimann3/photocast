import Landing from './Landing.js'


const Home = ({weatherData}) => {
  return (
    <div className="page home">
      <Landing weatherData={weatherData}/>
    </div>
  )
}

export default Home

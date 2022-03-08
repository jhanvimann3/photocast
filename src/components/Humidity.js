const Humidity = ({humidity,visibility,cloud}) => {
    return (
    <div id="float-container">
        <div id="float-child">
            <div class="humidity">Humidity: <b>{humidity}</b> <br></br>
            Visibility: <b>{visibility}M</b></div>  
        </div>
        <div id="float-child">
            <div class="cloud">Cloud cover:<br></br><b>{cloud}</b></div>
            <br></br><br></br>
        </div>
    </div>

    )}
  
  export default Humidity

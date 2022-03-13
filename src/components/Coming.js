const Coming = ({normalTemp, lowTemp, highTemp, isMetric, status}) => {
  <div className="coming">

    var textMainTemp;

    if(isMetric)
    {
        textMainTemp = (normalTemp-273) + "°C"
    }
    else{
        textMainTemp = ((normalTemp-273) * 1.8 + 32) + "°F"
    }
    return(
        <div id="mainTemp">
            {textMainTemp}
        </div>
    )

    var textLowTemp;

    if(isMetric)
    {
        textLowTemp = (lowTemp-273) + "°C"
    }
    else{
        textLowTemp = ((lowTemp-273) * 1.8 + 32) + "°F"
    }
    return(
        <div id="lowTemp">
            {textLowTemp}
        </div>
    )

    var textHighTemp;

    if(isMetric)
    {
        textHighTemp = (highTemp-273) + "°C"
    }
    else{
        textHighTemp = ((highTemp-273) * 1.8 + 32) + "°F"
    }  
    return(
        <div id="highTemp">
            {textHighTemp}
        </div>
    )

</div>
}

    var textStatus;

    if(normalTemp > 25)
    {
      status = "Sunny"
    }   
    else if(normalTemp < 25 && normalTemp > 21)
    {
      status = "Pleasant"
    }
    else if(normalTemp < 21 && normalTemp > 7)
    {
      status = "Cold"
    }
    else if(normalTemp < 7)
    {
      status = "Freezing"
    }
    else{
      status = "Error"
    }

    return(
      <div id="status">
          {textStatus}
      </div>
    )
export default Coming

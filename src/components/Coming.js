const Coming = ({normalTemp, lowTemp, highTemp, isMetric, status}) => {
    <div className="coming">
    var textMainTemp;
    
		<h1 class="normalTemp"></h1>
   
    if(isMetric)
      {
        textMainTemp = (normalTemp-273) + "°C"
    }
    else{
        textMainTemp = ((normalTemp-273) * 1.8 + 32) + "°C"
    }
    
        <h2 class="lowTemp"></h2>
  
       if(isMetric)
      {
        textMainTemp = (lowTemp-273) + "°C"
    }
    else{
        textMainTemp = ((lowTemp-273) * 1.8 + 32) + "°C"
    }
    
    <h3 class="highTemp"></h3>
  
        if(isMetric)
      {
        textMainTemp = (highTemp-273) + "°C"
    }
    else{
        textMainTemp = ((highTemp-273) * 1.8 + 32) + "°C"
    }
  
      return(
        <div id="mainTemp">
           {textMainTemp}
        </div>
    )
    </div>
    
    if(status="sunny")
    {
    <div class="sunny"</div>
    }
    else if(status="rainy")
    {
    <div class="rainy"</div>
    }
    else if(status="windy")
    {
    <div class="windy"</div>
    }
    else if(status="cold")
    {
    <div class="rainy"</div>
    }
    else{
    <div class="pleasant"</div>
    }

  )
 
}

export default Coming

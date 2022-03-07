const Exposure = ({cloudCover}) => {
    var exposure = parseInt((-16/100)*cloudCover + 16);
    //console.log(exposure)
   return(
      <div id="dem">
        Recommended Exposure: f{exposure}
      </div>
    )
  }
  <script>
      document.getElementById("demo").style.textAlign = "center";
  </script>
  
  export default Exposure
  
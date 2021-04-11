<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="clockproject1.css">
  <script src ="clockproject1.js">
  </script>   


<style>
.dot {
  height: 200px;
  width: 200px;
  background-color:pink;
  border-radius: 50%;
  display: inline-block;
}

#clock{ 
  position: relative;
  top: 70px;
  font-size: 50px;
}
</style>

</head>

<body>

  <div style="text-align:center">
    <h1>circle 1</h1>
    <div id="controlos">
      <input id="txtTempo" type="text" value="0" size="4" maxlength="4"><button id="btnStart">Start</button>
    </div>
    <span class="dot">
      <div id="clock" class="blue"><b>00:00</b></div>
    </span>
   
    
    
  </div>

    

  
  
  

</body>


</html>
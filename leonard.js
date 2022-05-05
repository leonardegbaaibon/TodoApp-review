const handleClick = () => {
  var txt = document.getElementById("demo2").value;
  var txt1 = document.createElement("div");
  var txt2 = document.createTextNode(txt);
  var changeTxt2 =   document.getElementById("demo2").value = txt;
  var btnText = document.createTextNode("Edit");
  var btnText2 = document.createTextNode("Delete");
  var btn1 = document.createElement("button");
  var btn2 = document.createElement("button");

  console.log(txt);
  btn1.onclick = function(){onClick()};
  btn1.onmouseover = function(){onMouseOver()};
  btn1.onmouseout = function(){onMouseOut()};
  btn2.onmouseover = function(){onMouseOver2()};
  btn2.onmouseout = function(){onMouseOut2()};
  txt1.setAttribute("id","myRoot")
  txt1.setAttribute("type","HTML")
  var test = document.getElementById("myRoot");
  // document.getElementById("myRoot") = 
  // test.replace(txt2, "wow")
  txt1.setAttribute(
    "style",
    "background-color: rgba(216, 253, 4, 0.575); padding:5%; margin:5px; display: flex; font-weight: 800; font-size: 100%; font-family: cursive;"
  );
  btn1.setAttribute("style", "margin: 5%; width: 10%; padding: 2%; text-align: center; font-family: cursive; font-weight: 600; border: 0px; border-radius: 5%;");
  btn2.setAttribute("style", "margin: 5%; width: 10%; padding: 2%; text-align: center; font-family: cursive; font-weight: 600; border: 0px; border-radius: 5%;");
  
  function onMouseOver(){
    btn1.setAttribute("style","background-color: rgb(213, 218, 142); margin: 5%; width: 10%; padding: 2%; text-align: center; font-family: cursive; font-weight: 600; border: 0px; border-radius: 5%;")
  }
  function onMouseOut(){
    btn1.setAttribute("style","background-color: whitesmoke; margin: 5%; width: 10%; padding: 2%; text-align: center; font-family: cursive; font-weight: 600; border: 0px; border-radius: 5%;")
  }
  function onMouseOver2(){
    btn2.setAttribute("style","background-color: rgb(213, 218, 142); margin: 5%; width: 10%; padding: 2%; text-align: center; font-family: cursive; font-weight: 600; border: 0px; border-radius: 5%;");
  }
  function onMouseOut2(){
    btn2.setAttribute("style","background-color: whitesmoke; margin: 5%; width: 10%; padding: 2%; text-align: center; font-family: cursive; font-weight: 600; border: 0px; border-radius: 5%;");
  }

  function onClick(){
  document.getElementById("demo2").value = txt;
  }

  if (txt) {
    txt1.appendChild(txt2);
    txt1.appendChild(btn1);
    txt1.appendChild(btn2);
    btn1.appendChild(btnText);
    btn2.appendChild(btnText2);
    document.body.appendChild(txt1);
    document.getElementById("demo2").value = "";
  } else {
      alert("Write something bro")
  }

  // if(txt){

  // }else{}
};

window.onload=function(){
    refresh();
}


function save(){
    var imgVal=document.getElementById("imgUpload").value;
    var nameVal =document.getElementById("name").value;
    var nickNameVal=document.getElementById("nickName").value;
    var dobVal=document.getElementById("dob").value;
    var wowVal=document.getElementById("wow").value;
    var hawVal=document.getElementById("haw").value;
    var enjoyVal=document.getElementById("enjoy").value;
    var favVal=document.getElementById("fav").value;
    var meVal=document.getElementById("me").value;
    var numVal=document.getElementById("num").value;

    
    var ObjectJson={
        "imgKey":imgVal,
        "nameKey" : nameVal,
        "nickNameKey":nickNameVal,
        "dobKey" : dobVal,
        "wowKey":wowVal,
        "hawKey":hawVal,
        "enjoyKey":enjoyVal,
        "favKey":favVal,
        "meKey":meVal,
        "numKey":numVal,
    }
    if(!("slam" in localStorage))
       {
         var existing=[];
       }
      else
      existing=JSON.parse(localStorage.getItem("slam"));
     var a=JSON.stringify(ObjectJson);

    existing.push(a);
       localStorage.setItem("slam",JSON.stringify(existing));

       
       refresh();
      
}
function refresh(){
    clear();
    if(!("slam" in localStorage))
       {
         var existing=[];
       }
      else
      existing=JSON.parse(localStorage.getItem("slam"));
      

      for(var i=0;i<existing.length;i++){
          display(JSON.parse(existing[i]).nameKey,i);
          
      }

      var imgReset=document.getElementById("imgUpload");
    var nameReset =document.getElementById("name");
    var nickNameReset=document.getElementById("nickName");
    var dobReset=document.getElementById("dob");
    var wowReset=document.getElementById("wow");
    var hawReset=document.getElementById("haw");
    var enjoyReset=document.getElementById("enjoy");
    var favReset=document.getElementById("fav");
    var meReset=document.getElementById("me");
    var numReset=document.getElementById("num");
    imgReset.value="";
    nameReset.value="";
    nickNameReset.value="";
    dobReset.value="";
    wowReset.value="";
    hawReset.value="";
    enjoyReset.value="";
    favReset.value="";
    meReset.value="";
    numReset.value="";
}

function deleteIt(i){
    var str=i;
    var keyDel= parseInt(str.substring(3));
    var details=[];
    
        var details=JSON.parse(localStorage.getItem('slam'));
       details.splice(keyDel,1);
        localStorage.setItem('slam',JSON.stringify(details));
    refresh();
}


function read(i){
    document.getElementById("formID1").style.display="none";
    document.getElementById("formID2").style.display="none";
    document.getElementById("detailsID1").style.display="block";
    document.getElementById("detailsID2").style.display="block";
    var details=[];
    var arr=[];
    details=JSON.parse(localStorage.getItem("slam"));
    for(var j=0;j<details.length;j++){
        arr[j]=JSON.parse(details[j]);
    }

    document.getElementById("nameh").innerHTML= arr[i].nameKey;
  document.getElementById("nickNameh").innerHTML= arr[i].nickNameKey;
   document.getElementById("dobh").innerHTML=arr[i].dobKey;
   document.getElementById("wowh").innerHTML=arr[i].wowKey;
    document.getElementById("hawh").innerHTML=arr[i].hawKey;
    document.getElementById("enjoyh").innerHTML=arr[i].enjoyKey;
    document.getElementById("favh").innerHTML=arr[i].favKey;
    document.getElementById("meh").innerHTML=arr[i].meKey;
   document.getElementById("numh").innerHTML=arr[i].numKey; 
   refresh();
}
function clear(){
    var ulTag=document.getElementById("ulId");
    while(ulTag.firstChild){
    ulTag.firstChild.remove();
    }
}
function previous(){
    document.getElementById("formID1").style.display="block";
    document.getElementById("formID2").style.display="block";
    document.getElementById("detailsID1").style.display="none";
    document.getElementById("detailsID2").style.display="none";
}
 function display(nameVal,i){
        var ulTag=document.getElementById("ulId");
        var liTag=document.createElement("li");
        var h3Tag=document.createElement("h3");
        var buttonTag=document.createElement("button");
        var buttonDel=document.createElement("button");
        buttonTag.setAttribute("id",i); 
        buttonTag.setAttribute("onclick","read(id)");
        buttonDel.setAttribute("id","del"+i);
        buttonDel.setAttribute("onclick","deleteIt(id)");
        buttonDel.innerHTML="X"
        liTag.setAttribute("id","liId");
        h3Tag.setAttribute("id","h3Id");
        h3Tag.innerHTML=nameVal;
        var hrTag=document.createElement("hr");

        buttonTag.appendChild(h3Tag);
        liTag.appendChild(buttonTag);
        liTag.appendChild(buttonDel);
        ulTag.appendChild(liTag);
        ulTag.appendChild(hrTag);
    }
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#blah')
                    .attr('src', e.target.result)
                    .width(80)
                    .height(80);
            };

            reader.readAsDataURL(input.files[0]);
        }
    }
  
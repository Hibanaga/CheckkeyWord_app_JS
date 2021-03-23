
    let toggleValue = true;

    let variable="";

    document.addEventListener("keydown", function(event) {
        // event.preventDefault();
       
    
        let htmlnum = "";
    
        htmlnum += `<h1 class="mainKey">${event.which}</h1>`
        // document.body.innerHTML = html;
        
        variable = `<h1 class="mainKey">${event.which}</h1>`
        document.querySelector("main").innerHTML = htmlnum;
        
        let navInfo = "";
    
        navInfo += `<button class="btn_copy" onclick="copyToClipBoard(${event.key})"><h2 class="h2_eventAbout">event.key</h2> <span class="spanInfo">${event.key !== " " ? event.key: event.code}</span> </button>`
        navInfo += `<button class="btn_copy" onclick="copyToClipBoard(${event.location})"><h2 class="h2_eventAbout">event.location</h2> <span class="spanInfo">${event.location} <p class="general_p">(General keys)</p> </span></button>`
        navInfo += `<button class="btn_copy" onclick="copyToClipBoard(${event.which})"><h2 class="h2_eventAbout">event.which</h2> <span class="spanInfo">${event.which}</span></button>`
        navInfo += `<button class="btn_copy" onclick="copyToClipBoard(${event.code})"><h2 class="h2_eventAbout">event.code</h2> <span class="spanInfo">${event.code}</span></button>`
    
        
        document.querySelector("nav").innerHTML = navInfo;

        document.title.innerHTML = variable;
      });

 
  document.querySelector("#btnShowTable").onclick = ()=> {

    
    if (toggleValue) {

        let html = "<table class='showTable'> <thead> <tr> <th>Key code</th> <th>Key</th> </tr> </thead>";
        // <tr> <th></th> <th>Key</th> </tr>
        let obj = {backspace:8,tab:9,enter:13,shift:16,ctrl:17,alt:18,"pause/break":19,"caps lock":20,escape:27,"page up":33,Space:32,"page down":34,end:35,home:36,"arrow left":37,"arrow up":38,"arrow right":39,"arrow down":40,"print screen":44,insert:45,delete:46,0:48,1:49,2:50,3:51,4:52,5:53,6:54,7:55,8:56,9:57,a:65,b:66,c:67,d:68,e:69,f:70,g:71,h:72,i:73,j:74,k:75,l:76,m:77,n:78,o:79,p:80,q:81,r:82,s:83,t:84,u:85,v:86,w:87,x:88,y:89,z:90,"left window key":91,"right window key":92,"select key":93,"numpad 0":96,"numpad 1":97,"numpad 2":98,"numpad 3":99,"numpad 4":100,"numpad 5":101,"numpad 6":102,"numpad 7":103,"numpad 8":104,"numpad 9":105,multiply:106,add:107,subtract:109,"decimal point":110,divide:111,f1:112,f2:113,f3:114,f4:115,f5:116,f6:117,f7:118,f8:119,f9:120,f10:121,f11:122,f12:123,"num lock":144,"scroll loc":	145,"My Computer (multimedia keyboard)":182,"My Calculator (multimedia keyboard)":183,"semi-colon":186,"equal sign":187,"comma":188,"dash":189,"period":190,"forward slash":191,"open bracket":219,"back slash":220,"close braket":221,"single quote":222};
    
        for (let key in obj) {
            html+= `<tr> <td>${ obj[key]}</td> <td>${key}</td></tr>`;
        }
    
        html+="</table>";
    
    
        document.querySelector("main").innerHTML = html;

        document.querySelector("nav").style = "display:none";
    } else {

         if (variable === "") {
            variable = "<h1 class='h1_enterKeyword'>Press any key to get the JavaScript event keycode</h1>"

        }
         document.querySelector("main").innerHTML = variable;
         document.querySelector("nav").style = "display:flex";
        

    }

    toggleValue = !toggleValue;
  }





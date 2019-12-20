```function openWindow(){
    var url="index.html?name=name";
    window.open(url,'_self');
}



window.onload = function(){
    var myname = GetArgs(window.location.href,"name");
    alert("参数为"+myname);
}
function GetArgs(params,paramName){
    var argsIndex = params.indexOf("?");
    var arg = params.substring(argsIndex+1);
    args = arg.split("&");
    var valArg = "";
    for(var i =0;i<args.length;i++){
    str = args[i];
    var arg = str.split("=");
 
        if(arg.length<=1) continue;
        if(arg[0] == paramName){
            valArg = arg[1];
        }
    }
    return valArg;
}
```
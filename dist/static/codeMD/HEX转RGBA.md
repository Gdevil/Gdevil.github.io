```
function hexToRgba(hex, opacity) { 
return "rgba(" + parseInt("0x" + hex.slice(1, 3)) + "," + parseInt("0x" + hex.slice(3, 5)) + "," + parseInt("0x" + hex.slice(5, 7)) + "," + opacity + ")"; 
}
//hexToRgba('#f29a9e',0.1)    HEX ת rgba
```
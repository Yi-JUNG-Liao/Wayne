//國家,確診,死亡,治癒

var Taiwan = [306, 5, 39];
var China = [82149, 3308, 75898];
var USA = [142895, 2436, 2660];

//二維

var GlobalWuhan =
    [
        Taiwan, China, USA
    ];
console.log('台灣:' + Taiwan[0] + ',' + Taiwan[1] + ',' + Taiwan[2]);

console.log('台灣:' + GlobalWuhan[0][0] + ',' + GlobalWuhan[0][1] + ',' + GlobalWuhan[0][2]);
console.log('中國大陸:' + GlobalWuhan[1][0] + ',' + GlobalWuhan[1][1] + ',' + GlobalWuhan[1][2]);
console.log('美國:' + GlobalWuhan[2][0] + ',' + GlobalWuhan[2][1] + ',' + GlobalWuhan[2][2]);

var x = ['Taiwan', '台灣', 306, 5, 39];
var y = ['China', '中國大陸', 82149, 3308, 75898];
var z = ['USA', '美國', 142895, 2436, 2660];

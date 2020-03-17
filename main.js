var num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var answer = [];
for (var i = 0; i < 4; i++) {
    var idx = Math.floor(Math.random() * num.length);
    answer.push(num[idx]);
    num.splice(idx, 1);
}

var times = 0;

$('#submit').click(function () {
    var a = 0
    var b = 0;
    var g = $('#input').val();
    $('#input').val('');

    for (var i = 0; i < 4; i++) {
        var idx = answer.indexOf(g[i]);
        if (idx != -1) {
            if (idx == i) {
                a++;
            } else {
                b++;
            }
        }
    }
    if (a == 4) {
        alert('恭喜答對了！');
    }
    times += 1;
    $('tbody').append('<tr><td>' + times + '</td><td>' + g + '</td><td>' + a + 'A' + b + 'B' + '</td></tr>');

    console.log(answer)
});
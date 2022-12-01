// 設定用
// 各レベルごとの問題枚数
const lv1_1 = 4;
const lv1_2 = 14;
const lv2 = 4;
const lv3 = 2;

var count = 0;

var q_imglist1_1 = [];
var a_imglist1_1 = [];

var q_imglist1_2 = [];
var a_imglist1_2 = [];

var q_imglist2 = [];
var a_imglist2 = [];

var q_imglist3 = [];
var a_imglist3 = [];

let visible = "hidden"

var canvas = [];

let LineWidthSave = 5;

window.onload = () => {
    /**
        動作説明
    
        lv1-1, 1-2, 2, 3から指定枚数を読み込む
        1-1: 3
        1-2: 6
        2: 2
        3: 2

        計13枚
        **/

    load_lv1_1()
    load_lv1_2()
    load_lv2()
    load_lv3()
};

function intRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 競合しない数字をリストに入れる

function makeRandomList(len, questions) {
    var numList = [];

    for (var i = 0; numList.length <= len - 1;) {
        var tmp = intRandom(1, questions);
        if (!numList.includes(tmp)) {
            numList.push(tmp);
        }
    }

    console.log(numList);

    return numList;
}

function load_lv1_1() {

    const numberOfQuestion = 2

    var numList = makeRandomList(numberOfQuestion, lv1_1)

    numList.forEach(questionNumber => {
        q_imglist1_1.push(`./img/level1-1/question/${questionNumber}.jpg`)
        a_imglist1_1.push(`./img/level1-1/ans/${questionNumber}.jpg`)
    });

    // 2枚をcanvasとして生成
    for (var i = 0; i < numberOfQuestion; i++) {

        var create_canvas = document.createElement("canvas")
        create_canvas.id = `canvas${count}`
        create_canvas.className = `canvas${count}`
        document.getElementById('lv1').appendChild(create_canvas);

        canvas.push(new fabric.Canvas(`canvas${count}`, {
            isDrawingMode: true, // 手書き入力ON
            backgroundColor: null,
        }))

        canvas[count].setHeight(270);
        canvas[count].setWidth(340);
        canvas[count].freeDrawingBrush.color = "rgb(0, 0, 0)"; // 描画する線の色
        canvas[count].freeDrawingBrush.width = LineWidthSave;

        canvas[count].setBackgroundImage(q_imglist1_1[i], canvas[count].renderAll.bind(canvas[count]), {
            backgroundImageOpacity: 1,
            originX: "left",
            originY: "top",

            // top: 90,
            // left: 70,
            scaleX: 0.5,
            scaleY: 0.5
        });
        count++
    }
}

function load_lv1_2() {

    const numberOfQuestion = 6

    var numList = makeRandomList(numberOfQuestion, lv1_2)

    numList.forEach(questionNumber => {
        q_imglist1_2.push(`./img/level1-2/question/${questionNumber}.jpg`)
        a_imglist1_2.push(`./img/level1-2/ans/${questionNumber}.jpg`)
    });

    // 6枚をcanvasとして生成
    for (var i = 0; i < numberOfQuestion; i++) {

        var create_canvas = document.createElement("canvas")
        create_canvas.id = `canvas${count}`
        create_canvas.className = `canvas${count}`
        document.getElementById('lv1').appendChild(create_canvas);

        canvas.push(new fabric.Canvas(`canvas${count}`, {
            isDrawingMode: true, // 手書き入力ON
            backgroundColor: null,
        }))

        canvas[count].setHeight(270);
        canvas[count].setWidth(340);
        canvas[count].freeDrawingBrush.color = "rgb(0, 0, 0)"; // 描画する線の色
        canvas[count].freeDrawingBrush.width = LineWidthSave;


        canvas[count].setBackgroundImage(q_imglist1_2[i], canvas[count].renderAll.bind(canvas[count]), {
            backgroundImageOpacity: 1,
            originX: "left",
            originY: "top",

            // top: 90,
            // left: 70,
            scaleX: 0.5,
            scaleY: 0.5
        });

        count++
    }
}

function load_lv2() {


    const numberOfQuestion = 2

    var numList = makeRandomList(numberOfQuestion, lv2)

    // lv2読み込み
    numList.forEach(questionNumber => {
        q_imglist2.push(`./img/level2/question/${questionNumber}.jpg`)
        a_imglist2.push(`./img/level2/ans/${questionNumber}.jpg`)
    });

    // 2枚をcanvasとして生成
    for (var i = 0; i < numberOfQuestion; i++) {

        var create_canvas = document.createElement("canvas")
        create_canvas.id = `canvas${count}`
        create_canvas.className = `canvas${count}`
        document.getElementById('lv2').appendChild(create_canvas);

        canvas.push(new fabric.Canvas(`canvas${count}`, {
            isDrawingMode: true, // 手書き入力ON
            backgroundColor: null,
        }))

        canvas[count].setHeight(410);
        canvas[count].setWidth(490);
        canvas[count].freeDrawingBrush.color = "rgb(0, 0, 0)"; // 描画する線の色
        canvas[count].freeDrawingBrush.width = LineWidthSave;

        canvas[count].setBackgroundImage(q_imglist2[i], canvas[count].renderAll.bind(canvas[count]), {
            backgroundImageOpacity: 1,
            originX: "left",
            originY: "top",

            // top: 90,
            // left: 70,
            scaleX: 0.3,
            scaleY: 0.3
        });

        count++
    }
}

function load_lv3() {


    const numberOfQuestion = 2

    var numList = makeRandomList(numberOfQuestion, lv3)

    // lv2読み込み
    numList.forEach(questionNumber => {
        q_imglist3.push(`./img/level3/question/${questionNumber}.jpg`)
        a_imglist3.push(`./img/level3/ans/${questionNumber}.jpg`)
    });

    // 2枚をcanvasとして生成
    for (var i = 0; i < numberOfQuestion; i++) {

        var create_canvas = document.createElement("canvas")
        create_canvas.id = `canvas${count}`
        create_canvas.className = `canvas${count}`
        document.getElementById('lv3').appendChild(create_canvas);

        canvas.push(new fabric.Canvas(`canvas${count}`, {
            isDrawingMode: true, // 手書き入力ON
            backgroundColor: null,
        }))

        canvas[count].setHeight(470);
        canvas[count].setWidth(550);
        canvas[count].freeDrawingBrush.color = "rgb(0, 0, 0)"; // 描画する線の色
        canvas[count].freeDrawingBrush.width = LineWidthSave;

        canvas[count].setBackgroundImage(q_imglist3[i], canvas[count].renderAll.bind(canvas[count]), {
            backgroundImageOpacity: 1,
            originX: "left",
            originY: "top",

            // top: 45,
            // left: 70,
            scaleX: 0.4,
            scaleY: 0.4
        });

        count++
    }
}

const selectColorBtn = document.getElementsByClassName('color');
for (i = 0; i < selectColorBtn.length; i++) {
    selectColorBtn[i].addEventListener('click', function (e) {
        //ボタンが自分の色を取得して描画色にする
        const btnColor = window.getComputedStyle(this, null).getPropertyValue('background-color');
        console.log(btnColor);
        for (i = 0; i < canvas.length; i++) {
            canvas[i].freeDrawingBrush.color = btnColor; // 描画する線の色
            canvas[i].freeDrawingBrush.width = LineWidthSave;
            canvas[i].freeDrawingBrush.globalCompositeOperation = 'destination-over';
        }
        clearSelectedButton();
        this.classList.add('selected'); //選択されたボタンはボーダーを太くする
    });
}
const selectLineWidthBtn = document.getElementsByClassName('selectLineWidth');
for (i = 0; i < selectLineWidthBtn.length; i++) {
    selectLineWidthBtn[i].addEventListener('click', function (e) {
        //ボタンが自分の値を取得してペンサイズにセット
        for (i = 0; i < canvas.length; i++) {
            canvas[i].freeDrawingBrush.width = parseInt(this.value);
        }
        LineWidthSave = parseInt(this.value);
    });
}

function clearSelectedButton() {
    const btn = document.getElementsByClassName('color');
    for (i = 0; i < btn.length; i++) {
        btn[i].classList.remove('selected');
    }
}

document.getElementById('eraser') //消しゴムはサイズの大きい白いペン
    .addEventListener('click', function (e) {
        for (i = 0; i < canvas.length; i++) {
            canvas[i].freeDrawingBrush.width = 40;
            canvas[i].freeDrawingBrush.color = "rgba(0, 0, 0, 0)";
            canvas[i].freeDrawingBrush.globalCompositeOperation = 'destination-out';
        }
    });

// リロード防止
var onBeforeunloadHandler = function (e) {
    e.returnValue = '内容物が消えてしまいます.宜しいですか？';
};

// イベントを登録
window.addEventListener('beforeunload', onBeforeunloadHandler, false);

// function set_visible() {
//     switch (visible) {
//         case "hidden":
//             visible = "visible"
//             document.getElementById(`canvas2-1-${i}`).style.visibility = visible;
//             console.log("check a")
//             break;
//         case "visible":
//             visible = "hidden"
//             document.getElementById(`canvas2-1-${i}`).style.visibility = visible;
//             console.log("check b")
//             break;
//     }
// }
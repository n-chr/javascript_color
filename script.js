//JavaScript

//console.log(document.getElementById('myColor').value);
//document.getElementById('bodyText').textContent = '文字の置き換え';

//document.getElementById('bodyText').textContent = document.getElementById('myColor').value;

//定数の宣言
const color = document.getElementById('myColor');
const text = document.getElementById('bodyText');

//text.textContent = color.value;

// カラーピッカーで色が選択されたら、changeColorを動作させる
color.addEventListener('input', changeColor);

function changeColor(){
    // カラーコードを表示
      text.textContent = 'コード：' + color.value;
      if (color.value === '#ffffff') {
        text.textContent = 'コード：' + color.value + '(white)';
      } else if (color.value === '#000000') {
        text.textContent = 'コード：' + color.value + '(black)';
      } else if (color.value === '#5e79a1') {
        text.textContent = 'コード：' + color.value + '(山姥切長義)';
      }else {
        text.textContent = 'コード：' + color.value;
      }    
    // 背景色を変更
      document.body.style.backgroundColor = color.value;
}


function selectevent(mouse_val) {
    const sizeboder = 50;
    // 選択範囲のオブジェクト取得
    const selection = window.getSelection();
    let tooltip = document.getElementById('tooltip_strlen');

    //trimは文字列前後の空白と改行を消してくれるが文字列中のものは消さないのでreplaceをしている
    let select_str = selection.toString().trim().replace(/\s/g, "");

    //文字が選択されている場合に文字数を吹き出しで表示する
    if (select_str.length > 0) {
        const mX = mouse_val.clientX;
        const mY = (mouse_val.clientY + window.pageYOffset);

        //付与しているクラスのクリア
        tooltip.classList.remove('ts_down_aroww');
        tooltip.classList.remove('ts_up_aroww');

        tooltip.style.setProperty('display', 'block');

        tooltip.textContent = select_str.length;

        //マウスの相対位置を設定
        //縦に関してはページのスクロール量を足して位置を指定
        tooltip.style.setProperty('top', mY + 'px');
        tooltip.style.setProperty('left', mX + 'px');

        //吹き出しの位置を調整。吹き出しが画面外に出ないように上向き下向きを変えている
        if (mouse_val.clientY < sizeboder) {
            //上向き吹き出し作成
            tooltip.style.setProperty('transform', 'translate(-50%, 50%)');
            tooltip.classList.add('ts_up_aroww');
        } else {
            //下向き吹き出し作成
            tooltip.style.setProperty('transform', 'translate(-50%, -200%)');
            tooltip.classList.add('ts_down_aroww');
        }
    }
    else {
        //文字が選択されていない場合は吹き出しを削除
        tooltip.style.setProperty('display', 'none');
    }
}

const body_element = document.getElementsByTagName('body')[0];
//吹き出し用のpタグを作成
const new_element = document.createElement('p');
new_element.setAttribute('id', 'tooltip_strlen');
body_element.appendChild(new_element);

body_element.addEventListener('mouseup', selectevent);

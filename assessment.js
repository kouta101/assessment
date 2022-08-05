'use strict';
const userNameInput = document.getElementById('user-name');
const assessmentButton = document.getElementById('assessment');
const resultDivided = document.getElementById('result-area');
const tweetDivided = document.getElementById('tweet-area');

/**
 * 指定した要素の子要素を全て削除する
 * @param {HTMLElement} element HTMLの要素
 */
function removeAllChildren(element) {
    while (element.firstChild) { // 子要素があるかぎり削除
        element.removeChild(element.firstChild);
    }
}

assessmentButton.onclick = () =>  {
    const userName = userNameInput.value;
    if (userName.length === 0) {
        //名前が空の時は処理を終了する
        return;
    }

    //診断結果表示エリアの作成
    removeAllChildren(resultDivided);
    const header = document.createElement('h3');
    header.innerText = '診断結果';
    resultDivided.appendChild(header);

    const paragraph = document.createElement('p');
    const result = assessment(userName);
    paragraph.innerText = result;
    resultDivided.appendChild(paragraph);
};

const answers=[
'{userName}の度胸は、1',
'{userName}の度胸は、2',
'{userName}の度胸は、3',
'{userName}の度胸は、4',
'{userName}の度胸は、5',
'{userName}の度胸は、6',
'{userName}の度胸は、7',
'{userName}の度胸は、8',
'{userName}の度胸は、9',
'{userName}の度胸は、10'
];

/**
 * 名前の文字列を渡すと診断結果を返す関数
 * @param {string} userName ユーザーの名前
 * @return {string} 診断結果
 */
function assessment(userName) {
    // 全文字のコード番号を取得してそれを足し合わせる
    let sumOfCharCode =0;
    for (let i =0; i < userName.length; i++){
        sumOfCharCode = sumOfCharCode + userName.charCodeAt(i);
    }

    //文字のコード番号の合計を回答の数を割って添字の数値を求める
    const index = sumOfCharCode % answers.length;
    let result = answers[index];

    result = result.replace(/\{userName\}/g, userName);
    return result;
}

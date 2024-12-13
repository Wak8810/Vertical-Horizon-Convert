<script>
    let before = '丸亀製麺は 一軒一軒が 製麺場\n麺職人達が 日々腕と 感性を 研ぎ澄ます\n丸亀製麺は 全ての店で 池の水から 作る\nそう しなければ こんなにも すぐに 作れない\nうどんで あなたを 驚かせたい丸亀製麺では 全ての店で ハイになる 違法な粉から 作る\nもう これなしでは 生きられない 体に なってしまう\n丸亀製麺は 口から ビームを 放つことが できる\nそれだけではない\n丸亀製麺は しばしば 黒魔術を 使う\n丸亀製麺は 裏社会と 繋がっている\n年に一度 開催される 闇オークションに 出品し私服を 肥やしている\n丸亀製麺は 時を 止めることが できる\n特殊な ストップウォッチを 持っている\n誰も 止められない\nうどんで あなたを 驚かせたい\n丸亀製麺に 労働基準法は 適用されない\n良いと言うまで 決して 休んではならない\n不眠不休で 働かされる';
    let after = '';
    let is_inJap = true;//0なら日本語あり,1ならなし
    let inBrank = true;//1なら行間の空白あり，0ならなし
    
    /**
     * @param {number} number1
     * @param {number} number2
     * @returns {number}
     */
    function max(number1,number2){
        return number1 < number2 ? number2 : number1;
    }

    //changeで文字置き換えが必要な際の関数
    /**
    *@param {string} bef_c
    *@param {boolean} inJ 
    */
    //if (bef_c === '') return '';
    function changeMap(bef_c,inJ){  //思いついたら増やしていく(：；＝ー/など)
        //ひらがなカタカナ漢字ならすぐreturn
        if (/[\u3040-\u309F\u30A0-\u30FF\u4e00-\u9faf]/.test(bef_c)) return bef_c;
        if (inJ && bef_c === ' ') return '　';
        if (!inJ && bef_c === '　') return ' ';
        if (['ー', '～'].includes(bef_c)) return '｜';
        if (bef_c === '「') return '﹁';
        if (bef_c === '」') return '﹂';
        if (bef_c === '『') return '﹃';
        if (bef_c === '』') return '﹄';
        if (bef_c === '（') return '︵';
        if (bef_c === '）') return '︶';
        if (bef_c === '(') return '︵';
        if (bef_c === ')') return '︶';
        if (bef_c === '[') return '﹇';
        if (bef_c === ']') return '﹈';
        if (bef_c === '［') return '﹇';
        if (bef_c === '］') return '﹈';
        return bef_c; //変換が不要な場合はそのまま返す
    }
    //change開始
    function change(){
        after = '';
        let max_height = 1;
        let max_width = 1;
        let height_count = 0;

        //縦横の長さをカウント
        for(const c of before){
            if(c == '\n'){
                max_width++;
                max_height = max(max_height,height_count);
                height_count = 0;
            }else{
                height_count++;
            }
        }
        max_height = max(max_height,height_count);//一番最後の行が長かった時のため．
        if(inBrank) max_width = max_width * 2 - 1;//4行なら，7行(間に空白を入れるため)
        
        //縦書き配列の作成
        let aft = new Array(max_height);
        if(is_inJap){
            for(let i=0;i<max_height;i++){
                aft[i] = new Array(max_width).fill('　');//日本語ありなら全角空白
            }
        }else{
            for(let i=0;i<max_height;i++){
                aft[i] = new Array(max_width).fill(' ');//なしなら半角
            }
        }

        //縦書き配列に代入
        let index = 0;
        for(let i=max_width-1;i>=0;i--){
            if(inBrank && i%2==1) continue;
            for(let j=0;j<max_height;j++){
                if(before[index] === '\n' || index >= before.length) continue;
                else{
                    aft[j][i] = changeMap(before[index],is_inJap);
                    index++;
                }
            }
            index++;
        }
        
        
        //文字列に代入
        for(let i=0;i<max_height;i++){
            for(let j=0;j<max_width;j++){
                after += aft[i][j];
            }
            after += '\n';
        }   
    }
    //change終了
</script>

<center>
    <h1>横書き縦書き変換</h1>
    <br>
    <label>
        <input type="checkbox" bind:checked={is_inJap}/>日本語あり
    </label>
    <label>
        <input type="checkbox" bind:checked={inBrank}/>改行する
    </label>

    <div class = "container">
        <div class="textbox">
            <textarea bind:value={before}></textarea>
        </div>
        <h2>→</h2>
        <button on:click = {change}>変換</button>
        <h2>→</h2>
        <div class="textbox">
            <textarea readonly bind:value={after}></textarea>
        </div>
    </div>
</center>

<style>
    .container{
        display:flex;
        align-items: center;
        justify-content:center;
        box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
        background-color: #b3abab;
        width: 95%;
        padding-top:20px;
        border: 1px solid #ddd;
    }

    .textbox{
        width: 600px;
        height:600px;
    }

    .textbox textarea{
        width:90%;
        height:90%;

    }

</style>
/**
 * PAIZA さんは以前から住みたかった町に引っ越して来ました。
 *
 * その町には碁盤の目状に道が張り巡らされており、合計で N 軒の家が建っています。
 * しかし、家同士には距離があるため、PAIZAさんは距離 D までのご近所さんにご挨拶に伺うことにしました。
 *
 * PAIZA さんの家の座標とその他の家の座標が与えられます。
 * PAIZA さんが挨拶に向かう件数を出力してください。
 * 図1
 *
 * 家同士の距離は | x_1 - x_2 | + | y_1 - y_2 | で定義されます。
 *
 * たとえば、入力例 1 では、PAIZA さんの家は (0, 0) にあり、
 *
 * 家 1 との距離は | 0 - 2 | + | 0 - 3 | = 5
 * 家 2 との距離は | 0 - 9 | + | 0 - 4 | = 13
 * 家 3 との距離は | 0 - 5 | + | 0 - 4 | = 9
 *
 * ご挨拶に伺う家は距離が 10 以下の家なので、家 1 と家 3 にご挨拶に伺います。
 * ご挨拶に伺う家は 2 軒なので 2 を出力してください。
 * 評価ポイント
 * 10回のテストケースで、正答率、実行速度、メモリ消費量をはかり得点が決まります。
 * より早い解答時間で提出したほうが得点が高くなります。
 * 複数のテストケースで正しい出力がされるか評価（+50点）
 * 解答までの速さ評価（+50点）
 * 入力される値
 * 入力は以下のフォーマットで与えられます。
 *
 * N D
 * X Y
 * x_1 y_1
 * x_2 y_2
 * ...
 * x_N y_N
 * ・1 行目に 家の数を表す整数 N とご挨拶に伺う範囲の距離 D が半角スペース区切りで与えられます。
 * ・続く 2 行目に PAIZA さんの家の座標 X, Y が半角スペース区切りで与えられます。
 * ・続く 3 行目から N+3 行目にわたって、町に建っている家の座標 x_i, y_i (1 ≦ i ≦ N) が半角スペース区切りで与えられます。
 * ・入力は合計で N+3 行となり、末尾に改行が 1 つ入ります。
 *
 * それぞれの値は文字列で標準入力から渡されます。標準入力からの値取得方法はこちらをご確認ください
 * 期待する出力
 * PIAZA さんがご挨拶に伺う家の数を出力してください。
 * 末尾に改行を入れ、余計な文字、空行を含んではいけません。
 * 条件
 * すべてのテストケースにおいて、以下の条件をみたします。
 *
 * ・1 ≦ N ≦ 100
 * ・1 ≦ D ≦ 200
 * ・-100 ≦ X, Y ≦ 100
 * ・-100 ≦ x_i, y_i ≦ 100 (1 ≦ i ≦ N)
 * ・同じ座標に複数の家は存在しない
 * 入力例1
 * 3 10
 * 0 0
 * 2 3
 * 9 4
 * 5 4
 * 出力例1
 * 2
 * 入力例2
 * 5 20
 * 3 5
 * 1 2
 * -10 5
 * 8 9
 * -13 -15
 * 10 10
 * 出力例2
 * 4
 */

//不正解

process.stdin.resume();
process.stdin.setEncoding("utf8");
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
var reader = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});
reader.on("line", (line) => {
    lines.push(line.split(" "));
});
reader.on("close", () => {

    const diffrence = (x1, x2) =>
        Math.abs(x1 - x2);

    let count = 0;

    const [houseNum, distance] = lines[0];
    const [myX, myY] = lines[1];
    for (let i = 2; i < lines.length; i++) {
        const [x, y] = lines[i];
        const x_result = diffrence(myX, x);
        const y_result = diffrence(myY, y);
        if (x_result + y_result < distance) count++;
    }
    console.log(count);
});
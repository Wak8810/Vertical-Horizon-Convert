import { e as escape_html } from "../../chunks/escaping.js";
import { S as pop, Q as push } from "../../chunks/index.js";
const replacements = {
  translate: /* @__PURE__ */ new Map([
    [true, "yes"],
    [false, "no"]
  ])
};
function attr(name, value, is_boolean = false) {
  if (value == null || !value && is_boolean || value === "" && name === "class") return "";
  const normalized = name in replacements && replacements[name].get(value) || value;
  const assignment = is_boolean ? "" : `="${escape_html(normalized, true)}"`;
  return ` ${name}${assignment}`;
}
function _page($$payload, $$props) {
  push();
  let before = "丸亀製麺は 一軒一軒が 製麺場\n麺職人達が 日々腕と 感性を 研ぎ澄ます\n丸亀製麺は 全ての店で 池の水から 作る\nそう しなければ こんなにも すぐに 作れない\nうどんで あなたを 驚かせたい丸亀製麺では 全ての店で ハイになる 違法な粉から 作る\nもう これなしでは 生きられない 体に なってしまう\n丸亀製麺は 口から ビームを 放つことが できる\nそれだけではない\n丸亀製麺は しばしば 黒魔術を 使う\n丸亀製麺は 裏社会と 繋がっている\n年に一度 開催される 闇オークションに 出品し私服を 肥やしている\n丸亀製麺は 時を 止めることが できる\n特殊な ストップウォッチを 持っている\n誰も 止められない\nうどんで あなたを 驚かせたい";
  let after = "";
  let isVtoH = 0;
  let is_inJap = true;
  let inBrank = 1;
  $$payload.out += `<center><h1>横書き縦書き変換</h1> <label><input type="radio"${attr("checked", isVtoH === 0, true)}${attr("value", 0)}>横から縦</label> <label><input type="radio"${attr("checked", isVtoH === 1, true)}${attr("value", 1)}>縦から横</label> <br> <label><input type="checkbox"${attr("checked", is_inJap, true)}>日本語あり</label> <br> <label><input type="radio"${attr("checked", inBrank === 1, true)}${attr("value", 1)}>行間で改行</label> <label><input type="radio"${attr("checked", inBrank === 0, true)}${attr("value", 0)}>改行しない</label> <div class="container svelte-p0jn8u"><div class="textbox svelte-p0jn8u"><textarea class="svelte-p0jn8u">`;
  const $$body = escape_html(before);
  if ($$body) {
    $$payload.out += `${$$body}`;
  }
  $$payload.out += `</textarea></div> <h2>→</h2> <button>変換</button> <h2>→</h2> <div class="textbox svelte-p0jn8u"><textarea readonly class="svelte-p0jn8u">`;
  const $$body_1 = escape_html(after);
  if ($$body_1) {
    $$payload.out += `${$$body_1}`;
  }
  $$payload.out += `</textarea></div></div></center>`;
  pop();
}
export {
  _page as default
};

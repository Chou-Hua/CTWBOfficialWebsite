<template>
  <div class="photo-main-title">
    <img src="../assets/workSpace2.webp" alt="CTWB-台灣威浮球俱樂部的ICON"/>
    2023 - ​CTWB規則說明
  </div>
  <div>
    <div class="rules-main">
      <div class="rules-title">
        <span>球場規範</span>
      </div>
    </div>
    <div style="display: flex; justify-content: center; align-items: center; padding-bottom: 50px;">
      <img src="../assets/load.webp" alt="CTWB-台灣威浮球俱樂部的球場規格圖片"/>
    </div>

    <div>
      <div class="content-center-rule">
        <div class="rules-title">
          <span>遊戲玩法</span>
        </div>
      </div>
      <div class="content-center-rule">
        <ol style="width: 925px;">
          <li
            v-for="(rule, index) in gameRlues"
            :key="index"
            style="font-size: 20px; font-weight: bold"
          >
            {{ rule }}
          </li>
        </ol>
      </div>
    </div>

    <div>
      <div class="content-center-rule">
        <div class="rules-title">
          <span>打擊</span>
        </div>
      </div>
      <div class="content-center-rule">
        <ol style="width: 925px;">
          <li
            v-for="(bat, index) in Batting"
            :key="index"
            style="font-size: 20px; font-weight: bold"
          >
            {{ bat }}
          </li>
        </ol>
      </div>
    </div>

    <div>
      <div class="content-center-rule">
        <div class="rules-title">
          <span>投手</span>
        </div>
      </div>
      <div class="content-center-rule">
        <ol style="width: 925px;">
          <li
            v-for="(pitch, index) in pitcher"
            :key="index"
            style="font-size: 20px; font-weight: bold"
          >
            {{ pitch }}
          </li>
        </ol>
      </div>
    </div>

    <div>
      <div class="content-center-rule">
        <div class="rules-title">
          <span>邊界場地規則</span>
        </div>
      </div>
      <div class="content-center-rule">
        <ol style="width: 925px;">
          <li
            v-for="(borderRule, index) in borderRlues"
            :key="index"
            style="font-size: 20px; font-weight: bold"
          >
            {{ borderRule }}
          </li>
        </ol>
      </div>
    </div>

    <div>
      <div class="content-center-rule">
        <div class="rules-title">
          <span>野外場</span>
        </div>
      </div>
      <div class="content-center-rule">
        <ol style="width: 925px;">
          <li
            v-for="(outdoorRlue, index) in outdoorRlues"
            :key="index"
            style="font-size: 20px; font-weight: bold"
          >
            {{ outdoorRlue }}
          </li>
        </ol>
      </div>
    </div>

    <div>
      <div class="content-center-rule">
        <div class="rules-title">
          <span>跑者</span>
        </div>
      </div>
      <div class="content-center-rule">
        <ol style="width:925px;">
          <li
            v-for="(run, index) in runner"
            :key="index"
            style="font-size: 20px; font-weight: bold"
          >
            {{ run }}
          </li>
        </ol>
      </div>
    </div>

    <div>
      <div class="content-center-rule">
        <div class="rules-title">
          <span>防守</span>
        </div>
      </div>
      <div class="content-center-rule">
        <ol style="width:925px;">
          <li
            v-for="(def, index) in defense"
            :key="index"
            style="font-size: 20px; font-weight: bold"
          >
            {{ def }}
          </li>
        </ol>
      </div>
    </div>

    <div>
      <div class="content-center-rule">
        <div class="rules-title">
          <span>即時重播</span>
        </div>
      </div>
      <div class="content-center-rule">
        <ol style="width:925px;">
          <li
            v-for="(rep, index) in replay"
            :key="index"
            style="font-size: 20px; font-weight: bold"
          >
            {{ rep }}
          </li>
        </ol>
      </div>
    </div>


  </div>
</template>

<script setup>
const gameRlues = [
  "3 局規則。在平局的情況下，將進行額外的比賽，直到確定獲勝者為止。",
  "每局 3 出局換場。",
  "4 球壞球保送，3 好球一出局。",
  "如果投球擊中擊球區或其 PVC邊界，則視為好球。任何反之沒擊中即為壞球，觸身球也壞球1顆。",
  "單局進攻如得 8 分換場。",
  "需要 3-5 名玩家的陣容。",
  "只有 3 名球員防守，包括投手。非投手守場員（外野手）在整個比賽中可以自由互換。",
  "出局記錄是通過三振出局、飛出球、觸殺與踩壘出局。",
];
const Batting = [
  "如果打擊過程被球擊中，則判定為壞球。",
  "如果投手投出四個球或故意保送，打者即保送。",
  "在比賽期間，沒在替補名單球員不能直接加入擊球陣容。",
  "打擊者可以在打擊準備過程中更換擊球區，但在投手已經做準備動作時，則禁止更換打擊位置。",
  "球員不能故意靠在本壘板上而被球場擊中。（這可能需要裁判裁決。）",
  "使用的所有合法球棒都是官方的黃色 WIFFLE 球棒，可允許球棒有膠帶裝飾。",
  "如果發現一名球員使用非法球棒，則擊出球將被視為自動出局。",
  "球員可以在他們的擊球中使用任何合法的球棒，並且可以在擊球期間隨時更換球棒。",
  "允許球隊為投手使用 DH(專於投手身份不打擊)。",
];
const pitcher = [
  "投手需要用後腳跟接觸投球版。",
  "如果投手換下場，他們將不能以投手身份重新進入比賽。",
  "投球必須低於速度限制（75 英里/小時）(120 公里/小時)。超過速度限制的投球將被判定為自動球。如果球場時速為 73 或 74 英里/小時，則會發出警告。每局給出一次警告，並且在同一局中讀取 73+ mph 的任何額外投球都被視為一個球。",
  "每一局投手都有重複獲得速度警告的機會。",
  "投手必須等待打者在投球前就位。如果違反此規則，裁判將裁定禁止投球。",
];

const borderRlues = [
  "如果球在彈跳時越過圍欄，進入圍欄下方，或穿過球場，則視為二壘安打。",
  "如果一名球員在空中擊中其中一根全壘打杆，而它超過了最近全壘打牆的高度，則稱為全壘打。",
  "如果球從全壘打杆上方的飛過，裁判可能需要酌情決定是本壘打還是界外球。從全壘打杆垂直向上延伸的假想垂直線將用於確定球是在界外線內外。",
  "如果玩家在越過柵欄時接住球，將判斷他們接球的時間。球員越過圍欄接球時，身體的一部分必須處於活動狀態。",
  "如果一名球員將球扔出界外，每位跑壘員將推進1壘。",
  "如果一個球在跑者踩到本壘板前，扔進本壘並且擊中了擋板或好球區，且還在比賽時間，那則視為阻殺成功出局。",
  "球必須觸及或落點位置為界內線內，此球才有效。",
  "如果犯規線被磨損，將通過裁判的判斷或即時重播來判斷。",
];

const outdoorRlues = [
  "如果球在彈跳時越過圍欄，進入圍欄下方，或穿過球場，則視為二壘安打。",
  "如果一名球員在空中擊中其中一根全壘打杆，而它超過了最近全壘打牆的高度，則稱為全壘打。",
  "如果球從全壘打杆上方的飛過，裁判可能需要酌情決定是本壘打還是界外球。從全壘打杆垂直向上延伸的假想垂直線將用於確定球是在界外線內外。",
  "如果玩家在越過柵欄時接住球，將判斷他們接球的時間。球員越過圍欄接球時，身體的一部分必須處於活動狀態。",
  "如果一名球員將球扔出界外，每位跑壘員將推進1壘。",
  "如果一個球在跑者踩到本壘板前，扔進本壘並且擊中了擋板或好球區，且還在比賽時間，那則視為阻殺成功出局。",
  "球必須觸及或落點位置為界內線內，此球才有效。",
  "如果犯規線被磨損，將通過裁判的判斷或即時重播來判斷。",
];

const runner = [
  "跑壘員可以通過守備方丟非頭部位置、踩壘出局。",
  "如果球在跑壘員觸及本壘板之前擊中擋板或好球區，則跑壘員算出局。",
  "守方沒有藏球阻殺。",
  "如果跑者沒有依照底線跑壘，他們將被淘汰出局。基線是在跑步者所走的路徑上定義的。依照裁判依狀況判斷。",
  "在比賽期間的任何時候都不允許盜壘與偷跑。",
  "在比賽期間，球員不能在沒有替補的情況下加入擊球陣容。",
  "允許滑壘，但你不能在試圖推進到基地時翻過防守者。",
  "從比賽中扔出場外會獎勵每位跑壘員從他們當前的位置增加一個壘。",
  "如果守場員位於跑壘員的底線，跑壘員應盡可能繞過他們。如果守場員故意阻礙跑壘員前進，則為球員干擾，跑壘員將獲得下一壘。",
  "如果跑壘員擋路或故意干擾守場員，則該跑壘員出局。",
  "在全壘打中，不能進行任何上訴。",
  "如果擊球手擊球並在空中或彈跳時擊中跑壘員，則該跑壘員被淘汰出局。",
  "如果一支球隊有多位跑壘員，跑壘員可以根據需要調換位置。",
  "對於擁有3人陣容的球隊，必要時幽靈跑者於壘。滿壘則為球員站2.3壘，空出一壘，打者擊出需盡可能推進壘包，幽靈跑者則是看當局打者推進壘數，往前+一壘。",
];
const defense = [
  "3或4名球員同時上場，包括投手。",
  "陣容中的任何人都可以擔任兩名非投手外野手之一。非投手守場員（外野手）可以在兩局之間的任何時間互換，除非有改變的原因，例如受傷。",
  "當投手將球放在投手丘上並且所有當前的跑壘員都固定在一個壘上時，一場比賽就宣告結束，時間結束。必要時將使用裁判的自由裁量權。",
  "內場飛行規則適用。",
  "如果有一個飛球擊中守場員然後在空中越過圍欄，則稱為全壘打。",
];
const replay = [
  "所有即時重播將由裁判發起。",
  "除了投球和擊球外，任何給定的比賽都可以進行審查。",
  "如果在回放審查期間沒有看到足夠的對比證據，則該領域的原始呼叫將停止。",
];
</script>

<style></style>

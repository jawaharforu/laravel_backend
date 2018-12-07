(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["registration-registration-module"],{

/***/ "./node_modules/intl-tel-input/build/css/intlTelInput.css":
/*!****************************************************************!*\
  !*** ./node_modules/intl-tel-input/build/css/intlTelInput.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Variables declared here can be overridden by consuming applications, with\n * the help of the `!default` flag.\n *\n * @example\n *     // overriding $hoverColor\n *     $hoverColor: rgba(red, 0.05);\n *\n *     // overriding image path\n *     $flagsImagePath: \"images/\";\n *\n *     // import the scss file after the overrides\n *     @import \"bower_component/intl-tel-input/src/css/intlTelInput\";\n */\n.intl-tel-input {\n  position: relative;\n  display: inline-block; }\n.intl-tel-input * {\n    box-sizing: border-box;\n    -moz-box-sizing: border-box; }\n.intl-tel-input .hide {\n    display: none; }\n.intl-tel-input .v-hide {\n    visibility: hidden; }\n.intl-tel-input input, .intl-tel-input input[type=text], .intl-tel-input input[type=tel] {\n    position: relative;\n    z-index: 0;\n    margin-top: 0 !important;\n    margin-bottom: 0 !important;\n    padding-right: 36px;\n    margin-right: 0; }\n.intl-tel-input .flag-container {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    padding: 1px; }\n.intl-tel-input .selected-flag {\n    z-index: 1;\n    position: relative;\n    width: 36px;\n    height: 100%;\n    padding: 0 0 0 8px; }\n.intl-tel-input .selected-flag .iti-flag {\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      margin: auto; }\n.intl-tel-input .selected-flag .iti-arrow {\n      position: absolute;\n      top: 50%;\n      margin-top: -2px;\n      right: 6px;\n      width: 0;\n      height: 0;\n      border-left: 3px solid transparent;\n      border-right: 3px solid transparent;\n      border-top: 4px solid #555; }\n.intl-tel-input .selected-flag .iti-arrow.up {\n        border-top: none;\n        border-bottom: 4px solid #555; }\n.intl-tel-input .country-list {\n    position: absolute;\n    z-index: 2;\n    list-style: none;\n    text-align: left;\n    padding: 0;\n    margin: 0 0 0 -1px;\n    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);\n    background-color: white;\n    border: 1px solid #CCC;\n    white-space: nowrap;\n    max-height: 200px;\n    overflow-y: scroll; }\n.intl-tel-input .country-list.dropup {\n      bottom: 100%;\n      margin-bottom: -1px; }\n.intl-tel-input .country-list .flag-box {\n      display: inline-block;\n      width: 20px; }\n@media (max-width: 500px) {\n      .intl-tel-input .country-list {\n        white-space: normal; } }\n.intl-tel-input .country-list .divider {\n      padding-bottom: 5px;\n      margin-bottom: 5px;\n      border-bottom: 1px solid #CCC; }\n.intl-tel-input .country-list .country {\n      padding: 5px 10px; }\n.intl-tel-input .country-list .country .dial-code {\n        color: #999; }\n.intl-tel-input .country-list .country.highlight {\n      background-color: rgba(0, 0, 0, 0.05); }\n.intl-tel-input .country-list .flag-box, .intl-tel-input .country-list .country-name, .intl-tel-input .country-list .dial-code {\n      vertical-align: middle; }\n.intl-tel-input .country-list .flag-box, .intl-tel-input .country-list .country-name {\n      margin-right: 6px; }\n.intl-tel-input.allow-dropdown input, .intl-tel-input.allow-dropdown input[type=text], .intl-tel-input.allow-dropdown input[type=tel], .intl-tel-input.separate-dial-code input, .intl-tel-input.separate-dial-code input[type=text], .intl-tel-input.separate-dial-code input[type=tel] {\n    padding-right: 6px;\n    padding-left: 52px;\n    margin-left: 0; }\n.intl-tel-input.allow-dropdown .flag-container, .intl-tel-input.separate-dial-code .flag-container {\n    right: auto;\n    left: 0; }\n.intl-tel-input.allow-dropdown .selected-flag, .intl-tel-input.separate-dial-code .selected-flag {\n    width: 46px; }\n.intl-tel-input.allow-dropdown .flag-container:hover {\n    cursor: pointer; }\n.intl-tel-input.allow-dropdown .flag-container:hover .selected-flag {\n      background-color: rgba(0, 0, 0, 0.05); }\n.intl-tel-input.allow-dropdown input[disabled] + .flag-container:hover, .intl-tel-input.allow-dropdown input[readonly] + .flag-container:hover {\n    cursor: default; }\n.intl-tel-input.allow-dropdown input[disabled] + .flag-container:hover .selected-flag, .intl-tel-input.allow-dropdown input[readonly] + .flag-container:hover .selected-flag {\n      background-color: transparent; }\n.intl-tel-input.separate-dial-code .selected-flag {\n    background-color: rgba(0, 0, 0, 0.05);\n    display: table; }\n.intl-tel-input.separate-dial-code .selected-dial-code {\n    display: table-cell;\n    vertical-align: middle;\n    padding-left: 28px; }\n.intl-tel-input.separate-dial-code.iti-sdc-2 input, .intl-tel-input.separate-dial-code.iti-sdc-2 input[type=text], .intl-tel-input.separate-dial-code.iti-sdc-2 input[type=tel] {\n    padding-left: 66px; }\n.intl-tel-input.separate-dial-code.iti-sdc-2 .selected-flag {\n    width: 60px; }\n.intl-tel-input.separate-dial-code.allow-dropdown.iti-sdc-2 input, .intl-tel-input.separate-dial-code.allow-dropdown.iti-sdc-2 input[type=text], .intl-tel-input.separate-dial-code.allow-dropdown.iti-sdc-2 input[type=tel] {\n    padding-left: 76px; }\n.intl-tel-input.separate-dial-code.allow-dropdown.iti-sdc-2 .selected-flag {\n    width: 70px; }\n.intl-tel-input.separate-dial-code.iti-sdc-3 input, .intl-tel-input.separate-dial-code.iti-sdc-3 input[type=text], .intl-tel-input.separate-dial-code.iti-sdc-3 input[type=tel] {\n    padding-left: 74px; }\n.intl-tel-input.separate-dial-code.iti-sdc-3 .selected-flag {\n    width: 68px; }\n.intl-tel-input.separate-dial-code.allow-dropdown.iti-sdc-3 input, .intl-tel-input.separate-dial-code.allow-dropdown.iti-sdc-3 input[type=text], .intl-tel-input.separate-dial-code.allow-dropdown.iti-sdc-3 input[type=tel] {\n    padding-left: 84px; }\n.intl-tel-input.separate-dial-code.allow-dropdown.iti-sdc-3 .selected-flag {\n    width: 78px; }\n.intl-tel-input.separate-dial-code.iti-sdc-4 input, .intl-tel-input.separate-dial-code.iti-sdc-4 input[type=text], .intl-tel-input.separate-dial-code.iti-sdc-4 input[type=tel] {\n    padding-left: 82px; }\n.intl-tel-input.separate-dial-code.iti-sdc-4 .selected-flag {\n    width: 76px; }\n.intl-tel-input.separate-dial-code.allow-dropdown.iti-sdc-4 input, .intl-tel-input.separate-dial-code.allow-dropdown.iti-sdc-4 input[type=text], .intl-tel-input.separate-dial-code.allow-dropdown.iti-sdc-4 input[type=tel] {\n    padding-left: 92px; }\n.intl-tel-input.separate-dial-code.allow-dropdown.iti-sdc-4 .selected-flag {\n    width: 86px; }\n.intl-tel-input.separate-dial-code.iti-sdc-5 input, .intl-tel-input.separate-dial-code.iti-sdc-5 input[type=text], .intl-tel-input.separate-dial-code.iti-sdc-5 input[type=tel] {\n    padding-left: 90px; }\n.intl-tel-input.separate-dial-code.iti-sdc-5 .selected-flag {\n    width: 84px; }\n.intl-tel-input.separate-dial-code.allow-dropdown.iti-sdc-5 input, .intl-tel-input.separate-dial-code.allow-dropdown.iti-sdc-5 input[type=text], .intl-tel-input.separate-dial-code.allow-dropdown.iti-sdc-5 input[type=tel] {\n    padding-left: 100px; }\n.intl-tel-input.separate-dial-code.allow-dropdown.iti-sdc-5 .selected-flag {\n    width: 94px; }\n.intl-tel-input.iti-container {\n    position: absolute;\n    top: -1000px;\n    left: -1000px;\n    z-index: 1060;\n    padding: 1px; }\n.intl-tel-input.iti-container:hover {\n      cursor: pointer; }\n.iti-mobile .intl-tel-input.iti-container {\n  top: 30px;\n  bottom: 30px;\n  left: 30px;\n  right: 30px;\n  position: fixed; }\n.iti-mobile .intl-tel-input .country-list {\n  max-height: 100%;\n  width: 100%; }\n.iti-mobile .intl-tel-input .country-list .country {\n    padding: 10px 10px;\n    line-height: 1.5em; }\n.iti-flag {\n  width: 20px; }\n.iti-flag.be {\n    width: 18px; }\n.iti-flag.ch {\n    width: 15px; }\n.iti-flag.mc {\n    width: 19px; }\n.iti-flag.ne {\n    width: 18px; }\n.iti-flag.np {\n    width: 13px; }\n.iti-flag.va {\n    width: 15px; }\n@media only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx) {\n    .iti-flag {\n      background-size: 5630px 15px; } }\n.iti-flag.ac {\n    height: 10px;\n    background-position: 0px 0px; }\n.iti-flag.ad {\n    height: 14px;\n    background-position: -22px 0px; }\n.iti-flag.ae {\n    height: 10px;\n    background-position: -44px 0px; }\n.iti-flag.af {\n    height: 14px;\n    background-position: -66px 0px; }\n.iti-flag.ag {\n    height: 14px;\n    background-position: -88px 0px; }\n.iti-flag.ai {\n    height: 10px;\n    background-position: -110px 0px; }\n.iti-flag.al {\n    height: 15px;\n    background-position: -132px 0px; }\n.iti-flag.am {\n    height: 10px;\n    background-position: -154px 0px; }\n.iti-flag.ao {\n    height: 14px;\n    background-position: -176px 0px; }\n.iti-flag.aq {\n    height: 14px;\n    background-position: -198px 0px; }\n.iti-flag.ar {\n    height: 13px;\n    background-position: -220px 0px; }\n.iti-flag.as {\n    height: 10px;\n    background-position: -242px 0px; }\n.iti-flag.at {\n    height: 14px;\n    background-position: -264px 0px; }\n.iti-flag.au {\n    height: 10px;\n    background-position: -286px 0px; }\n.iti-flag.aw {\n    height: 14px;\n    background-position: -308px 0px; }\n.iti-flag.ax {\n    height: 13px;\n    background-position: -330px 0px; }\n.iti-flag.az {\n    height: 10px;\n    background-position: -352px 0px; }\n.iti-flag.ba {\n    height: 10px;\n    background-position: -374px 0px; }\n.iti-flag.bb {\n    height: 14px;\n    background-position: -396px 0px; }\n.iti-flag.bd {\n    height: 12px;\n    background-position: -418px 0px; }\n.iti-flag.be {\n    height: 15px;\n    background-position: -440px 0px; }\n.iti-flag.bf {\n    height: 14px;\n    background-position: -460px 0px; }\n.iti-flag.bg {\n    height: 12px;\n    background-position: -482px 0px; }\n.iti-flag.bh {\n    height: 12px;\n    background-position: -504px 0px; }\n.iti-flag.bi {\n    height: 12px;\n    background-position: -526px 0px; }\n.iti-flag.bj {\n    height: 14px;\n    background-position: -548px 0px; }\n.iti-flag.bl {\n    height: 14px;\n    background-position: -570px 0px; }\n.iti-flag.bm {\n    height: 10px;\n    background-position: -592px 0px; }\n.iti-flag.bn {\n    height: 10px;\n    background-position: -614px 0px; }\n.iti-flag.bo {\n    height: 14px;\n    background-position: -636px 0px; }\n.iti-flag.bq {\n    height: 14px;\n    background-position: -658px 0px; }\n.iti-flag.br {\n    height: 14px;\n    background-position: -680px 0px; }\n.iti-flag.bs {\n    height: 10px;\n    background-position: -702px 0px; }\n.iti-flag.bt {\n    height: 14px;\n    background-position: -724px 0px; }\n.iti-flag.bv {\n    height: 15px;\n    background-position: -746px 0px; }\n.iti-flag.bw {\n    height: 14px;\n    background-position: -768px 0px; }\n.iti-flag.by {\n    height: 10px;\n    background-position: -790px 0px; }\n.iti-flag.bz {\n    height: 14px;\n    background-position: -812px 0px; }\n.iti-flag.ca {\n    height: 10px;\n    background-position: -834px 0px; }\n.iti-flag.cc {\n    height: 10px;\n    background-position: -856px 0px; }\n.iti-flag.cd {\n    height: 15px;\n    background-position: -878px 0px; }\n.iti-flag.cf {\n    height: 14px;\n    background-position: -900px 0px; }\n.iti-flag.cg {\n    height: 14px;\n    background-position: -922px 0px; }\n.iti-flag.ch {\n    height: 15px;\n    background-position: -944px 0px; }\n.iti-flag.ci {\n    height: 14px;\n    background-position: -961px 0px; }\n.iti-flag.ck {\n    height: 10px;\n    background-position: -983px 0px; }\n.iti-flag.cl {\n    height: 14px;\n    background-position: -1005px 0px; }\n.iti-flag.cm {\n    height: 14px;\n    background-position: -1027px 0px; }\n.iti-flag.cn {\n    height: 14px;\n    background-position: -1049px 0px; }\n.iti-flag.co {\n    height: 14px;\n    background-position: -1071px 0px; }\n.iti-flag.cp {\n    height: 14px;\n    background-position: -1093px 0px; }\n.iti-flag.cr {\n    height: 12px;\n    background-position: -1115px 0px; }\n.iti-flag.cu {\n    height: 10px;\n    background-position: -1137px 0px; }\n.iti-flag.cv {\n    height: 12px;\n    background-position: -1159px 0px; }\n.iti-flag.cw {\n    height: 14px;\n    background-position: -1181px 0px; }\n.iti-flag.cx {\n    height: 10px;\n    background-position: -1203px 0px; }\n.iti-flag.cy {\n    height: 13px;\n    background-position: -1225px 0px; }\n.iti-flag.cz {\n    height: 14px;\n    background-position: -1247px 0px; }\n.iti-flag.de {\n    height: 12px;\n    background-position: -1269px 0px; }\n.iti-flag.dg {\n    height: 10px;\n    background-position: -1291px 0px; }\n.iti-flag.dj {\n    height: 14px;\n    background-position: -1313px 0px; }\n.iti-flag.dk {\n    height: 15px;\n    background-position: -1335px 0px; }\n.iti-flag.dm {\n    height: 10px;\n    background-position: -1357px 0px; }\n.iti-flag.do {\n    height: 13px;\n    background-position: -1379px 0px; }\n.iti-flag.dz {\n    height: 14px;\n    background-position: -1401px 0px; }\n.iti-flag.ea {\n    height: 14px;\n    background-position: -1423px 0px; }\n.iti-flag.ec {\n    height: 14px;\n    background-position: -1445px 0px; }\n.iti-flag.ee {\n    height: 13px;\n    background-position: -1467px 0px; }\n.iti-flag.eg {\n    height: 14px;\n    background-position: -1489px 0px; }\n.iti-flag.eh {\n    height: 10px;\n    background-position: -1511px 0px; }\n.iti-flag.er {\n    height: 10px;\n    background-position: -1533px 0px; }\n.iti-flag.es {\n    height: 14px;\n    background-position: -1555px 0px; }\n.iti-flag.et {\n    height: 10px;\n    background-position: -1577px 0px; }\n.iti-flag.eu {\n    height: 14px;\n    background-position: -1599px 0px; }\n.iti-flag.fi {\n    height: 12px;\n    background-position: -1621px 0px; }\n.iti-flag.fj {\n    height: 10px;\n    background-position: -1643px 0px; }\n.iti-flag.fk {\n    height: 10px;\n    background-position: -1665px 0px; }\n.iti-flag.fm {\n    height: 11px;\n    background-position: -1687px 0px; }\n.iti-flag.fo {\n    height: 15px;\n    background-position: -1709px 0px; }\n.iti-flag.fr {\n    height: 14px;\n    background-position: -1731px 0px; }\n.iti-flag.ga {\n    height: 15px;\n    background-position: -1753px 0px; }\n.iti-flag.gb {\n    height: 10px;\n    background-position: -1775px 0px; }\n.iti-flag.gd {\n    height: 12px;\n    background-position: -1797px 0px; }\n.iti-flag.ge {\n    height: 14px;\n    background-position: -1819px 0px; }\n.iti-flag.gf {\n    height: 14px;\n    background-position: -1841px 0px; }\n.iti-flag.gg {\n    height: 14px;\n    background-position: -1863px 0px; }\n.iti-flag.gh {\n    height: 14px;\n    background-position: -1885px 0px; }\n.iti-flag.gi {\n    height: 10px;\n    background-position: -1907px 0px; }\n.iti-flag.gl {\n    height: 14px;\n    background-position: -1929px 0px; }\n.iti-flag.gm {\n    height: 14px;\n    background-position: -1951px 0px; }\n.iti-flag.gn {\n    height: 14px;\n    background-position: -1973px 0px; }\n.iti-flag.gp {\n    height: 14px;\n    background-position: -1995px 0px; }\n.iti-flag.gq {\n    height: 14px;\n    background-position: -2017px 0px; }\n.iti-flag.gr {\n    height: 14px;\n    background-position: -2039px 0px; }\n.iti-flag.gs {\n    height: 10px;\n    background-position: -2061px 0px; }\n.iti-flag.gt {\n    height: 13px;\n    background-position: -2083px 0px; }\n.iti-flag.gu {\n    height: 11px;\n    background-position: -2105px 0px; }\n.iti-flag.gw {\n    height: 10px;\n    background-position: -2127px 0px; }\n.iti-flag.gy {\n    height: 12px;\n    background-position: -2149px 0px; }\n.iti-flag.hk {\n    height: 14px;\n    background-position: -2171px 0px; }\n.iti-flag.hm {\n    height: 10px;\n    background-position: -2193px 0px; }\n.iti-flag.hn {\n    height: 10px;\n    background-position: -2215px 0px; }\n.iti-flag.hr {\n    height: 10px;\n    background-position: -2237px 0px; }\n.iti-flag.ht {\n    height: 12px;\n    background-position: -2259px 0px; }\n.iti-flag.hu {\n    height: 10px;\n    background-position: -2281px 0px; }\n.iti-flag.ic {\n    height: 14px;\n    background-position: -2303px 0px; }\n.iti-flag.id {\n    height: 14px;\n    background-position: -2325px 0px; }\n.iti-flag.ie {\n    height: 10px;\n    background-position: -2347px 0px; }\n.iti-flag.il {\n    height: 15px;\n    background-position: -2369px 0px; }\n.iti-flag.im {\n    height: 10px;\n    background-position: -2391px 0px; }\n.iti-flag.in {\n    height: 14px;\n    background-position: -2413px 0px; }\n.iti-flag.io {\n    height: 10px;\n    background-position: -2435px 0px; }\n.iti-flag.iq {\n    height: 14px;\n    background-position: -2457px 0px; }\n.iti-flag.ir {\n    height: 12px;\n    background-position: -2479px 0px; }\n.iti-flag.is {\n    height: 15px;\n    background-position: -2501px 0px; }\n.iti-flag.it {\n    height: 14px;\n    background-position: -2523px 0px; }\n.iti-flag.je {\n    height: 12px;\n    background-position: -2545px 0px; }\n.iti-flag.jm {\n    height: 10px;\n    background-position: -2567px 0px; }\n.iti-flag.jo {\n    height: 10px;\n    background-position: -2589px 0px; }\n.iti-flag.jp {\n    height: 14px;\n    background-position: -2611px 0px; }\n.iti-flag.ke {\n    height: 14px;\n    background-position: -2633px 0px; }\n.iti-flag.kg {\n    height: 12px;\n    background-position: -2655px 0px; }\n.iti-flag.kh {\n    height: 13px;\n    background-position: -2677px 0px; }\n.iti-flag.ki {\n    height: 10px;\n    background-position: -2699px 0px; }\n.iti-flag.km {\n    height: 12px;\n    background-position: -2721px 0px; }\n.iti-flag.kn {\n    height: 14px;\n    background-position: -2743px 0px; }\n.iti-flag.kp {\n    height: 10px;\n    background-position: -2765px 0px; }\n.iti-flag.kr {\n    height: 14px;\n    background-position: -2787px 0px; }\n.iti-flag.kw {\n    height: 10px;\n    background-position: -2809px 0px; }\n.iti-flag.ky {\n    height: 10px;\n    background-position: -2831px 0px; }\n.iti-flag.kz {\n    height: 10px;\n    background-position: -2853px 0px; }\n.iti-flag.la {\n    height: 14px;\n    background-position: -2875px 0px; }\n.iti-flag.lb {\n    height: 14px;\n    background-position: -2897px 0px; }\n.iti-flag.lc {\n    height: 10px;\n    background-position: -2919px 0px; }\n.iti-flag.li {\n    height: 12px;\n    background-position: -2941px 0px; }\n.iti-flag.lk {\n    height: 10px;\n    background-position: -2963px 0px; }\n.iti-flag.lr {\n    height: 11px;\n    background-position: -2985px 0px; }\n.iti-flag.ls {\n    height: 14px;\n    background-position: -3007px 0px; }\n.iti-flag.lt {\n    height: 12px;\n    background-position: -3029px 0px; }\n.iti-flag.lu {\n    height: 12px;\n    background-position: -3051px 0px; }\n.iti-flag.lv {\n    height: 10px;\n    background-position: -3073px 0px; }\n.iti-flag.ly {\n    height: 10px;\n    background-position: -3095px 0px; }\n.iti-flag.ma {\n    height: 14px;\n    background-position: -3117px 0px; }\n.iti-flag.mc {\n    height: 15px;\n    background-position: -3139px 0px; }\n.iti-flag.md {\n    height: 10px;\n    background-position: -3160px 0px; }\n.iti-flag.me {\n    height: 10px;\n    background-position: -3182px 0px; }\n.iti-flag.mf {\n    height: 14px;\n    background-position: -3204px 0px; }\n.iti-flag.mg {\n    height: 14px;\n    background-position: -3226px 0px; }\n.iti-flag.mh {\n    height: 11px;\n    background-position: -3248px 0px; }\n.iti-flag.mk {\n    height: 10px;\n    background-position: -3270px 0px; }\n.iti-flag.ml {\n    height: 14px;\n    background-position: -3292px 0px; }\n.iti-flag.mm {\n    height: 14px;\n    background-position: -3314px 0px; }\n.iti-flag.mn {\n    height: 10px;\n    background-position: -3336px 0px; }\n.iti-flag.mo {\n    height: 14px;\n    background-position: -3358px 0px; }\n.iti-flag.mp {\n    height: 10px;\n    background-position: -3380px 0px; }\n.iti-flag.mq {\n    height: 14px;\n    background-position: -3402px 0px; }\n.iti-flag.mr {\n    height: 14px;\n    background-position: -3424px 0px; }\n.iti-flag.ms {\n    height: 10px;\n    background-position: -3446px 0px; }\n.iti-flag.mt {\n    height: 14px;\n    background-position: -3468px 0px; }\n.iti-flag.mu {\n    height: 14px;\n    background-position: -3490px 0px; }\n.iti-flag.mv {\n    height: 14px;\n    background-position: -3512px 0px; }\n.iti-flag.mw {\n    height: 14px;\n    background-position: -3534px 0px; }\n.iti-flag.mx {\n    height: 12px;\n    background-position: -3556px 0px; }\n.iti-flag.my {\n    height: 10px;\n    background-position: -3578px 0px; }\n.iti-flag.mz {\n    height: 14px;\n    background-position: -3600px 0px; }\n.iti-flag.na {\n    height: 14px;\n    background-position: -3622px 0px; }\n.iti-flag.nc {\n    height: 10px;\n    background-position: -3644px 0px; }\n.iti-flag.ne {\n    height: 15px;\n    background-position: -3666px 0px; }\n.iti-flag.nf {\n    height: 10px;\n    background-position: -3686px 0px; }\n.iti-flag.ng {\n    height: 10px;\n    background-position: -3708px 0px; }\n.iti-flag.ni {\n    height: 12px;\n    background-position: -3730px 0px; }\n.iti-flag.nl {\n    height: 14px;\n    background-position: -3752px 0px; }\n.iti-flag.no {\n    height: 15px;\n    background-position: -3774px 0px; }\n.iti-flag.np {\n    height: 15px;\n    background-position: -3796px 0px; }\n.iti-flag.nr {\n    height: 10px;\n    background-position: -3811px 0px; }\n.iti-flag.nu {\n    height: 10px;\n    background-position: -3833px 0px; }\n.iti-flag.nz {\n    height: 10px;\n    background-position: -3855px 0px; }\n.iti-flag.om {\n    height: 10px;\n    background-position: -3877px 0px; }\n.iti-flag.pa {\n    height: 14px;\n    background-position: -3899px 0px; }\n.iti-flag.pe {\n    height: 14px;\n    background-position: -3921px 0px; }\n.iti-flag.pf {\n    height: 14px;\n    background-position: -3943px 0px; }\n.iti-flag.pg {\n    height: 15px;\n    background-position: -3965px 0px; }\n.iti-flag.ph {\n    height: 10px;\n    background-position: -3987px 0px; }\n.iti-flag.pk {\n    height: 14px;\n    background-position: -4009px 0px; }\n.iti-flag.pl {\n    height: 13px;\n    background-position: -4031px 0px; }\n.iti-flag.pm {\n    height: 14px;\n    background-position: -4053px 0px; }\n.iti-flag.pn {\n    height: 10px;\n    background-position: -4075px 0px; }\n.iti-flag.pr {\n    height: 14px;\n    background-position: -4097px 0px; }\n.iti-flag.ps {\n    height: 10px;\n    background-position: -4119px 0px; }\n.iti-flag.pt {\n    height: 14px;\n    background-position: -4141px 0px; }\n.iti-flag.pw {\n    height: 13px;\n    background-position: -4163px 0px; }\n.iti-flag.py {\n    height: 11px;\n    background-position: -4185px 0px; }\n.iti-flag.qa {\n    height: 8px;\n    background-position: -4207px 0px; }\n.iti-flag.re {\n    height: 14px;\n    background-position: -4229px 0px; }\n.iti-flag.ro {\n    height: 14px;\n    background-position: -4251px 0px; }\n.iti-flag.rs {\n    height: 14px;\n    background-position: -4273px 0px; }\n.iti-flag.ru {\n    height: 14px;\n    background-position: -4295px 0px; }\n.iti-flag.rw {\n    height: 14px;\n    background-position: -4317px 0px; }\n.iti-flag.sa {\n    height: 14px;\n    background-position: -4339px 0px; }\n.iti-flag.sb {\n    height: 10px;\n    background-position: -4361px 0px; }\n.iti-flag.sc {\n    height: 10px;\n    background-position: -4383px 0px; }\n.iti-flag.sd {\n    height: 10px;\n    background-position: -4405px 0px; }\n.iti-flag.se {\n    height: 13px;\n    background-position: -4427px 0px; }\n.iti-flag.sg {\n    height: 14px;\n    background-position: -4449px 0px; }\n.iti-flag.sh {\n    height: 10px;\n    background-position: -4471px 0px; }\n.iti-flag.si {\n    height: 10px;\n    background-position: -4493px 0px; }\n.iti-flag.sj {\n    height: 15px;\n    background-position: -4515px 0px; }\n.iti-flag.sk {\n    height: 14px;\n    background-position: -4537px 0px; }\n.iti-flag.sl {\n    height: 14px;\n    background-position: -4559px 0px; }\n.iti-flag.sm {\n    height: 15px;\n    background-position: -4581px 0px; }\n.iti-flag.sn {\n    height: 14px;\n    background-position: -4603px 0px; }\n.iti-flag.so {\n    height: 14px;\n    background-position: -4625px 0px; }\n.iti-flag.sr {\n    height: 14px;\n    background-position: -4647px 0px; }\n.iti-flag.ss {\n    height: 10px;\n    background-position: -4669px 0px; }\n.iti-flag.st {\n    height: 10px;\n    background-position: -4691px 0px; }\n.iti-flag.sv {\n    height: 12px;\n    background-position: -4713px 0px; }\n.iti-flag.sx {\n    height: 14px;\n    background-position: -4735px 0px; }\n.iti-flag.sy {\n    height: 14px;\n    background-position: -4757px 0px; }\n.iti-flag.sz {\n    height: 14px;\n    background-position: -4779px 0px; }\n.iti-flag.ta {\n    height: 10px;\n    background-position: -4801px 0px; }\n.iti-flag.tc {\n    height: 10px;\n    background-position: -4823px 0px; }\n.iti-flag.td {\n    height: 14px;\n    background-position: -4845px 0px; }\n.iti-flag.tf {\n    height: 14px;\n    background-position: -4867px 0px; }\n.iti-flag.tg {\n    height: 13px;\n    background-position: -4889px 0px; }\n.iti-flag.th {\n    height: 14px;\n    background-position: -4911px 0px; }\n.iti-flag.tj {\n    height: 10px;\n    background-position: -4933px 0px; }\n.iti-flag.tk {\n    height: 10px;\n    background-position: -4955px 0px; }\n.iti-flag.tl {\n    height: 10px;\n    background-position: -4977px 0px; }\n.iti-flag.tm {\n    height: 14px;\n    background-position: -4999px 0px; }\n.iti-flag.tn {\n    height: 14px;\n    background-position: -5021px 0px; }\n.iti-flag.to {\n    height: 10px;\n    background-position: -5043px 0px; }\n.iti-flag.tr {\n    height: 14px;\n    background-position: -5065px 0px; }\n.iti-flag.tt {\n    height: 12px;\n    background-position: -5087px 0px; }\n.iti-flag.tv {\n    height: 10px;\n    background-position: -5109px 0px; }\n.iti-flag.tw {\n    height: 14px;\n    background-position: -5131px 0px; }\n.iti-flag.tz {\n    height: 14px;\n    background-position: -5153px 0px; }\n.iti-flag.ua {\n    height: 14px;\n    background-position: -5175px 0px; }\n.iti-flag.ug {\n    height: 14px;\n    background-position: -5197px 0px; }\n.iti-flag.um {\n    height: 11px;\n    background-position: -5219px 0px; }\n.iti-flag.us {\n    height: 11px;\n    background-position: -5241px 0px; }\n.iti-flag.uy {\n    height: 14px;\n    background-position: -5263px 0px; }\n.iti-flag.uz {\n    height: 10px;\n    background-position: -5285px 0px; }\n.iti-flag.va {\n    height: 15px;\n    background-position: -5307px 0px; }\n.iti-flag.vc {\n    height: 14px;\n    background-position: -5324px 0px; }\n.iti-flag.ve {\n    height: 14px;\n    background-position: -5346px 0px; }\n.iti-flag.vg {\n    height: 10px;\n    background-position: -5368px 0px; }\n.iti-flag.vi {\n    height: 14px;\n    background-position: -5390px 0px; }\n.iti-flag.vn {\n    height: 14px;\n    background-position: -5412px 0px; }\n.iti-flag.vu {\n    height: 12px;\n    background-position: -5434px 0px; }\n.iti-flag.wf {\n    height: 14px;\n    background-position: -5456px 0px; }\n.iti-flag.ws {\n    height: 10px;\n    background-position: -5478px 0px; }\n.iti-flag.xk {\n    height: 15px;\n    background-position: -5500px 0px; }\n.iti-flag.ye {\n    height: 14px;\n    background-position: -5522px 0px; }\n.iti-flag.yt {\n    height: 14px;\n    background-position: -5544px 0px; }\n.iti-flag.za {\n    height: 14px;\n    background-position: -5566px 0px; }\n.iti-flag.zm {\n    height: 14px;\n    background-position: -5588px 0px; }\n.iti-flag.zw {\n    height: 10px;\n    background-position: -5610px 0px; }\n.iti-flag {\n  width: 20px;\n  height: 15px;\n  box-shadow: 0px 0px 1px 0px #888;\n  background-image: url('flags.png');\n  background-repeat: no-repeat;\n  background-color: #DBDBDB;\n  background-position: 20px 0; }\n@media only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx) {\n    .iti-flag {\n      background-image: url('flags@2x.png'); } }\n.iti-flag.np {\n  background-color: transparent; }\n"

/***/ }),

/***/ "./src/app/admin/user/user.service.ts":
/*!********************************************!*\
  !*** ./src/app/admin/user/user.service.ts ***!
  \********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-jwt */ "./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_jwt__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserService = /** @class */ (function () {
    function UserService(_commonService, http) {
        this._commonService = _commonService;
        this.http = http;
        this.link = this._commonService.link;
    }
    UserService.prototype.addUser = function (newUser) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this.http.post(this.link + "/users/", newUser, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    UserService.prototype.getUser = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Content-type', 'application/json');
        headers.append('Authorization', this._commonService.getUserToken());
        return this.http.get(this.link + "/users/", { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    UserService.prototype.deleteUser = function (userid) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Content-type', 'application/json');
        headers.append('Authorization', this._commonService.getUserToken());
        return this.http.delete(this.link + "/users/" + userid, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    UserService.prototype.getUserById = function (userid) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Content-type', 'application/json');
        headers.append('Authorization', this._commonService.getUserToken());
        return this.http.get(this.link + "/users/" + userid, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    UserService.prototype.checkUserExist = function (field) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this.http.post(this.link + "/users/checkuser/email", field, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    UserService.prototype.authenticateUser = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.link + "/users/authendicate", user, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    UserService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    UserService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    UserService.prototype.loggedIn = function () {
        return Object(angular2_jwt__WEBPACK_IMPORTED_MODULE_4__["tokenNotExpired"])('id_token');
    };
    UserService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    UserService.prototype.getOTP = function (email) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this.http.post(this.link + "/users/send/email/otp", email, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    UserService.prototype.checkOTP = function (fields) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this.http.post(this.link + "/users/check/otp", fields, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"],
            _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/frontend/registration/registration.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/frontend/registration/registration.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid signupbg\">\n  <div class=\"container \">\n    <div class=\"row\">\n      <div class=\"col-lg-6 col-md-12 col-sm-12 signupcontainer\">\n        <div class=\"reg-tom-title\">Create an Account</div>\n        <form action=\"\" id=\"reg_form\" autocomplete=\"on\" (ngSubmit)=\"getOTP()\">\n          <div class=\"row\">\n            <h5 class=\"section_title\">Login Information</h5>\n            <div class=\"form-group col-md-6 col-sm-12\">\n              <input type=\"text\" class=\"form-control browser-default {{field_first_name.length > 0  ? 'input-clicked' : ''}}\"\n                id=\"fname\" [(ngModel)]=\"field_first_name\" name=\"field_first_name\">\n              <label class=\"reg-tom-label browser-default\" for=\"fnane\">First Name:</label>\n            </div>\n            <div class=\"form-group col-md-6 col-sm-12\">\n              <input type=\"text\" class=\"form-control browser-default {{field_middle_name.length > 0  ? 'input-clicked' : ''}}\"\n                [(ngModel)]=\"field_middle_name\" name=\"field_middle_name\" id=\"mname\">\n              <label class=\"reg-tom-label browser-default\" for=\"ln\">Middle Name:</label>\n            </div>\n            <div class=\"form-group col-md-6 col-sm-12\">\n              <input type=\"text\" class=\"form-control browser-default {{field_last_name.length > 0  ? 'input-clicked' : ''}}\"\n                [(ngModel)]=\"field_last_name\" name=\"field_last_name\" id=\"lname\">\n              <label class=\"reg-tom-label browser-default\" for=\"ln\">Last Name:</label>\n            </div>\n            <div class=\"form-group col-md-6 col-sm-12\">\n              <div class=\"row\">\n                <div class=\"col-md-4 col-country-code\">\n                  <select class=\" selectpicker form-control browser-default mdb-select browser-default country-code\"\n                    [(ngModel)]=\"countrycode\" name=\"countrycode\">\n                    <option *ngFor=\"let job of countryList\" value=\"{{job.dial_code}}\">{{job.dial_code}}</option>\n                  </select>\n                  <!-- <input type=\"text\" ng2TelInput [ng2TelInputOptions]=\"{initialCountry: 'in'}\" (hasError)=\"hasError($event)\" (ng2TelOutput)=\"getNumber($event)\" [(ngModel)]=\"field_phone_number\" name=\"field_phone_number\" (intlTelInputObject)=\"telInputObject($event)\"\n                    (countryChange)=\"onCountryChange($event)\" /> -->\n\n                    <!-- <input type=\"text\" ng2TelInput [ng2TelInputOptions]=\"{initialCountry: 'in'}\" (hasError)=\"hasError($event)\" (ng2TelOutput)=\"getNumber($event)\" [(ngModel)]=\"field_phone_number\" name=\"field_phone_number\" (intlTelInputObject)=\"telInputObject($event)\"\n                    (countryChange)=\"onCountryChange($event)\" /> -->\n                </div>\n                <div class=\"col-md-8\">\n                  <input type=\"text\" class=\"waves-light form-control browser-default {{field_phone_number.length > 0  ? 'input-clicked' : ''}}\"\n                    [(ngModel)]=\"field_phone_number\" name=\"field_phone_number\" id=\"phonenumber\" maxlength=\"13\">\n                  <label class=\"reg-tom-label browser-default\" for=\"ln\">Official Phone Number:</label>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group col-md-6 col-sm-12\">\n              <input type=\"email\" class=\"waves-light form-control browser-default {{field_email_id.length > 0  ? 'input-clicked' : ''}}\"\n                id=\"email\" [(ngModel)]=\"field_email_id\" name=\"field_email_id\">\n              <label class=\"reg-tom-label\" for=\"email\">Official email address:</label>\n            </div>\n            <div class=\"form-group col-md-6 col-sm-12\">\n              <input type=\"password\" class=\"form-control browser-default {{field_password.length > 0  ? 'input-clicked' : ''}}\"\n                id=\"pwd\" [(ngModel)]=\"field_password\" name=\"field_password\">\n              <label class=\"reg-tom-label\" for=\"pwd\">Password:</label>\n            </div>\n            <div class=\"form-group col-md-6 col-sm-12\">\n              <input type=\"password\" class=\"form-control browser-default {{field_confirm_password.length > 0  ? 'input-clicked' : ''}}\"\n                id=\"cpwd\" [(ngModel)]=\"field_confirm_password\" name=\"field_confirm_password\">\n              <label class=\"reg-tom-label\" for=\"cpwd\">Confirm Password:</label>\n            </div>\n          </div>\n          <div class=\"row\">\n            <h5 class=\"section_title\">Company Information</h5>\n            <div class=\"form-group col-md-6 col-sm-12\">\n              <input type=\"text\" class=\"form-control browser-default {{field_job_title.length > 0  ? 'input-clicked' : ''}}\"\n                id=\"jtitle\" [(ngModel)]=\"field_job_title\" name=\"field_job_title\">\n              <label class=\"reg-tom-label\" for=\"jt\">Job Title:</label>\n            </div>\n            <div class=\"form-group col-md-6 col-sm-12\">\n              <input type=\"text\" class=\"form-control browser-default {{field_company_name.length > 0  ? 'input-clicked' : ''}}\"\n                id=\"cname\" [(ngModel)]=\"field_company_name\" name=\"field_company_name\">\n              <label class=\"reg-tom-label\" for=\"cn\">Company Name:</label>\n            </div>\n            <div class=\"form-group col-md-6 col-sm-12\">\n              <select class=\"selectpicker form-control browser-default {{field_industry_name === ''  ? '' : 'input-clicked'}}\"\n                data-live-search=\"true\" name=\"field_industry_name\" [(ngModel)]=\"field_industry_name\">\n                <option *ngFor=\"let industry of industries\" value=\"{{industry.industryname}}\">{{industry.industryname}}</option>\n              </select>\n              <label class=\"reg-tom-label\" for=\"pwd\">Industry:</label>\n            </div>\n            <div class=\"form-group col-md-6 col-sm-12\">\n              <select class=\"selectpicker form-control browser-default {{field_no_of_employee === '' ? '' : 'input-clicked'}}\"\n                data-live-search=\"true\" name=\"field_no_of_employee\" [(ngModel)]=\"field_no_of_employee\">\n                <option *ngFor=\"let employee of no_of_employees\" value=\"{{employee.employeesCount}}\">{{employee.employeesCount}}</option>\n              </select>\n              <label class=\"reg-tom-label\" for=\"pwd\">No of Employees:</label>\n            </div>\n            <div class=\"form-group col-md-6 col-sm-12\">\n              <input type=\"text\" class=\"form-control browser-default {{field_company_address.length > 0  ? 'input-clicked' : ''}}\"\n                id=\"ccaddress\" [(ngModel)]=\"field_company_address\" name=\"field_company_address\">\n              <label class=\"reg-tom-label\" for=\"caddress\">Company Address:</label>\n            </div>\n            <div class=\"form-group col-md-6 col-sm-12\">\n              <select class=\"selectpicker form-control browser-default {{field_country_name === '' ? '' : 'input-clicked'}}\"\n                data-live-search=\"true\" [(ngModel)]=\"field_country_name\" name=\"field_country_name\">\n                <option *ngFor=\"let job of countryList\" [value]=\"job.name\">{{job.name}}</option>\n              </select>\n              <label class=\"reg-tom-label\" for=\"country\">Country:</label>\n            </div>\n            <div class=\"form-group col-md-6 col-sm-12\">\n              <input type=\"text\" class=\"form-control browser-default {{field_state_name.length > 0  ? 'input-clicked' : ''}}\"\n                [(ngModel)]=\"field_state_name\" name=\"field_state_name\">\n              <label class=\"reg-tom-label\" for=\"state\">State: </label>\n            </div>\n            <div class=\"form-group col-md-6 col-sm-12\">\n              <input type=\"text\" class=\"form-control browser-default {{field_city_name.length > 0  ? 'input-clicked' : ''}}\"\n                [(ngModel)]=\"field_city_name\" name=\"field_city_name\">\n              <label class=\"reg-tom-label\" for=\"city\">City:</label>\n            </div>\n          </div>\n          <input type=\"submit\" class=\"btn btn-default btn-pay\" value=\"Register and Pay\">\n        </form>\n      </div>\n      <div class=\"col-lg-2 col-md-12 col-sm-12  hidden-sm-down\">\n        <img src=\"../../assets/img/gir-360.png\" />\n      </div>\n    </div>\n  </div>\n</div>\n<div *ngIf=\"isModalShown\" [config]=\"{ show: true, ignoreBackdropClick: true }\" (onHidden)=\"onHidden()\" mdbModal\n  #autoShownModal=\"mdb-modal\" class=\"modal fade\" id=\"centralModalSuccess\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\n  aria-hidden=\"true\" style=\"overflow: auto;\">\n  <div class=\"modal-dialog modal-notify modal-sm\" role=\"document\">\n    <div class=\"modal-content\">\n      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"onHidden()\">\n        <span aria-hidden=\"true\" class=\"black-text close-btn\">×</span>\n      </button>\n      <div class=\"modal-body\">\n        <form (ngSubmit)=\"registrationForm()\">\n          <div class=\"\">\n            <label class=\"label-otp\">Enter OTP</label>\n            <input type=\"hidden\" name=\"otpid\" [(ngModel)]=\"otpid\" />\n            <input class=\"input-otp\" type=\"text\" name=\"otp\" [(ngModel)]=\"otp\" />\n          </div>\n          <a (click)=\"getOTP()\" class=\"rotp\">Resend OTP</a>\n          <input type=\"submit\" class=\"btn btn-default btn-otp-submit\" value=\"Login\">\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/frontend/registration/registration.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/frontend/registration/registration.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".signupbg {\n  margin: 0;\n  padding: 0;\n  background-image: url('signup_background.jpg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  padding-top: 50px;\n  padding-bottom: 50px; }\n\ninput.form-control {\n  height: 35px;\n  font-size: 13px;\n  position: relative;\n  z-index: 4;\n  background: transparent; }\n\nselect {\n  display: block !important;\n  height: 35px !important;\n  font-size: 13px;\n  position: relative;\n  z-index: 4;\n  background: transparent; }\n\n.signupcontainer {\n  background: #fff;\n  padding: 0px 20px;\n  border-radius: 10px; }\n\n.reg-tom-title {\n  text-align: center;\n  padding: 15px 0px;\n  font-size: 25px;\n  color: black; }\n\nform#reg_form {\n  max-width: 850px;\n  margin: 0px auto; }\n\nlabel.reg-tom-label {\n  font-size: 12px;\n  color: #666;\n  position: absolute;\n  top: 8px;\n  left: 25px;\n  z-index: 2; }\n\ninput:focus + label.reg-tom-label, select:focus + label.reg-tom-label,\n.input-clicked + label.reg-tom-label {\n  transition-duration: .2s;\n  top: -8px;\n  left: 25px;\n  background-color: #FFF;\n  padding-left: 5px;\n  padding-right: 5px;\n  z-index: 6; }\n\n.form-control:focus {\n  box-shadow: none; }\n\nbutton.btn.btn-default.btn-pay {\n  padding: 5px 35px;\n  box-shadow: none;\n  background: #0daa0d !important;\n  border-radius: 4px;\n  margin-bottom: 10px; }\n\nh5.section_title {\n  width: 100%;\n  clear: both;\n  padding-left: 15px;\n  font-size: 15px;\n  color: #12509c; }\n\n.col-country-code {\n  padding-right: 0px; }\n\n.browser-default.country-code {\n  padding: 0px; }\n\n@media screen and (max-width: 1000px) and (min-width: 768px) {\n  .signupbg {\n    padding-top: 100px; }\n  .hidden-sm-down {\n    display: none; } }\n\n@media screen and (max-width: 767px) {\n  .signupbg {\n    padding-top: 100px; }\n  .hidden-sm-down {\n    display: none; } }\n\n.input-otp {\n  width: 100%;\n  border: 1px solid #ccc;\n  height: 35px;\n  border-radius: 5px;\n  padding: 0px 15px; }\n\n.label-otp {\n  font-size: 15px;\n  color: #555; }\n\n.btn-otp-submit {\n  background: #fcb827 !important;\n  padding: 8px 20px;\n  box-shadow: none;\n  float: right;\n  margin-right: 0px; }\n\n.rotp {\n  padding-top: 15px;\n  display: block;\n  float: left;\n  font-size: 13px; }\n\n.modal-sm {\n  margin-top: 10%; }\n\n.close {\n  color: #555;\n  z-index: 9999; }\n\n.input-otp {\n  width: 100%;\n  border: 1px solid #ccc;\n  height: 35px;\n  border-radius: 5px;\n  padding: 0px 15px; }\n\n.label-otp {\n  font-size: 15px;\n  color: #555; }\n\n.btn-otp-submit {\n  background: #fcb827 !important;\n  padding: 8px 20px;\n  box-shadow: none;\n  float: right;\n  margin-right: 0px; }\n\n.rotp {\n  padding-top: 15px;\n  display: block;\n  float: left;\n  font-size: 13px; }\n\n.modal-sm {\n  margin-top: 10%; }\n\n.close {\n  color: #555;\n  z-index: 9999; }\n\n.product_feature {\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  padding-bottom: 0PX; }\n"

/***/ }),

/***/ "./src/app/frontend/registration/registration.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/frontend/registration/registration.component.ts ***!
  \*****************************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _services_validations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/validations.service */ "./src/app/services/validations.service.ts");
/* harmony import */ var _admin_company_company_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../admin/company/company.service */ "./src/app/admin/company/company.service.ts");
/* harmony import */ var _admin_user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../admin/user/user.service */ "./src/app/admin/user/user.service.ts");
/* harmony import */ var _ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../ng-uikit-pro-standard */ "./ng-uikit-pro-standard/esm5/ng-uikit-pro-standard.es5.js");
/* harmony import */ var _admin_frontend_product_product_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../admin/frontend/product/product.service */ "./src/app/admin/frontend/product/product.service.ts");
/* harmony import */ var _services_cms_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/cms.service */ "./src/app/frontend/services/cms.service.ts");
/* harmony import */ var intl_tel_input_build_css_intlTelInput_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! intl-tel-input/build/css/intlTelInput.css */ "./node_modules/intl-tel-input/build/css/intlTelInput.css");
/* harmony import */ var intl_tel_input_build_css_intlTelInput_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(intl_tel_input_build_css_intlTelInput_css__WEBPACK_IMPORTED_MODULE_8__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { ContactusService } from '../../admin/frontend/contactus/contactus.service';



// import {ActivatedRoute} from '@angular/router';


//import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(
    // private activatedRoute: ActivatedRoute,
    _commonService, _validationsService, contactusService, companyService, userService, productService, cmsService) {
        this._commonService = _commonService;
        this._validationsService = _validationsService;
        this.contactusService = contactusService;
        this.companyService = companyService;
        this.userService = userService;
        this.productService = productService;
        this.cmsService = cmsService;
        this.field_email_id = '';
        this.field_phone_number = '';
        this.field_password = '';
        this.field_confirm_password = '';
        this.field_first_name = '';
        this.field_middle_name = '';
        this.field_last_name = '';
        this.field_job_title = '';
        this.field_company_name = '';
        this.field_contact_number = '';
        this.field_company_address = '';
        this.field_industry_name = '';
        this.field_no_of_employee = '';
        this.field_country_name = '';
        this.field_state_name = '';
        this.field_city_name = '';
        this.countrycode = '+91';
        this.otpid = '';
        this.otp = '';
        this.isModalShown = false;
        this.industries = [
            { industryname: 'Agriculture & Forestry/Wildlife' },
            { industryname: 'Business & Information' },
            { industryname: 'Construction/Utilities/Contracting' },
            { industryname: 'Education' },
            { industryname: 'Finance & Insurance' },
            { industryname: 'Food & Hospitality' },
            { industryname: 'Gaming' },
            { industryname: 'Health Services' },
            { industryname: 'Motor Vehicle' },
            { industryname: 'Natural Resources/Environmental' },
            { industryname: 'Other' },
            { industryname: 'Personal Services' },
            { industryname: 'Real Estate & Housing' },
            { industryname: 'Safety/Security & Legal' },
            { industryname: 'Transportation' }
        ];
        this.no_of_employees = [
            { employeesCount: '10-50' },
            { employeesCount: '50-100' },
            { employeesCount: '100-500' },
            { employeesCount: '500-1000' },
            { employeesCount: '1000-5000' },
            { employeesCount: '5000 above' }
        ];
    }
    RegistrationComponent.prototype.ngOnInit = function () {
        this.getCountryList();
    };
    RegistrationComponent.prototype.getCountryList = function () {
        this.countryList = this.contactusService.getCountryList();
    };
    RegistrationComponent.prototype.getProductById = function (productid) {
        var _this = this;
        this.productService.getProductById(productid)
            .subscribe(function (res) {
            _this.productList = res.data;
        });
    };
    RegistrationComponent.prototype.getOTP = function () {
        var _this = this;
        if (this._validationsService.isEmpty(this.field_first_name)) {
            this._commonService.showMessage('error', 'First Name should not be empty!');
            return false;
        }
        if (this._validationsService.isEmpty(this.field_middle_name)) {
            this._commonService.showMessage('error', 'Middle Name should not be empty!');
            return false;
        }
        if (this._validationsService.isEmpty(this.field_last_name)) {
            this._commonService.showMessage('error', 'Last Name should not be empty!');
            return false;
        }
        if (this._validationsService.isEmpty(this.field_phone_number)) {
            this._commonService.showMessage('error', 'Phone number should not be empty!');
            return false;
        }
        if (this._validationsService.isDigit(this.field_phone_number)) {
            this._commonService.showMessage('error', 'Phone Number should have only digits!');
            return false;
        }
        if (this._validationsService.isMinimum(this.field_phone_number)) {
            this._commonService.showMessage('error', 'Phone Number should have atleast 10 digits!');
            return false;
        }
        if (this._validationsService.isMaximum(this.field_phone_number)) {
            this._commonService.showMessage('error', 'Phone Number should not exceed 13 digits!');
            return false;
        }
        if (this._validationsService.isEmpty(this.field_email_id)) {
            this._commonService.showMessage('error', 'Email Address should not be empty!');
            return false;
        }
        if (!this._validationsService.isEmail(this.field_email_id)) {
            this._commonService.showMessage('error', 'Enter Valid Email Address!');
            return false;
        }
        if (this._validationsService.isEmpty(this.field_password)) {
            this._commonService.showMessage('error', 'Password field should not be empty!');
            return false;
        }
        if (this._validationsService.isPassword(this.field_password)) {
            this._commonService.showMessage('error', 'Password Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character!');
            return false;
        }
        if (this._validationsService.isEmpty(this.field_confirm_password)) {
            this._commonService.showMessage('error', 'Confirm Password field should not be empty!');
            return false;
        }
        if (this._validationsService.isPassword(this.field_confirm_password)) {
            this._commonService.showMessage('error', 'Password Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character!');
            return false;
        }
        if (this.field_password !== this.field_confirm_password) {
            this._commonService.showMessage('error', 'password and confirm password fields should be same');
            return false;
        }
        if (this._validationsService.isEmpty(this.field_job_title)) {
            this._commonService.showMessage('error', 'Job Title should not be empty!');
            return false;
        }
        if (this._validationsService.isEmpty(this.field_company_name)) {
            this._commonService.showMessage('error', 'Company Name should not be empty!');
            return false;
        }
        if (this._validationsService.isEmpty(this.field_industry_name)) {
            this._commonService.showMessage('error', 'Industry should not be empty!');
            return false;
        }
        if (this._validationsService.isEmpty(this.field_no_of_employee)) {
            this._commonService.showMessage('error', 'Number of Employees should not be empty!');
            return false;
        }
        /*if (this._validationsService.isEmpty(this.field_contact_number)) {
          this._commonService.showMessage('error', 'Contact Number should not be empty!');
          return false;
        }
        if (this._validationsService.isMobile(this.field_contact_number)) {
          this._commonService.showMessage('error', 'Contact Number should be a mobile number!');
          return false;
        }*/
        if (this._validationsService.isEmpty(this.field_company_address)) {
            this._commonService.showMessage('error', 'Company Address should not be empty!');
            return false;
        }
        if (this._validationsService.isEmpty(this.field_country_name)) {
            this._commonService.showMessage('error', 'Country should not be empty!');
            return false;
        }
        if (this._validationsService.isEmpty(this.field_state_name)) {
            this._commonService.showMessage('error', 'State should not be empty!');
            return false;
        }
        if (this._validationsService.isEmpty(this.field_city_name)) {
            this._commonService.showMessage('error', 'City should not be empty!');
            return false;
        }
        var fieldcontactusid;
        fieldcontactusid = {
            jobtitle: this.field_job_title,
            company_name: this.field_company_name,
            industry: this.field_industry_name,
            no_of_employees: this.field_no_of_employee,
            company_contact: this.field_phone_number,
            company_address: this.field_company_address,
            country_code: this.countrycode,
            country: this.field_country_name,
            state: this.field_state_name,
            city: this.field_city_name,
            first_name: this.field_first_name,
            middle_name: this.field_middle_name,
            last_name: this.field_last_name,
            password: this.field_password,
            password_confirmation: this.field_password,
            email: this.field_email_id,
        };
        this.cmsService.addRegistration(fieldcontactusid).subscribe(function (res) {
            //console.log(res);
            //this.spinnerService.show();
            if (res.data.msg == "account_created") {
                _this._commonService.showMessage('success', 'Successfully Registered');
                _this.field_job_title = '';
                _this.field_company_name = '';
                _this.field_industry_name = '';
                _this.field_no_of_employee = '';
                _this.field_phone_number = '+91';
                _this.field_company_address = '';
                _this.countrycode = '';
                _this.field_country_name = '';
                _this.field_state_name = '';
                _this.field_city_name = '';
                _this.field_first_name = '';
                _this.field_middle_name = '';
                _this.field_last_name = '';
                _this.field_password = '';
                _this.field_email_id = '';
                // this._commonService.redirectTo('/payment');
                window.location.href = "/ng/ver1/login";
                //this.spinnerService.hide();
            }
            else {
                _this._commonService.showMessage('error', res.data.msg);
                //window.location.href = "http://esps.drupalised.com/ng/ver1/login";
            }
        });
    };
    RegistrationComponent.prototype.showModal = function () {
        this.isModalShown = true;
    };
    RegistrationComponent.prototype.hideModal = function () {
        this.autoShownModal.hide();
    };
    RegistrationComponent.prototype.onHidden = function () {
        this.isModalShown = false;
    };
    RegistrationComponent.prototype.registrationForm = function () {
        var _this = this;
        if (this._validationsService.isEmpty(this.field_first_name)) {
            this._commonService.showMessage('error', 'First Name should not be empty!');
            return false;
        }
        if (this._validationsService.isEmpty(this.field_middle_name)) {
            this._commonService.showMessage('error', 'Middle Name should not be empty!');
            return false;
        }
        if (this._validationsService.isEmpty(this.field_last_name)) {
            this._commonService.showMessage('error', 'Last Name should not be empty!');
            return false;
        }
        if (this._validationsService.isEmpty(this.field_phone_number)) {
            this._commonService.showMessage('error', 'Phone number should not be empty!');
            return false;
        }
        if (this._validationsService.isDigit(this.field_phone_number)) {
            this._commonService.showMessage('error', 'Phone Number should have only digits!');
            return false;
        }
        if (this._validationsService.isMinimum(this.field_phone_number)) {
            this._commonService.showMessage('error', 'Phone Number should have atleast 10 digits!');
            return false;
        }
        if (this._validationsService.isMaximum(this.field_phone_number)) {
            this._commonService.showMessage('error', 'Phone Number should not exceed 13 digits!');
            return false;
        }
        if (this._validationsService.isEmpty(this.field_email_id)) {
            this._commonService.showMessage('error', 'Email Address should not be empty!');
            return false;
        }
        if (!this._validationsService.isEmail(this.field_email_id)) {
            this._commonService.showMessage('error', 'Enter Valid Email Address!');
            return false;
        }
        // if (this._validationsService.isEmpty(this.field_password)) {
        //   this._commonService.showMessage('error', 'Password field should not be empty!');
        //   return false;
        // }
        // if (this._validationsService.isPassword(this.field_password)) {
        // tslint:disable-next-line:max-line-length
        //   this._commonService.showMessage('error', 'Password Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character!');
        //   return false;
        // }
        // if (this._validationsService.isEmpty(this.field_confirm_password)) {
        //   this._commonService.showMessage('error', 'Confirm Password field should not be empty!');
        //   return false;
        // }
        // if (this._validationsService.isPassword(this.field_confirm_password)) {
        // tslint:disable-next-line:max-line-length
        //   this._commonService.showMessage('error', 'Password Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character!');
        //   return false;
        // }
        // if(this.field_password !== this.field_confirm_password){
        //   this._commonService.showMessage('error', 'password and confirm password fields should be same');
        //   return false;
        // }
        if (this._validationsService.isEmpty(this.field_job_title)) {
            this._commonService.showMessage('error', 'Job Title should not be empty!');
            return false;
        }
        if (this._validationsService.isEmpty(this.field_company_name)) {
            this._commonService.showMessage('error', 'Company Name should not be empty!');
            return false;
        }
        if (this._validationsService.isEmpty(this.field_industry_name)) {
            this._commonService.showMessage('error', 'Industry should not be empty!');
            return false;
        }
        if (this._validationsService.isEmpty(this.field_no_of_employee)) {
            this._commonService.showMessage('error', 'Number of Employees should not be empty!');
            return false;
        }
        if (this._validationsService.isEmpty(this.field_contact_number)) {
            this._commonService.showMessage('error', 'Contact Number should not be empty!');
            return false;
        }
        /*if (this._validationsService.isMobile(this.field_contact_number)) {
          this._commonService.showMessage('error', 'Contact Number should be a mobile number!');
          return false;
        }*/
        if (this._validationsService.isEmpty(this.field_company_address)) {
            this._commonService.showMessage('error', 'Company Address should not be empty!');
            return false;
        }
        if (this._validationsService.isEmpty(this.field_country_name)) {
            this._commonService.showMessage('error', 'Country should not be empty!');
            return false;
        }
        if (this._validationsService.isEmpty(this.field_state_name)) {
            this._commonService.showMessage('error', 'State should not be empty!');
            return false;
        }
        if (this._validationsService.isEmpty(this.field_city_name)) {
            this._commonService.showMessage('error', 'City should not be empty!');
            return false;
        }
        var otpField = {
            otpid: this.otpid,
            otp: this.otp
        };
        this.userService.checkOTP(otpField)
            .subscribe(function (resotp) {
            if (resotp.success) {
                var companyField_1 = {
                    jobtitle: _this.field_job_title,
                    companyname: _this.field_company_name,
                    industry: _this.field_industry_name,
                    noofemployees: _this.field_no_of_employee,
                    companycontact: _this.field_contact_number,
                    companyaddress: _this.field_company_address,
                    country: _this.field_country_name,
                    state: _this.field_state_name,
                    city: _this.field_city_name,
                    status: true
                };
                var email = {
                    email: _this.field_email_id
                };
                _this.userService.checkUserExist(email)
                    .subscribe(function (emailresult) {
                    if (!emailresult.success) {
                        _this.companyService.addCompany(companyField_1)
                            .subscribe(function (res) {
                            if (res.success) {
                                var userField = {
                                    companyid: res.data._id,
                                    firstname: _this.field_first_name,
                                    middlename: _this.field_middle_name,
                                    lastname: _this.field_last_name,
                                    mobile: _this.field_phone_number,
                                    email: _this.field_email_id,
                                    password: '123456',
                                    role: 'companyadmin',
                                    status: true,
                                };
                                _this.userService.addUser(userField)
                                    .subscribe(function (result) {
                                    if (result.success) {
                                        _this._commonService.redirectTo('/ng/ver1/login');
                                    }
                                    else {
                                        _this._commonService.showMessage('error', result.msg);
                                    }
                                });
                            }
                            else {
                                _this._commonService.showMessage('error', res.data.msg);
                            }
                        });
                    }
                    else {
                        _this._commonService.showMessage('error', 'User email already exist!!!');
                    }
                });
            }
            else {
                _this._commonService.showMessage('error', resotp.msg);
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('autoShownModal'),
        __metadata("design:type", _ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_5__["ModalDirective"])
    ], RegistrationComponent.prototype, "autoShownModal", void 0);
    RegistrationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__(/*! ./registration.component.html */ "./src/app/frontend/registration/registration.component.html"),
            styles: [__webpack_require__(/*! ./registration.component.scss */ "./src/app/frontend/registration/registration.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"],
            _services_validations_service__WEBPACK_IMPORTED_MODULE_2__["ValidationsService"],
            _services_cms_service__WEBPACK_IMPORTED_MODULE_7__["CmsService"],
            _admin_company_company_service__WEBPACK_IMPORTED_MODULE_3__["CompanyService"],
            _admin_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _admin_frontend_product_product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"],
            _services_cms_service__WEBPACK_IMPORTED_MODULE_7__["CmsService"]])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "./src/app/frontend/registration/registration.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/frontend/registration/registration.module.ts ***!
  \**************************************************************/
/*! exports provided: RegistrationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationModule", function() { return RegistrationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../ng-uikit-pro-standard */ "./ng-uikit-pro-standard/esm5/ng-uikit-pro-standard.es5.js");
/* harmony import */ var _registration_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registration.component */ "./src/app/frontend/registration/registration.component.ts");
/* harmony import */ var _admin_frontend_product_product_product_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../admin/frontend/product/product/product.component */ "./src/app/admin/frontend/product/product/product.component.ts");
/* harmony import */ var ng2_tel_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-tel-input */ "./node_modules/ng2-tel-input/ng2-tel-input.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var router = [
    { path: '', component: _registration_component__WEBPACK_IMPORTED_MODULE_5__["RegistrationComponent"] },
    { path: '/:productid', component: _admin_frontend_product_product_product_component__WEBPACK_IMPORTED_MODULE_6__["ProductComponent"] },
];
var RegistrationModule = /** @class */ (function () {
    function RegistrationModule() {
    }
    RegistrationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_4__["MDBBootstrapModulesPro"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(router),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ng2_tel_input__WEBPACK_IMPORTED_MODULE_7__["Ng2TelInputModule"]
            ],
            declarations: [
                _registration_component__WEBPACK_IMPORTED_MODULE_5__["RegistrationComponent"],
                _admin_frontend_product_product_product_component__WEBPACK_IMPORTED_MODULE_6__["ProductComponent"]
            ]
        })
    ], RegistrationModule);
    return RegistrationModule;
}());



/***/ }),

/***/ "./src/app/services/validations.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/validations.service.ts ***!
  \*************************************************/
/*! exports provided: ValidationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationsService", function() { return ValidationsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidationsService = /** @class */ (function () {
    function ValidationsService() {
    }
    ValidationsService.prototype.isEmpty = function (input) {
        if (input === undefined ||
            input === null ||
            (typeof input === 'object' && Object.keys(input).length === 0) ||
            (typeof input === 'string' && input.trim().length === 0)) {
            return true;
        }
        else {
            return false;
        }
    };
    ValidationsService.prototype.isEmail = function (email) {
        // tslint:disable-next-line:max-line-length
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidationsService.prototype.isMobile = function (mobile) {
        var mob = /[0-9]+/;
        /[^0-9]/g;
        if (!mob.test(mobile)) {
            return 'Mobile field shoud have only number';
        }
        else if (mobile.length !== 10) {
            return 'Mobile field should contain only 10 numbers';
        }
        else {
            return true;
        }
    };
    ValidationsService.prototype.isDigit = function (digit) {
        var dig = /[^0-9]/g;
        if (!dig.test(digit)) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidationsService.prototype.isPassword = function (digit) {
        // const dig = /[^0-9]/g;
        var regpassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/g;
        if (!regpassword.test(digit)) {
            return true;
        }
        else {
            return false;
        }
    };
    ValidationsService.prototype.isMinimum = function (mobile) {
        if (mobile.length >= 10) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidationsService.prototype.isMaximum = function (mobile) {
        if (mobile.length <= 13) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidationsService.prototype.isNumber = function (input) {
        if (typeof Number(input) === 'number') {
            return true;
        }
        else {
            return false;
        }
    };
    ValidationsService.prototype.isPercentage = function (input) {
        if (typeof Number(input) === 'number') {
            if (input <= 100) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    };
    ValidationsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ValidationsService);
    return ValidationsService;
}());



/***/ })

}]);
//# sourceMappingURL=registration-registration-module.js.map
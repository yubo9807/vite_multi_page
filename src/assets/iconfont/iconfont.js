(function () {
  function ready(callback) {
    if (document.readyState != 'loading') callback();
    else if (document.addEventListener) document.addEventListener('DOMContentLoaded', callback);
    else document.attachEvent('onreadystatechange', function () {
      if (document.readyState == 'complete') callback();
    });
  }

  function injectStyle(id, styleText) {
    var svgNode = document.getElementById(id);

    if (!svgNode) {
      var head = document.head || document.getElementsByTagName('head')[0];
      var styleNode = document.createElement('style');
      styleNode.id = id
      styleNode.innerHTML = styleText;
      head.appendChild(styleNode);
    }
  }

  function injectSvg(id, svgText) {
    var svgNode = document.getElementById(id);

    if (!svgNode) {
      svgNode = document.createElement('div');
      svgNode.style.height = 0;
      svgNode.style.width = 0;
      svgNode.style.position = 'absolute';
      svgNode.style.overflow = 'hidden';
      svgNode.setAttribute('aria-hidden', 'true');
      svgNode.id = id;

      if (document.body.firstChild) {
        document.body.insertBefore(svgNode, document.body.firstChild);
      } else {
        document.body.appendChild(svgNode);
      }
    }

    svgNode.innerHTML = svgText;
  }

  ready(function () {
    var styleId = '_CD_STYLE';
    var svgId = '_CD_ICON_8ALwE9VdoNZX1Dp';
    var styleText = '.svg-icon { display: inline-block; width: 1em; height: 1em; fill: currentColor; vertical-align: -0.1em; font-size:16px; }';
    var svgText = '<svg><symbol id="icon-bianji" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="p39y1acl4__design-iconfont">  <path d="M8.43968 19.185L10.7131 16.9115H20V19.185H8.43968ZM17.7051 8.76139L14.4021 5.437L15.4102 4.42895C15.6962 4.14298 16.0393 4 16.4397 4C16.84 4 17.176 4.14298 17.4477 4.42895L18.756 5.75871C19.042 6.03038 19.1778 6.36268 19.1635 6.7556C19.1492 7.1491 19.0063 7.48168 18.7346 7.75335L17.7051 8.76139ZM17.126 9.34048L7.3244 19.185H4V15.8606L13.8231 6.03753L17.126 9.34048Z"></path></symbol><symbol id="icon-fasongjiaoyi" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="j3x9kfm0q__design-iconfont">  <path d="M4 19.1V13.55L10.45 12.025L4 10.5V5L20.575 12.05L4 19.1Z"></path></symbol><symbol id="icon-zhanghuguanli" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="ic9rxhfxw__design-iconfont">  <path d="M1.125 20.15V17.725C1.125 17.1417 1.26267 16.646 1.538 16.238C1.81267 15.8293 2.18333 15.5083 2.65 15.275C3.58333 14.8083 4.52933 14.4417 5.488 14.175C6.446 13.9083 7.58333 13.775 8.9 13.775C10.2 13.775 11.3293 13.9083 12.288 14.175C13.246 14.4417 14.1917 14.8083 15.125 15.275C15.5917 15.5083 15.9627 15.8293 16.238 16.238C16.5127 16.646 16.65 17.1417 16.65 17.725V20.15H1.125ZM18.775 20.15V17.575C18.775 17.025 18.671 16.4127 18.463 15.738C18.2543 15.0627 17.9 14.4917 17.4 14.025C18.0833 14.125 18.7417 14.2833 19.375 14.5C20.0083 14.7167 20.6167 14.975 21.2 15.275C21.7167 15.5583 22.125 15.9083 22.425 16.325C22.725 16.7417 22.875 17.1583 22.875 17.575V20.15H18.775ZM8.875 11.2C7.85833 11.2 6.98767 10.8373 6.263 10.112C5.53767 9.38732 5.175 8.51665 5.175 7.49999C5.175 6.48332 5.53767 5.61232 6.263 4.88699C6.98767 4.16232 7.85833 3.79999 8.875 3.79999C9.89167 3.79999 10.7627 4.16232 11.488 4.88699C12.2127 5.61232 12.575 6.48332 12.575 7.49999C12.575 8.51665 12.2127 9.38732 11.488 10.112C10.7627 10.8373 9.89167 11.2 8.875 11.2ZM18.275 7.49999C18.275 8.51665 17.9127 9.38732 17.188 10.112C16.4627 10.8373 15.5917 11.2 14.575 11.2C14.4583 11.2 14.2917 11.1873 14.075 11.162C13.8583 11.1373 13.7 11.1083 13.6 11.075C13.9667 10.5583 14.2417 9.99565 14.425 9.38699C14.6083 8.77899 14.7 8.14999 14.7 7.49999C14.7 6.84999 14.6043 6.22899 14.413 5.63699C14.221 5.04565 13.95 4.48332 13.6 3.94999C13.75 3.89999 13.9083 3.86232 14.075 3.83699C14.2417 3.81232 14.4083 3.79999 14.575 3.79999C15.5917 3.79999 16.4627 4.16232 17.188 4.88699C17.9127 5.61232 18.275 6.48332 18.275 7.49999ZM2.775 18.5H15V17.725C15 17.4917 14.9583 17.3043 14.875 17.163C14.7917 17.021 14.625 16.8833 14.375 16.75C13.6083 16.35 12.771 16.029 11.863 15.787C10.9543 15.5457 9.95833 15.425 8.875 15.425C7.80833 15.425 6.82067 15.5457 5.912 15.787C5.004 16.029 4.16667 16.35 3.4 16.75C3.15 16.8833 2.98333 17.021 2.9 17.163C2.81667 17.3043 2.775 17.4917 2.775 17.725V18.5ZM8.875 9.54999C9.44167 9.54999 9.925 9.34999 10.325 8.94999C10.725 8.54999 10.925 8.06665 10.925 7.49999C10.925 6.93332 10.725 6.44999 10.325 6.04999C9.925 5.64999 9.44167 5.44999 8.875 5.44999C8.30833 5.44999 7.825 5.65399 7.425 6.06199C7.025 6.47065 6.825 6.95832 6.825 7.52499C6.825 8.07499 7.025 8.54999 7.425 8.94999C7.825 9.34999 8.30833 9.54999 8.875 9.54999Z"></path></symbol><symbol id="icon-kualianjiaoyiguanli" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="5hjwt57q0__design-iconfont">  <path d="M3.17499 21.825V15.175H6.17499V11.175H11.175V8.82499H8.17499V2.17499H15.825V8.82499H12.825V11.175H17.825V15.175H20.825V21.825H13.175V15.175H16.175V12.825H7.82499V15.175H10.825V21.825H3.17499ZM9.82499 7.17499H14.175V3.82499H9.82499V7.17499ZM4.82499 20.175H9.17499V16.825H4.82499V20.175ZM14.825 20.175H19.175V16.825H14.825V20.175Z"></path></symbol><symbol id="icon-guanbiyangshi1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="vduucfkjp__design-iconfont">  <path d="M9.76531 14.9388L12 12.7041L14.2347 14.9388L14.9388 14.2347L12.7041 12L14.9388 9.76531L14.2347 9.06122L12 11.2959L9.76531 9.06122L9.06122 9.76531L11.2959 12L9.06122 14.2347L9.76531 14.9388ZM12 18C11.1735 18 10.3955 17.8418 9.66612 17.5255C8.93633 17.2092 8.30102 16.7806 7.7602 16.2398C7.21939 15.699 6.79082 15.0637 6.47449 14.3339C6.15816 13.6045 6 12.8265 6 12C6 11.1735 6.15816 10.3929 6.47449 9.65816C6.79082 8.92347 7.21939 8.28571 7.7602 7.7449C8.30102 7.20408 8.93633 6.77796 9.66612 6.46653C10.3955 6.15551 11.1735 6 12 6C12.8265 6 13.6071 6.15551 14.3418 6.46653C15.0765 6.77796 15.7143 7.20408 16.2551 7.7449C16.7959 8.28571 17.222 8.92082 17.5335 9.6502C17.8445 10.38 18 11.1633 18 12C18 12.8367 17.8445 13.6173 17.5335 14.3418C17.222 15.0663 16.7959 15.699 16.2551 16.2398C15.7143 16.7806 15.0792 17.2092 14.3498 17.5255C13.62 17.8418 12.8367 18 12 18Z"></path></symbol><symbol id="icon-shezhi" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="zd3sixkfl__design-iconfont">  <path d="M9.35861 20.1748L9.009 17.4871C8.81962 17.4289 8.58655 17.3269 8.30977 17.1812C8.03299 17.0356 7.81448 16.8826 7.65424 16.7224L5.11954 17.7712L3 13.9692L5.09769 12.3522C5.08312 12.2356 5.06506 12.108 5.0435 11.9694C5.02135 11.8313 5.01028 11.6967 5.01028 11.5656C5.01028 11.4636 5.02135 11.3433 5.0435 11.2046C5.06506 11.0665 5.08312 10.9246 5.09769 10.7789L3 9.20566L5.11954 5.491L7.54499 6.47429C7.7635 6.29949 8.00386 6.13925 8.26607 5.99357C8.52828 5.8479 8.77592 5.73136 9.009 5.64396L9.35861 3H13.6414L13.9692 5.66581C14.2314 5.79691 14.4755 5.92074 14.7016 6.03727C14.9271 6.15381 15.1564 6.30677 15.3895 6.49614L17.8805 5.491L20 9.20566L17.7931 10.8663C17.8368 10.9974 17.8586 11.1285 17.8586 11.2596V11.6093C17.8586 11.6967 17.8551 11.8059 17.8481 11.937C17.8405 12.0681 17.8295 12.2211 17.8149 12.3959L19.9344 13.9692L17.8149 17.7712L15.2802 16.7005C15.0617 16.8753 14.8505 17.0245 14.6465 17.148C14.4426 17.2721 14.2241 17.3779 13.991 17.4653L13.6414 20.1748H9.35861ZM11.4126 14.3625C12.1992 14.3625 12.862 14.093 13.401 13.554C13.94 13.015 14.2095 12.3522 14.2095 11.5656C14.2095 10.7789 13.94 10.1161 13.401 9.57712C12.862 9.03813 12.1992 8.76864 11.4126 8.76864C10.6405 8.76864 9.98151 9.03813 9.43553 9.57712C8.88896 10.1161 8.61568 10.7789 8.61568 11.5656C8.61568 12.3522 8.88896 13.015 9.43553 13.554C9.98151 14.093 10.6405 14.3625 11.4126 14.3625Z"></path></symbol><symbol id="icon-pingsiyonghu" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="ljsa1ph3e__design-iconfont">  <path d="M4 19.2727C4 17.7297 4.61299 16.2498 5.70411 15.1587C6.79523 14.0675 8.2751 13.4545 9.81818 13.4545C11.3613 13.4545 12.8411 14.0675 13.9323 15.1587C15.0234 16.2498 15.6364 17.7297 15.6364 19.2727H4ZM9.81818 12.7273C7.40727 12.7273 5.45455 10.7745 5.45455 8.36364C5.45455 5.95273 7.40727 4 9.81818 4C12.2291 4 14.1818 5.95273 14.1818 8.36364C14.1818 10.7745 12.2291 12.7273 9.81818 12.7273ZM17.0909 15.6364H20V17.0909H17.0909V15.6364ZM14.9091 12H20V13.4545H14.9091V12ZM16.3636 8.36364H20V9.81818H16.3636V8.36364Z"></path></symbol><symbol id="icon-shouqi" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="b4omav1n7__design-iconfont">  <path d="M17.975 6.19999L19.15 7.37499L14.525 12L19.15 16.625L17.975 17.8L12.175 12L17.975 6.19999ZM10.65 6.19999L11.825 7.37499L7.20003 12L11.825 16.625L10.65 17.8L4.85003 12L10.65 6.19999Z"></path></symbol><symbol id="icon-zhankai" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="95p7t0257__design-iconfont">  <path d="M6.02498 17.8L4.84998 16.625L9.47498 12L4.84998 7.37501L6.02498 6.20001L11.825 12L6.02498 17.8ZM13.35 17.8L12.175 16.625L16.8 12L12.175 7.37501L13.35 6.20001L19.15 12L13.35 17.8Z"></path></symbol><symbol id="icon-zilianguanli" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="bgffeuca7__design-iconfont">  <path d="M3 3H7.5V7.5H3V3ZM3 16.5H7.5V21H3V16.5ZM16.5 3H21V7.5H16.5V3ZM16.5 16.5H21V21H16.5V16.5ZM8.4 4.8H15.6V6.6H8.4V4.8ZM4.8 8.4H6.6V15.6H4.8V8.4ZM17.4 8.4H19.2V15.6H17.4V8.4ZM8.4 17.4H15.6V19.2H8.4V17.4Z"></path></symbol><symbol id="icon-luoyaoqiguanli" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="oxsoi5o6a__design-iconfont">  <path d="M8.5 20.5V18.5H4.3C3.8 18.5 3.375 18.325 3.025 17.975C2.675 17.625 2.5 17.2 2.5 16.7V5.3C2.5 4.8 2.675 4.375 3.025 4.025C3.375 3.675 3.8 3.5 4.3 3.5H19.7C20.2 3.5 20.625 3.675 20.975 4.025C21.325 4.375 21.5 4.8 21.5 5.3V8.25H20V5.3C20 5.21667 19.971 5.146 19.913 5.088C19.8543 5.02933 19.7833 5 19.7 5H4.3C4.21667 5 4.146 5.02933 4.088 5.088C4.02933 5.146 4 5.21667 4 5.3V16.7C4 16.7833 4.02933 16.8543 4.088 16.913C4.146 16.971 4.21667 17 4.3 17H19.7C19.7833 17 19.8543 16.971 19.913 16.913C19.971 16.8543 20 16.7833 20 16.7V12.05C20 11.9667 19.971 11.8957 19.913 11.837C19.8543 11.779 19.7833 11.75 19.7 11.75H12.2L14.3 13.85L13.25 14.9L9.35 11L13.25 7.1L14.3 8.15L12.2 10.25H19.7C20.2 10.25 20.625 10.425 20.975 10.775C21.325 11.125 21.5 11.55 21.5 12.05V16.7C21.5 17.2 21.325 17.625 20.975 17.975C20.625 18.325 20.2 18.5 19.7 18.5H15.5V20.5H8.5Z"></path></symbol><symbol id="icon-xiala" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="19vybw2ef__design-iconfont">  <path d="M14.9636 9H9.03641C8.15938 9 7.68028 10.0229 8.24174 10.6967L11.2053 14.253C11.6189 14.7492 12.3811 14.7492 12.7947 14.253L15.7583 10.6967C16.3197 10.0229 15.8406 9 14.9636 9Z"></path></symbol><symbol id="icon-ziyuanguanli" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="q9g1476mg__design-iconfont">  <path d="M7.75 14.6H8.95V11.1H7.75V12.25H6.25V13.45H7.75V14.6ZM9.95 13.45H17.75V12.25H9.95V13.45ZM15.05 10.9H16.25V9.75H17.75V8.55H16.25V7.4H15.05V10.9ZM6.25 9.75H14.05V8.55H6.25V9.75ZM8.5 20.5V18.5H4.3C3.8 18.5 3.375 18.325 3.025 17.975C2.675 17.625 2.5 17.2 2.5 16.7V5.3C2.5 4.8 2.675 4.375 3.025 4.025C3.375 3.675 3.8 3.5 4.3 3.5H19.7C20.2 3.5 20.625 3.675 20.975 4.025C21.325 4.375 21.5 4.8 21.5 5.3V16.7C21.5 17.2 21.325 17.625 20.975 17.975C20.625 18.325 20.2 18.5 19.7 18.5H15.5V20.5H8.5ZM4.3 17H19.7C19.7667 17 19.8333 16.9667 19.9 16.9C19.9667 16.8333 20 16.7667 20 16.7V5.3C20 5.23333 19.9667 5.16667 19.9 5.1C19.8333 5.03333 19.7667 5 19.7 5H4.3C4.23333 5 4.16667 5.03333 4.1 5.1C4.03333 5.16667 4 5.23333 4 5.3V16.7C4 16.7667 4.03333 16.8333 4.1 16.9C4.16667 16.9667 4.23333 17 4.3 17ZM4 17V5V17Z"></path></symbol><symbol id="icon-zhaxunjiaoyi" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="g3yf7cbl8__design-iconfont">  <path d="M14.9749 17.809C15.5243 17.809 15.9933 17.6182 16.3819 17.2366C16.7705 16.8544 16.9648 16.3819 16.9648 15.8191C16.9648 15.2697 16.7705 14.8007 16.3819 14.4121C15.9933 14.0235 15.5243 13.8291 14.9749 13.8291C14.4121 13.8291 13.9398 14.0235 13.5582 14.4121C13.176 14.8007 12.9849 15.2697 12.9849 15.8191C12.9849 16.3819 13.176 16.8544 13.5582 17.2366C13.9398 17.6182 14.4121 17.809 14.9749 17.809V17.809ZM19.0754 20.8643L16.7839 18.5729C16.5293 18.7605 16.2514 18.9012 15.9502 18.995C15.6484 19.0888 15.3233 19.1357 14.9749 19.1357C14.0503 19.1357 13.2663 18.8141 12.6231 18.1709C11.9799 17.5276 11.6583 16.7437 11.6583 15.8191C11.6583 14.9079 11.9799 14.1272 12.6231 13.477C13.2663 12.8273 14.0503 12.5025 14.9749 12.5025C15.8861 12.5025 16.6665 12.8241 17.3162 13.4673C17.9664 14.1106 18.2915 14.8945 18.2915 15.8191C18.2915 16.1675 18.2413 16.4958 18.1411 16.804C18.0403 17.1122 17.8961 17.3936 17.7085 17.6482L20 19.9196L19.0754 20.8643ZM5.82915 19.7588C5.30653 19.7588 4.87102 19.5846 4.52261 19.2362C4.1742 18.8878 4 18.4523 4 17.9296V5.82915C4 5.30653 4.1742 4.87102 4.52261 4.52261C4.87102 4.1742 5.30653 4 5.82915 4H12L16.4623 8.44221V10.8543C16.2211 10.7739 15.9732 10.7069 15.7186 10.6533C15.464 10.5997 15.2161 10.5729 14.9749 10.5729C14.2647 10.5729 13.6115 10.7069 13.0155 10.9749C12.4189 11.2429 11.8861 11.598 11.4171 12.0402L7.11558 12V13.206H10.4322C10.2178 13.541 10.057 13.8927 9.94975 14.2609C9.84255 14.6297 9.78894 15.0151 9.78894 15.4171H7.11558V16.6231H9.78894C9.89615 17.2395 10.1073 17.8157 10.4225 18.3518C10.7372 18.8878 11.1357 19.3568 11.6181 19.7588H5.82915ZM11.3568 9.10553H15.1357L11.3568 5.32663L15.1357 9.10553L11.3568 5.32663V9.10553Z"></path></symbol><symbol id="icon-baocun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="bmzrtlaxe__9k5szlcut__design-iconfont">  <path d="M20.8 7.07501V18.525C20.8 19.175 20.5833 19.7167 20.15 20.15C19.7167 20.5833 19.175 20.8 18.525 20.8H5.47501C4.82501 20.8 4.28335 20.5833 3.85001 20.15C3.41668 19.7167 3.20001 19.175 3.20001 18.525V5.47501C3.20001 4.82501 3.41668 4.28335 3.85001 3.85001C4.28335 3.41668 4.82501 3.20001 5.47501 3.20001H16.925L20.8 7.07501ZM12 16.9C12.65 16.9 13.2043 16.6707 13.663 16.212C14.121 15.754 14.35 15.2 14.35 14.55C14.35 13.8833 14.121 13.325 13.663 12.875C13.2043 12.425 12.65 12.2 12 12.2C11.35 12.2 10.796 12.425 10.338 12.875C9.87935 13.325 9.65001 13.875 9.65001 14.525C9.65001 15.1917 9.87935 15.754 10.338 16.212C10.796 16.6707 11.35 16.9 12 16.9ZM6.42501 10.125H14.65V6.42501H6.42501V10.125Z"></path></symbol><symbol id="icon-touxiangshangzhuan" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="7af18z6xx__h84mbwzze__design-iconfont">  <path d="M12 16.975C13.0833 16.975 13.9917 16.6043 14.725 15.863C15.4583 15.121 15.825 14.2166 15.825 13.15C15.825 12.0666 15.4543 11.1583 14.713 10.425C13.971 9.69164 13.0667 9.32498 12 9.32498C10.9167 9.32498 10.0083 9.69598 9.27501 10.438C8.54168 11.1793 8.17501 12.0833 8.17501 13.15C8.17501 14.2333 8.54601 15.1416 9.28801 15.875C10.0293 16.6083 10.9333 16.975 12 16.975ZM12 15.325C11.3833 15.325 10.8667 15.1166 10.45 14.7C10.0333 14.2833 9.82501 13.7666 9.82501 13.15C9.82501 12.5333 10.0333 12.0166 10.45 11.6C10.8667 11.1833 11.3833 10.975 12 10.975C12.6167 10.975 13.1333 11.1833 13.55 11.6C13.9667 12.0166 14.175 12.5333 14.175 13.15C14.175 13.7666 13.9667 14.2833 13.55 14.7C13.1333 15.1166 12.6167 15.325 12 15.325ZM4.47501 20.825C3.82501 20.825 3.28335 20.6083 2.85001 20.175C2.41668 19.7416 2.20001 19.2 2.20001 18.55V7.74998C2.20001 7.09998 2.41668 6.55831 2.85001 6.12498C3.28335 5.69164 3.82501 5.47498 4.47501 5.47498H7.30001L9.35001 3.22498H14.65L16.7 5.47498H19.525C20.175 5.47498 20.7167 5.69164 21.15 6.12498C21.5833 6.55831 21.8 7.09998 21.8 7.74998V18.55C21.8 19.2 21.5833 19.7416 21.15 20.175C20.7167 20.6083 20.175 20.825 19.525 20.825H4.47501ZM19.525 19.175C19.7083 19.175 19.8583 19.1166 19.975 19C20.0917 18.8833 20.15 18.7333 20.15 18.55V7.74998C20.15 7.56664 20.0917 7.41664 19.975 7.29998C19.8583 7.18331 19.7083 7.12498 19.525 7.12498H16L13.925 4.87498H10.075L8.00001 7.12498H4.47501C4.29168 7.12498 4.14168 7.18331 4.02501 7.29998C3.90835 7.41664 3.85001 7.56664 3.85001 7.74998V18.55C3.85001 18.7333 3.90835 18.8833 4.02501 19C4.14168 19.1166 4.29168 19.175 4.47501 19.175H19.525Z"></path></symbol><symbol id="icon-tabguanbi" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="hcny0cae2__design-iconfont">  <path d="M12 10.9395L15.7125 7.22699L16.773 8.28749L13.0605 12L16.773 15.7125L15.7125 16.773L12 13.0605L8.28749 16.773L7.22699 15.7125L10.9395 12L7.22699 8.28749L8.28749 7.22699L12 10.9395Z"></path></symbol><symbol id="icon-jiaoyanzhong" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="wqkxe61ut__design-iconfont">  <path d="M8.18677 7.58594C9.24526 6.66874 10.5994 6.16474 12 6.16669C15.2218 6.16669 17.8334 8.77828 17.8334 12C17.8334 13.246 17.4425 14.401 16.7775 15.3484L14.9167 12H16.6667C16.6668 11.0851 16.3979 10.1904 15.8936 9.42709C15.3892 8.66377 14.6716 8.06554 13.83 7.70677C12.9884 7.34799 12.0599 7.24452 11.16 7.4092C10.2601 7.57389 9.42837 7.99947 8.76835 8.63303L8.18677 7.58594ZM15.8133 16.4141C14.7548 17.3313 13.4006 17.8353 12 17.8334C8.77827 17.8334 6.16669 15.2218 6.16669 12C6.16669 10.754 6.55752 9.59903 7.22252 8.65169L9.08335 12H7.33335C7.33328 12.9149 7.60213 13.8096 8.10647 14.573C8.61081 15.3363 9.32839 15.9345 10.17 16.2933C11.0116 16.6521 11.9401 16.7555 12.84 16.5908C13.74 16.4262 14.5717 16.0006 15.2317 15.367L15.8133 16.4141Z"></path></symbol><symbol id="icon-jiaoyanwancheng" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="upqjwnpbg__design-iconfont">  <path d="M10.7624 13.8565L16.1244 8.4939L16.9499 9.31873L10.7624 15.5061L7.05011 11.7938L7.87494 10.969L10.7624 13.8565Z"></path></symbol><symbol id="icon-qihuan" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="zgbr4l457__design-iconfont">  <path d="M14.7 12.0333L18 15.3333L14.7 18.6333L13.7573 17.6906L15.448 15.9993L6.66667 16V14.6666H15.448L13.7573 12.976L14.7 12.0333ZM9.3 5.36664L10.2427 6.3093L8.552 7.99997H17.3333V9.3333H8.552L10.2427 11.024L9.3 11.9666L6 8.66664L9.3 5.36664Z"></path></symbol><symbol id="icon-zhizhi" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="atga7fdau__design-iconfont">  <path d="M8.5 7.61422L9.675 6.5L15.5 12L9.675 17.5L8.5 16.3858L13.125 12L8.5 7.61422Z"></path></symbol></svg>';

    injectStyle(styleId, styleText);
    injectSvg(svgId, svgText);
  });
})()
document.getElementById("effectButton").addEventListener("click", function () {
    const title = document.getElementById("title");
  
    // すでにeffectクラスが付いている場合は一度外して再付与（繰り返し発動対応）
    title.classList.remove("effect");
  
    // 少し時間を置いてから再付与（アニメーションを再実行させる）
    setTimeout(() => {
      title.classList.add("effect");
    }, 10);
  });
  
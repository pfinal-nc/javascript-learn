let module = (function () {
    // 模块列表集合
    const moduleLists = {};
  function define(name, modules, action) {
    // modules.map((m, i) => {
    //   modules[i] = moduleLists[m];
    // });
    modules = modules.map(m => moduleLists[m]);
    //执行并保存模块
    moduleLists[name] = action.apply(null, modules);
  }

  function get(name) {
    return moduleLists[name];
  }

    return { define,get };
})();

// 声明模块不依赖其他模块
module.define("pfinal", [], function () {
    return {
        show() {
            console.log("hello pfinal");
        }
    };
});

// 声明模块时依赖其他模块
module.define("pfinalcms", ["pfinal"], function (pfinal) {
    return {
        show() {
            pfinal.show();
            console.log("hello pfinalcms");
        }
    };
});

export const pfinal = module.get("pfinal");
export const pfinalcms = module.get("pfinalcms");
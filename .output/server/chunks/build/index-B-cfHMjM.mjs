import { useSSRContext, defineComponent, mergeProps } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs } from 'vue/server-renderer';

const _sfc_main$1 = /* @__PURE__ */ Object.assign({
  name: "NuxtTutorial"
}, {
  __name: "Tutorial",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0" }, _attrs))}><div class="max-w-4xl mx-auto sm:px-6 lg:px-8"><a class="flex justify-center pt-8 sm:pt-0" href="https://nuxtjs.org" target="_blank"><svg width="218" height="45" viewBox="0 0 159 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M55.5017 6.81866H60.1727L70.0719 22.9912V6.81866H74.3837V29.7345H69.7446L59.8135 13.5955V29.7345H55.5017V6.81866Z" fill="#003543"></path></svg></a><div class="mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6"><h2 class="text-2xl leading-7 font-semibold"> Welcome to your Nuxt Application </h2><p class="mt-3 text-gray-600"> We recommend you take a look at the <a href="https://nuxtjs.org" target="_blank" class="button--doc text-green-500 hover:underline">Nuxt Documentation</a>, whether you are new or have previous experience with the framework.<br></p><p class="mt-4 pt-4 text-gray-800 border-t border-dashed"> To get started, remove <code class="bg-gray-100 text-sm p-1 rounded border">components/Tutorial.vue</code> and start coding in <code class="bg-gray-100 text-sm p-1 rounded border">pages/index.vue</code>. Have fun! </p></div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tutorial.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=index-B-cfHMjM.mjs.map

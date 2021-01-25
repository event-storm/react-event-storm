'use strict';Object.defineProperty(exports,"__esModule",{value:!0});var react=require("react");const useModels=(...a)=>{const[b,c]=react.useState();return react.useEffect(()=>{const b=a.map(a=>a.subscribe(()=>c([])));return()=>b.map(a=>a())},[]),a.map(a=>a.getState())};exports.useModels=useModels;
//# sourceMappingURL=index-cjs.js.map

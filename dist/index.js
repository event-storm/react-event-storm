import{useState,useEffect}from"react";const useModels=(...a)=>{const[b,c]=useState();return useEffect(()=>{const b=a.map(a=>a.subscribe(()=>c([])));return()=>b.map(a=>a())},[]),a.map(a=>a.getState())};export{useModels};
//# sourceMappingURL=index.js.map

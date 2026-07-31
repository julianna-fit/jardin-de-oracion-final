/* Jardín de Oración — Base permanente v7 */
(function(){
  const editions={
    julio2026:{id:'julio2026',label:'Julio 2026',title:'El primer jardín',status:'archived',url:'edicion-julio.html',days:31},
    agosto2026:{id:'agosto2026',label:'Agosto 2026',title:'Dios restaura mi corazón',status:'current',url:'index.html',days:31},
    septiembre2026:{id:'septiembre2026',label:'Septiembre 2026',title:'Próxima edición',status:'coming-soon',url:null,days:30}
  };
  const currentEdition='agosto2026';
  const prefix='jardin:';
  function editionKey(edition,key){return `${prefix}${edition}:${key}`}
  function sharedKey(key){return `${prefix}shared:${key}`}
  function settingKey(key){return `${prefix}settings:${key}`}
  function safeParse(raw,fallback){try{return raw===null?fallback:(JSON.parse(raw)??fallback)}catch(e){return fallback}}
  function getEdition(edition,key,fallback){return safeParse(localStorage.getItem(editionKey(edition,key)),fallback)}
  function setEdition(edition,key,value){localStorage.setItem(editionKey(edition,key),JSON.stringify(value))}
  function listStoredEditions(){
    const found=new Set();
    for(let i=0;i<localStorage.length;i++){
      const k=localStorage.key(i)||'';
      const m=k.match(/^jardin:([^:]+):/);if(m&&!['shared','settings'].includes(m[1]))found.add(m[1]);
    }
    return [...found];
  }
  window.JARDIN_APP={version:'7.0.0',build:'20260731-v7',editions,currentEdition,editionKey,sharedKey,settingKey,getEdition,setEdition,listStoredEditions};
})();
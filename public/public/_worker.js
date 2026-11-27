const C={QA:["Qatar","\u0642\u0637\u0631"],SA:["Saudi Arabia","\u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629"],AE:["United Arab Emirates","\u0627\u0644\u0625\u0645\u0627\u0631\u0627\u062a \u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0627\u0644\u0645\u062a\u062d\u062f\u0629"],KW:["Kuwait","\u0627\u0644\u0643\u0648\u064a\u062a"],BH:["Bahrain","\u0627\u0644\u0628\u062d\u0631\u064a\u0646"],OM:["Oman","\u0639\u064f\u0645\u0627\u0646"]};
const I={
"NY.GDP.MKTP.CD":["GDP (current US$)","\u0625\u062c\u0645\u0627\u0644\u064a \u0627\u0644\u0646\u0627\u062a\u062c \u0627\u0644\u0645\u062d\u0644\u064a (\u0627\u0644\u0642\u064a\u0645\u0629 \u0627\u0644\u062d\u0627\u0644\u064a\u0629 \u0628\u0627\u0644\u062f\u0648\u0644\u0627\u0631 \u0627\u0644\u0623\u0645\u0631\u064a\u0643\u064a)"],
"NY.GDP.PCAP.CD":["GDP per capita (current US$)","\u0646\u0635\u064a\u0628 \u0627\u0644\u0641\u0631\u062f \u0645\u0646 \u0625\u062c\u0645\u0627\u0644\u064a \u0627\u0644\u0646\u0627\u062a\u062c \u0627\u0644\u0645\u062d\u0644\u064a (\u0628\u0627\u0644\u0623\u0633\u0639\u0627\u0631 \u0627\u0644\u062c\u0627\u0631\u064a\u0629 \u0644\u0644\u062f\u0648\u0644\u0627\u0631 \u0627\u0644\u0623\u0645\u0631\u064a\u0643\u064a)"],
"NY.GDP.MKTP.KD.ZG":["GDP growth (annual %)","\u0646\u0645\u0648 \u0625\u062c\u0645\u0627\u0644\u064a \u0627\u0644\u0646\u0627\u062a\u062c \u0627\u0644\u0645\u062d\u0644\u064a (% \u0633\u0646\u0648\u064a\u0627\u064b)"],
"SP.POP.TOTL":["Population, total","\u062a\u0639\u062f\u0627\u062f \u0627\u0644\u0633\u0643\u0627\u0646\u060c \u0627\u0644\u0625\u062c\u0645\u0627\u0644\u064a"],
"FP.CPI.TOTL.ZG":["Inflation, consumer prices (annual %)","\u0627\u0644\u062a\u0636\u062e\u0645\u060c \u0627\u0644\u0623\u0633\u0639\u0627\u0631 \u0627\u0644\u062a\u064a \u064a\u062f\u0641\u0639\u0647\u0627 \u0627\u0644\u0645\u0633\u062a\u0647\u0644\u0643\u0648\u0646 (% \u0633\u0646\u0648\u064a\u0627)"],
"SL.UEM.TOTL.ZS":["Unemployment, total (% of labor force, modeled ILO estimate)","\u0628\u0637\u0627\u0644\u0629\u060c \u0625\u062c\u0645\u0627\u0644\u064a (% \u0645\u0646 \u0625\u062c\u0645\u0627\u0644\u064a \u0627\u0644\u0642\u0648\u0649 \u0627\u0644\u0639\u0627\u0645\u0644\u0629)"],
"IT.NET.USER.ZS":["Individuals using the Internet (% of population)","Individuals using the Internet (% of population)"],
"SP.DYN.LE00.IN":["Life expectancy at birth, total (years)","\u0627\u0644\u0639\u0645\u0631 \u0627\u0644\u0645\u062a\u0648\u0642\u0639 \u0639\u0646\u062f \u0627\u0644\u0645\u064a\u0644\u0627\u062f\u060c \u0625\u062c\u0645\u0627\u0644\u064a (\u0628\u0627\u0644\u0633\u0646\u0648\u0627\u062a)"],
"NE.EXP.GNFS.ZS":["Exports of goods and services (% of GDP)","\u0635\u0627\u062f\u0631\u0627\u062a \u0627\u0644\u0633\u0644\u0639 \u0648\u0627\u0644\u062e\u062f\u0645\u0627\u062a (% \u0645\u0646 \u0625\u062c\u0645\u0627\u0644\u064a \u0627\u0644\u0646\u0627\u062a\u062c \u0627\u0644\u0645\u062d\u0644\u064a)"],
"NE.IMP.GNFS.ZS":["Imports of goods and services (% of GDP)","\u0648\u0627\u0631\u062f\u0627\u062a \u0627\u0644\u0633\u0644\u0639 \u0648\u0627\u0644\u062e\u062f\u0645\u0627\u062a (% \u0645\u0646 \u0625\u062c\u0645\u0627\u0644\u064a \u0627\u0644\u0646\u0627\u062a\u062c \u0627\u0644\u0645\u062d\u0644\u064a)"],
"SP.URB.TOTL.IN.ZS":["Urban population (% of total)","\u0633\u0643\u0627\u0646 \u0627\u0644\u0645\u0646\u0627\u0637\u0642 \u0627\u0644\u062d\u0636\u0631\u064a\u0629 (% \u0645\u0646 \u0625\u062c\u0645\u0627\u0644\u064a \u0639\u062f\u062f \u0627\u0644\u0633\u0643\u0627\u0646)"],
"EG.USE.ELEC.KH.PC":["Electric power consumption (kWh per capita)","\u0627\u0633\u062a\u0647\u0644\u0627\u0643 \u0627\u0644\u0637\u0627\u0642\u0629 \u0627\u0644\u0643\u0647\u0631\u0628\u0627\u0626\u064a\u0629 (\u0643\u064a\u0644\u0648\u0648\u0627\u0637 \u0633\u0627\u0639\u0629 \u0644\u0644\u0641\u0631\u062f)"],
"GC.DOD.TOTL.GD.ZS":["Central government debt (% of GDP)","\u062f\u064a\u0646 \u0627\u0644\u062d\u0643\u0648\u0645\u0629 \u0627\u0644\u0645\u0631\u0643\u0632\u064a\u0629\u060c \u0625\u062c\u0645\u0627\u0644\u064a (% \u0645\u0646 \u0625\u062c\u0645\u0627\u0644\u064a \u0627\u0644\u0646\u0627\u062a\u062c \u0627\u0644\u0645\u062d\u0644\u064a)"],
"BX.KLT.DINV.CD.WD":["Foreign direct investment, net inflows (BoP, current US$)","\u0627\u0644\u0627\u0633\u062a\u062b\u0645\u0627\u0631 \u0627\u0644\u0623\u062c\u0646\u0628\u064a \u0627\u0644\u0645\u0628\u0627\u0634\u0631\u060c \u0635\u0627\u0641\u064a \u0627\u0644\u062a\u062f\u0641\u0642\u0627\u062a \u0627\u0644\u0648\u0627\u0641\u062f\u0629 (\u0628\u0627\u0644\u062f\u0648\u0644\u0627\u0631 \u0627\u0644\u0623\u0645\u0631\u064a\u0643\u064a)"]};
const WB_ATTR="The World Bank: World Development Indicators, licensed CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/). Retrieved live via api.worldbank.org. Values reformatted into JSON; no other changes.";
const QA_ATTR="State of Qatar Open Data portal (data.gov.qa), licensed CC BY (Qatar Open Data License, based on CC BY). Publisher is shown per dataset. Retrieved live via the portal API. Reformatted into JSON; no other changes.";
const DISC="Unofficial service. Not affiliated with the World Bank or the State of Qatar. Data can lag the source; check the source before relying on it. Not financial, legal or investment advice.";
const J=(o,s=200)=>new Response(JSON.stringify(o,null,1),{status:s,headers:{"content-type":"application/json; charset=utf-8","access-control-allow-origin":"*","access-control-allow-headers":"*"}});
const esc=s=>String(s??"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const now=()=>new Date().toISOString();
const meta=(src,lic,attr)=>({source:src,licence:lic,attribution:attr,retrieved_at:now(),disclaimer:DISC});
async function wb(code,countries,years){
  const cs=countries.map(c=>c.toUpperCase()).filter(c=>C[c]);if(!cs.length)throw new Error("countries must be from: "+Object.keys(C).join(","));
  if(!I[code])throw new Error("unknown indicator; see list_indicators");
  const y=Math.min(Math.max(+years||5,1),30);const to=new Date().getFullYear();
  const u=`https://api.worldbank.org/v2/country/${cs.join(";")}/indicator/${code}?format=json&per_page=500&date=${to-y}:${to}`;
  const r=await fetch(u,{cf:{cacheTtl:86400,cacheEverything:true}});if(!r.ok)throw new Error("World Bank API error "+r.status);
  const d=await r.json();const rows=(d[1]||[]).filter(x=>x.value!==null).map(x=>({country:x.countryiso3code,iso2:x.country.id,country_en:C[x.country.id]?.[0],country_ar:C[x.country.id]?.[1],year:+x.date,value:x.value}));
  return {indicator:code,name_en:I[code][0],name_ar:I[code][1],last_updated:d[0]?.lastupdated,rows,...meta("https://api.worldbank.org/v2","CC BY 4.0",WB_ATTR)};
}
async function qaSearch(q,limit){
  const where=q?`&where=${encodeURIComponent(`search("${q.replace(/["\\]/g,"")}")`)}`:"";
  const r=await fetch(`https://www.data.gov.qa/api/explore/v2.1/catalog/datasets?limit=${Math.min(+limit||10,25)}&select=dataset_id,title_en:metas.default.title_en,title_ar:metas.default.title_ar,publisher:metas.default.publisher,license:metas.default.license,modified:metas.default.modified`+where,{cf:{cacheTtl:3600,cacheEverything:true}});
  const d=await r.json().catch(()=>({}));
  if(!r.ok){const r2=await fetch(`https://www.data.gov.qa/api/explore/v2.1/catalog/datasets?limit=${Math.min(+limit||10,25)}`+where);const d2=await r2.json();return {total:d2.total_count,results:(d2.results||[]).map(x=>({dataset_id:x.dataset_id,title_en:x.metas?.default?.title_en||x.metas?.default?.title,title_ar:x.metas?.default?.title_ar,publisher:x.metas?.default?.publisher,license:x.metas?.default?.license,modified:x.metas?.default?.modified,url:"https://www.data.gov.qa/explore/dataset/"+x.dataset_id+"/"}))};}
  return {total:d.total_count,results:(d.results||[]).map(x=>({...x,url:"https://www.data.gov.qa/explore/dataset/"+x.dataset_id+"/"}))};
}
async function qaRecords(id,limit){
  if(!/^[\w\-]+$/.test(id))throw new Error("bad dataset id");
  const r=await fetch(`https://www.data.gov.qa/api/explore/v2.1/catalog/datasets/${id}/records?limit=${Math.min(+limit||20,100)}`,{cf:{cacheTtl:3600,cacheEverything:true}});
  if(!r.ok)throw new Error("dataset not found or not available "+r.status);const d=await r.json();
  const m=await (await fetch(`https://www.data.gov.qa/api/explore/v2.1/catalog/datasets/${id}`,{cf:{cacheTtl:3600,cacheEverything:true}})).json().catch(()=>({}));
  const md=m.metas?.default||{};
  return {dataset_id:id,title_en:md.title_en||md.title,title_ar:md.title_ar,publisher:md.publisher,license:md.license,modified:md.modified,total_records:d.total_count,records:d.results,page_url:"https://www.data.gov.qa/explore/dataset/"+id+"/",...meta("https://www.data.gov.qa/api/explore/v2.1/",md.license||"CC BY",QA_ATTR)};
}
const TOOLS=[
{name:"gulf_indicator",description:"Official World Bank indicator values (GDP, inflation, population, unemployment, etc.) for GCC countries (Qatar, Saudi Arabia, UAE, Kuwait, Bahrain, Oman), with Arabic and English names, source, licence (CC BY 4.0) and retrieval date.",inputSchema:{type:"object",properties:{indicator:{type:"string",description:"World Bank indicator code, e.g. NY.GDP.MKTP.CD. Use list_indicators."},countries:{type:"array",items:{type:"string"},description:"ISO2 codes, default all six: QA SA AE KW BH OM"},years:{type:"number",description:"How many recent years, default 5"}},required:["indicator"]}},
{name:"gulf_country_snapshot",description:"Latest value of every supported indicator for one GCC country, in Arabic and English, with source and licence.",inputSchema:{type:"object",properties:{country:{type:"string",description:"ISO2: QA SA AE KW BH OM"}},required:["country"]}},
{name:"list_indicators",description:"List supported GCC indicators and countries with Arabic and English names.",inputSchema:{type:"object",properties:{}}},
{name:"qatar_open_data_search",description:"Search the official State of Qatar Open Data portal (data.gov.qa, about 2,000 datasets, CC BY) by keyword in English or Arabic. Returns titles in both languages, publisher, licence and link.",inputSchema:{type:"object",properties:{query:{type:"string"},limit:{type:"number"}},required:["query"]}},
{name:"qatar_open_data_records",description:"Fetch rows from one Qatar Open Data dataset by dataset_id (from qatar_open_data_search), with publisher, licence, attribution and dates.",inputSchema:{type:"object",properties:{dataset_id:{type:"string"},limit:{type:"number"}},required:["dataset_id"]}}];
async function call(name,a){
  a=a||{};
  if(name==="list_indicators")return {countries:Object.entries(C).map(([k,v])=>({iso2:k,name_en:v[0],name_ar:v[1]})),indicators:Object.entries(I).map(([k,v])=>({code:k,name_en:v[0],name_ar:v[1]})),...meta("https://data.worldbank.org","CC BY 4.0",WB_ATTR)};
  if(name==="gulf_indicator")return wb(a.indicator,a.countries||Object.keys(C),a.years);
  if(name==="gulf_country_snapshot"){const c=String(a.country||"").toUpperCase();if(!C[c])throw new Error("country must be one of "+Object.keys(C).join(","));
    const out=await Promise.all(Object.keys(I).map(async k=>{try{const r=await wb(k,[c],8);const l=r.rows.sort((x,y)=>y.year-x.year)[0];return {code:k,name_en:I[k][0],name_ar:I[k][1],year:l?.year??null,value:l?.value??null};}catch(e){return {code:k,error:String(e.message)}}}));
    return {country:c,name_en:C[c][0],name_ar:C[c][1],indicators:out,...meta("https://api.worldbank.org/v2","CC BY 4.0",WB_ATTR)};}
  if(name==="qatar_open_data_search"){const r=await qaSearch(a.query||"",a.limit);return {query:a.query,total:r.total,results:r.results,...meta("https://www.data.gov.qa/api/explore/v2.1/","CC BY",QA_ATTR)};}
  if(name==="qatar_open_data_records")return qaRecords(a.dataset_id,a.limit);
  throw new Error("unknown tool");
}
const page=(t,b)=>new Response(`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(t)}</title><meta name="description" content="Free official Gulf and Qatar open data for people and AI agents: World Bank GCC indicators and Qatar Open Data, in Arabic and English, with source and licence on every answer."><style>body{font:16px/1.5 system-ui;max-width:900px;margin:2rem auto;padding:0 1rem}table{border-collapse:collapse;width:100%}td,th{border:1px solid #ccc;padding:.3rem .5rem;font-size:14px}.n{background:#fff8e1;padding:.6rem;border-left:4px solid #e0a800}[dir=rtl]{direction:rtl}</style></head><body>${b}<hr><p class="n">${esc(DISC)}<br>Sources: <a href="https://data.worldbank.org">World Bank Open Data</a> (CC BY 4.0), <a href="https://www.data.gov.qa">State of Qatar Open Data</a> (CC BY). <a href="/">Home</a> \u00b7 <a href="/llms.txt">llms.txt</a> \u00b7 <a href="/mcp">MCP</a></p></body></html>`,{headers:{"content-type":"text/html; charset=utf-8"}});
const fmt=v=>v==null?"-":Math.abs(v)>=1000?Math.round(v).toLocaleString("en-US"):(+v).toFixed(2);
export default{async fetch(req){
  const u=new URL(req.url),p=u.pathname.replace(/\/+$/,"")||"/";
  if(req.method==="OPTIONS")return new Response(null,{headers:{"access-control-allow-origin":"*","access-control-allow-headers":"*","access-control-allow-methods":"GET,POST,OPTIONS"}});
  try{
  if(p==="/mcp"){
    if(req.method==="GET")return J({name:"gulf-open-data",description:"Official Gulf (GCC) and Qatar open data for AI agents, Arabic and English, with source and licence on every answer.",transport:"streamable-http (POST JSON-RPC)",tools:TOOLS.map(t=>t.name)});
    const b=await req.json();const one=async m=>{
      if(m.method==="initialize")return {jsonrpc:"2.0",id:m.id,result:{protocolVersion:"2025-03-26",capabilities:{tools:{}},serverInfo:{name:"gulf-open-data",version:"0.1.0"},instructions:"Official GCC and Qatar open data (World Bank CC BY 4.0, data.gov.qa CC BY). Every result carries source, licence, attribution and retrieval date. Unofficial service."}};
      if(m.method==="tools/list")return {jsonrpc:"2.0",id:m.id,result:{tools:TOOLS}};
      if(m.method==="tools/call"){try{const r=await call(m.params?.name,m.params?.arguments);return {jsonrpc:"2.0",id:m.id,result:{content:[{type:"text",text:JSON.stringify(r)}]}};}catch(e){return {jsonrpc:"2.0",id:m.id,result:{isError:true,content:[{type:"text",text:String(e.message)}]}};}}
      if(m.method==="ping")return {jsonrpc:"2.0",id:m.id,result:{}};
      if(m.id===undefined)return null;
      return {jsonrpc:"2.0",id:m.id,error:{code:-32601,message:"Method not found"}};};
    if(Array.isArray(b)){const r=(await Promise.all(b.map(one))).filter(Boolean);return J(r);}
    const r=await one(b);return r?J(r):new Response(null,{status:202});}
  if(p==="/api/indicators")return J(await call("list_indicators"));
  if(p==="/api/indicator")return J(await call("gulf_indicator",{indicator:u.searchParams.get("code"),countries:(u.searchParams.get("countries")||Object.keys(C).join(",")).split(","),years:u.searchParams.get("years")}));
  if(p==="/api/country")return J(await call("gulf_country_snapshot",{country:u.searchParams.get("code")}));
  if(p==="/api/qatar/search")return J(await call("qatar_open_data_search",{query:u.searchParams.get("q")||"",limit:u.searchParams.get("limit")}));
  if(p==="/api/qatar/records")return J(await call("qatar_open_data_records",{dataset_id:u.searchParams.get("id"),limit:u.searchParams.get("limit")}));
  if(p==="/llms.txt")return new Response(`# Gulf open data for agents (unofficial)\n${DISC}\nOfficial GCC (Qatar, Saudi Arabia, UAE, Kuwait, Bahrain, Oman) indicators from the World Bank (CC BY 4.0) and Qatar Open Data (data.gov.qa, CC BY). Arabic and English names. Every response has source, licence, attribution and retrieved_at.\nMCP (streamable HTTP, POST JSON-RPC): ${u.origin}/mcp\nTools: gulf_indicator, gulf_country_snapshot, list_indicators, qatar_open_data_search, qatar_open_data_records\nREST: GET /api/indicators, /api/indicator?code=NY.GDP.MKTP.CD&countries=QA,SA&years=5, /api/country?code=QA, /api/qatar/search?q=population, /api/qatar/records?id=<dataset_id>\n`,{headers:{"content-type":"text/plain; charset=utf-8"}});
  if(p==="/robots.txt")return new Response("User-agent: *\nAllow: /\n");
  if(p==="/.well-known/mcp/server-card.json")return J({name:"gulf-open-data",title:"Gulf and Qatar Open Data (Arabic/English)",description:"Official GCC indicators (World Bank, CC BY 4.0) and Qatar Open Data (CC BY) for AI agents, with source and licence on every answer.",endpoint:u.origin+"/mcp",transport:"streamable-http",tools:TOOLS.map(t=>({name:t.name,description:t.description}))});
  const m=p.match(/^\/country\/(\w\w)$/);
  if(m){const c=m[1].toUpperCase();if(!C[c])return page("Not found","<h1>Not found</h1>");const r=await call("gulf_country_snapshot",{country:c});
    return page(`${C[c][0]} key indicators | ${C[c][1]}`,`<h1>${esc(C[c][0])} <span dir="rtl">(${esc(C[c][1])})</span></h1><table><tr><th>Indicator</th><th dir="rtl">\u0627\u0644\u0645\u0624\u0634\u0631</th><th>Year</th><th>Value</th></tr>${r.indicators.map(i=>`<tr><td>${esc(i.name_en)}</td><td dir="rtl">${esc(i.name_ar)}</td><td>${i.year??""}</td><td>${fmt(i.value)}</td></tr>`).join("")}</table><p>Source: World Bank WDI, CC BY 4.0. Retrieved ${esc(r.retrieved_at)}. API: <a href="/api/country?code=${c}">/api/country?code=${c}</a></p>`);}
  if(p==="/")return page("Gulf and Qatar open data for people and AI agents (Arabic / English)",`<h1>Gulf open data</h1><h1 dir="rtl" style="font-size:1.3rem">\u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u062e\u0644\u064a\u062c \u0627\u0644\u0645\u0641\u062a\u0648\u062d\u0629</h1><p>Official GCC indicators from the World Bank and Qatar's national open data portal, free, with Arabic and English names. Every answer carries its source, licence and retrieval date. Built for AI agents (MCP, JSON API, llms.txt) and people.</p><h2>Countries</h2><ul>${Object.entries(C).map(([k,v])=>`<li><a href="/country/${k}">${esc(v[0])}</a> <span dir="rtl">(${esc(v[1])})</span></li>`).join("")}</ul><h2>For agents</h2><p>MCP endpoint: <code>${esc(u.origin)}/mcp</code> (streamable HTTP). Tools: gulf_indicator, gulf_country_snapshot, list_indicators, qatar_open_data_search, qatar_open_data_records. See <a href="/llms.txt">llms.txt</a>, <a href="/.well-known/mcp/server-card.json">server card</a>.</p><h2>Try</h2><ul><li><a href="/api/indicator?code=NY.GDP.MKTP.CD&countries=QA,SA,AE&years=5">GDP, 3 countries</a></li><li><a href="/api/qatar/search?q=population">Qatar datasets: population</a></li></ul>`);
  return page("Not found","<h1>Not found</h1>");
  }catch(e){return J({error:String(e.message),disclaimer:DISC},400);}
}};

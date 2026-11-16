window.FINANCE_DATA = {
 concepts: [
  {id:'capm',title:'CAPM 資本資產定價模型',category:'投資組合',summary:'用系統性風險估計資產的必要報酬率。',formula:'E(Rᵢ) = Rf + βᵢ × [E(Rm) − Rf]',detail:'Rf 為無風險利率；β 衡量資產相對市場的系統性風險；E(Rm) 為市場預期報酬率。'},
  {id:'wacc',title:'WACC 加權平均資金成本',category:'公司理財',summary:'以權益與負債資金來源的權重衡量資金成本。',formula:'WACC = E/V × Re + D/V × Rd × (1 − T)',detail:'E 與 D 分別為權益及有息負債市值，V = E + D；Re 與 Rd 為各自資金成本，T 為適用稅率。'},
  {id:'dcf',title:'DCF 現金流量折現法',category:'企業評價',summary:'將預期未來現金流量折現，估計企業或資產價值。',formula:'PV = Σ [CFₜ / (1 + r)ᵗ]',detail:'CFₜ 為第 t 期現金流量；r 為與現金流風險一致的折現率。估值需注意終值與假設敏感度。'},
  {id:'diversification',title:'投資組合分散化',category:'投資組合',summary:'透過不同資產的相關性降低非系統性風險。',formula:'σp² = w₁²σ₁² + w₂²σ₂² + 2w₁w₂Cov(R₁,R₂)',detail:'兩資產投資組合風險取決於權重、個別波動度及共變異數；分散化無法消除所有市場風險。'}
 ],
 stocks: [
  {id:'tsmc',name:'台積電',ticker:'2330',industry:'半導體',summary:'示範研究摘要：從先進製程、全球擴產與資本支出理解晶圓代工產業。',highlights:['先進製程技術','全球產能布局','資本支出與自由現金流']},
  {id:'ge-vernova',name:'GE Vernova',ticker:'GEV',industry:'能源設備',summary:'示範研究摘要：關注電網設備、發電需求與能源轉型的長期趨勢。',highlights:['電網投資','電力需求','設備訂單與交付']},
  {id:'印能科技',name:'印能科技',ticker:'7734',industry:'半導體設備',summary:'示範研究摘要：聚焦先進封裝設備及相關製程需求。',highlights:['先進封裝','製程設備','產業擴產趨勢']}
 ],
 notes: [
  {id:'portfolio-basics',title:'投資組合管理｜風險與報酬',category:'投資組合管理',date:'2026-11-16',summary:'整理預期報酬、標準差、共變異數與分散化概念。'},
  {id:'valuation-basics',title:'企業評價｜DCF 入門',category:'財務分析',date:'2026-11-16',summary:'記錄 FCFF、折現率、終值及敏感度分析的基本架構。'},
  {id:'research-framework',title:'個股研究｜分析架構',category:'投資研究',date:'2026-11-16',summary:'從公司介紹、產業、成長動能與風險建立研究大綱。'}
 ]
};

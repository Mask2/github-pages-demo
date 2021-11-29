"use strict";(self.webpackChunkcampaign_test=self.webpackChunkcampaign_test||[]).push([[981],{2310:function(i,e,c){c.r(e),c.d(e,{default:function(){return _}});var t=c(7294),l=c(7399),a=c(1010),s=c(5987),d=c(7462),r=c(2585),n=c(3288);var o=t.createContext(),m="table",p=t.forwardRef((function(i,e){var c=i.classes,l=i.className,a=i.component,n=void 0===a?m:a,p=i.padding,g=void 0===p?"normal":p,h=i.size,f=void 0===h?"medium":h,u=i.stickyHeader,b=void 0!==u&&u,v=(0,s.Z)(i,["classes","className","component","padding","size","stickyHeader"]),y=t.useMemo((function(){return{padding:g,size:f,stickyHeader:b}}),[g,f,b]);return t.createElement(o.Provider,{value:y},t.createElement(n,(0,d.Z)({role:n===m?null:"table",ref:e,className:(0,r.Z)(c.root,l,b&&c.stickyHeader)},v)))})),g=(0,n.Z)((function(i){return{root:{display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":(0,d.Z)({},i.typography.body2,{padding:i.spacing(2),color:i.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},stickyHeader:{borderCollapse:"separate"}}}),{name:"MuiTable"})(p);var h=t.createContext(),f={variant:"body"},u="tbody",b=t.forwardRef((function(i,e){var c=i.classes,l=i.className,a=i.component,n=void 0===a?u:a,o=(0,s.Z)(i,["classes","className","component"]);return t.createElement(h.Provider,{value:f},t.createElement(n,(0,d.Z)({className:(0,r.Z)(c.root,l),ref:e,role:n===u?null:"rowgroup"},o)))})),v=(0,n.Z)({root:{display:"table-row-group"}},{name:"MuiTableBody"})(b),y=c(7969),E=t.forwardRef((function(i,e){var c,l,a=i.align,n=void 0===a?"inherit":a,m=i.classes,p=i.className,g=i.component,f=i.padding,u=i.scope,b=i.size,v=i.sortDirection,E=i.variant,x=(0,s.Z)(i,["align","classes","className","component","padding","scope","size","sortDirection","variant"]),Z=t.useContext(o),w=t.useContext(h),N=w&&"head"===w.variant;g?(l=g,c=N?"columnheader":"cell"):l=N?"th":"td";var k=u;!k&&N&&(k="col");var A=f||(Z&&Z.padding?Z.padding:"normal"),C=b||(Z&&Z.size?Z.size:"medium"),S=E||w&&w.variant,z=null;return v&&(z="asc"===v?"ascending":"descending"),t.createElement(l,(0,d.Z)({ref:e,className:(0,r.Z)(m.root,m[S],p,"inherit"!==n&&m["align".concat((0,y.Z)(n))],"normal"!==A&&m["padding".concat((0,y.Z)(A))],"medium"!==C&&m["size".concat((0,y.Z)(C))],"head"===S&&Z&&Z.stickyHeader&&m.stickyHeader),"aria-sort":z,role:c,scope:k},x))})),x=(0,n.Z)((function(i){return{root:(0,d.Z)({},i.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===i.palette.type?(0,a.$n)((0,a.Fq)(i.palette.divider,1),.88):(0,a._j)((0,a.Fq)(i.palette.divider,1),.68)),textAlign:"left",padding:16}),head:{color:i.palette.text.primary,lineHeight:i.typography.pxToRem(24),fontWeight:i.typography.fontWeightMedium},body:{color:i.palette.text.primary},footer:{color:i.palette.text.secondary,lineHeight:i.typography.pxToRem(21),fontSize:i.typography.pxToRem(12)},sizeSmall:{padding:"6px 24px 6px 16px","&:last-child":{paddingRight:16},"&$paddingCheckbox":{width:24,padding:"0 12px 0 16px","&:last-child":{paddingLeft:12,paddingRight:16},"& > *":{padding:0}}},paddingCheckbox:{width:48,padding:"0 0 0 4px","&:last-child":{paddingLeft:0,paddingRight:4}},paddingNone:{padding:0,"&:last-child":{padding:0}},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right",flexDirection:"row-reverse"},alignJustify:{textAlign:"justify"},stickyHeader:{position:"sticky",top:0,left:0,zIndex:2,backgroundColor:i.palette.background.default}}}),{name:"MuiTableCell"})(E),Z=t.forwardRef((function(i,e){var c=i.classes,l=i.className,a=i.component,n=void 0===a?"div":a,o=(0,s.Z)(i,["classes","className","component"]);return t.createElement(n,(0,d.Z)({ref:e,className:(0,r.Z)(c.root,l)},o))})),w=(0,n.Z)({root:{width:"100%",overflowX:"auto"}},{name:"MuiTableContainer"})(Z),N={variant:"head"},k="thead",A=t.forwardRef((function(i,e){var c=i.classes,l=i.className,a=i.component,n=void 0===a?k:a,o=(0,s.Z)(i,["classes","className","component"]);return t.createElement(h.Provider,{value:N},t.createElement(n,(0,d.Z)({className:(0,r.Z)(c.root,l),ref:e,role:n===k?null:"rowgroup"},o)))})),C=(0,n.Z)({root:{display:"table-header-group"}},{name:"MuiTableHead"})(A),S=t.forwardRef((function(i,e){var c=i.classes,l=i.className,a=i.component,n=void 0===a?"tr":a,o=i.hover,m=void 0!==o&&o,p=i.selected,g=void 0!==p&&p,f=(0,s.Z)(i,["classes","className","component","hover","selected"]),u=t.useContext(h);return t.createElement(n,(0,d.Z)({ref:e,className:(0,r.Z)(c.root,l,u&&{head:c.head,footer:c.footer}[u.variant],m&&c.hover,g&&c.selected),role:"tr"===n?null:"row"},f))})),z=(0,n.Z)((function(i){return{root:{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,"&$hover:hover":{backgroundColor:i.palette.action.hover},"&$selected, &$selected:hover":{backgroundColor:(0,a.Fq)(i.palette.secondary.main,i.palette.action.selectedOpacity)}},selected:{},hover:{},head:{},footer:{}}}),{name:"MuiTableRow"})(S),R=c(9186),H=c(6585),T=c(936),B=c(454),M=c(9931),I=c.n(M),q=c(9014),F=c(481),L=JSON.parse('[{"district":"新界東","clinic":"卓健醫療中心(沙田)","address":"沙田白鶴汀街10-18號新城市商業大廈9樓905-907室","call":"(852) 2698 9378"},{"district":"新界東","clinic":"卓健醫療中心(沙田圍港鐵站)","address":"馬鞍山鐵路沙田圍站6-7號舖","call":"(852) 2635 9199"},{"district":"新界東","clinic":"卓健醫療中心(馬鞍山)","address":"馬鞍山西沙路608號馬鞍山廣場210號舖","call":"(852) 2631 6992"},{"district":"新界東","clinic":"時代醫療服務中心(上水)","address":"上水廣場711-713A室","call":"(852) 3585 8533"},{"district":"新界東","clinic":"子行醫務中心","address":"大埔安慈路1 號海寶花園地下2號舖","call":"(852) 3619 2411"},{"district":"新界東","clinic":"卓健醫療中心(將軍澳-新都城)","address":"將軍澳新都城中心一期商場二樓234-236號舖","call":"(852) 2623 7200"},{"district":"新界東","clinic":"卓健醫療中心(將軍澳-天晉滙2)","address":"將軍澳唐俊街19號天晉滙2地下G18號舖","call":"(852) 2623 3268"},{"district":"新界東","clinic":"袁錫璋醫生,顏源發醫生","address":"沙田鄉事會路138號新城市中央廣場1期1318室","call":"(852) 2697 8803"},{"district":"新界東","clinic":"嚴洪晧醫生","address":"馬鞍山西沙路608號馬鞍山廣場L2層211舖","call":"(852) 2628 3273"},{"district":"新界東","clinic":"新都醫務中心 (沙田)","address":"沙田置富第一城一樓136B號","call":"(852) 2637 4388"},{"district":"新界西","clinic":"卓健醫療中心(青衣港鐵站)","address":"青衣港鐵站地下商舖TSY 47","call":"(852) 2436 1622"},{"district":"新界西","clinic":"卓健醫療中心(青衣城)","address":"青衣青敬路33號青衣城3樓308D號舖","call":"(852) 2431 0230"},{"district":"新界西","clinic":"卓健醫療中心(荃灣)","address":"荃灣荃興徑 10-18 號富榮大廈8號地舖","call":"(852) 2411 2203"},{"district":"新界西","clinic":"香港港安醫院─荃灣","address":"荃灣荃景圍199號","call":"(852) 2275 6688"},{"district":"新界西","clinic":"毅力綜合醫護體檢中心(荃灣)","address":"荃灣青山公路(荃灣段)264-298 號南豐中心19 樓1912室","call":"(852) 3101 4866"},{"district":"新界西","clinic":"卓健醫療中心(屯門)","address":"屯門屯喜路2號屯門柏麗廣場23樓2318室","call":"(852) 2994 2468"},{"district":"新界西","clinic":"黃志浩醫生診所","address":"屯門湖翠路138號啟豐園商場1樓77號舖","call":"(852) 2451 1112"},{"district":"新界西","clinic":"新都專科醫療中心 (屯門)","address":"屯門屯利街新都大廈商場二樓220-225室","call":"(852) 2458 3209"},{"district":"新界西","clinic":"卓健醫療中心(元朗-形點II)","address":"元朗朗日路8號形點II A113a號舖","call":"(852) 2976 0866"},{"district":"新界西","clinic":"新都醫務中心 (新都)","address":"屯門新都商場2樓214-215號","call":"(852) 2458 3213/(852) 2458 3294"},{"district":"新界西","clinic":"新都醫務中心 (錦薈坊)","address":"屯門錦薈坊地下102A號","call":"​(852) 2449 2500"},{"district":"新界西","clinic":"新都醫務中心 (時代)","address":"屯門時代廣場北翼地1號","call":"(852) 2430 1886"},{"district":"新界西","clinic":"新都醫務中心 (寶怡)","address":"屯門寶怡花園商場1樓13號","call":"(852) 2455 9811"},{"district":"新界西","clinic":"新都專科醫療中心 (元朗)","address":"元朗阜財街2號宏豐大廈地下8號","call":"(852) 2443 6220"},{"district":"新界西","clinic":"新都醫務中心 (教育路)","address":"元朗大棠路22A-30號寶發大廈地下13號","call":"(852) 2470 9778​"},{"district":"新界西","clinic":"新都醫務中心 (天水圍)","address":"天水圍嘉湖新北江商場地下G3舖","call":"(852) 2617 3832"},{"district":"新界西","clinic":"新都醫務中心 (荃灣)","address":"荃灣路德圍46-58號嘉新大廈地下C2號","call":"(852) 2411 3230"},{"district":"九龍","clinic":"UCMG 聯康醫療","address":"九龍佐敦西貢街20號志和商業大廈4A室","call":"(852) 2710 8105"},{"district":"九龍","clinic":"香港仁和體檢","address":"旺角亞皆老街8號朗豪坊辦公室大樓11樓全層","call":"(852) 2156 5857"},{"district":"九龍","clinic":"卓健醫療中心(旺角)","address":"旺角彌敦道664號惠豐中心8樓","call":"(852) 2390 3398"},{"district":"九龍","clinic":"毅力綜合醫護體檢中心(佐敦)","address":"佐敦彌敦道363 號恆成大廈14 樓1409-1412室","call":"(852) 3426 9771"},{"district":"九龍","clinic":"進領醫學診斷中心","address":"佐敦佐敦道8號LG及UG","call":"(852) 2809 0709"},{"district":"九龍","clinic":"卓健醫療中心(九龍港鐵站)","address":"九龍港鐵站機場快綫抵站大堂L2 KOW83商鋪","call":"(852) 2314 8380"},{"district":"九龍","clinic":"梔子醫療","address":"九龍尖沙咀彌敦道132號美麗華廣場A座707室","call":"(852) 2388 9996"},{"district":"九龍","clinic":"VNV醫療","address":"香港九龍尖沙咀漆咸道南1號18樓","call":"(852) 2869 8889"},{"district":"九龍","clinic":"懷恩醫務中心","address":"尖沙咀加連威老道2-6號愛賓商業大廈10樓1008A室","call":"(852) 2623 9278"},{"district":"九龍","clinic":"卓健醫療中心(尖沙咀)","address":"尖沙咀漢口道28號亞太中心6 樓608-613室","call":"(852) 2369 2280"},{"district":"九龍","clinic":"艾德斐耳鼻喉中心(尖沙咀海洋中心)","address":"尖沙咀海港城海洋中心1421 室","call":"(852) 2523 3349"},{"district":"九龍","clinic":"全仁醫務中心","address":"尖沙咀廣東道33號中港城第5座1501-2A室","call":"(852) 2192 7022"},{"district":"九龍","clinic":"優尚醫療(尖沙咀加拿芬道)","address":"尖沙咀加拿分道6E號地下","call":"(852) 2668 9269"},{"district":"九龍","clinic":"優尚醫療(尖沙咀格蘭中心)","address":"尖沙咀堪富利士道8號格蘭中心17樓1706室","call":"(852) 2668 9089"},{"district":"九龍","clinic":"康薈醫療中心","address":"尖沙咀金馬倫道38-40 號金龍中心18樓全層","call":"(852) 2915 0555"},{"district":"九龍","clinic":"時代醫療服務中心(尖沙咀)","address":"尖沙咀彌敦道26號13樓1302-05室","call":"(852) 2116 8818"},{"district":"九龍","clinic":"香港綜合腫瘤中心(九龍)","address":"尖沙咀彌敦道132號美麗華廣場A座1908-09室","call":"(852) 3700 6818"},{"district":"九龍","clinic":"匡喬綜合醫療中心","address":"尖沙咀彌敦道132號美麗華廣場A座2607,2610-11室","call":"(852) 2543 1000"},{"district":"九龍","clinic":"616疫苗體檢中心","address":"尖沙咀彌敦道132號美麗華廣場A座616室","call":"(852) 2543 6066"},{"district":"九龍","clinic":"楷和醫療 (尖沙咀專科及兒科專科中心)","address":"尖沙咀河內道5號普基商業中心2樓","call":"(852) 2157 3840"},{"district":"九龍","clinic":"卓健醫療中心(九龍灣-德福花園)","address":"九龍灣德福花園I座地下","call":"(852) 2750 0782"},{"district":"九龍","clinic":"卓健醫療中心(九龍灣-國際交易中心)","address":"九龍灣宏照道33號國際交易中心1樓41及43A號舖","call":"(852) 2659 8399"},{"district":"九龍","clinic":"卓健醫療中心(九龍灣-麗晶)","address":"九龍灣麗晶花園商場1樓127-128室","call":"(852) 2759 4804"},{"district":"九龍","clinic":"楷和醫療(牛頭角)","address":"觀塘海濱道77號海濱匯商業中心2樓7號","call":"(852) 3575 8585"},{"district":"九龍","clinic":"卓健醫療中心(觀塘)","address":"觀塘觀塘道418號創紀之城五期東亞銀行中心2502-03A室","call":"(852) 2772 6628"},{"district":"九龍","clinic":"卓健醫療中心(藍田)","address":"藍田匯景廣場第四層2R號舖","call":"(852) 2727 2182"},{"district":"九龍","clinic":"林俊華醫生","address":"長沙灣青山道322 號地下","call":"(852) 2388 2381"},{"district":"九龍","clinic":"快驗保(香港)有限公司 旺角健康檢查中心","address":"旺角彌敦道664號惠豐中心13樓全層","call":"(852) 2272 8222"},{"district":"九龍","clinic":"寶血醫院（明愛）","address":"深水埗青山道113號","call":"(852) 9170 4069"},{"district":"九龍","clinic":"行健醫務中心","address":"佐敦上海街12-14號","call":"(852) 2730 0552"},{"district":"九龍","clinic":"美孚綜合診所","address":"美孚新邨百老匯街65號三期平台75號鋪","call":"(852) 2743 6601"},{"district":"九龍","clinic":"聖德肋撒醫院","address":"旺角太子道西327號","call":"(852) 2200 3434"},{"district":"九龍","clinic":"騰悅醫健","address":"九龍旺角彌敦道570-572號 基利商業大廈10樓","call":"(852) 2811 1151"},{"district":"九龍","clinic":"新都專科醫療中心 (尖沙咀)","address":"九龍尖沙咀彌敦道26號8樓801-803","call":"(852) 2368 8032"},{"district":"九龍","clinic":"仁澤醫務中心","address":"九龍土瓜灣落山道76號","call":"(852) 2377 0330"},{"district":"九龍","clinic":"嘉薈醫療","address":"九龍佐敦彌敦道301-309號嘉賓商業大廈9樓901室","call":"(852) 2326 1168"},{"district":"九龍","clinic":"新都醫務中心 (裕民坊)","address":"九龍觀塘裕民坊商場1樓102號鋪","call":"(852) 2115 8862"},{"district":"香港","clinic":"快驗保(香港)有限公司 銅鑼灣健康檢查中心","address":"銅鑼灣禮頓道91號雲翠大廈1樓全層","call":"(852) 2272 8222"},{"district":"香港","clinic":"快驗保(香港)有限公司 中環健康檢查中心","address":"中環德輔道中55號協成行中心 2樓全層","call":"(852) 2272 8222"},{"district":"香港","clinic":"卓健醫療中心(北角)","address":"北角北角道10號北角亞太商業中心21摟2101-2102室","call":"(852) 2508 6858"},{"district":"香港","clinic":"卓健醫療中心(鰂魚涌)","address":"鰂魚涌英皇道979號太古坊濠豐大廈304室","call":"(852) 2560 2177"},{"district":"香港","clinic":"宏康醫學診斷中心","address":"銅鑼灣軒尼詩道555號東角中心13樓1304B室","call":"(852) 2882 2266"},{"district":"香港","clinic":"毅力綜合醫護體檢中心(銅鑼灣)","address":"銅鑼灣軒尼詩道555 號東角中心17樓1709室","call":"(852) 3520 3292"},{"district":"香港","clinic":"卓健醫療中心(銅鑼灣)","address":"銅鑼灣告士打道280號世貿中心24樓2405-06室","call":"(852) 2890 3118"},{"district":"香港","clinic":"卓健醫療中心(灣仔)","address":"灣仔軒尼詩道313-317B號中國人壽大廈1樓(入口位於駱克道)","call":"(852) 2972 5300"},{"district":"香港","clinic":"卓健醫療中心(金鐘)","address":"金鐘夏愨道18號海富中心第1期16樓1605-09室","call":"(852) 2529 8666"},{"district":"香港","clinic":"卓健醫療中心(中環-太子大廈)","address":"中環遮打道10號太子大廈5樓501-507室","call":"(852) 2523 8166"},{"district":"香港","clinic":"進匯醫務中心–林傳廣醫生","address":"中環畢打街1 號中建大廈7樓718室","call":"(852) 3651 1733"},{"district":"香港","clinic":"卓健醫療中心(中環-卡佛大廈)","address":"中環皇后大道中70號卡佛大廈7樓706-709室","call":"(852) 2525 9800"},{"district":"香港","clinic":"卓健醫療中心(中環-晏打臣醫生醫務所)","address":"中環皇后大道中30號娛樂行14樓","call":"(852) 2608 9700"},{"district":"香港","clinic":"全仁醫務中心","address":"中環皇后大道中30號娛樂行7樓B室","call":"(852) 2197 0122"},{"district":"香港","clinic":"希愈腫瘤中心","address":"中環皇后大道中30 號娛樂行16樓C室","call":"(852) 3598 9090"},{"district":"香港","clinic":"艾德斐耳鼻喉面部外科中心","address":"中環皇后大道中30 號娛樂行18樓A室","call":"(852) 2522 8383"},{"district":"香港","clinic":"楷和醫療(中環專科中心)","address":"中環皇后大道中9號26樓2601-2604室","call":"(852) 2530 0006"},{"district":"香港","clinic":"楷和醫療(眼科專科中心及普通科醫務中心)","address":"中環皇后大道中9號12樓1206室","call":"(852) 2155 2355"},{"district":"香港","clinic":"聯匯專科","address":"中環皇后大道中9號25樓2503-2505室","call":"(852) 2156 5888"},{"district":"香港","clinic":"香港綜合腫瘤中心(香港)","address":"中環花園道3號冠君大廈4樓全層","call":"(852) 3700 6888"},{"district":"香港","clinic":"金科體檢及基因中心","address":"中環德輔道中141 號集團20樓2006至2010室中保集團大廈","call":"(852) 2802 3133"},{"district":"香港","clinic":"朱偉星醫生","address":"中環德輔道中26號華懋中心II期30樓","call":"(852) 2601 3002"},{"district":"香港","clinic":"卓健醫療中心(上環)","address":"上環永樂街50號昌盛大廈17樓","call":"(852) 2975 2328"},{"district":"香港","clinic":"香港港安醫院–司徒拔道","address":"跑馬地司徒拔道40號","call":"(852) 3651 8888"},{"district":"香港","clinic":"卓健醫療中心(赤柱)","address":"赤柱赤柱廣場購物中心4樓406號舖","call":"(852) 2812 2392"},{"district":"香港","clinic":"恆康醫務中心 黃鴻達醫生","address":"灣仔春園街33號地下","call":"(852) 2893 8518"},{"district":"香港","clinic":"麥展聲醫生","address":"灣仔莊士敦道163號勝任商業大廈3A","call":"(852) 2832 2119"},{"district":"香港","clinic":"屈靖鵬醫生醫務所","address":"灣仔灣仔道149號樂景大樓地下1C,1D號鋪","call":"(852) 2617 3808"},{"district":"香港","clinic":"和富醫務中心 李文信醫生","address":"北角北角道33號和富豪庭地下A3號舖","call":"(852) 3422 8763"},{"district":"香港","clinic":"黃榮輝醫生","address":"北角道1-9A號皇冠大廈地下20號舖","call":"(852) 2571 6611"},{"district":"香港","clinic":"梁時勁醫生","address":"鴨脷洲海怡半島海怡路12A號海怡廣場東翼G09號舖","call":"(852) 2554 3233"},{"district":"香港","clinic":"知仁醫療 吳少君醫生","address":"中環都爹利街1號19樓","call":"(852) 2169 0006"},{"district":"香港","clinic":"嘉諾撒醫院","address":"舊山頂道一號","call":"(852) 2522 2181"},{"district":"香港","clinic":"何志謙醫生","address":"中環畢打街1-3號中建大廈7樓707室","call":"(852) 2870 1880"},{"district":"香港","clinic":"柳坤忠醫生醫務所","address":"香港數碼港道100號數碼港商場306號舖","call":"(852) 2802 1838"},{"district":"離島","clinic":"卓健醫療中心(愉景灣)","address":"愉景灣愉景廣場B座108號舖","call":"(852) 2987 5633"},{"district":"離島","clinic":"卓健醫療中心(東涌)","address":"大嶼山東涌慶東路一號東堤灣畔地下18號舖","call":"(852) 2403 6623"},{"district":"澳門","clinic":"澳門銀葵醫院","address":"澳門蘇亞利斯博士大馬路320號澳門財富中心2樓及3樓、4樓B及C座","call":"(853) 2832 2283"}]'),W=JSON.parse('[{"district":"新界東","clinic":"進康醫務中心","address":"將軍澳新都城第一期商場2樓221號"},{"district":"新界東","clinic":"定康醫務中心","address":"新界粉嶺嘉福邨商場1樓110號舖"},{"district":"新界西","clinic":"仁愛醫務中心","address":"新界葵涌和宜合道88號地下"},{"district":"新界西","clinic":"123 醫務中心","address":"新界荃灣圓墩圍65號安豐大廈地舖"},{"district":"新界西","clinic":"西醫殷錦新醫務所","address":"新界元朗青山公路21號元美大廈2 號鋪地下"},{"district":"新界西","clinic":"健怡醫療中心","address":"新界屯門湖翠路138號啟豐園商場1樓77號舖"},{"district":"九龍","clinic":"樂家醫務中心","address":"九龍橫頭磡樂富廣場A區3樓3136號舖"},{"district":"九龍","clinic":"定康醫務中心","address":"新蒲崗彩虹道82號衍慶大厦1樓B11室"},{"district":"九龍","clinic":"岱磯化學病理","address":"九龍旺角彌敦道639號雅蘭中心一期1323室"},{"district":"九龍","clinic":"思科醫療中心","address":"九龍尖沙咀加連威老道2-6號愛賓商業大廈11樓1105室"},{"district":"九龍","clinic":"進康醫務中心","address":"九龍土瓜灣馬頭涌道56號地下"},{"district":"九龍","clinic":"進康醫務中心","address":"九龍土瓜灣道78號定安大廈地下4號鋪"},{"district":"九龍","clinic":"九龍灣綜合醫療中心","address":"九龍灣得寶花園地下得寶商場110鋪"},{"district":"香港","clinic":"康怡醫務中心","address":"香港鰂魚涌康山道1號 康怡廣場辦公大樓11樓1110 B室"},{"district":"香港","clinic":"富康醫療","address":"香港島銅鑼灣百德新街2-20號恒隆中心23樓2310A-2311A室"}]'),G=c(3717),D=c(7049),$=(0,l.Z)((function(i){var e;return{root:(e={boxSizing:"border-box",fontFamily:'"微軟正黑體", "Microsoft JhengHei", sans-serif',color:"#000 !important",padding:i.spacing(3),boxShadow:"none"},e[i.breakpoints.down("xs")]={padding:i.spacing(3,2)},e),logo:{display:"inline-block",height:i.spacing(5.5)},table:{minWidth:i.spacing(110)},tableHeight:{height:i.spacing(7)},tableHead:{background:"rgb(208, 206, 206)",fontSize:i.typography.h5.fontSize,fontWeight:"bold"},darkRow:{background:"rgb(237, 237, 237)"},tableScrollContainer:{overflowX:"scroll"},btn:{boxShadow:"none",borderRadius:6,"&:hover":{backgroundColor:(0,a.Fq)(i.palette.secondary.main,.9),boxShadow:"0 11px 15px -4px "+(0,a.Fq)(i.palette.secondary.main,.3)}},subtitle:{marginTop:i.spacing(3),marginBottom:i.spacing(2),padding:i.spacing(1,2),color:i.palette.primary.contrastText,backgroundColor:i.palette.primary.main,textAlign:"center",fontSize:i.typography.h6.fontSize}}}));function _(){var i=$();return t.createElement(t.Fragment,null,t.createElement(G.Z,{title:"Service Location"}),t.createElement(w,{className:i.root,component:R.Z},t.createElement(T.Z,{mb:2},t.createElement(H.Z,{href:F.Eq,target:"_blank"},t.createElement("img",{className:i.logo,src:q.Z,alt:"take2 logo"}))),t.createElement(B.Z,{component:"div"},t.createElement(T.Z,{textAlign:"center",color:"#444444",fontSize:"h6.fontSize",fontWeight:"bold",my:3},"篩查服務點"),t.createElement(T.Z,{textAlign:"center",fontSize:"body1.fontSize",fontWeight:"lighter"},"(包括醫院﹑診所或醫務中心)**請向醫護人員查詢**")),t.createElement(T.Z,{className:i.subtitle},"提供網上預約服務之診所"),t.createElement(T.Z,{className:i.tableScrollContainer},t.createElement(g,{className:i.table,size:"small","aria-label":"a dense table"},t.createElement(C,null,t.createElement(z,{className:i.tableHeight},t.createElement(x,{width:"10%"},"地區"),t.createElement(x,{width:"30%",align:"left"},"診所"),t.createElement(x,{width:"40%",align:"left"},"地址"),t.createElement(x,{width:"20%",align:"left"},"網上預約"))),t.createElement(v,null,W.map((function(e,c){var l;return t.createElement(z,{className:I()(i.tableHeight,(l={},l[i.darkRow]=c%2==1,l)),key:c},t.createElement(x,{component:"th",scope:"row"},e.district),t.createElement(x,{align:"left"},e.clinic),t.createElement(x,{align:"left"},e.address),t.createElement(x,{align:"left"},t.createElement(D.Z,{className:i.btn,variant:"contained",color:"secondary",href:F.Eq,target:"_blank"},"立即預約")))}))))),t.createElement(T.Z,{className:i.subtitle},"其他診所：請致電預約及查詢"),t.createElement(T.Z,{className:i.tableScrollContainer},t.createElement(g,{className:i.table,size:"small","aria-label":"a dense table"},t.createElement(C,null,t.createElement(z,{className:i.tableHeight},t.createElement(x,{width:"10%"},"地區"),t.createElement(x,{width:"30%",align:"left"},"診所"),t.createElement(x,{width:"40%",align:"left"},"地址"),t.createElement(x,{width:"20%",align:"left"},"聯絡電話"))),t.createElement(v,null,L.map((function(e,c){var l;return t.createElement(z,{className:I()(i.tableHeight,(l={},l[i.darkRow]=c%2==1,l)),key:c},t.createElement(x,{component:"th",scope:"row"},e.district),t.createElement(x,{align:"left"},e.clinic),t.createElement(x,{align:"left"},e.address),t.createElement(x,{align:"left"},e.call))})))))))}}}]);
//# sourceMappingURL=component---src-pages-service-location-index-zh-js-01482e497465360cf271.js.map
(function(a,b){'object'==typeof exports&&'object'==typeof module?module.exports=b():'function'==typeof define&&define.amd?define('atoms',[],b):'object'==typeof exports?exports.atoms=b():a.atoms=b()})('undefined'==typeof self?this:self,function(){return function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{configurable:!1,enumerable:!0,get:d})},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='./',b(b.s=1)}([function(a){a.exports=require('styled-components')},function(a,b,c){a.exports=c(2)},function(a,b,c){'use strict';Object.defineProperty(b,'__esModule',{value:!0});var d=c(0),e=c.n(d);const f={giant:1199,xl:1199,desktop:992,lg:992,tablet:768,md:768,phone:576,sm:576,smaller:575,xs:575},g=Object.keys(f).reduce((a,b)=>(a[b]=(...a)=>d.css`
        @media (max-width: ${f[b]}px) {
            ${Object(d.css)(a[0],...a)};
        }
    `,a),{});var h=(a)=>d.css`
        font-size: ${a.md};
        ${g.sm`
            font-size: ${a.xs};
        `};
    `,i=c(3),j=c.n(i);const k='#fff',l='rgba(0, 0, 0, 0.15)',m='#008cfd',n='rgba(229, 243, 254, .9)',o='rgba(0, 0, 0, .35)',p={white:k,black:'#000',black15:l,black06:'rgba(0, 0, 0, 0.6)',marketingBlue:m,transparentMedium:'rgba(0, 0, 0, .5)',transparentDefault:'rgba(0, 0, 0, .15)',transparentDark:o,transparentLight:'rgba(0, 0, 0, .05)',brand:'#00965e',default:'rgba(0, 0, 0, .9)',reverse:k,button:m,buttonActive:'#1076CD',buttonHover:'#1996FC',error:'red',formBackground:n,link:'#09aeea',inputBackground:k,separator:l,separatorBranded:m,chanceIndicatorLow:'red',chanceIndicatorMedium:'#ffa800',chanceIndicatorHigh:'#00ba69',tierScoringPyramidActive:m,tierScoringPyramidInactive:n,tierScoringPyramidSparkles:n,tierScoringPyramidUnavailableFill:'rgba(196, 196, 196, 0.3)',tierScoringPyramidUnavailableStroke:o};var q;(function(a){a[a.behindContent=0]='behindContent',a[a.content=1]='content',a[a.aboveContent=2]='aboveContent',a[a.nextLevel=3]='nextLevel',a[a.fixedOverlay=4]='fixedOverlay'})(q||(q={}));const r={grid:(a=1)=>`${a*15}px`};var s;(function(a){a.DEFAULT='default',a.PRIMARY='primary',a.SECONDARY='secondary',a.SUBMIT='submit'})(s||(s={}));const t={defaultBackground:p.white,text:{default:p.default,link:p.link,reverse:p.link,brandColor:p.brand,error:p.error},progress:{background:p.transparentLight,barColor:p.link},input:{background:p.inputBackground,borderSize:'2px',borderRadius:'2px',borderColor:'transparent',placeholder:p.transparentMedium},form:{background:p.formBackground},button:{padding:`${r.grid(0.5)} ${r.grid(1.5)}`,letterSpacing:'0.5px',[s.DEFAULT]:{border:`1px solid ${p.buttonHover}`,color:p.white,background:p.button,backgroundActive:p.buttonActive},[s.PRIMARY]:{border:'none',color:p.white,background:p.brand,backgroundActive:p.brand},[s.SECONDARY]:{border:`1px solid ${p.default}`,color:p.default,background:p.white,backgroundActive:p.white},[s.SUBMIT]:{border:`1px solid ${p.default}`,color:p.default,background:p.white,backgroundActive:p.white}},fontWeights:{book:'300',normal:'400',bold:'700'},bodyFontSizes:{sm:{md:'13px',xs:'15px'},md:{md:'17px',xs:'15px'},lg:{md:'24px',xs:'15px'}},headingFontSizes:{h1:{md:'37px',xs:'25px'},h2:{md:'33px',xs:'22px'},h3:{md:'25px',xs:'19px'},h4:{md:'19px',xs:'16px'},h5:{md:'17px',xs:'15px'}},fontFamily:{body:'Avenir, sans-serif',header:'Avenir, sans-serif'},lineHeight:'1.7em'},u=Object.entries({sm:'0.875rem',base:'1rem',lg:'1.125rem',xl:'1.25rem',"2xl":'1.5rem',"3xl":'1.75rem',"5xl":'2.5rem'}).reduce((a,[b,c])=>(a[b]={xs:c,md:c},a),{}),v=Object.assign({},t,{bodyFontSizes:{sm:u.sm,md:u.base,lg:u.lg},headingFontSizes:{h1:u['5xl'],h2:u['3xl'],h3:u['2xl'],h4:u.xl,h5:u.lg},fontFamily:{body:'Avenir, sans-serif',header:'Avenir, sans-serif'},lineHeight:'1.5em'});var w;(function(a){a.BASE='base',a.BOLD='bold',a.BOOK='book'})(w||(w={}));var x;(function(a){a.SMALL='sm',a.MEDIUM='md',a.LARGE='lg'})(x||(x={}));const y={color:t.text.default,theme:{fontWeights:t.fontWeights,bodyFontSizes:t.bodyFontSizes,lineHeight:t.lineHeight,text:t.text},weight:w.BASE},z=d.css`
    color: ${(a)=>a.color||a.theme.text.default};
    line-height: ${(a)=>a.theme.lineHeight};
    font-weight: ${(a)=>a.weight===w.BOLD?a.theme.fontWeights.bold:a.weight===w.BOOK?a.theme.fontWeights.book:a.theme.fontWeights.normal};
`,A=d.css`
    margin: 0 0 ${(a)=>a.noMargin?'0':'0.75em'} 0;
    text-align: ${(a)=>a.align||'left'};
    font-weight: ${(a)=>a.theme.fontWeights.bold};
`;var B;(function(a){a.CENTER='center',a.LEFT='left'})(B||(B={}));const C={noMargin:!1,align:'left',theme:Object.assign({},y.theme,{headingFontSizes:t.headingFontSizes})},D=e.a.h1`
    ${z};
    ${A};
    ${(a)=>h(a.theme.headingFontSizes.h1)};
`;D.defaultProps=C;const E=e.a.h2`
    ${z};
    ${A};
    ${(a)=>h(a.theme.headingFontSizes.h2)};
`;E.defaultProps=C;const F=e.a.h3`
    ${z};
    ${A};
    ${(a)=>h(a.theme.headingFontSizes.h3)};
`;F.defaultProps=C;const G=e.a.h4`
    ${z};
    ${A};
    ${(a)=>h(a.theme.headingFontSizes.h4)};
`;G.defaultProps=C;const H=e.a.h5`
    ${z};
    ${A};
    ${(a)=>h(a.theme.headingFontSizes.h5)};
`;H.defaultProps=C;var I;(function(a){a.INITIAL='initial',a.LEFT='left',a.CENTER='center',a.RIGHT='right'})(I||(I={}));const J=e.a.p`
    ${z};
    ${(a)=>h(a.theme.bodyFontSizes[a.size])};
    margin: 0 0 ${(a)=>a.noMargin?0:r.grid(1)} 0;
    text-align: ${(a)=>a.align||I.INITIAL};
`;const K=e.a.span`
    ${z};
    ${(a)=>h(a.theme.bodyFontSizes[a.size])};
`;const L=e.a.p`
    ${z};
    ${(a)=>h(a.theme.bodyFontSizes[a.size])};
    padding: ${r.grid(1)};
    border: 1px solid ${p.transparentMedium};
    pointer-events: none;
    background-color: white;
    box-shadow: 0 2px 4px 0 rgba(96, 99, 98, 0.25);
    min-width: 300px;
    margin: ${r.grid(2)};
`;c.d(b,'default',function(){})},function(a){a.exports=require('react')}])});
//# sourceMappingURL=atoms.js.map
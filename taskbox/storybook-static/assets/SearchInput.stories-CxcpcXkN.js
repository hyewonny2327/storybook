import{j as t}from"./jsx-runtime-QvZ8i92b.js";import{a as i}from"./index-DIn2Sk4n.js";import{r as h}from"./index-uubelm5h.js";import"./iconBase-DWXDRbpH.js";function s({onChange:e,onClick:n,value:r,placeholder:o}){return t.jsxs("div",{className:"search-input",children:[t.jsx("input",{className:"search-input-box",onChange:e,value:r,placeholder:o}),t.jsx(i,{color:"#498428",onClick:n})]})}s.__docgenInfo={description:"",methods:[],displayName:"SearchInput"};const S={title:"SearchInput",component:s,argTypes:{onChange:{action:"change"},onClick:{action:"clicked"},value:{control:"text"},placeholder:{control:{type:"text"}}},decorators:[e=>t.jsx("div",{style:{width:"390px"},children:e()})]},d=e=>{const[n,r]=h.useState(e.value||""),o=c=>{r(c.target.value),e.onChange(c)};return t.jsx(s,{...e,value:n,onChange:o})},a=d.bind({});a.args={placeholder:"검색어를 입력하세요",value:""};var l,u,p;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || '');
  const handleChange = event => {
    setValue(event.target.value);
    args.onChange(event); // Storybook action
  };
  return <SearchInput {...args} value={value} onChange={handleChange} />;
}`,...(p=(u=a.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};const C=["Default"];export{a as Default,C as __namedExportsOrder,S as default};

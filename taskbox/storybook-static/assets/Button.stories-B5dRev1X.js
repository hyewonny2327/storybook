import{j as r}from"./jsx-runtime-QvZ8i92b.js";/* empty css            */import{a as M}from"./index-DIn2Sk4n.js";import"./index-uubelm5h.js";import"./iconBase-DWXDRbpH.js";function s({children:n,onClick:w,onMouseEnter:b,onMouseLeave:B,size:N,variant:O,color:_}){return r.jsx("div",{className:`button ${N} ${O} ${_}`,onClick:w,onMouseEnter:b,onMouseLeave:B,children:n})}s.__docgenInfo={description:"",methods:[],displayName:"Button"};const E={title:"Button",component:s,argTypes:{onClick:{action:"clicked"},onMouseEnter:{action:"mouse entered"},onMouseLeave:{action:"mouse left"},size:{options:["fixed","large","fluent"],control:{type:"select"}},variant:{options:["rectangular","rounded","outlined","outlined-icon"],control:{type:"select"}},color:{options:["primary","secondary","disabled","danger","none"],control:{type:"select"}}},decorators:[n=>r.jsx("div",{style:{width:"390px"},children:n()})]},e=n=>r.jsx(s,{...n}),a=()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[r.jsx("div",{children:"variant option : rectangular | rounded | outlined"}),r.jsx(e,{variant:"rectangular",size:"large",color:"primary",children:"rectangular"}),r.jsx(e,{variant:"rounded",size:"large",color:"primary",children:"rounded"}),r.jsx(e,{variant:"outlined",size:"large",color:"none",children:"outlined"}),r.jsxs(e,{variant:"outlined-icon",size:"fluent",color:"none",children:[r.jsx("div",{className:"icon",children:r.jsx("svg",{width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M5.83585 0C2.61971 0 0 2.61971 0 5.83585C0 9.05198 2.61971 11.6717 5.83585 11.6717C7.23442 11.6717 8.51881 11.1751 9.52543 10.3507L13.0098 13.8351C13.1562 13.9875 13.3736 14.0489 13.5781 13.9956C13.7826 13.9423 13.9423 13.7826 13.9956 13.5781C14.0489 13.3736 13.9875 13.1562 13.8351 13.0098L10.3507 9.52543C11.1751 8.51881 11.6717 7.23442 11.6717 5.83585C11.6717 2.61971 9.05198 0 5.83585 0ZM5.83585 1.16717C8.4212 1.16717 10.5045 3.2505 10.5045 5.83585C10.5045 8.4212 8.4212 10.5045 5.83585 10.5045C3.2505 10.5045 1.16717 8.4212 1.16717 5.83585C1.16717 3.2505 3.2505 1.16717 5.83585 1.16717Z",fill:"#498428"})})}),r.jsx("div",{className:"text",children:"outlined-icon"})]}),r.jsx("div",{children:"size option : large | fixed | fluent"}),r.jsx(e,{variant:"rectangular",size:"large",color:"primary",children:"large"}),r.jsx(e,{variant:"rectangular",size:"fixed",color:"primary",children:"fixed"}),r.jsx(e,{variant:"rectangular",size:"fluent",color:"primary",children:"fluent"}),r.jsx("div",{children:"color option : primary | secondary | disabled | danger | none"}),r.jsx(e,{variant:"rectangular",size:"fixed",color:"primary",children:"primary"}),r.jsx(e,{variant:"rectangular",size:"fixed",color:"secondary",children:"secondary"}),r.jsx(e,{variant:"rectangular",size:"fixed",color:"disabled",children:"disabled"}),r.jsx(e,{variant:"rectangular",size:"fixed",color:"danger",children:"danger"}),r.jsx(e,{variant:"rectangular",size:"fixed",color:"none",children:"none"})]}),i=e.bind({});i.args={variant:"rectangular",size:"large",color:"primary",children:"rectangular btn"};const o=e.bind({});o.args={variant:"rounded",size:"large",color:"primary",children:"rounded btn"};const t=e.bind({});t.args={variant:"outlined",size:"large",color:"none",children:"outlined"};const l=e.bind({});l.args={variant:"outlined-icon",size:"large",color:"none",children:r.jsxs(r.Fragment,{children:[r.jsx(M,{color:"#498428"}),r.jsx("div",{className:"text",children:"outlined-icon"})]})};a.__docgenInfo={description:"",methods:[],displayName:"Overview"};var d,c,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>\r
      <div>variant option : rectangular | rounded | outlined</div>\r
      <Template variant="rectangular" size="large" color="primary">\r
        rectangular\r
      </Template>\r
      <Template variant="rounded" size="large" color="primary">\r
        rounded\r
      </Template>\r
      <Template variant="outlined" size="large" color="none">\r
        outlined\r
      </Template>\r
      <Template variant="outlined-icon" size="fluent" color="none">\r
        <div className="icon">\r
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">\r
            <path d="M5.83585 0C2.61971 0 0 2.61971 0 5.83585C0 9.05198 2.61971 11.6717 5.83585 11.6717C7.23442 11.6717 8.51881 11.1751 9.52543 10.3507L13.0098 13.8351C13.1562 13.9875 13.3736 14.0489 13.5781 13.9956C13.7826 13.9423 13.9423 13.7826 13.9956 13.5781C14.0489 13.3736 13.9875 13.1562 13.8351 13.0098L10.3507 9.52543C11.1751 8.51881 11.6717 7.23442 11.6717 5.83585C11.6717 2.61971 9.05198 0 5.83585 0ZM5.83585 1.16717C8.4212 1.16717 10.5045 3.2505 10.5045 5.83585C10.5045 8.4212 8.4212 10.5045 5.83585 10.5045C3.2505 10.5045 1.16717 8.4212 1.16717 5.83585C1.16717 3.2505 3.2505 1.16717 5.83585 1.16717Z" fill="#498428" />\r
          </svg>\r
        </div>\r
        <div className="text">outlined-icon</div>\r
      </Template>\r
      <div>size option : large | fixed | fluent</div>\r
      <Template variant="rectangular" size="large" color="primary">\r
        large\r
      </Template>\r
      <Template variant="rectangular" size="fixed" color="primary">\r
        fixed\r
      </Template>\r
      <Template variant="rectangular" size="fluent" color="primary">\r
        fluent\r
      </Template>\r
      <div>color option : primary | secondary | disabled | danger | none</div>\r
      <Template variant="rectangular" size="fixed" color="primary">\r
        primary\r
      </Template>\r
      <Template variant="rectangular" size="fixed" color="secondary">\r
        secondary\r
      </Template>\r
      <Template variant="rectangular" size="fixed" color="disabled">\r
        disabled\r
      </Template>\r
      <Template variant="rectangular" size="fixed" color="danger">\r
        danger\r
      </Template>\r
      <Template variant="rectangular" size="fixed" color="none">\r
        none\r
      </Template>\r
    </div>;
}`,...(u=(c=a.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var p,m,g;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:"args => <Button {...args} />",...(g=(m=i.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var v,x,f;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:"args => <Button {...args} />",...(f=(x=o.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var h,y,z;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:"args => <Button {...args} />",...(z=(y=t.parameters)==null?void 0:y.docs)==null?void 0:z.source}}};var j,T,C;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:"args => <Button {...args} />",...(C=(T=l.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};const $=["Overview","Rectangular","Rounded","Outlined","OutlinedIcon"];export{t as Outlined,l as OutlinedIcon,a as Overview,i as Rectangular,o as Rounded,$ as __namedExportsOrder,E as default};

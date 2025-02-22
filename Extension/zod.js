import{U as w,r as $,j as X,q as ge,L as Nt,$ as Ot}from"./index.js";var he=e=>e.type==="checkbox",se=e=>e instanceof Date,T=e=>e==null;const at=e=>typeof e=="object";var S=e=>!T(e)&&!Array.isArray(e)&&at(e)&&!se(e),ut=e=>S(e)&&e.target?he(e.target)?e.target.checked:e.target.value:e,Rt=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,lt=(e,r)=>e.has(Rt(r)),Tt=e=>{const r=e.constructor&&e.constructor.prototype;return S(r)&&r.hasOwnProperty("isPrototypeOf")},Te=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function U(e){let r;const t=Array.isArray(e);if(e instanceof Date)r=new Date(e);else if(e instanceof Set)r=new Set(e);else if(!(Te&&(e instanceof Blob||e instanceof FileList))&&(t||S(e)))if(r=t?[]:{},!t&&!Tt(e))r=e;else for(const i in e)e.hasOwnProperty(i)&&(r[i]=U(e[i]));else return e;return r}var Ae=e=>Array.isArray(e)?e.filter(Boolean):[],E=e=>e===void 0,c=(e,r,t)=>{if(!r||!S(e))return t;const i=Ae(r.split(/[,[\].]+?/)).reduce((a,u)=>T(a)?a:a[u],e);return E(i)||i===e?E(e[r])?t:e[r]:i},B=e=>typeof e=="boolean",Ue=e=>/^\w*$/.test(e),ot=e=>Ae(e.replace(/["|']|\]/g,"").split(/\.|\[/)),A=(e,r,t)=>{let i=-1;const a=Ue(r)?[r]:ot(r),u=a.length,f=u-1;for(;++i<u;){const g=a[i];let F=t;if(i!==f){const D=e[g];F=S(D)||Array.isArray(D)?D:isNaN(+a[i+1])?{}:[]}if(g==="__proto__")return;e[g]=F,e=e[g]}return e};const _e={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},W={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Q={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},ft=w.createContext(null),we=()=>w.useContext(ft),Ut=e=>{const{children:r,...t}=e;return w.createElement(ft.Provider,{value:t},r)};var ct=(e,r,t,i=!0)=>{const a={defaultValues:r._defaultValues};for(const u in e)Object.defineProperty(a,u,{get:()=>{const f=u;return r._proxyFormState[f]!==W.all&&(r._proxyFormState[f]=!i||W.all),t&&(t[f]=!0),e[f]}});return a},I=e=>S(e)&&!Object.keys(e).length,dt=(e,r,t,i)=>{t(e);const{name:a,...u}=e;return I(u)||Object.keys(u).length>=Object.keys(r).length||Object.keys(u).find(f=>r[f]===(!i||W.all))},de=e=>Array.isArray(e)?e:[e],yt=(e,r,t)=>!e||!r||e===r||de(e).some(i=>i&&(t?i===r:i.startsWith(r)||r.startsWith(i)));function Ie(e){const r=w.useRef(e);r.current=e,w.useEffect(()=>{const t=!e.disabled&&r.current.subject&&r.current.subject.subscribe({next:r.current.next});return()=>{t&&t.unsubscribe()}},[e.disabled])}function It(e){const r=we(),{control:t=r.control,disabled:i,name:a,exact:u}=e||{},[f,g]=w.useState(t._formState),F=w.useRef(!0),D=w.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,validatingFields:!1,isValidating:!1,isValid:!1,errors:!1}),m=w.useRef(a);return m.current=a,Ie({disabled:i,next:v=>F.current&&yt(m.current,v.name,u)&&dt(v,D.current,t._updateFormState)&&g({...t._formState,...v}),subject:t._subjects.state}),w.useEffect(()=>(F.current=!0,D.current.isValid&&t._updateValid(!0),()=>{F.current=!1}),[t]),ct(f,t,D.current,!1)}var G=e=>typeof e=="string",gt=(e,r,t,i,a)=>G(e)?(i&&r.watch.add(e),c(t,e,a)):Array.isArray(e)?e.map(u=>(i&&r.watch.add(u),c(t,u))):(i&&(r.watchAll=!0),t);function Mt(e){const r=we(),{control:t=r.control,name:i,defaultValue:a,disabled:u,exact:f}=e||{},g=w.useRef(i);g.current=i,Ie({disabled:u,subject:t._subjects.values,next:m=>{yt(g.current,m.name,f)&&D(U(gt(g.current,t._names,m.values||t._formValues,!1,a)))}});const[F,D]=w.useState(t._getWatch(i,a));return w.useEffect(()=>t._removeUnmounted()),F}function Pt(e){const r=we(),{name:t,disabled:i,control:a=r.control,shouldUnregister:u}=e,f=lt(a._names.array,t),g=Mt({control:a,name:t,defaultValue:c(a._formValues,t,c(a._defaultValues,t,e.defaultValue)),exact:!0}),F=It({control:a,name:t,exact:!0}),D=w.useRef(a.register(t,{...e.rules,value:g,...B(e.disabled)?{disabled:e.disabled}:{}}));return w.useEffect(()=>{const m=a._options.shouldUnregister||u,v=(j,H)=>{const O=c(a._fields,j);O&&O._f&&(O._f.mount=H)};if(v(t,!0),m){const j=U(c(a._options.defaultValues,t));A(a._defaultValues,t,j),E(c(a._formValues,t))&&A(a._formValues,t,j)}return()=>{(f?m&&!a._state.action:m)?a.unregister(t):v(t,!1)}},[t,a,f,u]),w.useEffect(()=>{c(a._fields,t)&&a._updateDisabledField({disabled:i,fields:a._fields,name:t,value:c(a._fields,t)._f.value})},[i,t,a]),{field:{name:t,value:g,...B(i)||F.disabled?{disabled:F.disabled||i}:{},onChange:w.useCallback(m=>D.current.onChange({target:{value:ut(m),name:t},type:_e.CHANGE}),[t]),onBlur:w.useCallback(()=>D.current.onBlur({target:{value:c(a._formValues,t),name:t},type:_e.BLUR}),[t,a]),ref:w.useCallback(m=>{const v=c(a._fields,t);v&&m&&(v._f.ref={focus:()=>m.focus(),select:()=>m.select(),setCustomValidity:j=>m.setCustomValidity(j),reportValidity:()=>m.reportValidity()})},[a._fields,t])},formState:F,fieldState:Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!c(F.errors,t)},isDirty:{enumerable:!0,get:()=>!!c(F.dirtyFields,t)},isTouched:{enumerable:!0,get:()=>!!c(F.touchedFields,t)},isValidating:{enumerable:!0,get:()=>!!c(F.validatingFields,t)},error:{enumerable:!0,get:()=>c(F.errors,t)}})}}const Bt=e=>e.render(Pt(e));var ht=(e,r,t,i,a)=>r?{...t[e],types:{...t[e]&&t[e].types?t[e].types:{},[i]:a||!0}}:{},Je=e=>({isOnSubmit:!e||e===W.onSubmit,isOnBlur:e===W.onBlur,isOnChange:e===W.onChange,isOnAll:e===W.all,isOnTouch:e===W.onTouched}),Qe=(e,r,t)=>!t&&(r.watchAll||r.watch.has(e)||[...r.watch].some(i=>e.startsWith(i)&&/^\.\w+/.test(e.slice(i.length))));const ye=(e,r,t,i)=>{for(const a of t||Object.keys(e)){const u=c(e,a);if(u){const{_f:f,...g}=u;if(f){if(f.refs&&f.refs[0]&&r(f.refs[0],a)&&!i)return!0;if(f.ref&&r(f.ref,f.name)&&!i)return!0;if(ye(g,r))break}else if(S(g)&&ye(g,r))break}}};var jt=(e,r,t)=>{const i=de(c(e,t));return A(i,"root",r[t]),A(e,t,i),e},Me=e=>e.type==="file",K=e=>typeof e=="function",Fe=e=>{if(!Te)return!1;const r=e?e.ownerDocument:0;return e instanceof(r&&r.defaultView?r.defaultView.HTMLElement:HTMLElement)},be=e=>G(e),Pe=e=>e.type==="radio",Ve=e=>e instanceof RegExp;const Xe={value:!1,isValid:!1},Ze={value:!0,isValid:!0};var vt=e=>{if(Array.isArray(e)){if(e.length>1){const r=e.filter(t=>t&&t.checked&&!t.disabled).map(t=>t.value);return{value:r,isValid:!!r.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!E(e[0].attributes.value)?E(e[0].value)||e[0].value===""?Ze:{value:e[0].value,isValid:!0}:Ze:Xe}return Xe};const et={isValid:!1,value:null};var mt=e=>Array.isArray(e)?e.reduce((r,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:r,et):et;function tt(e,r,t="validate"){if(be(e)||Array.isArray(e)&&e.every(be)||B(e)&&!e)return{type:t,message:be(e)?e:"",ref:r}}var ae=e=>S(e)&&!Ve(e)?e:{value:e,message:""},rt=async(e,r,t,i,a)=>{const{ref:u,refs:f,required:g,maxLength:F,minLength:D,min:m,max:v,pattern:j,validate:H,name:O,valueAsNumber:Ee,mount:Y,disabled:Z}=e._f,V=c(r,O);if(!Y||Z)return{};const z=f?f[0]:u,J=_=>{i&&z.reportValidity&&(z.setCustomValidity(B(_)?"":_||""),z.reportValidity())},k={},ie=Pe(u),ve=he(u),te=ie||ve,ne=(Ee||Me(u))&&E(u.value)&&E(V)||Fe(u)&&u.value===""||V===""||Array.isArray(V)&&!V.length,M=ht.bind(null,O,t,k),me=(_,x,p,R=Q.maxLength,q=Q.minLength)=>{const P=_?x:p;k[O]={type:_?R:q,message:P,ref:u,...M(_?R:q,P)}};if(a?!Array.isArray(V)||!V.length:g&&(!te&&(ne||T(V))||B(V)&&!V||ve&&!vt(f).isValid||ie&&!mt(f).isValid)){const{value:_,message:x}=be(g)?{value:!!g,message:g}:ae(g);if(_&&(k[O]={type:Q.required,message:x,ref:z,...M(Q.required,x)},!t))return J(x),k}if(!ne&&(!T(m)||!T(v))){let _,x;const p=ae(v),R=ae(m);if(!T(V)&&!isNaN(V)){const q=u.valueAsNumber||V&&+V;T(p.value)||(_=q>p.value),T(R.value)||(x=q<R.value)}else{const q=u.valueAsDate||new Date(V),P=oe=>new Date(new Date().toDateString()+" "+oe),ue=u.type=="time",le=u.type=="week";G(p.value)&&V&&(_=ue?P(V)>P(p.value):le?V>p.value:q>new Date(p.value)),G(R.value)&&V&&(x=ue?P(V)<P(R.value):le?V<R.value:q<new Date(R.value))}if((_||x)&&(me(!!_,p.message,R.message,Q.max,Q.min),!t))return J(k[O].message),k}if((F||D)&&!ne&&(G(V)||a&&Array.isArray(V))){const _=ae(F),x=ae(D),p=!T(_.value)&&V.length>+_.value,R=!T(x.value)&&V.length<+x.value;if((p||R)&&(me(p,_.message,x.message),!t))return J(k[O].message),k}if(j&&!ne&&G(V)){const{value:_,message:x}=ae(j);if(Ve(_)&&!V.match(_)&&(k[O]={type:Q.pattern,message:x,ref:u,...M(Q.pattern,x)},!t))return J(x),k}if(H){if(K(H)){const _=await H(V,r),x=tt(_,z);if(x&&(k[O]={...x,...M(Q.validate,x.message)},!t))return J(x.message),k}else if(S(H)){let _={};for(const x in H){if(!I(_)&&!t)break;const p=tt(await H[x](V,r),z,x);p&&(_={...p,...M(x,p.message)},J(p.message),t&&(k[O]=_))}if(!I(_)&&(k[O]={ref:z,..._},!t))return k}}return J(!0),k};function qt(e,r){const t=r.slice(0,-1).length;let i=0;for(;i<t;)e=E(e)?i++:e[r[i++]];return e}function Wt(e){for(const r in e)if(e.hasOwnProperty(r)&&!E(e[r]))return!1;return!0}function C(e,r){const t=Array.isArray(r)?r:Ue(r)?[r]:ot(r),i=t.length===1?e:qt(e,t),a=t.length-1,u=t[a];return i&&delete i[u],a!==0&&(S(i)&&I(i)||Array.isArray(i)&&Wt(i))&&C(e,t.slice(0,-1)),e}var Le=()=>{let e=[];return{get observers(){return e},next:a=>{for(const u of e)u.next&&u.next(a)},subscribe:a=>(e.push(a),{unsubscribe:()=>{e=e.filter(u=>u!==a)}}),unsubscribe:()=>{e=[]}}},Re=e=>T(e)||!at(e);function ee(e,r){if(Re(e)||Re(r))return e===r;if(se(e)&&se(r))return e.getTime()===r.getTime();const t=Object.keys(e),i=Object.keys(r);if(t.length!==i.length)return!1;for(const a of t){const u=e[a];if(!i.includes(a))return!1;if(a!=="ref"){const f=r[a];if(se(u)&&se(f)||S(u)&&S(f)||Array.isArray(u)&&Array.isArray(f)?!ee(u,f):u!==f)return!1}}return!0}var bt=e=>e.type==="select-multiple",$t=e=>Pe(e)||he(e),Ne=e=>Fe(e)&&e.isConnected,_t=e=>{for(const r in e)if(K(e[r]))return!0;return!1};function xe(e,r={}){const t=Array.isArray(e);if(S(e)||t)for(const i in e)Array.isArray(e[i])||S(e[i])&&!_t(e[i])?(r[i]=Array.isArray(e[i])?[]:{},xe(e[i],r[i])):T(e[i])||(r[i]=!0);return r}function Ft(e,r,t){const i=Array.isArray(e);if(S(e)||i)for(const a in e)Array.isArray(e[a])||S(e[a])&&!_t(e[a])?E(r)||Re(t[a])?t[a]=Array.isArray(e[a])?xe(e[a],[]):{...xe(e[a])}:Ft(e[a],T(r)?{}:r[a],t[a]):t[a]=!ee(e[a],r[a]);return t}var fe=(e,r)=>Ft(e,r,xe(r)),Vt=(e,{valueAsNumber:r,valueAsDate:t,setValueAs:i})=>E(e)?e:r?e===""?NaN:e&&+e:t&&G(e)?new Date(e):i?i(e):e;function Oe(e){const r=e.ref;if(!(e.refs?e.refs.every(t=>t.disabled):r.disabled))return Me(r)?r.files:Pe(r)?mt(e.refs).value:bt(r)?[...r.selectedOptions].map(({value:t})=>t):he(r)?vt(e.refs).value:Vt(E(r.value)?e.ref.value:r.value,e)}var Ht=(e,r,t,i)=>{const a={};for(const u of e){const f=c(r,u);f&&A(a,u,f._f)}return{criteriaMode:t,names:[...e],fields:a,shouldUseNativeValidation:i}},ce=e=>E(e)?e:Ve(e)?e.source:S(e)?Ve(e.value)?e.value.source:e.value:e;const st="AsyncFunction";var Kt=e=>(!e||!e.validate)&&!!(K(e.validate)&&e.validate.constructor.name===st||S(e.validate)&&Object.values(e.validate).find(r=>r.constructor.name===st)),Gt=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function it(e,r,t){const i=c(e,t);if(i||Ue(t))return{error:i,name:t};const a=t.split(".");for(;a.length;){const u=a.join("."),f=c(r,u),g=c(e,u);if(f&&!Array.isArray(f)&&t!==u)return{name:t};if(g&&g.type)return{name:u,error:g};a.pop()}return{name:t}}var Yt=(e,r,t,i,a)=>a.isOnAll?!1:!t&&a.isOnTouch?!(r||e):(t?i.isOnBlur:a.isOnBlur)?!e:(t?i.isOnChange:a.isOnChange)?e:!0,zt=(e,r)=>!Ae(c(e,r)).length&&C(e,r);const Jt={mode:W.onSubmit,reValidateMode:W.onChange,shouldFocusError:!0};function Qt(e={}){let r={...Jt,...e},t={submitCount:0,isDirty:!1,isLoading:K(r.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:r.errors||{},disabled:r.disabled||!1},i={},a=S(r.defaultValues)||S(r.values)?U(r.defaultValues||r.values)||{}:{},u=r.shouldUnregister?{}:U(a),f={action:!1,mount:!1,watch:!1},g={mount:new Set,unMount:new Set,array:new Set,watch:new Set},F,D=0;const m={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},v={values:Le(),array:Le(),state:Le()},j=Je(r.mode),H=Je(r.reValidateMode),O=r.criteriaMode===W.all,Ee=s=>n=>{clearTimeout(D),D=setTimeout(s,n)},Y=async s=>{if(!r.disabled&&(m.isValid||s)){const n=r.resolver?I((await te()).errors):await M(i,!0);n!==t.isValid&&v.state.next({isValid:n})}},Z=(s,n)=>{!r.disabled&&(m.isValidating||m.validatingFields)&&((s||Array.from(g.mount)).forEach(l=>{l&&(n?A(t.validatingFields,l,n):C(t.validatingFields,l))}),v.state.next({validatingFields:t.validatingFields,isValidating:!I(t.validatingFields)}))},V=(s,n=[],l,y,d=!0,o=!0)=>{if(y&&l&&!r.disabled){if(f.action=!0,o&&Array.isArray(c(i,s))){const h=l(c(i,s),y.argA,y.argB);d&&A(i,s,h)}if(o&&Array.isArray(c(t.errors,s))){const h=l(c(t.errors,s),y.argA,y.argB);d&&A(t.errors,s,h),zt(t.errors,s)}if(m.touchedFields&&o&&Array.isArray(c(t.touchedFields,s))){const h=l(c(t.touchedFields,s),y.argA,y.argB);d&&A(t.touchedFields,s,h)}m.dirtyFields&&(t.dirtyFields=fe(a,u)),v.state.next({name:s,isDirty:_(s,n),dirtyFields:t.dirtyFields,errors:t.errors,isValid:t.isValid})}else A(u,s,n)},z=(s,n)=>{A(t.errors,s,n),v.state.next({errors:t.errors})},J=s=>{t.errors=s,v.state.next({errors:t.errors,isValid:!1})},k=(s,n,l,y)=>{const d=c(i,s);if(d){const o=c(u,s,E(l)?c(a,s):l);E(o)||y&&y.defaultChecked||n?A(u,s,n?o:Oe(d._f)):R(s,o),f.mount&&Y()}},ie=(s,n,l,y,d)=>{let o=!1,h=!1;const b={name:s};if(!r.disabled){const L=!!(c(i,s)&&c(i,s)._f&&c(i,s)._f.disabled);if(!l||y){m.isDirty&&(h=t.isDirty,t.isDirty=b.isDirty=_(),o=h!==b.isDirty);const N=L||ee(c(a,s),n);h=!!(!L&&c(t.dirtyFields,s)),N||L?C(t.dirtyFields,s):A(t.dirtyFields,s,!0),b.dirtyFields=t.dirtyFields,o=o||m.dirtyFields&&h!==!N}if(l){const N=c(t.touchedFields,s);N||(A(t.touchedFields,s,l),b.touchedFields=t.touchedFields,o=o||m.touchedFields&&N!==l)}o&&d&&v.state.next(b)}return o?b:{}},ve=(s,n,l,y)=>{const d=c(t.errors,s),o=m.isValid&&B(n)&&t.isValid!==n;if(e.delayError&&l?(F=Ee(()=>z(s,l)),F(e.delayError)):(clearTimeout(D),F=null,l?A(t.errors,s,l):C(t.errors,s)),(l?!ee(d,l):d)||!I(y)||o){const h={...y,...o&&B(n)?{isValid:n}:{},errors:t.errors,name:s};t={...t,...h},v.state.next(h)}},te=async s=>{Z(s,!0);const n=await r.resolver(u,r.context,Ht(s||g.mount,i,r.criteriaMode,r.shouldUseNativeValidation));return Z(s),n},ne=async s=>{const{errors:n}=await te(s);if(s)for(const l of s){const y=c(n,l);y?A(t.errors,l,y):C(t.errors,l)}else t.errors=n;return n},M=async(s,n,l={valid:!0})=>{for(const y in s){const d=s[y];if(d){const{_f:o,...h}=d;if(o){const b=g.array.has(o.name),L=d._f&&Kt(d._f);L&&m.validatingFields&&Z([y],!0);const N=await rt(d,u,O,r.shouldUseNativeValidation&&!n,b);if(L&&m.validatingFields&&Z([y]),N[o.name]&&(l.valid=!1,n))break;!n&&(c(N,o.name)?b?jt(t.errors,N,o.name):A(t.errors,o.name,N[o.name]):C(t.errors,o.name))}!I(h)&&await M(h,n,l)}}return l.valid},me=()=>{for(const s of g.unMount){const n=c(i,s);n&&(n._f.refs?n._f.refs.every(l=>!Ne(l)):!Ne(n._f.ref))&&Se(s)}g.unMount=new Set},_=(s,n)=>!r.disabled&&(s&&n&&A(u,s,n),!ee(Be(),a)),x=(s,n,l)=>gt(s,g,{...f.mount?u:E(n)?a:G(s)?{[s]:n}:n},l,n),p=s=>Ae(c(f.mount?u:a,s,e.shouldUnregister?c(a,s,[]):[])),R=(s,n,l={})=>{const y=c(i,s);let d=n;if(y){const o=y._f;o&&(!o.disabled&&A(u,s,Vt(n,o)),d=Fe(o.ref)&&T(n)?"":n,bt(o.ref)?[...o.ref.options].forEach(h=>h.selected=d.includes(h.value)):o.refs?he(o.ref)?o.refs.length>1?o.refs.forEach(h=>(!h.defaultChecked||!h.disabled)&&(h.checked=Array.isArray(d)?!!d.find(b=>b===h.value):d===h.value)):o.refs[0]&&(o.refs[0].checked=!!d):o.refs.forEach(h=>h.checked=h.value===d):Me(o.ref)?o.ref.value="":(o.ref.value=d,o.ref.type||v.values.next({name:s,values:{...u}})))}(l.shouldDirty||l.shouldTouch)&&ie(s,d,l.shouldTouch,l.shouldDirty,!0),l.shouldValidate&&oe(s)},q=(s,n,l)=>{for(const y in n){const d=n[y],o=`${s}.${y}`,h=c(i,o);(g.array.has(s)||S(d)||h&&!h._f)&&!se(d)?q(o,d,l):R(o,d,l)}},P=(s,n,l={})=>{const y=c(i,s),d=g.array.has(s),o=U(n);A(u,s,o),d?(v.array.next({name:s,values:{...u}}),(m.isDirty||m.dirtyFields)&&l.shouldDirty&&v.state.next({name:s,dirtyFields:fe(a,u),isDirty:_(s,o)})):y&&!y._f&&!T(o)?q(s,o,l):R(s,o,l),Qe(s,g)&&v.state.next({...t}),v.values.next({name:f.mount?s:void 0,values:{...u}})},ue=async s=>{f.mount=!0;const n=s.target;let l=n.name,y=!0;const d=c(i,l),o=()=>n.type?Oe(d._f):ut(s),h=b=>{y=Number.isNaN(b)||se(b)&&isNaN(b.getTime())||ee(b,c(u,l,b))};if(d){let b,L;const N=o(),re=s.type===_e.BLUR||s.type===_e.FOCUS_OUT,pt=!Gt(d._f)&&!r.resolver&&!c(t.errors,l)&&!d._f.deps||Yt(re,c(t.touchedFields,l),t.isSubmitted,H,j),pe=Qe(l,g,re);A(u,l,N),re?(d._f.onBlur&&d._f.onBlur(s),F&&F(0)):d._f.onChange&&d._f.onChange(s);const Ce=ie(l,N,re,!1),Ct=!I(Ce)||pe;if(!re&&v.values.next({name:l,type:s.type,values:{...u}}),pt)return m.isValid&&(e.mode==="onBlur"?re&&Y():Y()),Ct&&v.state.next({name:l,...pe?{}:Ce});if(!re&&pe&&v.state.next({...t}),r.resolver){const{errors:Ye}=await te([l]);if(h(N),y){const Lt=it(t.errors,i,l),ze=it(Ye,i,Lt.name||l);b=ze.error,l=ze.name,L=I(Ye)}}else Z([l],!0),b=(await rt(d,u,O,r.shouldUseNativeValidation))[l],Z([l]),h(N),y&&(b?L=!1:m.isValid&&(L=await M(i,!0)));y&&(d._f.deps&&oe(d._f.deps),ve(l,L,b,Ce))}},le=(s,n)=>{if(c(t.errors,n)&&s.focus)return s.focus(),1},oe=async(s,n={})=>{let l,y;const d=de(s);if(r.resolver){const o=await ne(E(s)?s:d);l=I(o),y=s?!d.some(h=>c(o,h)):l}else s?(y=(await Promise.all(d.map(async o=>{const h=c(i,o);return await M(h&&h._f?{[o]:h}:h)}))).every(Boolean),!(!y&&!t.isValid)&&Y()):y=l=await M(i);return v.state.next({...!G(s)||m.isValid&&l!==t.isValid?{}:{name:s},...r.resolver||!s?{isValid:l}:{},errors:t.errors}),n.shouldFocus&&!y&&ye(i,le,s?d:g.mount),y},Be=s=>{const n={...f.mount?u:a};return E(s)?n:G(s)?c(n,s):s.map(l=>c(n,l))},je=(s,n)=>({invalid:!!c((n||t).errors,s),isDirty:!!c((n||t).dirtyFields,s),error:c((n||t).errors,s),isValidating:!!c(t.validatingFields,s),isTouched:!!c((n||t).touchedFields,s)}),Dt=s=>{s&&de(s).forEach(n=>C(t.errors,n)),v.state.next({errors:s?t.errors:{}})},qe=(s,n,l)=>{const y=(c(i,s,{_f:{}})._f||{}).ref,d=c(t.errors,s)||{},{ref:o,message:h,type:b,...L}=d;A(t.errors,s,{...L,...n,ref:y}),v.state.next({name:s,errors:t.errors,isValid:!1}),l&&l.shouldFocus&&y&&y.focus&&y.focus()},Et=(s,n)=>K(s)?v.values.subscribe({next:l=>s(x(void 0,n),l)}):x(s,n,!0),Se=(s,n={})=>{for(const l of s?de(s):g.mount)g.mount.delete(l),g.array.delete(l),n.keepValue||(C(i,l),C(u,l)),!n.keepError&&C(t.errors,l),!n.keepDirty&&C(t.dirtyFields,l),!n.keepTouched&&C(t.touchedFields,l),!n.keepIsValidating&&C(t.validatingFields,l),!r.shouldUnregister&&!n.keepDefaultValue&&C(a,l);v.values.next({values:{...u}}),v.state.next({...t,...n.keepDirty?{isDirty:_()}:{}}),!n.keepIsValid&&Y()},We=({disabled:s,name:n,field:l,fields:y,value:d})=>{if(B(s)&&f.mount||s){const o=s?void 0:E(d)?Oe(l?l._f:c(y,n)._f):d;A(u,n,o),ie(n,o,!1,!1,!0)}},ke=(s,n={})=>{let l=c(i,s);const y=B(n.disabled)||B(r.disabled);return A(i,s,{...l||{},_f:{...l&&l._f?l._f:{ref:{name:s}},name:s,mount:!0,...n}}),g.mount.add(s),l?We({field:l,disabled:B(n.disabled)?n.disabled:r.disabled,name:s,value:n.value}):k(s,!0,n.value),{...y?{disabled:n.disabled||r.disabled}:{},...r.progressive?{required:!!n.required,min:ce(n.min),max:ce(n.max),minLength:ce(n.minLength),maxLength:ce(n.maxLength),pattern:ce(n.pattern)}:{},name:s,onChange:ue,onBlur:ue,ref:d=>{if(d){ke(s,n),l=c(i,s);const o=E(d.value)&&d.querySelectorAll&&d.querySelectorAll("input,select,textarea")[0]||d,h=$t(o),b=l._f.refs||[];if(h?b.find(L=>L===o):o===l._f.ref)return;A(i,s,{_f:{...l._f,...h?{refs:[...b.filter(Ne),o,...Array.isArray(c(a,s))?[{}]:[]],ref:{type:o.type,name:s}}:{ref:o}}}),k(s,!1,void 0,o)}else l=c(i,s,{}),l._f&&(l._f.mount=!1),(r.shouldUnregister||n.shouldUnregister)&&!(lt(g.array,s)&&f.action)&&g.unMount.add(s)}}},$e=()=>r.shouldFocusError&&ye(i,le,g.mount),St=s=>{B(s)&&(v.state.next({disabled:s}),ye(i,(n,l)=>{const y=c(i,l);y&&(n.disabled=y._f.disabled||s,Array.isArray(y._f.refs)&&y._f.refs.forEach(d=>{d.disabled=y._f.disabled||s}))},0,!1))},He=(s,n)=>async l=>{let y;if(l&&(l.preventDefault&&l.preventDefault(),l.persist&&l.persist()),r.disabled){n&&await n({...t.errors},l);return}let d=U(u);if(v.state.next({isSubmitting:!0}),r.resolver){const{errors:o,values:h}=await te();t.errors=o,d=h}else await M(i);if(C(t.errors,"root"),I(t.errors)){v.state.next({errors:{}});try{await s(d,l)}catch(o){y=o}}else n&&await n({...t.errors},l),$e(),setTimeout($e);if(v.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:I(t.errors)&&!y,submitCount:t.submitCount+1,errors:t.errors}),y)throw y},kt=(s,n={})=>{c(i,s)&&(E(n.defaultValue)?P(s,U(c(a,s))):(P(s,n.defaultValue),A(a,s,U(n.defaultValue))),n.keepTouched||C(t.touchedFields,s),n.keepDirty||(C(t.dirtyFields,s),t.isDirty=n.defaultValue?_(s,U(c(a,s))):_()),n.keepError||(C(t.errors,s),m.isValid&&Y()),v.state.next({...t}))},Ke=(s,n={})=>{const l=s?U(s):a,y=U(l),d=I(s),o=d?a:y;if(n.keepDefaultValues||(a=l),!n.keepValues){if(n.keepDirtyValues){const h=new Set([...g.mount,...Object.keys(fe(a,u))]);for(const b of Array.from(h))c(t.dirtyFields,b)?A(o,b,c(u,b)):P(b,c(o,b))}else{if(Te&&E(s))for(const h of g.mount){const b=c(i,h);if(b&&b._f){const L=Array.isArray(b._f.refs)?b._f.refs[0]:b._f.ref;if(Fe(L)){const N=L.closest("form");if(N){N.reset();break}}}}i={}}u=e.shouldUnregister?n.keepDefaultValues?U(a):{}:U(o),v.array.next({values:{...o}}),v.values.next({values:{...o}})}g={mount:n.keepDirtyValues?g.mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},f.mount=!m.isValid||!!n.keepIsValid||!!n.keepDirtyValues,f.watch=!!e.shouldUnregister,v.state.next({submitCount:n.keepSubmitCount?t.submitCount:0,isDirty:d?!1:n.keepDirty?t.isDirty:!!(n.keepDefaultValues&&!ee(s,a)),isSubmitted:n.keepIsSubmitted?t.isSubmitted:!1,dirtyFields:d?{}:n.keepDirtyValues?n.keepDefaultValues&&u?fe(a,u):t.dirtyFields:n.keepDefaultValues&&s?fe(a,s):n.keepDirty?t.dirtyFields:{},touchedFields:n.keepTouched?t.touchedFields:{},errors:n.keepErrors?t.errors:{},isSubmitSuccessful:n.keepIsSubmitSuccessful?t.isSubmitSuccessful:!1,isSubmitting:!1})},Ge=(s,n)=>Ke(K(s)?s(u):s,n);return{control:{register:ke,unregister:Se,getFieldState:je,handleSubmit:He,setError:qe,_executeSchema:te,_getWatch:x,_getDirty:_,_updateValid:Y,_removeUnmounted:me,_updateFieldArray:V,_updateDisabledField:We,_getFieldArray:p,_reset:Ke,_resetDefaultValues:()=>K(r.defaultValues)&&r.defaultValues().then(s=>{Ge(s,r.resetOptions),v.state.next({isLoading:!1})}),_updateFormState:s=>{t={...t,...s}},_disableForm:St,_subjects:v,_proxyFormState:m,_setErrors:J,get _fields(){return i},get _formValues(){return u},get _state(){return f},set _state(s){f=s},get _defaultValues(){return a},get _names(){return g},set _names(s){g=s},get _formState(){return t},set _formState(s){t=s},get _options(){return r},set _options(s){r={...r,...s}}},trigger:oe,register:ke,handleSubmit:He,watch:Et,setValue:P,getValues:Be,reset:Ge,resetField:kt,clearErrors:Dt,unregister:Se,setError:qe,setFocus:(s,n={})=>{const l=c(i,s),y=l&&l._f;if(y){const d=y.refs?y.refs[0]:y.ref;d.focus&&(d.focus(),n.shouldSelect&&K(d.select)&&d.select())}},getFieldState:je}}function cr(e={}){const r=w.useRef(),t=w.useRef(),[i,a]=w.useState({isDirty:!1,isValidating:!1,isLoading:K(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:K(e.defaultValues)?void 0:e.defaultValues});r.current||(r.current={...Qt(e),formState:i});const u=r.current.control;return u._options=e,Ie({subject:u._subjects.state,next:f=>{dt(f,u._proxyFormState,u._updateFormState,!0)&&a({...u._formState})}}),w.useEffect(()=>u._disableForm(e.disabled),[u,e.disabled]),w.useEffect(()=>{if(u._proxyFormState.isDirty){const f=u._getDirty();f!==i.isDirty&&u._subjects.state.next({isDirty:f})}},[u,i.isDirty]),w.useEffect(()=>{e.values&&!ee(e.values,t.current)?(u._reset(e.values,u._options.resetOptions),t.current=e.values,a(f=>({...f}))):u._resetDefaultValues()},[e.values,u]),w.useEffect(()=>{e.errors&&u._setErrors(e.errors)},[e.errors,u]),w.useEffect(()=>{u._state.mount||(u._updateValid(),u._state.mount=!0),u._state.watch&&(u._state.watch=!1,u._subjects.state.next({...u._formState})),u._removeUnmounted()}),w.useEffect(()=>{e.shouldUnregister&&u._subjects.values.next({values:u._getWatch()})},[e.shouldUnregister,u]),r.current.formState=ct(i,u),r.current}const dr=Ut,xt=$.createContext({}),yr=({...e})=>X.jsx(xt.Provider,{value:{name:e.name},children:X.jsx(Bt,{...e})}),De=()=>{const e=$.useContext(xt),r=$.useContext(At),{getFieldState:t,formState:i}=we(),a=t(e.name,i);if(!e)throw new Error("useFormField should be used within <FormField>");const{id:u}=r;return{id:u,name:e.name,formItemId:`${u}-form-item`,formDescriptionId:`${u}-form-item-description`,formMessageId:`${u}-form-item-message`,...a}},At=$.createContext({}),Xt=$.forwardRef(({className:e,...r},t)=>{const i=$.useId();return X.jsx(At.Provider,{value:{id:i},children:X.jsx("div",{ref:t,className:ge("space-y-2",e),...r})})});Xt.displayName="FormItem";const Zt=$.forwardRef(({className:e,...r},t)=>{const{error:i,formItemId:a}=De();return X.jsx(Nt,{ref:t,className:ge(i&&"text-destructive",e),htmlFor:a,...r})});Zt.displayName="FormLabel";const er=$.forwardRef(({...e},r)=>{const{error:t,formItemId:i,formDescriptionId:a,formMessageId:u}=De();return X.jsx(Ot,{ref:r,id:i,"aria-describedby":t?`${a} ${u}`:`${a}`,"aria-invalid":!!t,...e})});er.displayName="FormControl";const tr=$.forwardRef(({className:e,...r},t)=>{const{formDescriptionId:i}=De();return X.jsx("p",{ref:t,id:i,className:ge("text-sm text-muted-foreground",e),...r})});tr.displayName="FormDescription";const rr=$.forwardRef(({className:e,children:r,...t},i)=>{const{error:a,formMessageId:u}=De(),f=a?String(a==null?void 0:a.message):r;return f?X.jsx("p",{ref:i,id:u,className:ge("text-sm font-medium text-destructive",e),...t,children:f}):null});rr.displayName="FormMessage";const sr=$.forwardRef(({className:e,type:r,...t},i)=>X.jsx("input",{type:r,className:ge("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",e),ref:i,...t}));sr.displayName="Input";const nt=(e,r,t)=>{if(e&&"reportValidity"in e){const i=c(t,r);e.setCustomValidity(i&&i.message||""),e.reportValidity()}},wt=(e,r)=>{for(const t in r.fields){const i=r.fields[t];i&&i.ref&&"reportValidity"in i.ref?nt(i.ref,t,e):i.refs&&i.refs.forEach(a=>nt(a,t,e))}},ir=(e,r)=>{r.shouldUseNativeValidation&&wt(e,r);const t={};for(const i in e){const a=c(r.fields,i),u=Object.assign(e[i]||{},{ref:a&&a.ref});if(nr(r.names||Object.keys(e),i)){const f=Object.assign({},c(t,i));A(f,"root",u),A(t,i,f)}else A(t,i,u)}return t},nr=(e,r)=>e.some(t=>t.startsWith(r+"."));var ar=function(e,r){for(var t={};e.length;){var i=e[0],a=i.code,u=i.message,f=i.path.join(".");if(!t[f])if("unionErrors"in i){var g=i.unionErrors[0].errors[0];t[f]={message:g.message,type:g.code}}else t[f]={message:u,type:a};if("unionErrors"in i&&i.unionErrors.forEach(function(m){return m.errors.forEach(function(v){return e.push(v)})}),r){var F=t[f].types,D=F&&F[i.code];t[f]=ht(f,r,t,a,D?[].concat(D,i.message):i.message)}e.shift()}return t},gr=function(e,r,t){return t===void 0&&(t={}),function(i,a,u){try{return Promise.resolve(function(f,g){try{var F=Promise.resolve(e[t.mode==="sync"?"parse":"parseAsync"](i,r)).then(function(D){return u.shouldUseNativeValidation&&wt({},u),{errors:{},values:t.raw?i:D}})}catch(D){return g(D)}return F&&F.then?F.then(void 0,g):F}(0,function(f){if(function(g){return Array.isArray(g==null?void 0:g.errors)}(f))return{values:{},errors:ir(ar(f.errors,!u.shouldUseNativeValidation&&u.criteriaMode==="all"),u)};throw f}))}catch(f){return Promise.reject(f)}}};export{dr as F,sr as I,yr as a,Xt as b,er as c,tr as d,rr as e,gr as t,cr as u};

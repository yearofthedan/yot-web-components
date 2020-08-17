let t,e,i,o,a,n,r,s,l,p,d,c=t=>t;import{c as u,p as h,a as f,L as b,h as y}from"./lit-element.js";function v(t,e,i,o){var a,n=arguments.length,r=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(r=(n<3?a(r):n>3?a(e,i,r):a(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r}let m=class extends b{constructor(){super(...arguments),this.value="",this.type="text",this.name="",this.placeholder=" ",this.id="",this.hiddenInputRef=null}setValueToHiddenInput(t){if(this.ownerDocument){if(null===this.hiddenInputRef){const t=this.ownerDocument.createElement("input");t.type="hidden",this.appendChild(t),this.hiddenInputRef=t}this.hiddenInputRef.name=this.name,this.hiddenInputRef.value=null!=t?t:""}}__inputChanged(t){this.setValueToHiddenInput(t.target.value)}render(){return this.setValueToHiddenInput(this.value),y(t||(t=c`
      <input
        id="input-${0}"
        name="${0}"
        type="${0}"
        .value="${0}"
        placeholder="${0}"
        @input="${0}"
        part="input"
      />
      ${0}
      ${0}
    `),this.id,this.name,this.type,this.value,this.placeholder,this.__inputChanged,this.label?y(e||(e=c`<label for="input-${0}">${0}</label>`),this.id,this.label):"",this.error?y(i||(i=c`<aside role="alert">${0}</aside>`),this.error):"")}};var g;m.styles=u(o||(o=c`
    :host {
      position: relative;
      min-height: var(--field-height);
      display: inline-block;

      font-size: var(--font-size-s);
      background-color: var(--palette-background-light);
    }

    label {
      position: absolute;
      left: 0;
      top: 0;
    }

    input[type='radio'] + label {
      position: relative;
    }

    input[type='checkbox'] + label {
      position: relative;
    }

    :host(:not(:focus-within)) > input:placeholder-shown + label {
      top: 50%;
      transform: translateY(-50%);
      left: var(--inset-density-xs);
    }

    input:not(:focus):placeholder-shown + label {
      font-size: var(--font-size-s);
      cursor: text;
      transition: all ease-out 100ms;
    }

    label {
      color: var(--palette-primary-dark);
      font-size: var(--font-size-xs);
      transition: all ease-in 100ms;
      font-family: inherit;
    }

    input {
      border: none;
      border-bottom: solid 1px var(--palette-primary-dark);
      background-color: var(--palette-background);
      color: var(--palette-background-on);
      font-size: var(--font-size-s);
      padding-top: calc(var(--font-size-xs) + 2 * var(--inset-density-xs));
    }

    input:focus {
      outline: none;
      border-bottom: solid 2px var(--palette-primary-dark);
    }

    input:not(:focus):placeholder-shown {
      background-color: var(--palette-background);
    }

    input::placeholder {
      opacity: 0;
      transition: all ease-in 100ms;
    }

    input:focus::placeholder {
      opacity: 1;
      transition: all ease-out 100ms;
      font-style: italic;
      font-size: var(--font-size-xs);
      padding-left: var(--padding-unit);
    }

    [role='alert'] {
      display: inline-block;
      padding: var(--padding-unit);
      font-size: var(--font-size-xs);
      color: var(--palette-error);
    }
  `)),v([h()],m.prototype,"value",void 0),v([h()],m.prototype,"type",void 0),v([h()],m.prototype,"name",void 0),v([h()],m.prototype,"error",void 0),v([h()],m.prototype,"label",void 0),v([h()],m.prototype,"placeholder",void 0),v([h()],m.prototype,"id",void 0),m=v([f("yot-field")],m),function(t){t.idle="idle",t.success="success",t.loading="loading"}(g||(g={}));const z=u(a||(a=c`
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`)),k=u(n||(n=c`
  button {
    font-family: var(--font-family-body);
    font-size: var(--font-size-small);
    font-weight: var(--font-weight-500);
    line-height: 1.5;
  }

  button[yot-size='small'] {
    font-size: var(--font-size-small);
  }

  button[yot-size='large'] {
    font-size: var(--font-size-large);
  }
`)),$=u(r||(r=c`
  button[data-action-state='loading'] > slot[part='loading'] {
    display: inline;
  }

  slot[part='loading'] > span {
    --spinner-radius: calc(0.25 * var(--field-height));
    display: block;
    color: var(--palette-primary-light-on);
    width: calc(2 * var(--spinner-radius));
    height: calc(2 * var(--spinner-radius));
    border-top: 2px solid var(--palette-primary-light-on);
    animation: 2s rotate linear infinite;
    border-radius: 100%;
  }
`)),x=u(s||(s=c`
  button[data-action-state='success'] > slot[part='success'] {
    display: inline;
  }

  slot[part='success'] > span {
    display: block;
    color: var(--palette-primary-light-on);
    border-radius: 100%;
  }
`)),w=u(l||(l=c`
  button {
    box-sizing: border-box;
    padding: var(--inset-density-m) var(--inset-density-l);
    border: none;
    border-radius: 0.25rem;
  }

  button[yot-size~='small'] {
    font-size: var(--font-size-small);
  }

  button[yot-size~='medium'] {
    font-size: var(--font-size-small);
  }

  button[yot-size~='large'] {
    font-size: var(--font-size-large);
  }

  button:focus {
    outline: var(--border-m) solid;
    outline-offset: var(--inset-density-s);
  }
`));let I=class extends b{constructor(){super(...arguments),this.state=g.idle,this.type="normal",this.variant="primary"}__click(t){if("submit"===this.type){const e=this.closest("form");t.preventDefault();const i=document.createElement("button");i.type="submit",i.style.display="none",null==e||e.appendChild(i),i.click(),i.remove()}}render(){return y(p||(p=c`
      <button
        part="button"
        data-action-state="${0}"
        ?disabled="${0}"
        type="${0}"
        @click="${0}"
      >
        <slot name="loading" part="loading">
          <span></span>
        </slot>
        <slot name="success" part="success">
          <span>✔</span>
        </slot>
        <slot part="label">
          My label text
        </slot>
      </button>
    `),this.state,this.state!==g.idle,this.type,this.__click)}};I.styles=u(d||(d=c`
    :host {
      min-width: 8rem;
      width: fit-content;
      display: inline-block;
      position: relative;
    }
    
    ${0}
    ${0}

    button {
      height: var(--field-height);
      width: 100%;
      cursor: pointer;
      background-color: var(--palette-primary);
      color: var(--palette-primary-on);
      display: flex;
      justify-content: center;
      align-items: center;
      transition: background 200ms;
    }
    
    button[disabled] {
      background-color: var(--palette-primary-light);
    }

    button[data-action-state='idle']:hover {
      background: var(--palette-primary-light)
        radial-gradient(circle, transparent 1%, var(--palette-primary-light) 1%)
        center/15000%;
    }

    button[data-action-state='idle']:active {
      filter: brightness(80%);
      transition: filter 100ms;
    }
    
    slot {
      display: none;
    }

    button[data-action-state='idle'] > slot[part='label'] {
      display: inline;
    }

    ${0}
    ${0}
    ${0}
  `),k,w,$,x,z),v([h()],I.prototype,"state",void 0),v([h()],I.prototype,"type",void 0),v([h()],I.prototype,"variant",void 0),I=v([f("yot-button")],I);

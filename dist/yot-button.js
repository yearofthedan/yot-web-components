let t,e,i,s,a=t=>t;import{_ as n}from"./cd8cc21f.js";import{c as o,p as r,a as l,L as d,h as c}from"./lit-element.js";import"./yot-spinner.js";var p,u;!function(t){t.idle="idle",t.success="success",t.loading="loading"}(p||(p={})),function(t){t.small="small",t.regular="regular",t.large="large"}(u||(u={}));const y=o(t||(t=a`
  button[data-action-state='success'] > slot[part='success'] {
    display: inline;
  }

  slot[part='success'] > span {
    display: block;
    color: var(--palette-primary-light-on);
    border-radius: 100%;
  }
`)),h=o(e||(e=a`
  button {
    box-sizing: border-box;
    border: none;
    border-radius: 0.25rem;
    font-family: var(--font-family-body);
    font-weight: var(--font-weight-500);
    line-height: 1.5;
  }

  button[size='small'] {
    padding: var(--inset-density-xs) var(--inset-density-m);
    font-size: var(--font-size-xs);
    height: var(--field-height-s);
    width: 4rem;
  }

  button[size='regular'] {
    padding: var(--inset-density-m) var(--inset-density-m);
    font-size: var(--font-size-s);
    height: var(--field-height-m);
    width: 8rem;
  }

  button[size='large'] {
    padding: var(--inset-density-m) var(--inset-density-l);
    font-size: var(--font-size-l);
    height: var(--field-height-l);
    width: 12rem;
  }

  button:focus {
    outline: var(--border-m) solid;
    outline-offset: var(--inset-density-s);
  }
`));let m=class extends d{constructor(){super(...arguments),this.state=p.idle,this.type="normal",this.size=u.regular,this.variant="primary"}__click(t){if("submit"===this.type){const e=this.closest("form");t.preventDefault();const i=document.createElement("button");i.type="submit",i.style.display="none",null==e||e.appendChild(i),i.click(),i.remove()}}render(){return c(i||(i=a`
      <button
        part="button"
        size="${0}"
        data-action-state="${0}"
        ?disabled="${0}"
        type="${0}"
        @click="${0}"
      >
        <slot name="loading" part="loading">
          <yot-spinner></yot-spinner>
        </slot>
        <slot name="success" part="success">
          <span>✔</span>
        </slot>
        <slot part="label"> </slot>
      </button>
    `),this.size,this.state,this.state!==p.idle,this.type,this.__click)}};m.styles=o(s||(s=a`
    :host {
      width: fit-content;
      display: inline-block;
      position: relative;
    }

    ${0}

    button {
      cursor: pointer;
      background-color: var(--palette-primary);
      color: var(--palette-primary-on);
      display: flex;
      justify-content: center;
      align-items: center;
      transition: background 200ms;
    }

    button[data-action-state='loading'] > slot[part='loading'] {
      display: flex;
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
  `),h,y),n([r()],m.prototype,"state",void 0),n([r()],m.prototype,"type",void 0),n([r()],m.prototype,"size",void 0),n([r()],m.prototype,"variant",void 0),m=n([l("yot-button")],m);
//# sourceMappingURL=yot-button.js.map

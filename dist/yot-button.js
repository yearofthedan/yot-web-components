let t,e,i,s,a,o=t=>t;import{_ as n}from"./cd8cc21f.js";import{c as r,p as l,a as d,L as c,h as p}from"./lit-element.js";import"./yot-spinner.js";var u;!function(t){t.idle="idle",t.success="success",t.loading="loading"}(u||(u={}));const y=r(t||(t=o`
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
`)),b=r(e||(e=o`
  button[data-action-state='success'] > slot[part='success'] {
    display: inline;
  }

  slot[part='success'] > span {
    display: block;
    color: var(--palette-primary-light-on);
    border-radius: 100%;
  }
`)),m=r(i||(i=o`
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
`));let f=class extends c{constructor(){super(...arguments),this.state=u.idle,this.type="normal",this.variant="primary"}__click(t){if("submit"===this.type){const e=this.closest("form");t.preventDefault();const i=document.createElement("button");i.type="submit",i.style.display="none",null==e||e.appendChild(i),i.click(),i.remove()}}render(){return p(s||(s=o`
      <button
        part="button"
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
    `),this.state,this.state!==u.idle,this.type,this.__click)}};f.styles=r(a||(a=o`
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
  `),y,m,b),n([l()],f.prototype,"state",void 0),n([l()],f.prototype,"type",void 0),n([l()],f.prototype,"variant",void 0),f=n([d("yot-button")],f);
//# sourceMappingURL=yot-button.js.map

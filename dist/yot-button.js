let t,e,a,i,s,o,n,r=t=>t;import{_ as l}from"./cd8cc21f.js";import{c as d,p as c,a as p,L as u,h as m}from"./lit-element.js";var b;!function(t){t.idle="idle",t.success="success",t.loading="loading"}(b||(b={}));const y=d(t||(t=r`
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`)),f=d(e||(e=r`
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
`)),h=d(a||(a=r`
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
`)),g=d(i||(i=r`
  button[data-action-state='success'] > slot[part='success'] {
    display: inline;
  }

  slot[part='success'] > span {
    display: block;
    color: var(--palette-primary-light-on);
    border-radius: 100%;
  }
`)),v=d(s||(s=r`
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
`));let z=class extends u{constructor(){super(...arguments),this.state=b.idle,this.type="normal",this.variant="primary"}__click(t){if("submit"===this.type){const e=this.closest("form");t.preventDefault();const a=document.createElement("button");a.type="submit",a.style.display="none",null==e||e.appendChild(a),a.click(),a.remove()}}render(){return m(o||(o=r`
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
    `),this.state,this.state!==b.idle,this.type,this.__click)}};z.styles=d(n||(n=r`
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
  `),f,v,h,g,y),l([c()],z.prototype,"state",void 0),l([c()],z.prototype,"type",void 0),l([c()],z.prototype,"variant",void 0),z=l([p("yot-button")],z);
//# sourceMappingURL=yot-button.js.map

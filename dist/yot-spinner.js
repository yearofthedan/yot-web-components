let e,i,s=e=>e;import{_ as r}from"./cd8cc21f.js";import{c as t,a,L as o,h as n,p as l}from"./lit-element.js";let c=class extends o{constructor(){super(...arguments),this.size="medium"}render(){return n(e||(e=s`
      <svg data-size="${0}" viewBox="0 0 40 40">
        <circle cx="20" cy="20" r="16" fill="none" stroke-width="4"></circle>
      </svg>
    `),this.size)}};c.styles=t(i||(i=s`
    :host {
      display: inherit;
    }

    @keyframes rotate {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    svg {
      animation: rotate 2s linear infinite;
    }

    svg[data-size='small'] {
      width: var(--icon-size-small);
      height: var(--icon-size-small);
    }

    svg[data-size='medium'] {
      width: var(--icon-size-medium);
      height: var(--icon-size-medium);
    }

    svg[data-size='large'] {
      width: var(--icon-size-large);
      height: var(--icon-size-large);
    }

    circle {
      stroke: currentColor;
      stroke-dasharray: 80;
    }
  `)),r([l()],c.prototype,"size",void 0),c=r([a("yot-spinner")],c);
//# sourceMappingURL=yot-spinner.js.map

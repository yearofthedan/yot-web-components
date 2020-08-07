let t,
  o,
  e,
  i = t => t;
import { _ as a } from './cd8cc21f.js';
import { c as r, p as l, a as s, L as n, h as d } from './lit-element.js';
let p = class extends n {
  constructor() {
    super(...arguments),
      (this.value = ''),
      (this.type = 'text'),
      (this.error = null),
      (this.placeholder = ' '),
      (this.id = ' ');
  }
  render() {
    return d(
      t ||
        (t = i` <input type="${0}" placeholder="${0}" part="input" value="${0}" id="${0}"> <label for="${0}"> <slot></slot> </label> ${0} `),
      this.type,
      this.placeholder,
      this.value,
      this.id,
      this.id,
      this.error
        ? d(o || (o = i`<aside aria-role="alert">${0}</aside>`), this.error)
        : ''
    );
  }
};
(p.styles = r(
  e ||
    (e = i`:host{position:relative;display:inline-block}label{position:absolute;left:0;top:0}input[type=radio]+label{position:relative}input[type=checkbox]+label{position:relative}:host(:not(:focus-within))>input:placeholder-shown+label{position:absolute;left:var(--padding-unit);top:calc(var(--font-size-aside-text) + 2 * var(--padding-unit))}:host{display:block;font-size:var(--font-size-body-text);background-color:var(--color-background)}input:not(:focus):placeholder-shown+label{font-size:var(--font-size-body-text);cursor:text;transition:all ease-out .1s}label{color:var(--color-label-text);font-size:var(--font-size-label-text);transition:all ease-in .1s;font-family:inherit}input{border:none;border-bottom:solid 1px var(--color-accent);background-color:var(--color-background);color:var(--color-body-text);font-size:var(--font-size-body-text);padding-top:calc(var(--font-size-aside-text) + 2 * var(--padding-unit));padding-bottom:var(--padding-unit)}input:focus{outline:0;border-bottom:solid 2px var(--color-body-text)}input:not(:focus):placeholder-shown{background-color:var(--color-background-alt)}input::placeholder{opacity:0;transition:all ease-in .1s}input:focus::placeholder{opacity:1;transition:all ease-out .1s;font-style:italic;font-size:var(--font-size-aside-text);padding-left:var(--padding-unit)}aside{display:inline-block;padding:var(--padding-unit);font-size:var(--font-size-aside-text);color:var(--color-error-text)}`)
)),
  a([l()], p.prototype, 'value', void 0),
  a([l()], p.prototype, 'type', void 0),
  a([l()], p.prototype, 'error', void 0),
  a([l()], p.prototype, 'placeholder', void 0),
  a([l()], p.prototype, 'id', void 0),
  (p = a([s('yot-field')], p));

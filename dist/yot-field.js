let t,e,i,o,a=t=>t;import{_ as n}from"./cd8cc21f.js";import{c as l,p as r,a as s,L as p,h as d}from"./lit-element.js";let u=class extends p{constructor(){super(...arguments),this.value="",this.type="text",this.name="",this.placeholder=" ",this.id="",this.hiddenInputRef=null}setValueToHiddenInput(t){if(this.ownerDocument){if(null===this.hiddenInputRef){const t=this.ownerDocument.createElement("input");t.type="hidden",this.appendChild(t),this.hiddenInputRef=t}this.hiddenInputRef.name=this.name,this.hiddenInputRef.value=null!=t?t:""}}__inputChanged(t){this.setValueToHiddenInput(t.target.value)}render(){return this.setValueToHiddenInput(this.value),d(t||(t=a`
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
    `),this.id,this.name,this.type,this.value,this.placeholder,this.__inputChanged,this.label?d(e||(e=a`<label for="input-${0}">${0}</label>`),this.id,this.label):"",this.error?d(i||(i=a`<aside role="alert">${0}</aside>`),this.error):"")}};u.styles=l(o||(o=a`
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
  `)),n([r()],u.prototype,"value",void 0),n([r()],u.prototype,"type",void 0),n([r()],u.prototype,"name",void 0),n([r()],u.prototype,"error",void 0),n([r()],u.prototype,"label",void 0),n([r()],u.prototype,"placeholder",void 0),n([r()],u.prototype,"id",void 0),u=n([s("yot-field")],u);
//# sourceMappingURL=yot-field.js.map

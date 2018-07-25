export class URLBuilder {
  constructor () {
    this._params = "?";
  }


  /**
   * get params
   * @returns {string|*|string}
   */
  get params () {
    return this._params;
  }


  /**
   * set param
   * @param params
   */
  set params (params) {
    this._params = params;
  }


  /**
   * add param
   * @param paramstring
   * @param value
   */
  addParam (paramstring, value) {
    let expArr = new RegExp(`(${paramstring})=(\\w+)`, "g").exec(this._params);

    // caso existir ocorrência de url já existente
    if (expArr) {
      let oldParamString = expArr[0];
      let newParamString = value ? oldParamString.replace(expArr[2], value) : "";
      oldParamString += !value ? "&" : "";

      this._params = this._params.replace(oldParamString, newParamString);
    }

    // caso não existir ocorrência de url existente
    else {
      this._params += `${paramstring}=${value}&`;
    }
  }


  /**
   *  build from object
   * @param object
   * @returns string
   */
  buildFromObject (object) {
    let isParams = object !== undefined && typeof object === typeof {};
    let arrayParams = isParams ? Object.keys(object) : null;

    if (arrayParams)
      Object.keys(object).forEach(param => this.addParam(param, object[param]));

    return this.params;
  }


  /**
   * remove param from url
   * @param paramstring
   */
  removeParam (paramstring) {
    let regexpToRemoveParamString;
    if (Array.isArray(paramstring)) {
      regexpToRemoveParamString = new RegExp(`(${paramstring.join("|")})=([\\w\\-\\:\\.\\,]+)`, "g").exec(this._params);
    } else {
      regexpToRemoveParamString = new RegExp(`(${paramstring})=([\\w\\-\\:\\.\\,]+)`, "g").exec(this._params);
    }

    if (regexpToRemoveParamString && regexpToRemoveParamString.length)
      this._params = this._params.replace(regexpToRemoveParamString[0]+"&", "");
  }
}

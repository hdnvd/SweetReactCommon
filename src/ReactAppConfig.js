// @flow
class ReactAppConfig {
  static SERVERMODE_LARAVEL = 1;
  static SERVERMODE_ASP = 2;
  static DefaultPageSize = 2;
  static DEFAULT_PAGESIZE = 7;
  static getConfig(configName)
  {
    return global[configName];
  }
  static setConfig(configName,value)
  {
    global[configName]=value;
  }
  static getSiteUrl(){
    return this.getConfig('site-url');
  }
  static setSiteUrl(value){
    return this.setConfig('site-url',value);
  }
  static getServerType(){
    return this.getConfig('server-type');
  }
  static setServerType(value){
    return this.setConfig('server-type',value);
  }
  static getDebugging(){
    return this.getConfig('debugging');
  }
  static setDebugging(value){
    return this.setConfig('debugging',value);
  }
  static getAppName(){
    return this.getConfig('app-name');
  }
  static setAppName(value){
    return this.setConfig('app-name',value);
  }
  static getAppVersion(){
    return this.getConfig('app-version');
  }
  static setAppVersion(value){
    return this.setConfig('app-version',value);
  }
  static getDefaultPageSize(){
    return this.getConfig('default-page-size');
  }
  static setDefaultPageSize(value){
    return this.setConfig('default-page-size',value);
  }

  static getDefaultFontName(){
    return this.getConfig('font-name');
  }
  static setDefaultFontName(value){
    return this.setConfig('font-name',value);
  }
  static getDefaultTextColor(){
    return this.getConfig('default-text-color');
  }
  static setDefaultTextColor(value){
    return this.setConfig('default-text-color',value);
  }
  static getDefaultColor(){
    return this.getConfig('default-color');
  }
  static setDefaultColor(value){
    return this.setConfig('default-color',value);
  }
  static getDefaultBackgroundColor(){
    return this.getConfig('default-bg-color');
  }
  static setDefaultBackgroundColor(value){
    return this.setConfig('default-bg-color',value);
  }


}
export default ReactAppConfig;

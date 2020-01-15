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
    return this.getConfig('siteurl');
  }
  static setSiteUrl(value){
    return this.setConfig('siteurl',value);
  }
  static getServerType(){
    return this.getConfig('servertype');
  }
  static setServerType(value){
    return this.setConfig('servertype',value);
  }
  static getDebugging(){
    return this.getConfig('debugging');
  }
  static setDebugging(value){
    return this.setConfig('debugging',value);
  }
  static getAppName(){
    return this.getConfig('appname');
  }
  static setAppName(value){
    return this.setConfig('appname',value);
  }

}
export default ReactAppConfig;

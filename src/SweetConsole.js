// @flow
import ReactAppConfig from './ReactAppConfig';
export default class SweetConsole{
    static log(data,title)
    {
        if(ReactAppConfig.getDebugging()){
            if(title!=null)
                console.log(title);
            console.log(data);
        }
    }
}

import {HANFI,SHAFI} from './Constant'

export const switchHanfiMode = (data)=>{
    return{
        type:HANFI,
        payload:data
    }
}

export const switchShafiMode = (data)=>{
    return{
        type:SHAFI,
        payload:data,
    }
}
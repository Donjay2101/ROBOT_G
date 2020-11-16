export const  isNullOrUndefined = (val)=>{
        if(val === null || val === undefined || val==='null' || val==='undefined'){
            return true;
        }
        return false;
}

export const isNullOrWhiteSpace = (val)=>{
    if(isNullOrUndefined(val) || val===''){
        return true;
    }
    return false;
}


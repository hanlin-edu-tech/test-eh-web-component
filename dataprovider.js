{
    const viewItemsData = [];
    //封鎖資料物件的 array 修改
    const viewItemsProxy = new Proxy(viewItemsData, {
        set : (target, prop, value) => {
            throw new TypeError('Can not change iteams');
        },
        deleteProperty : (target, prop) => {
            throw new TypeError('Can not change iteams');
        }
    });
    const updateItemsData = (page) => {
        while(viewItemsData.pop());
        for(let i=0 ; i < 5 ; i++){
            viewItemsData.push({
                k : `p${page}-k${i}`,
                v : `p${page}-v${i}`
            });
        }
        dispatchEvent(new Event("items-change"))
    };

    const viewData = {
        page : -1,
        items : viewItemsProxy
    }
    const viewProxy = new Proxy(viewData, {
        set : (target, prop, value) => {
            //封鎖 items 的修改
            if(prop == "items"){
                throw new TypeError('Can not set iteams');
            }
            target[prop] = value;
            //若是設定 page 重新整理 items
            if(prop == "page"){
                updateItemsData(value);
            }
        },
        get : (target, prop, receiver) => {
            //轉接 addEventListener
            if(prop == "addEventListener"){
                return addEventListener;
            }else{
                return Reflect.get(target, prop, receiver);
            }
        }
    })

    //開放給頁面使用的介面
    window.EHDataprovider = {
        view : viewProxy
    }


    //以下為和主要邏輯無關的工具類    
    const listeners = [];
    const addEventListener = (type, callback) => {
        if (!(type in listeners)) {
            listeners[type] = [];
        }
        listeners[type].push(callback);
    };
    const dispatchEvent = (event) => {
        if (!(event.type in listeners)) {
          return true;
        }
        let stack = listeners[event.type];
        event.target = viewProxy;
        for (let i = 0 ; i < stack.length ; i++) {
          stack[i].call(viewProxy, event);
        }
        return !event.defaultPrevented;
    };

}
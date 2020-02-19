{
    const viewItemsData = [];
    const viewItemsProxy = new Proxy(viewItemsData, {
        set : (target, prop, value) => {
            throw new TypeError('Can not change iteams');
        },
        deleteProperty : (target, prop) => {
            throw new TypeError('Can not change iteams');
        }
    });
    const updateItemsData = (page) => {
        for(let i=0 ; i < 5 ; i++){
            viewItemsData.push({
                k : `p${page}-k${i}`,
                v : `p${page}-v${i}`
            });
        }
        dispatchEvent(new Event("items-change"))
    };

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

    const viewData = {
        page : -1,
        items : viewItemsProxy
    }
    const viewProxy = new Proxy(viewData, {
        set : (target, prop, value) => {
            if(prop == "items"){
                throw new TypeError('Can not set iteams');
            }
            target[prop] = value;
            if(prop == "page"){
                updateItemsData(value);
            }
        },
        get : (target, prop, receiver) => {
            if(prop == "addEventListener"){
                return addEventListener;
            }else{
                return Reflect.get(target, prop, receiver);
            }
        }
    })

    window.EHDataprovider = {
        view : viewProxy
    }
}
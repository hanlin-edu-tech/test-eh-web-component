{
    const viewItemsData = [];
    const updateItemsData = (page) => {
        viewData.page = page;
        while (viewItemsData.pop());
        for (let i = 0; i < 5; i++) {
            viewItemsData.push({
                k: `p${page}-k${i}`,
                v: `p${page}-v${i}`
            });
        }
        dispatchEvent(new Event("items-change"))
    };

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
        event.target = viewData;
        for (let i = 0; i < stack.length; i++) {
            stack[i].call(viewData, event);
        }
        return !event.defaultPrevented;
    };

    const viewData = {
        page: -1,
        items: viewItemsData
    };

    //開放給頁面使用的介面
    window.EHDataprovider = {
        //約定 view 裡的所有資料都是只讀，不能修改
        view: viewData,
        page: (page) => updateItemsData(page),
        addEventListener: addEventListener
    }

}
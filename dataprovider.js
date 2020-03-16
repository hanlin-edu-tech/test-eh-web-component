{
    const viewItemsData = [];

	const defaultList = [
		[['帳號', 'dog@ehanlin.com.tw'], ['名稱','dog']],
		[['帳號', 'Tom@ehanlin.com.tw'], ['名稱','Tom']],
		[['帳號', 'Mary@ehanlin.com.tw'], ['名稱','Mary']],
		[['帳號', 'monkey@ehanlin.com.tw'], ['名稱','阿猴']],
		[['帳號', 'wumi@ehanlin.com.tw'], ['名稱','wumi']]
	];

	const defaultImages = [
		'ps05.png',
		'ps06.png',
		'ps07.png',
		'ps08.png',
		'ps09.png'
	];

    const random = (page) => {
        while(viewItemsData.pop());
		let index =  Math.ceil(Math.random() * defaultList.length) - 1;
		let data = defaultList[index];
		for (let item of data) {
        	viewItemsData.push(item);
		}
		viewItemsData.img = defaultImages[index];
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
        for (let i = 0 ; i < stack.length ; i++) {
          stack[i].call(viewData, event);
        }
        return !event.defaultPrevented;
    };

    const viewData = {
        page : -1,
        items : viewItemsData
    };

    //開放給頁面使用的介面
    window.EHDataprovider = {
        //約定 view 裡的所有資料都是只讀，不能修改
        view : viewData,
		random: ()=> random(),
        addEventListener : addEventListener
    }

}

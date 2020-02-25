self.addEventListener('install', function(event) {
    console.log("service-worker v0.0.1");
});

const localhostRoot = "http://localhost:8080";
const interceptors = {
    "/pageStatus.json" : (event) => {
        return new Response('{"page":1,"total":10}', {headers: { "Content-Type" : "application/json" }});
    },
    "/items.json" : (event) => {
        let page = /page=(\d+)/.exec(event.request.url)[1];
        let result = [];
        for(let i=0 ; i<5 ; i++){
            result.push({k:`p${page}-k${i}`, v:`p${page}-v${i}`});
        }
        return new Response(JSON.stringify(result), {headers: { "Content-Type" : "application/json" }});
    }
}

self.addEventListener('fetch', function(event) {
    for(let url in interceptors){
        if(event.request.url.indexOf(`${localhostRoot}${url}`) >= 0){
            console.log('Intercept fetch event for', event.request.url);
            event.respondWith(interceptors[url](event))
            return;
        }
    }
    return fetch(event.request);
});
function parseURL(url) {
    let parsedUrl = new URL(url);
    let params = new URLSearchParams(parsedUrl.search);
    // console.log(parsedUrl);
    const result = {
        file: parsedUrl.pathname.split('/').pop(),
        hash: parsedUrl.hash,
        host: parsedUrl.host,
        params: {},
        path: parsedUrl.pathname,
        port: parsedUrl.port,
        protcol: parsedUrl.protocol,
        query: parsedUrl.search,
        relative: parsedUrl.pathname + parsedUrl.search,
        segments: parsedUrl.pathname.split('/').slice(1),
        source: parsedUrl.href
    }

    params.forEach((value, key) => {
        result.params[key] = value;
    })

    return result;
}

console.log(parseURL("https://github.com/pubnub/python/search?utf8=%E2%9C%93&q=python"));
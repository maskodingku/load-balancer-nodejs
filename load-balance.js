const http = require("http");
const fs = require("fs");
const httpProxy = require('http-proxy');
const {
    P2cBalancer,
    RandomBalancer,
} = require('load-balancers');
const dir = process.cwd();
const config = require(dir+"/config.json");
const proxy = httpProxy.createProxyServer({
	proxyTimeout:config["timeout-waitting-proxy"]
});
const proxies = config["proxy-balance"];
const balancer = new P2cBalancer(proxies.length);
const port = config["port-listener"];

proxy.on('error', function (err, req, res) {
  res.writeHead(500, {
    'Content-Type': 'text/plain'
  });
  res.end('Something went wrong. And we are reporting a custom error message.');
});

//----------- main ----------------------------------------------------
http.createServer((req,res)=>{
	proxy.web(req, res, {
	  target: proxies[balancer.pick()]
	});
}).listen(port,()=>{
	console.log("server load balancer running on port",port);
});
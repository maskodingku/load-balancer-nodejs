# load-balancer-nodejs
nodejs load balancing app to distribute http requests evenly across multiple servers.

![1M requests routed to 10 proxies](https://raw.githubusercontent.com/borzaresearch/node-load-balancers/master/docs/comparison.png)

How to use ?

1. Please edit the file 'config.json'.
2. enter the value 'host' and 'port' with the following format:

<pre>
{
  "host" : "your-ip-server",
  "port" : port-server
}
</pre>

3. Perform package installation

<pre>npm install</pre>

4. For a test run:

<pre>npm test</pre>

5. If you want to run in production mode, please install the 'pm2' module.

<pre>npm install pm2 -g</pre>

6. Then run the following command:

<pre>npm start</pre>

------------------------------------ **** ------------------------------

Thanks to :

1. PM2 : https://www.npmjs.com/package/pm2
2. http-proxy : https://www.npmjs.com/package/http-proxy
3. load-balancers : https://www.npmjs.com/package/load-balancers

# load-balancer-nodejs
nodejs load balancing app to distribute http requests evenly across multiple servers.

How to use ?

1. Please edit the file 'config.json'.
2. enter the value 'host' and 'port' with the following format:

{
  "host" : "your-ip-server",
  "port" : port-server
}

3. Run 'npm test' to test it out.
4. Run 'npm start' if you want to run in production mode. Previously please install the module 'pm2'. Visit https://www.npmjs.com/package/pm2

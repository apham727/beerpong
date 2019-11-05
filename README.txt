To run the express server in live update (dev) mode: 
Ensure you are in the 'backend' directory 
> nodemon app.js

To run in regular mode: 
> node app.js

*Bug in windows: 
If running the node server from WSL, ctrl+c doesn't actually kill the node process. You might 
have to go into task manager and end the node server from there, or go to the resource monitor, 
find the port that node is using, and then kill via taskkill <PID>. 



To run the Angular application: 
ionic serve -- --proxy-config proxy.config.json

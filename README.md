<div align="center">
  <p>
    <a href="https://webresolver.nl"><img src="https://webresolver.nl/public/images/logo.png" alt="webresolver.nl" /></a>
  </p>
  <p>
    <a href="https://nodei.co/npm/webresolver/"><img src="https://nodei.co/npm/webresolver.png" alt="npm installnfo" /></a>
  </p>
</div>

# webresolver
A simple, easy to use node.js module that allows you to interact with the webresolver API.

## Getting Started
Get your API key here: https://webresolver.nl/api/plans <br/>
Installation: `npm install --save webresolver`

## Example usage
```js
const WebResolver = require('webresolver');

let resolver = new WebResolver("KEY");

resolver.skypeResolve("test123").then(res => {
  console.log(res.data);
});
```
## Documentation

Here is a list of all the available functions:

Function                                | Description
--------------------------------------- | --------------------------------------
**skypeResolve(str)**                   | Get a user's last known IP. <br/> `str` Skype username
**resolveDb(str)**                      | Search for IP addresses in the database linked to the username. <br/> `str` Skype username
**ip2skype(str)**                       | Get all the Skype usernames linked to a specific IP address. <br/> `str` IP address
**email2skype(str)**                    | Get all Skype accounts which are linked to a specific email. <br/> `str` Email address
**skype2email(str)**                    | Get all emails linked to a Skype account. <br/> `str` Skype username
**geoIp(str)**                          | GeoIP. Supports Domain, IPv4 and IPv6. <br/> `str` Domain or IP address
**dns(str)**                            | Get the DNS records from a domain. <br/> `str` Domain
**cloudflare(str)**                     | Does a bruteforce on the most common subdomains in order to search for the real IP. <br/> `str` Domain
**phone(str)**                          | Looks up information about a specific phone number. (Use international phone format). <br/> `str` Phone number
**screenshot(str)**                     | Creates a screenshot of any website/url. <br/> `str` URL
**headers(str)**                         | Get the website header information from a domain. <br/> `str` Domain
**whois(str)**                          | Get the registration information from a domain. <br/> `str` URL
**ping(str)**                           | Shows how long it takes for packets to reach host. <br/> `str` URL
**portscan(str [, number])**            | Scan a port to check if the port is open or closed on a host. <br/> `str` URL <br/> `[ ,number]` (Optional) Scan one specific port
**iplogger(str [, str])**               | Creates a link you can send to anyone to log their IP. <br/> `str` youtube || gyazo <br/> `[, str]` Custom id (youtube video ID (11 chars) or gyazo image ID (32 chars))
**isTempEmail(str)**                    | Searches through a database with known disposable email servers to check if a domain is disposable. <br/> `str` Email address
**ip2websites(str)**                    | Tries to find any websites linked to an IP you entered. <br/> `str` IP address
**domainInfo(str)**                     | Get all the information from a domain such as: IP history, subdomains & domain score. <br/> `str` Domain

/**
 * @author Erik Brilleman
 * @version 1.0.0
 * @description A simple, easy to use node.js module that allows you to interact with the webresolver API.
 *              Get your API key at https://webresolver.nl/api/plans
 */
const axios = require('axios');
const validator = require('validator');

/**
 * Check if the given string is empty.
 * @param {string} value The string to be checked.
 * @returns {boolean}
 */
const isEmpty = (value) => {
  if(value === undefined || value === null || (typeof value === 'string' && value.trim().length === 0) || validator.isEmpty(value)) {
    return true;
  } else {
    return false;
  }
}

module.exports = class WebResolver {
  constructor(key) {
    if(isEmpty(key)) { console.log({error: "Get your API key here: https://webresolver.nl/api/plans"}); }
    this.baseURL = 'https://webresolver.nl/api.php?key=' + key;
  }

  /**
   * Get a user's last known IP.
   * @param {string} username The Skype username
   * @returns {Promise} Response
   */
  async skypeResolve(username) {
    if(isEmpty(username)) {
      return {data: {error: "Please enter a Skype username!"}}
    } else {
      return await axios.get(this.baseURL + '&json&action=resolve&string=' + username)
    }
  }

  /**
   * Search for IP addresses in the database linked to the username.
   * @param {string} username The Skype username
   * @returns {Promise} Response
   */
  async resolveDb(username) {
    if(isEmpty(username)) {
      return {data: {error: "Please enter a Skype username!"}}
    } else {
      return await axios.get(this.baseURL + '&json&action=resolvedb&string=' + username)
    }
  }

  /**
   * Get all the Skype usernames linked to a specific IP address.
   * @param {string} ip The user's IP address
   * @returns {Promise} Response
   */
  async ip2skype(ip) {
    if(isEmpty(ip)) {
      return {data: {error: "Please enter a valid IP address!"}}
    } else {
      if(validator.isIP(ip)) {
        return await axios.get(this.baseURL + '&json&action=ip2skype&string=' + ip)
      } else {
        return {data: {error: "Please enter a valid IP address!"}}
      }  
    }
  }

  /**
   * Get all Skype accounts which are linked to a specific email.
   * @param {string} email Email address
   * @returns {Promise} Response
   */
  async email2skype(email) {
    if(isEmpty(email)) {
      return {data: {error: "Please enter a valid email address!"}}
    } else {
      if(validator.isEmail(email)) {
        return await axios.get(this.baseURL + '&json&action=email2skype&string=' + email)
      } else {
        return {data: {error: "Please enter a valid email address!"}}
      }
    }
  }

  /**
   * Get all emails linked to a Skype account.
   * @param {string} username The Skype username
   * @returns {Promise} Response
   */
  async skype2email(username) {
    if(isEmpty(username)) {
      return {data: {error: "Please enter a Skype username!"}}
    } else {
      return await axios.get(this.baseURL + '&json&action=skype2email&string=' + username)
    }
  }

  /**
   * GeoIP. Supports Domain, IPv4 and IPv6.
   * @param {string} domain The domain to be resolved.
   * @returns {Promise} Response
   */
  async geoIp(domain) {
    if(isEmpty(domain)) {
      return {data: {error: "Please enter a domain, IPv4 or IPv6 address!"}}
    } else {
      return await axios.get(this.baseURL + '&json&action=geoip&string=' + domain)
    }
  }

  /**
   * Get the DNS records from a domain.
   * @param {string} domain The domain to be resolved.
   * @returns {Promise} Response
   */
  async dns(domain) {
    if(isEmpty(domain)) {
      return {data: {error: "Please enter a domain!"}}
    } else {
      return await axios.get(this.baseURL + '&json&action=dns&string=' + domain)
    }
  }

  /**
   * Does a bruteforce on the most common subdomains in order to search for the real IP.
   * @param {string} domain The domain to be resolved.
   * @returns {Promise} Response
   */
  async cloudflare(domain) {
    if(isEmpty(domain)) {
      return {data: {error: "Please enter a domain!"}}
    } else {
      return await axios.get(this.baseURL + '&json&action=cloudflare&string=' + domain)
    }
  }

  /**
   * Looks up information about a specific phone number. (Use international phone format).
   * @param {string} phonenumber The phone number to be looked up.
   * @returns {Promise} Response
   */
  async phone(phonenumber) {
    if(isEmpty(phonenumber)) {
      return {data: {error: "Please enter a phone number! (Use international phone format)"}}
    } else {
      return await axios.get(this.baseURL + '&json&action=phonenumbercheck&string=' + phonenumber)
    }
  }

  /**
   * Creates a screenshot of any website/url.
   * @param {string} url The url of the website.
   * @returns {Promise} Response
   */
  async screenshot(url) {
    if(isEmpty(url)) {
      return {data: {error: "Please enter a url!"}}
    } else {
      return await axios.get(this.baseURL + '&json&action=screenshot&string=' + url)
    }
  }

  /**
   * Get the website header information from a domain.
   * @param {string} domain The domain to be looked up.
   * @returns {Promise} Response
   */
  async headers(domain) {
    if(isEmpty(domain)) {
      return {data: {error: "Please enter a domain!"}}
    } else {
      return await axios.get(this.baseURL + '&html=0&action=header&string=' + domain)
    }
  }

  /**
   * Get the registration information from a domain.
   * @param {string} url URL of the website to be looked up.
   * @returns {Promise} Response
   */
  async whois(url) {
    if(isEmpty(url)) {
      return {data: {error: "Please enter a url!"}}
    } else {
      return await axios.get(this.baseURL + '&html=0&action=whois&string=' + url)
    }
  }

  /**
   * Shows how long it takes for packets to reach host.
   * @param {string} url The url to be pinged.
   * @returns {Promise} Response
   */
  async ping(url) {
    if(isEmpty(url)) {
      return {data: {error: "Please enter a url!"}}
    } else {
      return await axios.get(this.baseURL + '&html=0&action=ping&string=' + url)
    }
  }

  /**
   * Scan a port to check if the port is open or closed on a host.
   * @param {string} url The url to be scanned.
   * @param {number|null} port Scan one specific port.
   * @returns {Promise} Response
   */
  async portscan(url, port=null) {
    if(isEmpty(url)) {
      return {data: {error: "Please enter a url!"}}
    } else {
      if(port === null) {
        return await axios.get(this.baseURL + '&json&action=portscan&string=' + url)
      } else {
        return await axios.get(this.baseURL + '&json&action=portscan&string=' + url + '&port=' + port)
      }
    }
  }

  /**
   * Creates a link you can send to anyone to log their IP.
   * @param {string|"youtube"} logger The base url of the logger. (youtube|gyazo)
   * @param {string|""} id Custom id to use. (youtube id needs to be 11 characters long, gyazo id needs to be 32 characters long). 
   * @returns {Promise} Response
   */
  async iplogger(logger="", id="") {
    return await axios.get(this.baseURL + '&json&action=iplogger&string=' + id + '&logger=' + logger)
  }

  /**
   * Searches through a database with known disposable email servers to check if a domain is disposable.
   * @param {string} email The email address to be checked.
   * @returns {Promise} Response
   */
  async isTempEmail(email) {
    if(isEmpty(email)) {
      return {data: {error: "Please enter a valid email address!"}}
    } else {
      if(validator.isEmail(email)) {
        return await axios.get(this.baseURL + '&json&action=disposable_email&string=' + email)
      } else {
        return {data: {error: "Please enter a valid email address!"}}
      }
    }
  }

  /**
   * Tries to find any websites linked to an IP you entered.
   * @param {string} ip The IP address to be looked up.
   * @returns {Promise} Response
   */
  async ip2websites(ip) {
    if(isEmpty(ip)) {
      return {data: {error: "Please enter a valid IP address!"}}
    } else {
      if(validator.isIP(ip)) {
        return await axios.get(this.baseURL + '&json&action=ip2websites&string=' + ip)
      } else {
        return {data: {error: "Please enter a valid IP address!"}}
      }
    }
  }

  /**
   * Get all the information from a domain such as: IP history, subdomains & domain score.
   * @param {string} domain The domain to be looked up.
   * @returns {Promise} Response
   */
  async domainInfo(domain) {
    if(isEmpty(domain)) {
      return {data: {error: "Please enter a domain!"}}
    } else {
      return await axios.get(this.baseURL + '&json&action=domaininfo&string=' + domain)
    }
  }
}
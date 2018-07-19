module.exports = {
  "apps": [
    {
      "name": "nuxt-circcus",
      "max_memory_restart": "512M",
      "script": "./build/main.js",
      "env": {
        "PORT": "5000",
        "NODE_ENV": "production",
        "HOST": "0.0.0.0",
        "APIURL": "http://i.circcus.com/api/student"
      }
    }
  ]
};
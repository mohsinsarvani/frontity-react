const settings = {
  "name": "wpreact",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Category 1",
              "/category/category-1/"
            ],
            [
              "Category 2",
              "/category/category-2/"
            ],
            [
              "Category 3",
              "/category/category-3/"
            ],
            [
              "Sample Page",
              "/sample-page/"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://mohsin-habib.com/frontity-demo"
        } 
      }
    }, 
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;

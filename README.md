# Telescope Summernote WYSIWYG editor Plugin

A simple plugin that replace Telescope markdown with  [Summernote][1] WYSIWYG editor 

## Install

```bash
meteor add biolog:telescope-summernote
```



## Quick Start
	1. Define HTMLBodySize in your settings.json file. its set the max character size of post if not provided default to 200000 characters 

    ```bash
    {
      "public": {
        "HTMLBodySize": 100000
      }
    }
     ```
  2. Run meteor with settings file e.g  meteor --settings settings.json
 
  


## Future
Feature suggestions and pull requests welcome!  Troubles?  Drop me a line [on Github][2].

[1]: http://summernote.org/
[2]: https://github.com/biologio/telescope-summernote

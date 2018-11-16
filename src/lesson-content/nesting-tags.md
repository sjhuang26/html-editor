Tags can be placed inside other tags. For example, consider this:

```
<p><b>Hi</b></p>
```

The ```b``` tag is inside the ```p``` tag.

## Common mistakes

1. ```<h1><b>Hi</h1></b>``` is wrong. Let's deconstruct it to see why:
    * ```<h1>``` = start the ```h1``` tag
    * ```<b>``` = start the ```b``` tag
    * ```</h1>``` = end the ```h1``` tag
    * ```</b>``` = end the ```b``` tag.
    But how does the ```h1``` tag end before the ```b``` tag ends?
2. ```<p>Hi<p>``` is wrong because the ```/``` is missing. It should be ```<p>Hi</p>```.
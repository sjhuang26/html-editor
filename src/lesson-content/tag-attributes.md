You can add _attributes_ to a tag. Attributes indicate that a certain thing has a certain value:
* A ```p``` tag might have ```width``` (attribute name) of ```100px``` (attribute value).
* An ```input``` tag might have ```type``` (attribute name) of ```date``` (attribute value).

As a side note, measurements such as width and height are written in units called _pixels_. 100 pixels would be about an inch. In HTML, when something is XYZ pixels, we write it as ```XYZpx```, with a "px" at the end; for example, ```50px```.

Here are some attributes:
<table class="table">
    <thead>
        <tr>
            <th>Name</th>
            <th>Definition</th>
            <th>Example</th>
        </tr>
    </thead>
    <tbody>
        <tr><td>width</td><td>Width of a element</td><td>width="100px"</td></tr>
        <tr><td>height</td><td>Height of an element</td><td>height="100px"</td></tr>
    </tbody>
</table>

The easiest way to learn attributes is through concrete examples. Let's start with a tag with no attributes:
```
<button>Hi!</button>
```
Say we want the button to have a width of 500 pixels. That means we need to use the ```width``` attribute and set it to ```500px```.
```
<button width="500px">Hi!</button>
```
Let's add another attribute: ```height``` of ```200px```.
```
<button width="500px" height="200px">Hi!</button>
```

A few things to note:
* Spaces are important. Notice where the spaces are and aren't. When there are multiple attributes, they must be separated by spaces. There are no spaces next to the equals sign.
* Double quotes ```"``` surround the attribute value.
* Attributes go into the opening tag (the ```<button>``` part), not the closing tag (the ```</button>``` part with a ```/``` in it).

So all of these are wrong:
```
<buttonwidth="500px">Hi!</button>
<button width=500px>Hi!</button>
<button>Hi!</button width="500px">
```
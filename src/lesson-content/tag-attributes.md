You can add _attributes_ to a tag. Attributes indicate that a certain thing has a certain value:
* A ```a``` tag might have ```href``` (attribute name) of ```https://google.com``` (attribute value).
* An ```input``` tag might have ```type``` (attribute name) of ```date``` (attribute value).

As a side note, measurements such as width and height are written in units called _pixels_. A pixel is the smallest dot displayable on a computer screen. On a normal computer screen, 100 pixels is about an inch.

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
        <tr><td>disabled</td><td>Only for INPUT tag: makes it disabled + grayed out</td><td>disabled="disabled"</td></tr>
        <tr><td>href</td><td>Only for A tag: set the URL for a link</td><td>href="https://google.com"</td></tr>
        <tr><td>title</td><td>For all tags: adds a tooltip to an element</td><td>title="my tooltip"</td></tr>
    </tbody>
</table>

The easiest way to learn attributes is through concrete examples. Let's start with a tag with no attributes:
```
<button>Hi!</button>
```

Let's gray the button out and make it disabled with the ```disabled``` attribute:
```
<button disabled="disabled">Hi!</button>
```

Finally, add a tooltip with the ```title``` attribute:
```
<button disabled="disabled" title="my tooltip">Hi!</button>
```

A few things to note:
* Spaces are important. Notice where the spaces are and aren't. When there are multiple attributes, they must be separated by spaces. There are no spaces next to the equals sign.
* Double quotes ```"``` surround the attribute value.
* Attributes go into the opening tag, not the closing tag.

So all of these are wrong:
* ```<buttondisabled="disabled">Hi!</button>``` (no space between "button" and "disabled")
* ```<button title=my tooltip>Hi!</button>``` (no double quotes around "my tooltip")
* ```<button>Hi!</button disabled="disabled">``` (the attribute should go in the opening tag, not the closing tag)
```
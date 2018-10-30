# HTML tutorial

## Welcome to HTML!

HTML is a programming language used to make websites.

## Tags

### Basics

HTML code is made of tags that represent parts of a website. Tags have names that stand for the things they represent.

For example, paragraphs are represented by ```p``` tags while hyperlinks are represented by ```a``` tags.

Here are some more names:
Name    | What it represents
----    | --------------------
p       | paragraph
h1      | 1st largest header
h6      | 6th largest header
b       | bold
i       | italic
u       | underline

You can put things inside tags. Whatever you put inside a tag becomes part of the tag. If you put the words "Hello world" inside a ```p``` tag, you get a paragraph with "Hello world" in it.

If you don't put anything inside a paragraph tag, you will get an empty paragraph that has nothing in it.

Tags follow this template:
```
<[TAG NAME]>[THINGS INSIDE THE TAG]</[TAG NAME]>
```

For example, if we wanted a paragraph that says "Hi," we would:
* add a tag named ```p``` because paragraphs are represented by ```p``` tags
* add the words "Hi" inside it

The result is:
```
<p>Hi</p>
```

What if we want two paragraphs?
```
<p>Hi</p>
<p>Hi again</p>
```

### Nesting tags

Tags can be placed inside other tags. For example, consider this:
```
<p>I know <b>HTML</b></p>
```

### Tag attributes

Tags can have attributes.
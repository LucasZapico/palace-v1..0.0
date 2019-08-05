---
title: "Email Catch"
date: 2019-08-03T12:16:11-07:00
draft: false
menu:
  docs:
    title: "Email Catch"
    parent: "Email Development"
    name: "Email Catch"
---

# Email Development Catch

## Getting Started

[What you should know about HTML email](https://webdesign.tutsplus.com/tutorials/what-you-should-know-about-html-email--webdesign-12908)
: General introduction into the email development space

[Build an HTML email template from scratch](https://webdesign.tutsplus.com/articles/build-an-html-email-template-from-scratch--webdesign-12770?ref=reallygoodemails)
:

**First Commit**

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
 <head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <title>Demystifying Email Design</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
</head>
</html>
```

### Formating &  styling

> Email is All About Nesting Tables
> Due to the lack of standards support in email, it’s not possible to use divs, sections or articles — instead you have to use tables. Moreover, you need to use lots and lots of nested tables because neither the colspan nor rowspan attributes are properly supported.

<br/>

> Again, because of the lack of standards support, it’s not a great idea to use standard tags like h1, h2, h3 or p.

**Example of What formating looks like**

```html
<tr>
 <td style=“font-size: 12px; font-family: Arial, sans-serif; color: #666666;”>
   Text
 </td>
</tr>
```

#### Inline styles of Stylesheets

Do inline styles off the bat or use a tool to convert a stylesheet to inline.

[Premailer](http://premailer.dialect.ca/)
: stylesheet --> inline converter

> I don’t like this is because you get to know your code, run it through an inliner, and then your code can become somewhat unrecognizable. I find that this makes it more difficult to troubleshoot.

#### images

##### Naming

> **Image Names and SPAM Scores**
> When saving out images remember that it’s good to give your images names that are short and meaningful because it will improve your spam score. Names like "campaign_054_design_0x0_v6_email-link.gif" are likely to have a much higher SPAM score than "email.gif".

##### Compression

[JPEGmini](https://www.jpegmini.com/)
[tinyPNG](https://tinypng.com/)

### Special Characters

> In reality, you need to encode all of your special characters anyway (e.g., & becomes & for ampersand) to be safe, but it’s worth keeping this line in there anyway.

### Summary of Make an HTML Email Template

> Set this width using HTML instead of CSS, by using the width attribute. The golden rule in HTML email development is: if an attribute exists in HTML, use that instead of CSS.

* * *

## REFERENCES

### RESOURCES

#### Testing

[Litmus](https://litmus.com/)
: testing, templating

[Email on acid](https://www.emailonacid.com/)
: testing

[W3C Vaidation](https://validator.w3.org/)
: testing and validation

#### Standards

[Email Standards Project](https://www.email-standards.org/)
: reference for the standards of various engines

---
title: "Scripting Catch"
date: 2019-10-12T10:28:46-07:00
draft: false
categories:  ['']
tags: ['shell','bash','scripting']
menu:
  docs:
    title: "Scripting Catch"
    parent: "Command Line"
    name: "Scripting Catch"
---

## File Set up

For a file to be excuted with Bash it must have the extension `.sh` and the first line of the given file must have the line `#!/bin/bash`. This tells the computer the the bash language is in bin/bash.

## Bash Syntax

### Basics

#### Echo Command

```bash
echo "Printing text with newline"
```

#### Comments

The "#" is used for single line comments in bash

```bash
# Some comment
```

Multi line comments use ":" then "'" symbos for start and end.

```bash
: '
Some
long
comment
'
```

### Loops

#### While Loop

```bash
#!/bin/bash 
valid=true
count=1
while [ $valid ]
do
echo $count
if [ $count -eq 5 ];
then
break
fi
((count++))
done
```

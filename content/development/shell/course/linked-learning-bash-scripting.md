---
title: "Linked Learning Bash Scripting"
date: 2019-08-15T22:08:42-07:00
draft: false
menu:
  docs:
    title: "Linked Learning Bash Scripting"
    parent: "Command Line"
    name: "Bash Scripting"
---

# Lynda - Learning Bash Scripting

## History

-   1971 Thompson Shell (first UNIX shell)
-   1975: Mashey Shell
-   1977: Bourne Shell
-   1978: C shell (csh) - similar to C language

## Basics Commands

**Make Directory**

```bash
mkdir some-name
```

**Delete Directory**

```bash
rmdir some-name
```

**Change Directory**

```bash
cd directory-name
```

**Copy File**

```bash
cp some-file new-file-name
```

**Delete File**

```bash
rm some-file
```

**See Contents**
Prints Contents of a text file to the terminal

```bash
cat some-file
```

**See Some Contents**
prints only as much as can be seen within the window.

-   Use spacebar to toggle through

```bash
more some-file.txt
```

**Peak at Contents**
Only shows the first few lines of a file

```bash
head some-file.txt
```

**See end of Content**
Only shows the last few lines of a file

```bash
tail some-file.txt
```

### Expansions

**Tilda Expansion**

```bash
~
# home dir expansion or tilda expansion
```

**Old Working Directory**

```bash
~-
# navigates to previous working dir
```

**Brace Expansion**

```bash
touch {bang,boom,test}
# creates files bang, boom, & test
```

```bash
touch some-name-{01..100}
# creates 100 files with some-name-1, some-name-2 ... some-name-100
```

**Counting Expansion**

```bash
echo {1..10..2}
# 1 3 5 7 9

echo {1..10..3}
# 1 4 7 10

echo {A..Z}
# A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
```

### Changing Where things Go

#### Pipes and redirections

### Redirection

```bash
cp -v * ../otherfolder 1> ../success.txt 2> ../error.txt
# copies all files in

cp -v * ../otherfolder &/ ../log.txt
# copies all logs
```

```bash
ls > /dev/null
# content goes to nowhere land
```

## GREP

**Example.1.0.1**

```bash
head some-file  | grep some-string
# prints head of some-file with some-string highlighted
```

**Example.1.0.2**

```bash
ls  | grep some-string
# prints contents within dir that match some-string
```

### Awk and Sed

Encoraged to expore awk and sed

```bash
man awk
man sed
```

## Scripts

Scripts are sets of bash commands used to expidite processes and directives

```bash
#!/bin/bash
# this is always the start of the bash script and lets the computer know that this is a bash script
```

```bash
#!
# Hashbang or Shebang
```

```bash
/bin/bash
# path to the bash executable
```

**Script Example.1.0.1**
In a `.sh` file

```bash
#!/bin/bash
# list current directory
ls
```

### Echo

```bash
echo statement
# prints statement

echo statement > some-file
# statement is printed in file
```

**Quote Conditions**

```bash
echo statement
# no quotes

echo 'statement'
# single quotes

echo "statement"
# double quotes
```

**Example**
Test `touch test.sh`

```bash
echo $greeting, world \(planet\)
# hello, world (planet)

echo '$greeting, world (planet)'
# $greeting, world (planet)

echo "$greeting, world (planet)"
# hello, world (planet)
```

**Trick**
Echo with no statement will output and empty line

```bash
echo Hello
echo
echo
echo world
# Hello
#
#
# world
```

**to run**

```bash
bash some-file.sh
# runs some-file.sh using the bash interpretor
```

### Variables

#### Declairing Variables

```bash
a=Hello
b="Good Morning"
c=16

echo $a
# Hello
echo $b
# Good Morning
echo $c
# 16

echo "$b! I have $c apples."
# Good Morning! I have 16 apples
```

#### Adding Attributes to Varialbes

```bash
declare -i d=123
# d is a integer
declare -r e=456
# e is read-only
```

**String Manipulation**

```bash
declare -l f="Dog"
# f is dog
delare -u g="cats"
# g is CATS
```

### Special Variables

[More extensive list of default variables](http://tldp.org/LDP/abs/html/internalvariables.html)

```bash
echo $HOME
# returns user home dir

echo $PWD
# returns current directory

echo $MACHTYPE
# returns machine type

echo $HOSTNAME
# returns system name

echo $BASH_VERSION
# returns verion of bash

echo $SECONDS
# seconds a session has been running
# seconds in a scripts can be used to time processes

echo $0
# name of script
```

### Commmand Substituion

**Simple Example**

```bash
d=$(pwd)
echo $d
# outputs current dir
```

**EXAMPLE**

```bash
a=$(ping -c 1 example.com | grep 'bytes from' | cut -d = -f 4)
echo "The ping was $a"
# The ping wass 1.66 ms
```

## Arithmetic Operations

```bash
(( some-expression ))
```

**Example.1.0.1**

```bash
echo $(( 1 + 5 ))
```

**Example.1.0.2**

```bash
val=$(( expression ))
```

**Example.1.0.3**

```bash
a=3
b=4
c=$(($a * $b))
echo $c
# 12
```

| operation      | Operator   |
| -------------- | ---------- |
| Exponentiation | $a \*\* $b |
| Multiplcation  | $a \* $b   |
| Division       | $a / $b    |
| Modulo         | $a % $b    |
| Addition       | $a + $b    |
| Subtraction    | $a - $b    |

### Increment and Decrments

```bash
a=2
((a++))
echo $a
# 3

((a--))
echo $a
# 2

((a+=3))
echo $a
#

((a*=3))
echo $a

((a/=3))
echo $a

((a-=3))
echo $a
```

**NOTE: Bash math only works with integers. To work with real numbers or floating point numbers**

```bash
bc
# bc - An arbitrary precision calculator language
```

**Example: Working with floating points**

```bash
g=$(echo 1/3 | bc -l)
echo $g
# .333333
```

## Comparisons

```bash
[[ expresson ]]
# return 1=false or 0=true
```

| Operation                | Operator         |
| ------------------------ | ---------------- |
| Less than                | `[[ $a < $b ]]`  |
| Greater than             | `[[ $a > $b ]]`  |
| Less than or equal to    | `[[ $a <= $b ]]` |
| Greater than or equla to | `[[ $a >= $b ]]` |
| Equal                    | `[[ $a == $b ]]` |
| Not equal                | `[[ $a != $b ]]` |

**Examples**

```bash
[[ "cat" == "cat"]]
echo $?
# 0 true

[[ "cat" == "dog"]]
echo $?
# 1 false
```

**NOTE:**
Arithmetic comparisons operators are different

```bash
[[ 20 > 100]]
echo $?
# 0 true
# the elements are being compared as strings
```

### Arithmetic Comparisons

| Operation                | Operator          |
| ------------------------ | ----------------- |
| Less than                | `[[ $a -lt $b ]]` |
| Greater than             | `[[ $a -gt $b ]]` |
| Less than or equal to    | `[[ $a -le $b ]]` |
| Greater than or equla to | `[[ $a -ge $b ]]` |
| Equal                    | `[[ $a -eq $b ]]` |
| Not equal                | `[[ $a -ne $b ]]` |

## Logical Operators

| Operation | Operator         |
| --------- | ---------------- |
| AND       | `[[ $a && $b ]]` |
| OR        | `[[ $a || $b]]`  |
| NOT       | `[[ ! $a ]]`     |

## String Null Check

| Operation    | Operator      |
| ------------ | ------------- |
| is null?     | `[[ -z $a ]]` |
| is not null? | `[[ -n $a ]]` |

## String Manipulation

##### Concatenation

```bash
a="hello"
b="world"
c=$a$b
# helloworld
```

##### String length

```bash
a="hello"
echo ${#a}
# 5
```

##### Substring

```bash
a="helloworld"
b=${c:3}
echo $b
# loworld

c=${c:3:4}
echo $c
# lowo

echo ${c: -4}
# orld

echo ${c: -4:2}
# or
```

* * *

## Review and Explore Further

-   `cut`
-   `awk`
-   `sed`

* * *

## RESOURCES

### REFERENCES

[Bash the Bourne-Again SHell](http://tiswww.case.edu/php/chet/bash/bashtop.html)
: General reference for all things Bash

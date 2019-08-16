---
title: "Shell Catch"
date: 2019-08-15T22:01:17-07:00
draft: false
menu:
  docs:
    title: "Shell Catch"
    parent: "Command Line"
    name: "Shell Catch"
---


## CATCH

From within a CLI(command line interface) environment**Echo**

    // prints to CLI
    echo "some text"

    ~ echo "1\t2\t3"
    1\t2\t3

    ~ echo -e "1\t2\t3"
    1	2	3

**Color text**

| color   | code |
| :------ | :--- |
| Reset   | 0    |
| black   | 30   |
| red     | 31   |
| green   | 32   |
| yellow  | 33   |
| blue    | 34   |
| magenta | 35   |
| cyan    | 36   |
| white   | 37   |

**Example:** Print out blue text

    ~ echo -e "\e[1;34m This is blue text \e[0m"
     This is blue text

**Color Background**

| color   | code |
| :------ | :--- |
| Reset   | 0    |
| black   | 40   |
| red     | 41   |
| green   | 42   |
| yellow  | 43   |
| blue    | 44   |
| magenta | 45   |
| cyan    | 46   |
| white   | 47   |

    ~ echo -e "\e[1;43m This is text has a yellow background \e[0m"
     This text has a yellow background

#### Variables and Environment Variables

#### Commands Basics

**Basic General Syntax**

     > some-command some-option some-arguments

**WHEN IN DOUBT**
Opens a documentation/manual for a given command.

```Bash
man some-command
```

```Bash
 env
 //shows the variables which describe the shell environment

 'command' /dir > file.txt
 // will save the return of the command to the defined file

 pwd
 // print working directory

cd
//change directory

cd -
//change to most recent directory

 touch my-file
 // makes a file

 touch {file1,file2,file3}
 touch {01..1000}
 //makes all three defined files

 mkdir directory-name/
 // make a folder/directory

 mv my-file directory-name/
 // moves my-file to a given directory

 cp my-file directory-copy/
 // copies given file to defined directory

 rm some-file
 // removes defined file

 rm -r some-directory
 // removes defined directory and all children

 cat some-file
 // returns contents of file

 file some-file.type
 // returns file type
 // example
 file index.html
 return: index.html: ASCII text

vim some-file.type
// opens file in vim for editing

less some-file.type
// opens file in less for editing.
// note: in less 'h' opens up command navigation reference

bg
//(background) sends currently running script to the background

fg
//(foreground) brings scripts running in background to foreground
```

#### Moving Files and Directories

```bash
mv ~/Desktop/my-folder /Volumes/Backup
// moves my-folder to Backup
```

#### Copy Current Path

```bash
pwd | pbcopy
// copies current path

pbpaste
// pastes current path
```

#### Find Matching

```bash
find /some-dir -name  somestr

//  example
find ~/node_modules -name webpack\*
```

### **Bash**

#### Commands

**Echo**

```Bash
~ echo "some text"
// prints some text to the terminal
```

```Bash
// bash commands

which some-command
// file path to command
```

### **Zsh**

#### Commands

```bash
// zsh commands

man some-command
// opens manual for 'some-command'

whatis some-command
// brief descrption of command
```

### Process Monitoring

#### View system's resource usage

```Bash
top
// view system's resource usage
```

To get htop on Mac. `brew install htop-osx`

```Bash
 sudo htop
// top all fancy and like
```

#### All process running

```Bash
ps -A
ps -A|less
// list of all process running
```

```bash
ps -A|grep google
```

**Tree view**
To get htop on Mac. `brew install pstree`

```bash
pstree
//
```

#### kill

Kill process with a given name

```bash
pkill firefox
killall firefox
```

#### Rewrite priority of process

_review_

```bash
renice
```

#### See length of time a proces has been running

```bash
 ps -p {PID-HERE} -o etime
// returns ELAPSED time
```

```bash
ps -p {PID-HERE}
```

#### Set key Repeat and Delay

```bash
defaults write -g InitialKeyRepeat -int 10 # normal minimum is 15 (225 ms)
defaults write -g KeyRepeat -int 1 # normal minimum is 2 (30 ms)
```

[10 Process Management Commands for Linux](https://www.howtogeek.com/107217/how-to-manage-processes-from-the-linux-terminal-10-commands-you-need-to-know/)

### Network Status Commands

```Bash
netstat -ap tcp | grep -i "LISTEN"
//

netstat -ap tcp
//

sudo lsof -i -P -n | grep LISTEN
//

sudo lsof -PiTCP -sTCP:LISTEN
//command/app, PID, user, FD, TYPE, DEVICE, SIZE, NODE, NAME(PORT)

lsof -i tcp:<port>
//command/app, PID, user, FD, TYPE, DEVICE, SIZE, NODE, NAME(defined-PORT)

kill -9 <PID>
//kill by process ID
```

### Network information Cammands

    ifconfig
    // network configuration settings

### CronJobs

General commands

```Bash
crontab -l
// view root cron jobs

crontab -u username -l
// view users cron jobs

ls -la /etc/cron.daily/
// view all daily cron jobs

ls -la /etc/cron.hourly/
// view all hourly cron jobs

ls -la /etc/cron.weekly/
// view all weekly cron jobs
```

## Tracking Disk I/O Activities

[Mac OS X: Tracking Disk I/O Activities](https://ariya.io/2012/07/mac-os-x-tracking-disk-io-activities)

```Shell
sudo iotop
// iotop - display top disk I/O events by process. Uses DTrace.
```

```Bash
sudo fs_usage
//   fs_usage -- report system calls and page faults related to filesystem activity in real-time
```

* * *

* * *

# Reference

| Directory/Folder                                                | Contents                                   |
| --------------------------------------------------------------- | ------------------------------------------ |
| /                                                               | root                                       |
| /bin                                                            | binaries, programs                         |
| /sbin                                                           | system binaries, system programs           |
| /dev                                                            | devices: hard drives, keyboard, mouse, etc |
| /etc                                                            | system configurations                      |
| /home                                                           | user home directories                      |
| /lib                                                            | libraries of code                          |
| /tmp                                                            | temporary files                            |
| /var                                                            | variousr, mostly files the system uses     |
| /usr </br> /usr/bin </br> /usr/etc </br>/urs/lib</br>/urs/local | user programs, tools and libraries         |

## PATH

### echo env path with each path on new line

```bash
echo $PATH | tr -s ":" '\n'
```

## Other Fancy Commands

#### Get whole website and dependencies to local env

    wget

* * *

## RESOURCES

## REFERENCES

Notes within this doc have been drawn from the following sources:

-   source: **Shell Sytle Guide**
    -   link: <https://google.github.io/styleguide/shell.xml>
-   source: **Bash Programming- Introduction How-To**

    -   link: <http://tldp.org/HOWTO/Bash-Prog-Intro-HOWTO.html>
        source: **Linux Kernel Codeing Style**
    -   link: <https://www.kernel.org/doc/Documentation/process/coding-style.rst>

    **EXAMPLE**

-   source: **Example of literal cite**
    -   Sheldon Ross M(2010). A first course in probability/ Sheldon Ross. - 8th ed. Upper Saddle River, NJ: Pearson Prentice Hall

[MacWorld - Copying and Moving Files](https://www.macworld.com/article/2080814/master-the-command-line-copying-and-moving-files.html)

### Document Detail

date initialized: November,25,1017
passes to date: 1
current pass:
subject:

### Table of Contents

## LOG

4/21/2018, 2PM


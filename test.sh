#!/bin/bash
gunzip test1.txt.gz
gunzip test2.txt.gz
node test.js test1.txt test1.sorted.txt
node test.js test2.txt test2.sorted.txt

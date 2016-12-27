#!/bin/bash
cd "/Users/ctuo/Project/phantomcss"
echo > result.log
rm /Users/ctuo/Project/phantomcss/demo/failures/*.png
casperjs test /Users/ctuo/Project/phantomcss/demo/landing_page_visual_test.js >> result.log
casperjs test /Users/ctuo/Project/phantomcss/demo/p4ep_visual_test.js >> result.log
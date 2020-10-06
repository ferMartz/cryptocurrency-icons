#!/bin/bash
FILES=/Users/fer/Projects/cryptocurrency-icons/svg/black/*

for f in *.svg
do 
	var2=${f%.svg}
        var3=grep -oPz ' d="/K[^"\047]+(?=["\047])' $f	
	echo "$var2 - $var3"
	
done

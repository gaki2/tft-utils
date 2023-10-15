for file in Trait_Icon_*_*.png
do
    mv "$file" "${file##*_}"
done


#
##!/bin/bash
#for file in Trait_Icon_*_*.*_*.png; do
#    new_file=$(echo $file | awk -F'[_.]' '{print $(NF-3)".png"}')
#    mv "$file" "$new_file"
#done
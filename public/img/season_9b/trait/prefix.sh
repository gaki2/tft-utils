for file in Trait_Icon_*_*.png
do
    mv "$file" "${file##*_}"
done
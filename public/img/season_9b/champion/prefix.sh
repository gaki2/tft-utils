for file in TFT9_*.png
do
    mv "$file" "${file#TFT9_}"
done
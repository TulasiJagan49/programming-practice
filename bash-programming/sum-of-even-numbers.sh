read n

sum=0
count=0

while [[ count -lt n ]]
do
    read line
    if [[ $(expr $line % 2) == 0 ]]
    then
        let sum=sum+$line
    fi
    let count=count+1
done

echo "Total = $sum"

read n

i = 0
sum = 0

while [[ i -lt n ]]
do
    read l

    if [[ $(expr $l % 2) == 0 ]]
    then
        let sum=sum+$lt
    fi
    let i=i+1
done

echo "Total = $sum"
read
awk 'BEGIN{ FS=";";Total;count;i;num}
     { sum+=$3;num+=1;a[i++]=$3; }
     END{ avg=sum/num;
     for(j=0;j<i;j++){
          if(a[j]<avg){
              count++
          }
     } 
       {print count} 
  }'

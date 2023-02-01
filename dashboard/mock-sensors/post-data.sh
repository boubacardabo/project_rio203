#! /bin/sh

## associatively declare sensors and tokens for POSTing sensor data
declare -A TOKENS
#TOKENS["light"]="UCO0vg2GRE41leNDrrkE"
#TOKENS["home-temperature"]="KZ2PErI3XmcIUvEIMpGo"
#TOKENS["body-temperature"]="FttrmUTgi6mO467LnY6O"
#TOKENS["body-temperature2"]="f6uAlgfAVgjkV1bQ1fnU"
#TOKENS["traffic_incidents"]="GIiJgwEkHZMMMOYFeBpe"

## loop trough the lines of data
line=1

while :
do
    ## loop through the available sensors
    for sensor in "${!TOKENS[@]}"
    do
        ## retrieve sensor data point from file
        data_point=$(awk 'NR=='${line}'' ${sensor}.log)
        token=${TOKENS[$sensor]}

        ## pre-log POST
        echo "POST ${sensor} : ${data_point}"        

        ## POST sensor data point to thingsboard
        curl -X POST -d "{\"${sensor}\": ${data_point}}" http://127.0.0.1:8080/api/v1/${token}/telemetry --header "Content-Type:application/json"
    done

    ## take a short break
    sleep 1

    ## continue with next line
    line=$(($line+1))
done

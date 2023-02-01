#! /bin/sh

## Source: https://developer.tomtom.com/traffic-api/api-explorer

## build URL
#API_TOKEN="zbRAioX5IATO2ASv4BrsgavqhAifHRbR"
API_TOKEN="nZSNrcglJNkAv2cwftXB68PIVMwkgko5"
API_REQUEST="https://api.tomtom.com/traffic/services/5/incidentDetails?bbox=4.8854592519716675%2C52.36934334773164%2C4.897883244144765%2C52.37496348620152&fields=%7Bincidents%7Btype%2Cgeometry%7Btype%2Ccoordinates%7D%2Cproperties%7BiconCategory%7D%7D%7D&language=en-GB&categoryFilter=0%2C1%2C2%2C3%2C4%2C5%2C6%2C7%2C8%2C9%2C10%2C11%2C14&timeValidityFilter=present&key=${API_TOKEN}"

sensor="traffic_incidents"
token="GIiJgwEkHZMMMOYFeBpe"

while :
do
    # retrieve data
    response="$(curl -s ${API_REQUEST})"

    # count incidents
    incident="\"type\":\"Feature\""
    s=${response//"$incident"}
    data_point=$(((${#response} - ${#s}) / ${#incident}))
    echo "$data_point"
    

    # send to dashboard
    ## POST sensor data point to thingsboard
    curl -X POST -d "{\"${sensor}\": ${data_point}}" http://127.0.0.1:8080/api/v1/${token}/telemetry --header "Content-Type:application/json"    

    ## take a short break
    sleep 1
done
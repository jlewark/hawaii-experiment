#!/bin/bash
curl -XPUT 'http://localhost:9200/user/' -d '{
  "settings" : {
     "number_of_shards": 3,
     "number_of_replicas": 2
  }
}'
curl -XPUT 'http://localhost:9200/locations/' -d '{
  "settings" : {
     "number_of_shards": 3,
     "number_of_replicas": 2
  }
}'



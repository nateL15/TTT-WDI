#!/bin/bash

# ID=2 sh scripts/change-password-json.sh

#API="${API_ORIGIN:-http://httpbin.org}"
#URL_PATH="/patch?id=${ID}"
 API="${API_ORIGIN:-https://ga-library-api.herokuapp.com}"
 URL_PATH="/change-password/${ID}"

curl "${API}${URL_PATH}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}"
  --data '{
    "passwords": {
      "old": "'"${OLD}"'",
      "new": "'"${NEW}"''
    }
  }'

echo

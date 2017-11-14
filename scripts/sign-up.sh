#!/bin/bash

# sh scripts/sign-up.sh



#API="${API_ORIGIN:-http://httpbin.org}"
#URL_PATH="/post"
 API="${API_ORIGIN:-https://ga-library-api.herokuapp.com}"
 URL_PATH="/sign-up"

#http://httpbin.org/post
curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/x-www-form-urlencoded" \
  --data-urlencode '{
    "credentials":
      "email": "'"${EMAIL}"'"
      "password"; "'"${PASSWORD}"'"
      "password_confirmation": "'"${PASSWORD_CONFIRMATION}"'"
    }
  }'

echo

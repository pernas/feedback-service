# Feedback relay service

## Not used
This is not actually in use.

Equivalent CURL:

```sh
curl -D- -X POST -H "Content-Type: application/x-www-form-urlencoded" \
      -H "Accept: application/json, text/html" -H "X-Atlassian-Token: nocheck"
      -d 'rating=MEH&description-good=Test&description-bad=Test&fullname=Curl&email=sjors%40blockchain.com' \
      https://blockchain.atlassian.net/rest/collectors/1.0/template/feedback/e6ce4d72
```

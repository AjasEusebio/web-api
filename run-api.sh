curl --silent localhost:3000/heroes
# {"results":[{"id":"a28809cc-b930-4b77-ba2e-41d760d9c92a","name":"Batman","age":50,"power":"rich"},{"id":"ae0ad3e1-b085-4f95-99ec-36b438f396b8","name":"Batman","age":50,"power":"rich"},{"id":"066b4a6e-4dad-4fe1-a9cd-186faf21dacc","name":"Batman","age":50,"power":"rich"}]}

curl \
--silent \
-X POST \
-d '{"name": "Flash", "age": 99, "power": "speed"}' \
localhost:3000/heroes

# {"id":"da416376-ff8e-4a73-8d18-8968892933fd","success":"User created with success!!"}

curl \
--silent \
-X POST \
-d '{"invalid json payload"}' \
localhost:3000/heroes
# {"error":"Internal server error!!"}
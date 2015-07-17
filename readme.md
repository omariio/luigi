
This is the Omari site, and a selfnet demo

people.omari.io will have personal APIs in the form of JSONs  
aggregators.omari.io will have aggregators in the form of APIs  
controllers.omari.io will have interfaces for creating/manipulating data  

standard omari.io will have clients

# Developer Notes

To have the subdomains work locally, you have to add stuff to /etc/hosts.

Mine has these lines

```
127.0.0.1	omari.dev
127.0.0.1	people.omari.dev
127.0.0.1	aggregators.omari.dev
```

which means those are the urls I visit while developing locally.

You need to Mongo running to start the server. I usually use

```
sudo mongod
```

If that doesn't work, make sure mongo is installed.

You can have clients render data server-side or client-side, it's whatever you're comfortable with.


## Interacting with aggregators

This example should register users

```
curl --data "url=http://people.omari.dev:3000/jazzmike" aggregators.omari.dev:3000/people/register
```

In principle, for the url=xxx bit, xxx can be any url that points at JSON with a firstname and lastname field, but I guess since we're currently building client-side aggregators the resource referred to may need to be CORS enabled.  I'm not certain how to feel about that yet, I think we may need to stop making client side API requests and just do rendering server side so that the source is trusted?

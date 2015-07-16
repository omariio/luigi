
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

You need to Mongo running to start the server.  I usually use

```
sudo mongod
```

If that doesn't work, make sure mongo is installed.

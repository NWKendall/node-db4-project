# Data Modeling Notes

## Requirements

A client has hired you to build an API for managing `zoos` and the `animals` kept at each `zoo`. The API will be used for `zoos` in the _United States of America_, no need to worry about addresses in other countries.

For the `zoos` the client wants to record:

- name.
- address.

For the `animals` the client wants to record:

- name.
- species.
- list of all the zoos where they have resided.

Determine the database tables necessary to track this information.
Label any relationships between table.

## A good data model (opinion)

- captures ALL the data needed by the system
- captures ONLY the data needed for the system
- reflects reality )from point of view of the system
- is flexible (can evolve with the needs of the system)
- guarentee data integrity (without sacrificing too much performance)
- is driven by the way we access the data

## Components

- entities (resources): nouns --> tables
- properties (column, fields, attributes) --> columns
- relationships --> foriegn keys

## Workflow

- identify entities (resources): nouns --> tables
- identify relationships --> foriegn keys
- identify properties (column, fields, attributes) --> columns

## Relationships

- 1:1 | rare
- 1:Many | most common
- Many:Many | a trick!

## Mantra

- every table must have a primary key (PK)!
- work on **two or three** entities at a time
- __one to many__ realtionship requires a `foriegn key`
- the 'foreign key` goes on the **many** side
- forign key __MUST__ ahve same type as `FK`
- __many to many__ requires a **third table**
- the third table can have other columns


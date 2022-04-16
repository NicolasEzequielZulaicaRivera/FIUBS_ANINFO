### C1 Exercises

<input type="date" value="2022-03-26" />

#### System Definitions - [INCOSE](https://www.incose.org/about-systems-engineering/system-and-se-definition)

- **System** : A system is an arrangement of parts or elements that together exhibit behavior or meaning that the individual constituents do not

- **Engineered System** : a system designed or adapted to interact with an anticipated operational environment to achieve one or more intended purposes while complying with applicable constraints.

- **Type**
  - **Physical**
    - A physical system is an arrangement of parts or elements that together exhibit **behavior** that the individual constituents do not.
    - composed of matter and energy
  - **Conceptual**
    - A conceptual system is an arrangement of parts or elements that together exhibit **meaning** that the individual constituents do not.
    - composed of information or knowledge.
    - information in a conceptual system can be stored or transported in a physical system

#### Guide to the Software Engineering Body of Knowledge - [SWEBOK](http://swebokwiki.org/Chapter_1:_Software_Requirements)

> Activity != KA (Knowledge Area)

##### Software Requirements

- Express the **needs** and **constraints** placed on a software product that contribute to the solution of some real-world problem

- Concerned with
  - **Elicitation**, **analysis**, **specification**, and **validation** of software requirements
  - **Management** of requirements during the whole life cycle of the software product

##### Software Design

- _def:_ the process of defining the architecture, components, interfaces, and other characteristics of a system or component
  > Requirements are **analyzed** in order to produce a description of the software’s internal structure that will serve as the basis for its **construction**
- _def:_ the result of [that] process
  > Describes the software **architecture** ( how software is decomposed and organized into components ) and the **interfaces** between components.
  > It should also describe the **components** at a level of detail that enables their construction.

During software design, various **models** are produced forming a blueprint of the solution to be implemented.

- We can analyze and evaluate these models to determine whether or not they will allow us to fulfill the various **requirements**
- We can also examine and evaluate **alternative** solutions and **tradeoffs**
- We can use the resulting models to **plan** subsequent development activities, such as system _verification_ and _validation_
- In addition to using them as inputs and as the **starting point** of _construction_ and _testing_

Software design consists of two activities that fit between software requirements analysis and software construction (ISO/IEC/IEEE)

- Software **architectural** design (sometimes called high-level design): develops top-level structure and organization of the software and identifies the various components
- Software **detailed** design: specifies each component in sufficient detail to facilitate its construction

Types of design:

- **decomposition** design (D-design): the goal of which is to map software into component pieces
- **family pattern** design (FP-design): the goal of which is to establish exploitable commonalities in a family of software products
- **invention** design (I-design): the goal of which is conceptualizing and specifying software to satisfy discovered needs and requirements -> **Requirements** KA

##### Software Construction

The detailed creation of working software through a combination of **coding**, **verification**, unit testing, integration testing, and **debugging**

- The process uses the _design output_ and provides an _input to testing_
- Boundaries (if any) will vary depending on the software life cycle processes
  - much design / testing work is performed during the construction activity
- Software construction typically produces the highest number of **configuration items** that need to be managed
- Closely linked with the Software **Quality** KA as code is the ultimate deliverable of a software project
- Closely linked with the Software **Quality** KA

##### Software Testing

Software testing consists of the _dynamic_ verification that a program provides _expected_ behaviors on a _finite_ set of test cases, suitably _selected_ from the usually infinite execution domain

##### Software Maintenance

- _def:_ the totality of activities required to provide cost-effective **support** to software
- Objective: keeping software operating as long as possible
- Activities
  - Predelivery : include planning for postdelivery operations, maintainability, and logistics determination for **transition** activities
  - Postdelivery : include software modification, training, and operating or interfacing to a help desk

##### Software Configuration Management

###### Configuration

A system can be defined as the combination of interacting elements organized to achieve one or more stated purposes

The configuration of a system is the functional and physical **characteristics** of hardware or software as set forth in technical documentation or achieved in a product.

It can also be thought of as a collection of specific versions of hardware, firmware, or software items combined according to **specific build procedures** to serve a particular purpose

###### Configuration Management

Configuration management (CM), then, is the discipline of identifying the configuration of a system at distinct points in time for the purpose of systematically **controlling changes** to the configuration and **maintaining** the **integrity** and **traceability** of the configuration throughout the system life cycle

> _def:_ A discipline applying technical and administrative direction and surveillance to: identify and document the functional and physical characteristics of a configuration item, control changes to those characteristics, record and report change processing and implementation status, and verify compliance with specified requirements

##### Software Engineering Management

The application of management activities—planning, coordinating, measuring, monitoring, controlling, and reporting1—to ensure that software products and software engineering services are delivered efficiently, effectively, and to the benefit of stakeholders

- **Initiation** and Scope Definition, which deal with the decision to embark on a software engineering project;

- Software Project **Planning**, which addresses the activities undertaken to prepare for a successful software engineering project from the management perspective;

- Software Project **Enactment**, which deals with generally accepted software engineering management activities that occur during the execution of a software engineering project;

- Review and **Evaluation**, which deal with ensuring that technical, schedule, cost, and quality engineering activities are satisfactory;

- **Closure**, which addresses the activities accomplished to complete a project;

- Software Engineering **Measurement**, which deals with the effective development and implementation of measurement programs in software engineering organizations;

- Software **Engineering Management Tools**, which describes the selection and use of tools for managing a software engineering project. ( Project Planning / Tracking / Risk Management / Communications / Measurement )
-

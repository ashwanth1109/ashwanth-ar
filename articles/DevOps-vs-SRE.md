# DEV OPS VS SRE: Competing Standards or Friends

## Intro

Two groups - Developers and Operators

Developers - Concerned with agility; build features or software and ship it as quickly as possible to get it in the hands of the customers or users.

Operators - Concerned with stability; its not broken, please dont touch it. It is your role to make sure that the system never went down.

Two competing groups with different priorities.

As we introduce new functionality to a system, we also introduce instability.

In summary, developers who aim to move quickly and thereby, introduce instability. Operators are trying to slow things down as much as possible because its not broken, please dont touch it.

## Key Differences

Developers are physically located closer to the business decision makers (CEOs, Managers etc.) Operators are usually in a data center or an office that could be miles away.

Educationally, developers traditionally have a software engineering or computer science background whereas operators usually come from a practical background, usually with an associates degree or practicum in things like network engineering.

## The Problem

Often, developers just write code and hand it over to operators and ask them to run it for them and fuck off. Operators don't necessarily have a solid understanding of the domain in which the code was written.

Now, in addition to their responsibilities of keeping the network up and running, they now have to understand the bugs in the application. Crazy right? Because when the app crashes, the operator is the one who receives the first phone call (usually in the middle of the night, whew!)

## DevOps Movement

The idea here is to break down the walls between developers and operators.

### 1. Reduce Organization Silos

Put them in the same physical room. Have stand ups involving these two groups of people. Subsequently, devs listen to operators. Improves the software delivery cycle.

(e.g.) Dev is writing some algorithm or distributed systems problem which works great in theory. Then an operator steps in and says, 'this needs more bandwidth than the current capacity at our data center can handle. we can't do this in production.' Saves companies millions of dollars, investing in a software project for which the unerlying hardware cant support it.

### 2. Accept failure as normal

Any system that humans build is inherently unreliable. Most systems fail, given large scale. This has to be built into the core of our business. Plan for system failure in advance rather than firing the scapegoat.

(e.g.) You are trying to roll out a database migration. Before you do that. Lets plan for failure by planning a rollback - write a script that rolls back our deployment and the changes to our data model. If it fails, you already have a plan in place rather than coming up with it when the pressure hits you.

So, think about plans before deploying.

### 3. Implement gradual change

If you're working in a waterfall software development methodology, you're usually deploying once or twice a year. The problem: you are deploying 100s of millions of lines of code and the chances that there are no bugs in them is near zero, no matter how good you are.

Now a user raises a complaint that somethings broken, which means you are poring through all those lines to debug the tiniest of errors.

Instead, we should opt to deploy in small incremental changes. If we deploy 10 or 100 lines of code at a time, if something fails, you rollback, debug just that 100 lines, fix it and re deploy. The smaller the change, the easier it is to find the problem, because we know where to look for that problem.

Note: Be careful not to fall into the trap of looking at sheer deployment metrics. Oh, we deploy XXXX times a day. Good rule of thumb is to look at other firms in your industry that practice similar methodologies to identify what the average number of deploys per day should be.

### 4. Leverage Tooling and Automation

Following the DevOps methodology involves a lot of work, for example . . . creating users, installing packages, building docker containers, monitoring, logging, alerting. . . All of which takes time, especially at scale it becomes near impossible to do it manually. You have to have tooling and automation in order to successfully implement DevOps.

Humans get distracted (read bored) when doing the same thing over and over again. Computers are really good at doing the same thing over and over again.

### 5. Measure everything

If you do all of this, you still need to compare the methodology with a baseline in order to assess how much more succesful the business is. For this, you need to measure everything with tangible metrics to justify all the investment that went into implementing this methodology.

Set clear metrics for success at both the organizational level and the application level.

Measure every metric. Report on essential metrics. Alert on critical metrics that show substandard results and affect the user.
The measurement is to help find the root cause on alerted issues.

## Where does SRE come in?

All of these methodologies are abstract ideas that can be run very differently across organizations.

SRE is a prescriptive way to do DevOps.

```
class SRE implements DevOps
```

SRE was created as a way (at google) to build, maintain and run production systems at scale.

Simultaneously, the DevOps movement was in full swing with mixed results. Sometimes successful and sometimes unsuccessful because there was no prescriptive way of doing this.

DevOps is like an abstract class or interface in programming.

SRE is a concrete implementation of that class. It also extends with methods that go beyond the DevOps interface while still satisfying its principles.

## Relating SRE to DevOps

### 1. Reduce organization silos - Share Ownership

SREs share ownership with developers by using the same shared set of tooling across the organization. Both groups contribute towards creating reliable, high-performance tooling.

SRE enforces conversation & collaboration between product teams, developers, site reliability engineers etc. using Service Level Objectives (SLOs)

### 2. Accept failure as normal - SLOs and blameless PMs

SLOs also forces the organization to admit how reliable or how unreliable the system is. Having this conversation, inherently brings the group to admit, that the system will have faults. Now, its a question of how much fault do you want the product to have. This depends on the industry and use case of your product.

### 3. Implement gradual change - Reduce costs of failure

Moving fast & reducing the cost of failure through small iterative deployments.

### 4. Tooling & Automation - TOIL

TOIL: You should be spending on times that bring long term value to the system.
SREs invest heavily in tooling and automation in order to automate this years job away. This idea that the manual tasks that I did this year, I shouldn't have to do it next year.

### 5. Measure everything - Measure toil and reliability

Measure systems level metrics along with toil and reliability.

## SLIs, SLOs and SLAs

### Service Level Indicator

1. Request Latency
2. Requests per second
3. Failures per request

SLI tells you at any given moment, whether a certain metric is healthy or not. You define health as per your requirement.

### Service Level Objectives

Binding target for a collection of SLIs
SLIs measure up or down. SLO defines how much up or down can we have in a certain period.

### Service Level Agreement

Business agreement that happens between a customer and service provider typically based on SLOs.

You want to break your own internal SLO before you break an SLA because violating an SLA means you have to give money or credits or repairations for violating that SLA.

### Overview

SLIs drive SLOs which inform SLAs

SLIs - SRE, SWE, PM
SLOs - SRE, PM
SLAs - Sales, Customer

## Error Budgets

So, what happens if you fail to meet your SLOs?

It is often cost-prohibitive to build a system that is 100% reliable, especially when relying on 3rd party components.

(e.g.) Typically phones have 99% reliability with their cellular network carrier. This is your SLA with your mobile carrier provider. To build a system with 100% reliabilty (maybe), you need your own fiber connections with redundancy, to every cell phone provider across countries along with your own internet backbone. And even if you somehow manage to achieve that, the phone to carrier reliability is still 99%, which means your user will only experience 99% reliability. So, BAD IDEA.

Fault is inherent. Factors to consider how faulty can our system be?
Fault Tolerance, Availability, Market Competition, Speed to Market etc. Acceptable risk dictates your SLO.

As long as your SLOs are met, you can continue pushing new features and new product.

What if you exceed the error budget?

All deployments and features must target reliability. New features should wait until you improve the reliability until the budget is replenished.

## TOIL

What is not TOIL?
Overhead, like email, expense reports, meetings, travelling etc.

TOIL, in the programming sense refers to something that is,

1. Manual
2. Repetitive
3. Automatable
4. Tactical
5. Devoid of long term value

TOIL is a very negative consequence of the job. If you're constantly working with TOIL, this can lead to career stagnation.

At the same time, a little bit of toil is also good. Most SREs (at google), aim for somewhere between 10 - 20 % of TOIL in their job.

If once per year, you have to do a 15 minute long complex operation that needs 20 hours to automate, its not good ROI to automate it.

TOIL is a great way to learn for newcomers.

TOIL provides instant gratification but in small doses (especially on days filled with meetings that dont let you feel like you've accomplished anything).

## More Info at

http://google.com/sre

YouTube: DevOps vs SRE (Cloud Next 19)

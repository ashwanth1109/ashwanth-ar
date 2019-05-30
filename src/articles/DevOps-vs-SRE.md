# DEV OPS VS SRE: Competing Standards?

![The DevOps Movement](https://cdn-images-1.medium.com/max/2600/1*EBXc9eJ1YRFLtkNI_djaAw.png)

## Introduction

In most tech companies, there are two important groups that are involved in the shipment of software - Developers and Operators. It is important that these two groups work in tandem with each other to ensure the deployment of bug free software. For a long time, the two groups were isolated into organizational silos with developers working directly with business owners and operators outsourced from some organization somewhere in the world.

Developers are concerned with agility. They want to build features or software and ship it as quickly as possible to get it in the hands of the customers or users. Business owners and users too want more features quickly. This means that developers tend to be handed a roadmap and the team usually sticks to a sprint of some sort to tether to the timelines. Personally, I'm not a big fan of the fact that this model focuses on outcomes and not output.

Operators are concerned with stability. They strongly advocate the philosophy - its not broken, please dont touch it. It is not difficult to understand where they are coming from, given that their role is to make sure that the system never goes down.

As you can clearly see, these are two competing groups with different priorities. As is the case with senate houses, two opposing groups usually means more friction to progress. However, it is important to not measure progress only in terms of features. This is because as we introduce new functionality to a system, we also introduce instability. Stabilizing the system is also progress.

![The DevOps Movement](https://www.bitdegree.org/tutorials/wp-content/uploads/2018/11/DevOps-Interview-Questions-You-Need-to-Know-.jpg)

## The Problem

Developers write code and hand it to operators ask them to run it for them and fuck off. Given that operators unlike developers don't traditionally have a software engineering or computer science background, they don't have a solid understanding of the code. Heck, its difficult even for a developer to follow the line of thought of another developer at first glance.

So now, in addition to their responsibilities of keeping the network up and runngin, operators also have to understand the code enough to spot bugs in the application. Furthermore, these are never the obvious bugs which usually get caught in the testing phase. These are the hard to decipher ones that have crept into the application without being spotted by the multiple stakeholders involved. Crazy right?

And when the app crashes, guess who gets the first phone call at the middle of the night? Thank god for my priviliged life as a developer, whew!

## The DevOps Movement

The idea here is to break down the walls between developers and operators.

### 1. Reduce Organization Silos

![Organizational Silos](https://www.torbenrick.eu/blog/wp-content/uploads/2014/03/Organizational-silos-Organizational-change-require-breaking-down-silos.jpg)

Put them in the same physical room. Have stand ups involving these two groups of people. Subsequently, devs listen to operators. This improves the software delivery cycle.

For example, let's say, the Dev is writing some algorithm or distributed systems problem which works great in theory. Then an operator steps in and says, 'this needs more bandwidth than the current capacity at our data center can handle. we can't do this in production.' This early catch saves companies millions of dollars, investing in a software project for which the unerlying hardware cant support it.

### 2. Accept failure as normal

![Failure is the norm](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHilYT3CGspG4igXICeVFlTDHQhZqtF3sp1--7B3BhBLbHLEBb)

Any system that humans build is inherently unreliable. Most systems fail, given large scale. This has to be built into the core of our business. One must plan for system failure in advance rather than firing the scapegoat.

For example, you are trying to roll out a database migration. Before you do that. How do you plan for failure - by planning a rollback - You write a script that rolls back your deployment and the changes to your data model. If it fails, you already have a plan in place rather than coming up with one when shit hits the fan.

### 3. Implement gradual change

![Gradual Change](https://mondrian.mashable.com/uploads%252Fcard%252Fimage%252F952345%252F700b8135-49c3-4f92-b4df-f2e07341ccb6.jpg%252F950x534__filters%253Aquality%252890%2529.jpg?signature=_s8cVSwfaOjhhEhBiKA7Acic6z0=&source=https%3A%2F%2Fblueprint-api-production.s3.amazonaws.com)

If you're company follows a waterfall software development methodology, you're usually deploying once or twice a year. The problem: you are deploying 100s of millions of lines of code and the chances that there are no bugs in them is near zero, no matter how good you are.

Now a user raises a complaint that somethings broken, which means you are poring through all those lines to debug the tiniest of errors.

Instead, we should opt to deploy in small incremental changes. If we deploy 10 or 100 lines of code at a time, if something fails, you rollback, debug just that 100 lines, fix it and re deploy. The smaller the change, the easier it is to find the problem, because we know where to look for that problem.

Note: Be careful not to fall into the trap of looking at sheer deployment metrics. Oh, we deploy XXXX times a day. Good rule of thumb is to look at other firms in your industry that practice similar methodologies to identify what the average number of deploys per day should be.

### 4. Leverage Tooling and Automation

![Automation](https://nividous.com/wp-content/uploads/2018/07/Robotic-process-automation-in-manufacturing-industry.png)

Following the DevOps methodology involves a lot of work, for example . . . creating users, installing packages, building docker containers, monitoring, logging, alerting. . . All of which takes time, especially at scale it becomes near impossible to do it manually. You have to have tooling and automation in order to successfully implement DevOps.

Humans get distracted (read bored) when doing the same thing over and over again. Computers are really good at doing the same thing over and over again.

### 5. Measure everything

![Measure](https://www.lucagrulla.com/assets/saasContinuousDelivery/build-measure-learn.jpg)

If you do all of this, you still need to compare the methodology with a baseline in order to assess how much more succesful the business is. For this, you need to measure everything with tangible metrics to justify all the investment that went into implementing this methodology.

Set clear metrics for success at both the organizational level and the application level.

Measure every metric. Report on essential metrics. Alert on critical metrics that show substandard results and affect the user.
The measurement is to help find the root cause on alerted issues.

## Where does SRE come in?

All of these methodologies are abstract ideas that can be run very differently across organizations. SRE is a prescriptive way to do DevOps.

SRE was created as a way to build, maintain and run production systems at scale.

Simultaneously at this time, the DevOps movement was in full swing with mixed results. Sometimes successful and sometimes unsuccessful because there was no prescriptive way of doing this.

DevOps is like an abstract class or interface in programming.

```javascript
class SRE implements DevOps
```

SRE is a concrete implementation of that class. It also extends with methods that go beyond the DevOps interface while still satisfying its principles.

## Relating SRE to DevOps

![SRE to DevOps](https://i.ytimg.com/vi/uTEL8Ff1Zvk/maxresdefault.jpg)

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

## References

### [How google runs production systems](http://google.com/sre)

### [DevOps vs SRE (Cloud Next 19)](https://www.youtube.com/watch?v=0UyrVqBoCAU)

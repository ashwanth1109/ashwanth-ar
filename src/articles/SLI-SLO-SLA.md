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

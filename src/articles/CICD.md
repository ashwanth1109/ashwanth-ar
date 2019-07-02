# CICD with CircleCI

### Intro

This website is deployed using firebase hosting. While I have gotten into the habit of frequently committing my work and pushing it to Github (thank god for that), I do not however deploy my changes to my site nearly as frequently. This is usually because -

(A) it involves an additional step: yarn build && firebase deploy --only hosting (albeit I have set up an alias for it in my .bashrc or .zshrc)

(B) more importantly, build takes forever, GOD! -\_-

So I decided to set up a CICD pipeline and started exploring options. If you ask me why I chose CircleCI, I don't really have an answer. When I said options, I actually meant just the one. I saw that the react project uses CircleCI. I gave their website a quick glance and figured this would probably be as good an option as any.

![CICD Pipeline](https://www.leadingagile.com/wp-content/uploads/2018/05/CICD-1.jpg)

### What the heck is CICD anyway?

Continuous Integration is a principle of developing features with the intention of getting one's code pulled into a shared branch in a continous and consistent fashion. In my opinion, such frequent integration is a key aspect of being agile and releasing a more stable product.

### Getting your feet wet

As is customary, when I started reading CircleCI's documentation, I started with their hello world example which involves the following steps.

- Create a `.circleci` directory in the root of your repo

- Add a `config.yml` in this directory and add the following code to it:

```yml
version: 2.1

orbs:
  hello: circleci/hello-build@0.0.7 # uses the circleci/buildpack-deps Docker image

workflows:
  "Hello Workflow":
    jobs:
      - hello/hello-build
```

- Commit and push changes to trigger your build

At this point I was wondering a couple of things.

- Why is version 2.1?

- What are orbs, workflows and jobs?

- Where are the runtime env vars being stored as shown in the build logs?

### Why the version?

Although it seems fairly obvious now, it took me a while to realize that the version here refers to the version of circleci that you would like to use in your workflow.

### ORBS

Orbs are packages of config that you can either import by name or configure inline to simplify your config, share and reuse config within and across projects. Orbs are also considered best practices for setting up your config.

```yml
orbs:
  hello: circleci/hello-build@0.0.7 # uses the circleci/buildpack-deps Docker image
```

In the example above, we invoke the hello_build orb from the CircleCI namespace. Orbs are comprised of - commands, jobs and executors.

- Commands: reusable sets of steps that you can invoke with specific parameters within an existing job.

```yml
version: 2.1
jobs:
  myjob:
    docker:
      - image: "circleci/node:9.6.1"
    steps:
      - myorb/sayhello: # sayhello command
          to: "Lev" # parameter for command
```

- Jobs: a set of steps, and the environment they should be defined in. They are defined in your build configuration or in an orbs configuration.

- Executors: defines the environment in which the steps of a job will be run. Any job that we declare will define the environment that the job will be run in (such as docker, machine etc.) It also defines your env variables, shell to run in and what size resource_class to use.

```yml
version: 2.1
executors:
  my-executor:
    docker:
      - image: circleci/ruby:2.4.0
jobs:
  my-job:
    executor:
      name: my-executor
    steps:
      - run: echo outside the executor
```

Orbs can either be published in as a development orb or a semantically versioned production orb. Development orbs are mutable and expire after 90 days whereas production orbs. All orbs are open sourced.

### Echo Hello World

```yml
version: 2.1
jobs:
  build:
    docker: # use the docker executor type; machine and macos executors are also supported
      - image: circleci/node:4.8.2 # the primary container, where your job's commands are run
    steps:
      - checkout # check out the code in the project directory
      - run: echo "hello world" # run the `echo` command
```

### JOBS

Jobs are a collection of steps. All the steps are executed in a separate container or VM. Jobs and steps provides you, with greater control over the build process, a framework for workflows, status on each phase with feedback.

### Setting up circle ci with firebase

```yml
version: 2.1 # use CircleCI 2.1
jobs: # a collection of steps
  build: # entry point for build job
    docker: # use the docker executor type; machine and macos executors are also supported
      - image: circleci/node:10.15.3 # the primary container, where your job's commands are run
    steps:
      - checkout # check out the code in the project directory
      - run: yarn install # install dependencies
      - run: cd functions && yarn install && cd ../
      - run: yarn build # generate production build
      - run: ./node_modules/.bin/firebase --version # logging firebase version
      - run: ./node_modules/.bin/firebase deploy --token=${FIREBASE_TOKEN} --non-interactive
```

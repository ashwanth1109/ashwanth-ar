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

# Vue Snippets

[![Downloads](https://badges.ml/vue-snippets/total.svg)](https://brackets-extension-badges.github.io#vue-snippets)
[![Downloads](https://badges.ml/vue-snippets/last-version.svg)](https://brackets-extension-badges.github.io#vue-snippets)
[![Downloads](https://badges.ml/vue-snippets/week.svg)](https://brackets-extension-badges.github.io#vue-snippets)
[![Downloads](https://badges.ml/vue-snippets/day.svg)](https://brackets-extension-badges.github.io#vue-snippets)
[![Version](https://badges.ml/vue-snippets/version.svg)](https://brackets-extension-badges.github.io#vue-snippets)

## Description

A collection of [VUE](https://vuejs.org/) snippets for [Brackets](http://brackets.io/) editor.


## Installation

#### Git Clone
1. Under main menu select **Help > Show Extensions Folder**
2. Git clone this repository inside the folder user.

#### Extension Manager
1. Under main menu select **File > Extension Manager...**
2. Search for "Vue snippets"
3. Click "Install"

## How to use
1. **Enable Vue Snippets**<br/>
   Under main menu select **Edit > Enable Vue Snippets** or<br/> open the Preferences File and add **"vue-snippets.enabled": true**.
2. Enter a snippet and hit the **`Space`** key.



## Snippets

### Vue

| Snippet | Purpose                    |
| ------- | -------------------------- |
| `vbase` | Single file component base |

### Template

| Snippet           | Purpose                             |
| ----------------- | ----------------------------------- |
| `vfor`            | v-for directive                     |
| `vmodel`          | Semantic v-model directive          |
| `vmodelNum`       | Semantic v-model number directive   |
| `von`             | v-on click handler with arguments   |
| `velProps`        | Component element with props        |
| `vsrc`            | Image src binding                   |
| `vstyle`          | Inline style binding                |
| `vstyleObj`       | Inline style binding with objects   |
| `vclass`          | Class binding                       |
| `vclassObj`       | Class binding with objects          |
| `vclassObjMult`   | Multiple conditional class bindings |
| `vanim`           | Transition component with JS hooks  |
| `vnuxtl`          | Nuxt Routing Link                   |

### Script

| Snippet          | Purpose                                                                  |
| ---------------- | ------------------------------------------------------------------------ |
| `vdata`          | Component data as a function                                             |
| `vmethod`        | Vue method                                                               |
| `vcomputed`      | Vue computed property                                                    |
| `vwatcher`       | Vue watcher with new and old value args                                  |
| `vprops`         | Props with type and default                                              |
| `vimport`        | Import one component into another                                        |
| `vcomponents`    | Import one component into another within the export statement            |
| `vimportExport`  | Import one component into another and use it within the export statement |
| `vfilter`        | Vue filter                                                               |
| `vmixin`         | Create a Vue Mixin                                                       |
| `vmixinUse`      | Bring a mixin into a component to use                                    |
| `vcDirect`       | Vue create a custom directive                                            |
| `vimportLib`     | Import a library                                                         |
| `vimportGsap`    | Import GreenSock with Timeline and Eases                                 |
| `vanimhookJS`    | Using the Transition component JS hooks in methods                       |
| `vcommit`        | Commit to Vuex store in methods for mutation                             |
| `vdispatch`      | Dispatch to Vuex store in methods for action                             |
| `vtest`          | A simple unit testing component                                          |
| `vinc`           | incrementer                                                              |
| `vdec`           | decrementer                                                              |

### Vuex

| Snippet         | Purpose                        |
| --------------- | ------------------------------ |
| `vstore`        | Base for Vuex store.js         |
| `vgetter`       | Vuex Getter                    |
| `vmutation`     | Vuex Mutation                  |
| `vaction`       | Vuex Action                    |
| `vstoreImport`  | Import vuex store into main.js |

### Nuxt Config

| Snippet | Purpose                                                 |
| ------- | ------------------------------------------------------- |
| `nfont` | link to include fonts in a nuxt project, in nuxt-config |
| `ncss`  | link to css assets such as normalize                    |


### Credits
---

- vue-vscode-snippets - Sarah Drasner - https://github.com/sdras/vue-vscode-snippets
- brackets-jade-snippets - George Raptis - https://github.com/georapbox/brackets-jade-snippets


Thank you all!!!

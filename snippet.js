/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global define, brackets, window */

define(function (require, exports, module) {
    'use strict';

    const snippets = {};

    // template

    //VUE BASE


    snippets.vbase = `
    <template>
        
    </template>
        
    <script>
        export default { 
            
        }
    </script>
        
    <style scoped>
        
    </style>`;


    snippets.vfor = `
	<div v-for="item in items" :key="item.id">
		{{ item }}
    </div>`;
    
    snippets.vmodel = `<input v-model="data" type="text" />`;

	snippets.vmodelNum = `<input v-model.number="numData" type="number" step="1" />`;

	snippets.von = `@click="handler(arg, event)"`;

	snippets.velProps = `
	<component :component="">
	
	</component>`;

	snippets.vsrc = `<img :src="'/path/to/images/' + fileName" alt="altText"/>`;

	snippets.vstyle = `
	<div :style="{ fontSize: data + 'px' }">
	
	</div>`;

	snippets.vstyleObj = `
	<div :style="[styleObjectA, styleObjectB]">
	
	</div>`;

	snippets.vclass = `
	<div :class="{ className: data }">
	
	</div>`;

	snippets.vclassObj = `
	<div :class="[classNameA, classNameB]">
	
	</div>`;

	snippets.vclassObjMult = `
	<div :class="[classNameA, {classNameB : condition}]">
	
	</div>`;

	snippets.vanim = ` 
	<transition
        mode="out-in"
        @before-enter="beforeEnter"
        @enter="enter"\n
        @before-leave="beforeLeave"
        @leave="leave"
        :css="false">\n
    </transition>`;

	snippets.vnuxtl = `<nuxt-link to="/page">page</nuxt-link>`;

	
	// SCRIPT

	snippets.vdata = `
	data() {
        return {
            key: value
        }
    },`;

	snippets.vmethod = `
	methods: {
        name() { 
                
        }
    },`;

	snippets.vcomputed = `
	computed: {
        name() {
            return this.data
        }
    },`;

	snippets.vwatcher = `
	watch: { 
        data(newValue, oldValue) {

        }
    },`;

	snippets.vprops = `
	props: {
        propName: {
            type: Number,
            default:
        },
    },`;

	snippets.vimport = `import New from './components/New.vue';`;

	snippets.vcomponents = `
	components: {
        New,
    }`;

	snippets.vimportExport = `
	import Name from './components/Name.vue'
        
        export default {
            components: {
                Name
            },
        }`;

	snippets.vfilter = `
	filters: {
       fnName: function(value) {
           return value;
       }
   	}`;

	snippets.vmixin = `
	const mixinName = {
       mounted() {
           console.log('hello from mixin!')
       },
	}`;

	snippets.vmixinUse = `mixins: [mixinName]`;

	snippets.vcDirect = `
	Vue.directive('directiveName', {
    	bind(el, binding, vnode) {
        	el.style.arg = binding.value.arg;
    	}
  	});`;

	snippets.vimportLib = `import { libName } from 'libName'`;

	snippets.vimportGsap = `import { TimelineMax, Ease } from 'gsap'`;

	snippets.vanimhookJS = `
	beforeEnter(el) {
    	console.log('beforeEnter');
	},

	enter(el, done) {
    	console.log('enter');
    	done();
	},

	beforeLeave(el) {
    	console.log('beforeLeave');
	},

	leave(el, done) {
    	console.log('leave');
    	done();
	},`;

	snippets.vcommit = `
	mutationName() {
    	this.store.commit('mutationName', payload)
	}`;

	snippets.vdispatch = `actionName() {
    	this.store.dispatch('actionName', payload)
	}`;

	snippets.vtest = `
	import Vue from 'vue'
	import HelloWorld from './components/HelloWorld'

	describe('HelloWorld.vue', () => {
		it('should render correct contents', () => {
			const Constructor = Vue.extend(HelloWorld)
			const vm = new Constructor().mount()
			expect(vm.el.querySelector('.hello h1').textContent)
				.to.equal('Welcome to Your Vue.js App')
		})
	})`;

	snippets.vinc = `return this.num += 1`;

	snippets.vdec = `return this.num -= 1`;



	// VUEX

	snippets.vstore = `
	import Vue from 'vue';
	import Vuex from 'vuex';

	Vue.use(Vuex);

	export const store = new Vuex.Store({
		state: {
			key: value
		}
	});`;

	snippets.vgetter = `
	getters: {
    	value: state => {
        	return state.value;
    	}
	}`;

	snippets.vmutation = `
	mutations: {
    	updateValue(state, payload) {
        	state.value = payload;
    	}
	}`;

	snippets.vaction = `
	actions: {
    	updateValue({commit}, payload) {
        	commit('updateValue', payload);
    	}
	}`;

	snippets.vstoreImport = `import { store } from './store/index';`;


	// NUXT CONFIG

	snippets.nfont = `{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:600|Rufina:700' }`;

	snippets.ncss = `css: ['assets/normalize.css'],`;
    

    module.exports = snippets;
});
